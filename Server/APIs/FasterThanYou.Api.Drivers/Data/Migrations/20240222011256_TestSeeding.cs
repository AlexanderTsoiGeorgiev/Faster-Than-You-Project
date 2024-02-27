using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FasterThanYou.Api.Drivers.Migrations
{
    /// <inheritdoc />
    public partial class TestSeeding : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Drivers",
                columns: new[] { "Id", "BroadcastName", "CountryCode", "DriverNumber", "FirstName", "FullName", "HeadshotURL", "LastName", "NameAcronym", "TeamColor", "TeamName" },
                values: new object[] { new Guid("fe2a45ea-4426-46d4-9fc5-ca7ef4ed5754"), "M VERSTAPPEN", "NED", 1, "Max", "Max VERSTAPPEN", "https://www.formula1.com/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/1col/image.png", "Verstappen", "VER", "3671C6", "Red Bull Racing" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Drivers",
                keyColumn: "Id",
                keyValue: new Guid("fe2a45ea-4426-46d4-9fc5-ca7ef4ed5754"));
        }
    }
}
