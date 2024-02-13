namespace FasterThanYou.Web.Api.Controllers
{
    using Microsoft.AspNetCore.Mvc;

    using FasterThanYou.Web.Api.DTOs;

    [ApiController]
    [Route("[controller]")]
    public class ApiController : ControllerBase
    {

        [HttpPost]
        //[Route()]
        public ResponseDTO Get(RequestDTO requestDTO)
        {
            return new ResponseDTO();
        }
    }
}
