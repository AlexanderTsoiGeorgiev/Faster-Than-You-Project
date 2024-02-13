namespace FasterThanYou.Services
{
    public class RequestDTO
    {
        public ActionType ApiType { get; set; } = ActionType.GET;
        public string URL { get; set; } = null!;
        public object? Data { get; set; }
        public string AccessToken { get; set; } = null!;
    }

}
