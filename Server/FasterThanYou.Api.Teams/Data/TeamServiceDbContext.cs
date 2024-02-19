namespace FasterThanYou.Api.Teams.Data
{
    using FasterThanYou.Api.Teams.Data.Models;
    using Microsoft.EntityFrameworkCore;

    public class TeamServiceDbContext : DbContext
    {
        public TeamServiceDbContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Team> Teams { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Team>().HasData(new Team{Id = Guid.NewGuid(), Name = "Sample Name", TeamPrinciple = "Principle"  });
            base.OnModelCreating(modelBuilder);
        }
    }
}
