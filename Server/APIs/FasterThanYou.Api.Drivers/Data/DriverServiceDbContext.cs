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
            base.OnModelCreating(modelBuilder);
        }
    }
}
