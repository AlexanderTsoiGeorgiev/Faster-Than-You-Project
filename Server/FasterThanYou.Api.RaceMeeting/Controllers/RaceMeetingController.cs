namespace FasterThanYou.Api.RaceMeeting.Controllers
{
    using FasterThanYou.Api.RaceMeetings;
    using Microsoft.AspNetCore.Mvc;

    [Route("[controller]")]
    [ApiController]
    public class RaceMeetingController : ControllerBase
    {
        private ResponseDTO response;
        private readonly IHttpClientFactory httpClientFactory;

        public RaceMeetingController(IHttpClientFactory httpClientFactory)
        {
            response = new ResponseDTO();
            this.httpClientFactory = httpClientFactory;
        }


        [HttpGet]
        public async Task<ResponseDTO> Get()
        {
            using HttpClient httpClient = httpClientFactory.CreateClient();
            HttpRequestMessage message = new HttpRequestMessage();
            message.RequestUri = new Uri("https://api.openf1.org/v1/meetings?year=2023");
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
    }
}
