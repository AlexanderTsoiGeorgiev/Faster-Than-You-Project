namespace FasterThanYou.Api.Teams.Data.Models
{
    using System.ComponentModel.DataAnnotations;

    using static ValidationConstants.TeamValidationConstants;

    public class Team
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        [MaxLength(TeamMaxNameLength)]
        public string Name { get; set; } = null!;

        [Required]
        [MaxLength()]
        public string TeamPrinciple { get; set; } = null!;
    }
}
