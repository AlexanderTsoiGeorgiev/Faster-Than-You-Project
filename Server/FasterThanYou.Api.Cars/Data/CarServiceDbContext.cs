namespace FasterThanYou.Api.Cars.Data
{
    using FasterThanYou.Api.Cars.Data.Models;
    using Microsoft.EntityFrameworkCore;

    public class CarServiceDbContext : DbContext
    {
        public CarServiceDbContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Car> Cars { get; set; } = null!;
        public DbSet<Chassis> Chassis { get; set; } = null!;
        public DbSet<Engine> Engines { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
