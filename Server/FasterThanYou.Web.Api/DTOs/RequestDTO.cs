namespace FasterThanYou.Web.Api.DTOs
{
    using FasterThanYou.Services;

    public class RequestDTO
    {
        public ActionType ActionType { get; set; }
        public string URL { get; set; } = null!;
        public object? Data { get; set; }
    }
}
