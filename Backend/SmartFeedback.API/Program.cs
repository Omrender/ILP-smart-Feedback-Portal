using Microsoft.EntityFrameworkCore;
// using SmartFeedback.API.Data; // Uncomment if AppDbContext is in this namespace

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<AppDbContext>(opt => opt.UseSqlite("Data Source=feedback.db"));
app.UseCors(policy => policy.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
builder.Services.AddCors();
builder.Services.AddControllers();

var app = builder.Build();
app.UseCors(opt => opt.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
app.MapControllers();
app.Run();
