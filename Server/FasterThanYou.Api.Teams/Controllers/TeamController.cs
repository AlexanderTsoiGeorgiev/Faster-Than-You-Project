namespace FasterThanYou.Api.Teams.Controllers
{
    using FasterThanYou.Api.Teams.Data;
    using FasterThanYou.Api.Teams.Data.Models;
    using FasterThanYou.Api.Teams.DTOs;
    using Microsoft.AspNetCore.Http;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.EntityFrameworkCore;

    [ApiController]
    [Route("[controller]")]
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
        [ProducesResponseType<ResponseDTO>(StatusCodes.Status200OK)]
        public async Task<IActionResult> GetAll()
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

            return Ok(response);
        }

        [HttpGet]
        [Route("ById/{id:guid}")]
        [ProducesResponseType<ResponseDTO>(StatusCodes.Status200OK)]
        [ProducesResponseType<ResponseDTO>(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetById(Guid id)
        {
            try
            {
                Team? team = await dbContext.Teams.FindAsync(id) ?? throw new Exception();

                response.Result = team;
            }
            catch (Exception ex)
            {
                response.Message = ex.Message;
                response.IsSuccess = false;
            }

            return response.IsSuccess ? Ok(response) : BadRequest(response);
        }
    }
}
