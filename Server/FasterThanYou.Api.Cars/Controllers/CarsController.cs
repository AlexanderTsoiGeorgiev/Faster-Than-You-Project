namespace FasterThanYou.Api.Cars.Controllers
{
    using Microsoft.AspNetCore.Mvc;

    using FasterThanYou.Api.Cars.Data;
    using FasterThanYou.Api.Cars.Data.Models;
    using Microsoft.EntityFrameworkCore;
    using FasterThanYou.Api.Drivers;

    [Route("[controller]")]
    [ApiController]
    public class CarsController : ControllerBase
    {
        private readonly CarServiceDbContext dbContext;
        private ResponseDTO response;

        public CarsController(CarServiceDbContext dbContext)
        {
            this.dbContext = dbContext;
            response = new ResponseDTO();
        }

        [HttpGet]
        [Route("All")]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                Car[] cars = await dbContext.Cars.ToArrayAsync();
                response.Result = cars;
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
        public async Task<IActionResult> GetById(Guid id)
        {
            try
            {
                Car car = await dbContext.Cars.FindAsync(id) ?? throw new ArgumentNullException();
                response.Result = car;
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
