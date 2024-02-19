namespace FasterThanYou.Api.Cars.Data.Models
{
    using System.ComponentModel.DataAnnotations;

    using Microsoft.EntityFrameworkCore;

    using static ValidationConstants.EngineValidationConstants;

    public class Engine
    {
        public Engine()
        {
            Cars = new List<Car>();
        }

        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(EngineNameMaxLength)]
        public string Name { get; set; } = null!;

        [Required]
        [Precision(6, 2)]
        public decimal Weight { get; set; }

        public ICollection<Car> Cars { get; set; } = null!;
    }
}
