using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/feedback")]
public class FeedbackController : ControllerBase
{
    private readonly AppDbContext _db;

    public FeedbackController(AppDbContext db) => _db = db;

    [HttpPost]
    public IActionResult Submit(Feedback feedback)
    {
        feedback.Sentiment = AnalyzeSentiment(feedback.Text); // Simple logic
        _db.Feedbacks.Add(feedback);
        _db.SaveChanges();
        return Ok(feedback);
    }

    [HttpGet("user/{userId}")]
    public IActionResult GetUserFeedbacks(int userId)
    {
        var list = _db.Feedbacks.Where(f => f.UserId == userId).ToList();
        return Ok(list);
    }

    [HttpGet("all")]
    public IActionResult GetAll()
    {
        return Ok(_db.Feedbacks.Include(f => f.User).ToList());
    }

    private string AnalyzeSentiment(string text)
    {
        if (text.Contains("good")) return "Positive";
        if (text.Contains("bad")) return "Negative";
        return "Neutral";
    }
}
