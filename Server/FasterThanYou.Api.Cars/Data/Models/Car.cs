namespace FasterThanYou.Api.Cars.Data.Models
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    using static ValidationConstants.CarValidationConstants;

    public class Car
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        [MaxLength(CarNameMaxLength)]
        public string Name { get; set; } = null!;

        [Required]
        [ForeignKey(nameof(Chassis))]
        public int ChassisId { get; set; }
        [Required]
        public Chassis Chassis { get; set; } = null!;

        [Required]
        [ForeignKey(nameof(Engine))]
        public int EngineId { get; set; }
        [Required]
        public Engine Engine { get; set; } = null!;

        [Required]
        public Guid TeamId { get; set; }
    }
}
