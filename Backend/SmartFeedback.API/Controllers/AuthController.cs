using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/auth")]
public class AuthController : ControllerBase
{
    private readonly AppDbContext _db;

    public AuthController(AppDbContext db) => _db = db;

    [HttpPost("register")]
    public IActionResult Register(User user)
    {
        if (_db.Users.Any(u => u.Username == user.Username))
            return BadRequest("User exists");

        user.PasswordHash = BCrypt.Net.BCrypt.HashPassword(user.PasswordHash);
        _db.Users.Add(user);
        _db.SaveChanges();
        return Ok("Registered");
    }

    [HttpPost("login")]
    public IActionResult Login(User login)
    {
        var user = _db.Users.SingleOrDefault(u => u.Username == login.Username);
        if (user == null || !BCrypt.Net.BCrypt.Verify(login.PasswordHash, user.PasswordHash))
            return Unauthorized();

        return Ok(new { user.Id, user.Username, user.Role });
    }
}
