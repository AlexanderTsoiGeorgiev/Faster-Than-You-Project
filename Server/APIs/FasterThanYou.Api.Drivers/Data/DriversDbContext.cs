namespace FasterThanYou.Api.Drivers.Data
{
    using Microsoft.EntityFrameworkCore;

    using FasterThanYou.Api.Drivers.Data.Models;

    public class DriversDbContext : DbContext
    {
        public DriversDbContext(DbContextOptions<DriversDbContext> options) : base(options)
        {
        }

        public DbSet<Driver> Drivers { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
