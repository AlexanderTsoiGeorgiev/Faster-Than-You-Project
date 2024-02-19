namespace FasterThanYou.Api.Teams.Controllers
{
    using FasterThanYou.Api.Teams.DTOs;
    using Microsoft.AspNetCore.Http;
    using Microsoft.AspNetCore.Mvc;

    [Route("api/[controller]")]
    [ApiController]
    public class TeamController : ControllerBase
    {
        private readonly IHttpClientFactory httpClientFactory;
        private ResponseDTO response;

        public TeamController(IHttpClientFactory httpClientFactory)
        {
            this.httpClientFactory = httpClientFactory;
            response = new ResponseDTO();
        }
    }
}
