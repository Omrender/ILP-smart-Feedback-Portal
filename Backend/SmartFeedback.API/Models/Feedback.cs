public class Feedback
{
    public int Id { get; set; }
    public string Category { get; set; } = string.Empty;
    public string Text { get; set; } = string.Empty;
    public string Sentiment { get; set; } = "Neutral"; // Simplified
    public string? ImagePath { get; set; }
    public DateTime SubmittedAt { get; set; } = DateTime.Now;

    public int UserId { get; set; }
    public User User { get; set; } = default!;
}
