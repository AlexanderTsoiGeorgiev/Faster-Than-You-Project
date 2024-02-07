namespace FasterThanYou.Api.Drivers
{
    using Microsoft.AspNetCore.Mvc;

    [Route("[controller]")]
    [ApiController]
    public class DriversController : ControllerBase
    {
        private ResponseDTO response;
        private readonly IHttpClientFactory httpClientFactory;

        public DriversController(IHttpClientFactory httpClientFactory)
        {
            response = new ResponseDTO();
            this.httpClientFactory = httpClientFactory;
        }

        [HttpGet]
        public ResponseDTO Get()
        {
            try
            {
                return response;
            }
            catch (Exception ex)
            {
                response.Message = ex.Message;
            }
            return response;
        }

        [HttpGet]
        [Route("{id:int}")]
        public ResponseDTO Get(int id)
        {
            try
            {
                return response;
            }
            catch (Exception ex)
            {
                response.Message = ex.Message;
            }

            return response;
        }

    }
}
