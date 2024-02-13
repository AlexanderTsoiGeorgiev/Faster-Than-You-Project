namespace FasterThanYou.Api.Drivers
{
    using Microsoft.AspNetCore.Mvc;

    using Newtonsoft.Json;

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
        public async Task<ResponseDTO> Get()
        {
            using HttpClient httpClient = httpClientFactory.CreateClient();
            HttpRequestMessage message = new HttpRequestMessage();
            message.RequestUri = new Uri("https://api.openf1.org/v1/drivers?driver_number=1&session_key=9158");
            message.Method = HttpMethod.Get;

            HttpResponseMessage apiResponse = new HttpResponseMessage();
            try
            {
                apiResponse = await httpClient.SendAsync(message);
                string apiContent = await apiResponse.Content.ReadAsStringAsync();
                //response.Result = JsonConvert.DeserializeObject<List<ResponseDTO>>(apiContent)!;
                response.Result = apiContent;
                return response;
            }
            catch (Exception ex)
            {
                response.Message = ex.Message;
                response.IsSuccess = false;
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
