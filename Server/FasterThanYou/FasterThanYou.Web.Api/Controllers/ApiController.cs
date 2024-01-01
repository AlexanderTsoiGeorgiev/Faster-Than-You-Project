namespace FasterThanYou.Web.Api.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Authorization;

    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class ApiController : ControllerBase
    {
    }
}
