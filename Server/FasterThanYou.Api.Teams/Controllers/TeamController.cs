namespace FasterThanYou.Api.Teams.Controllers
{
    using FasterThanYou.Api.Teams.Data;
    using FasterThanYou.Api.Teams.Data.Models;
    using FasterThanYou.Api.Teams.DTOs;
    using Microsoft.AspNetCore.Http;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.EntityFrameworkCore;

    [Route("[controller]")]
    [ApiController]
    public class TeamController : ControllerBase
    {
        private readonly IHttpClientFactory httpClientFactory;
        private readonly TeamServiceDbContext dbContext;
        private ResponseDTO response;

        public TeamController(
            IHttpClientFactory httpClientFactory,
            TeamServiceDbContext dbContext)
        {
            this.httpClientFactory = httpClientFactory;
            this.dbContext = dbContext;
            response = new ResponseDTO();
        }

        [HttpGet]
        [Route("All")]
        public async Task<ResponseDTO> GetAll()
        {
            try
            {
                Team[] teams = await dbContext.Teams.ToArrayAsync();
                response.Result = teams;
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
