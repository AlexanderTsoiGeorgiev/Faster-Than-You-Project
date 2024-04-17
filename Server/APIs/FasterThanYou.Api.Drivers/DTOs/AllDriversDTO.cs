namespace FasterThanYou.Api.Drivers.DTOs
{
    public class AllDriversDTO
    {
        public Guid Id { get; set; }
        public int DriverNumber { get; set; }
        public string FullName { get; set; } = null!;
        public string TeamName { get; set; } = null!;
        public string TeamColor { get; set; } = null!;
        public string HeadshorURL { get; set; } = null!;
        public string CountryCode { get; set; } = null!;
    }
}