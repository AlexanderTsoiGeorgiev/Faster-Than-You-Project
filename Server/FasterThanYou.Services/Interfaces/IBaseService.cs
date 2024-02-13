namespace FasterThanYou.Services
{
    public interface IBaseService
    {
        public Task<ResponseDTO> SendRequest(RequestDTO requestDTO);
    }
}
