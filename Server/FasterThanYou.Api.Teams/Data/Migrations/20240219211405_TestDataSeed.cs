using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FasterThanYou.Api.Teams.Migrations
{
    /// <inheritdoc />
    public partial class TestDataSeed : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Teams",
                columns: new[] { "Id", "Name", "TeamPrinciple" },
                values: new object[] { new Guid("33f46135-278d-4ee1-ab25-c7a650a0381d"), "Sample Name", "Principle" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Teams",
                keyColumn: "Id",
                keyValue: new Guid("33f46135-278d-4ee1-ab25-c7a650a0381d"));
        }
    }
}
