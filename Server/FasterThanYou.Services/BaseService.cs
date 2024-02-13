
namespace FasterThanYou.Services
{
    public class BaseService : IBaseService
    {
        public Task<ResponseDTO> SendRequest(RequestDTO requestDTO)
        {
            throw new NotImplementedException();
        }
    }
}