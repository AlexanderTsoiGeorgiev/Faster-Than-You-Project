namespace FasterThanYou.Api.Drivers.Data
{
    using Microsoft.EntityFrameworkCore;

    using FasterThanYou.Api.Drivers.Data.Models;

    public class DriverServiceDbContext : DbContext
    {
        public DriverServiceDbContext(DbContextOptions<DriverServiceDbContext> options) : base(options)
        {
        }

        public DbSet<Driver> Drivers { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            Driver driver = new Driver { 
                Id = Guid.NewGuid(), 
                BroadcastName = "M VERSTAPPEN", 
                CountryCode = "NED", 
                DriverNumber = 1, 
                FirstName = "Max", 
                FullName = "Max VERSTAPPEN", 
                LastName = "Verstappen", 
                HeadshotURL = @"https://www.formula1.com/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/1col/image.png", 
                NameAcronym = "VER", 
                TeamColor = "3671C6", 
                TeamName = "Red Bull Racing" 
            };
            modelBuilder.Entity<Driver>().HasData(driver);
            base.OnModelCreating(modelBuilder);
        }
    }
}
