namespace FasterThanYou.Api.Drivers.Data
{
    using Microsoft.EntityFrameworkCore;

    using FasterThanYou.Api.Drivers.Data.Models;
    using System.Collections;

    public class DriverServiceDbContext : DbContext
    {
        public DriverServiceDbContext(DbContextOptions<DriverServiceDbContext> options) : base(options)
        {
        }

        public DbSet<Driver> Drivers { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            Driver[] drivers = GenerateDrivers();
            modelBuilder.Entity<Driver>().HasData(drivers);
            base.OnModelCreating(modelBuilder);
        }
        private static Driver[] GenerateDrivers()
        {
            ICollection<Driver> drivers = new List<Driver>();
            Driver driver;

            driver = new Driver
            {
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
            drivers.Add(driver);

            driver = new Driver()
            {
                Id = Guid.NewGuid(),
                BroadcastName = "S PEREZ",
                CountryCode = "MEX",
                DriverNumber = 11,
                FirstName = "Sergio",
                FullName = "Sergio PEREZ",
                LastName = "Perez",
                HeadshotURL = @"https://www.formula1.com/content/dam/fom-website/drivers/S/SERPER01_Sergio_Perez/serper01.png.transform/1col/image.png",
                NameAcronym = "PER",
                TeamColor = "3671C6",
                TeamName = "Red Bull Racing"
            };
            drivers.Add(driver);

            driver = new Driver()
            {
                Id= Guid.NewGuid(),
                BroadcastName = "G RUSSELL",
                CountryCode = "GBR",
                DriverNumber = 63,
                FirstName = "George",
                FullName = "George RUSSELL",
                LastName = "Russell",
                HeadshotURL = @"https://www.formula1.com/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png.transform/1col/image.png",
                NameAcronym = "RUS",
                TeamColor = "6CD3BF",
                TeamName = "Mercedes"
            };
            drivers.Add(driver);

            driver = new Driver()
            {
                Id = Guid.NewGuid(),
                BroadcastName = "L HAMILTON",
                CountryCode = "GBR",
                DriverNumber = 44,
                FirstName = "Lewis",
                FullName = "Lewis HAMILTON",
                LastName = "Hamilton",
                HeadshotURL = @"https://www.formula1.com/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png.transform/1col/image.png",
                NameAcronym = "HAM",
                TeamColor = "6CD3BF",
                TeamName = "Mercedes"
            };
            drivers.Add(driver);

            driver = new Driver()
            {
                Id = Guid.NewGuid(),
                BroadcastName = "C LECLERC",
                CountryCode = "MON",
                DriverNumber = 16,
                FirstName = "Charles",
                FullName = "Charles LECLERC",
                LastName = "Leclerc",
                HeadshotURL = @"https://www.formula1.com/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/1col/image.png",
                NameAcronym = "LEC",
                TeamColor = "F91536",
                TeamName = "Ferrari"
            };
            drivers.Add(driver);

            driver = new Driver()
            {
                Id = Guid.NewGuid(),
                BroadcastName = "C SAINZ",
                CountryCode = "ESP",
                DriverNumber = 55,
                FirstName = "Carlos",
                FullName = "Carlos SAINZ",
                LastName = "Sainz",
                HeadshotURL = @"https://www.formula1.com/content/dam/fom-website/drivers/C/CARSAI01_Carlos_Sainz/carsai01.png.transform/1col/image.png",
                NameAcronym = "SAI",
                TeamColor = "F91536",
                TeamName = "Ferrari"
            };
            drivers.Add(driver);

            driver = new Driver()
            {
                Id = Guid.NewGuid(),
                BroadcastName = "O PIASTRI",
                CountryCode = "AUS",
                DriverNumber = 81,
                FirstName = "Oscar",
                FullName = "Oscar PIASTRI",
                LastName = "Piastri",
                HeadshotURL = @"https://www.formula1.com/content/dam/fom-website/drivers/O/OSCPIA01_Oscar_Piastri/oscpia01.png.transform/1col/image.png",
                NameAcronym = "PIA",
                TeamColor = "F58020",
                TeamName = "McLaren"
            };
            drivers.Add(driver);

            driver = new Driver()
            {
                Id = Guid.NewGuid(),
                BroadcastName = "L NORRIS",
                CountryCode = "GBR",
                DriverNumber = 4,
                FirstName = "Lando",
                FullName = "Lando NORRIS",
                LastName = "Norris",
                HeadshotURL = @"https://www.formula1.com/content/dam/fom-website/drivers/L/LANNOR01_Lando_Norris/lannor01.png.transform/1col/image.png",
                NameAcronym = "NOR",
                TeamColor = "F58020",
                TeamName = "McLaren"
            };
            drivers.Add(driver);

            return drivers.ToArray();
        }
    }
}
