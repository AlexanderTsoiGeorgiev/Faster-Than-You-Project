namespace FasterThanYou.Api.Drivers
{
    public class ResponseDTO<T> where T : class
    {
        public T? Result { get; set; }
        public bool IsSuccess { get; set; } = true;
        public string Message { get; set; } = string.Empty;
    }
}