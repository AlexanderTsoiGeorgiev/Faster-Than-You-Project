using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FasterThanYou.Api.Drivers.Migrations
{
    /// <inheritdoc />
    public partial class Initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Drivers",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    DriverNumber = table.Column<int>(type: "int", nullable: false),
                    BroadcastName = table.Column<string>(type: "nvarchar(150)", maxLength: 150, nullable: false),
                    FullName = table.Column<string>(type: "nvarchar(150)", maxLength: 150, nullable: false),
                    NameAcronym = table.Column<string>(type: "nvarchar(5)", maxLength: 5, nullable: false),
                    TeamName = table.Column<string>(type: "nvarchar(250)", maxLength: 250, nullable: false),
                    TeamColor = table.Column<string>(type: "nvarchar(6)", maxLength: 6, nullable: false),
                    FirstName = table.Column<string>(type: "nvarchar(75)", maxLength: 75, nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(75)", maxLength: 75, nullable: false),
                    HeadshotURL = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: false),
                    CountryCode = table.Column<string>(type: "nvarchar(5)", maxLength: 5, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Drivers", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Drivers");
        }
    }
}
