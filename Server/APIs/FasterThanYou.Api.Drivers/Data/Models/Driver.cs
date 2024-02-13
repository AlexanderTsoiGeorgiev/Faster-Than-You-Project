namespace FasterThanYou.Api.Drivers.Data.Models
{
    using System.ComponentModel.DataAnnotations;

    using static DriverModelValidationConstants;

    public class Driver
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        [Range(DriverMinNumber, DriverMaxNumber, MinimumIsExclusive = false, MaximumIsExclusive = false)]
        public int DriverNumber { get; set; }

        [Required]
        [MaxLength(DriverMaxBroadcastNameLength)]
        public string BroadcastName { get; set; } = null!;

        [Required]
        [MaxLength(DriverMaxFullNameLength)]
        public string FullName { get; set; } = null!;

        [Required]
        [MaxLength(DriverMaxNameAcronymLength)]
        public string NameAcronym { get; set; } = null!;

        [Required]
        [MaxLength(DriverMaxTeamNameLength)]
        public string TeamName { get; set; } = null!;

        [Required]
        [MaxLength(DriverMaxTeamHexColorLength)]
        public string TeamColor { get; set; } = null!;

        [Required]
        [MaxLength(DriverMaxFirstNameLength)]
        public string FirstName { get; set; } = null!;

        [Required]
        [MaxLength(DriverMaxLastNameLength)]
        public string LastName { get; set; } = null!;

        [Required]
        [MaxLength(DriverMaxHeadshotUrlLength)]
        public string HeadshotURL { get; set; } = null!;

        [Required]
        [MaxLength(DriverMaxCountryCodeLength)]
        public string CountryCode { get; set; } = null!;
    }
}
