namespace FasterThanYou.Api.Drivers
{
    using FasterThanYou.Api.Drivers.Data;
    using FasterThanYou.Api.Drivers.Data.Models;
    using FasterThanYou.Api.Drivers.DTOs;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.EntityFrameworkCore;

    [Route("[controller]")]
    [ApiController]
    public class DriversController : ControllerBase
    {
        //private ResponseDTO response;
        //private readonly IHttpClientFactory httpClientFactory;
        private readonly DriverServiceDbContext dbContext;

        //IHttpClientFactory httpClientFactory

        public DriversController(
            DriverServiceDbContext dbContext)
        {
            //response = new ResponseDTO();
            this.dbContext = dbContext;
            //this.httpClientFactory = httpClientFactory;
        }

        [HttpGet]
        [Route("All")]
        [ProducesResponseType<ResponseDTO<AllDriversDTO>>(StatusCodes.Status200OK)]
        public async Task<IActionResult> GetAll()
        {
            ResponseDTO<AllDriversDTO[]> response = new ResponseDTO<AllDriversDTO[]>();
            /*using HttpClient httpClient = httpClientFactory.CreateClient();
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
            return response; */
            try
            {
                AllDriversDTO[] drivers = await dbContext.Drivers
                    .AsNoTracking()
                    .Select(d => new AllDriversDTO
                    {
                        Id = d.Id,
                        DriverNumber = d.DriverNumber,
                        FullName = d.FullName,
                        TeamName = d.TeamName,
                        TeamColor = d.TeamColor,
                        HeadshorURL = d.HeadshotURL,
                        CountryCode = d.CountryCode
                    })
                    .ToArrayAsync();
                response.Result = drivers;
            }
            catch (Exception ex)
            {
                response.Message = ex.Message;
                response.IsSuccess = false;
                return BadRequest(response);
            }

            return Ok(response);
        }

        [HttpGet]
        [Route("ById/{id:guid}")]
        public async Task<IActionResult> Get(Guid id)
        {
            ResponseDTO<Driver> response = new ResponseDTO<Driver>();
            try
            {
                Driver driver = await dbContext.Drivers.FindAsync(id) ?? throw new ArgumentNullException();
                response.Result = driver;
            }
            catch (Exception ex)
            {
                response.Message = ex.Message;
                response.IsSuccess = false;
                return BadRequest(response);
            }

            return Ok(response);
        }

    }
}
