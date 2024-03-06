using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace FasterThanYou.Api.Drivers.Migrations
{
    /// <inheritdoc />
    public partial class ImprovedSeeding : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Drivers",
                keyColumn: "Id",
                keyValue: new Guid("fe2a45ea-4426-46d4-9fc5-ca7ef4ed5754"));

            migrationBuilder.InsertData(
                table: "Drivers",
                columns: new[] { "Id", "BroadcastName", "CountryCode", "DriverNumber", "FirstName", "FullName", "HeadshotURL", "LastName", "NameAcronym", "TeamColor", "TeamName" },
                values: new object[,]
                {
                    { new Guid("06fd52cc-bcae-4f73-a363-68c0674de1bb"), "O PIASTRI", "AUS", 81, "Oscar", "Oscar PIASTRI", "https://www.formula1.com/content/dam/fom-website/drivers/O/OSCPIA01_Oscar_Piastri/oscpia01.png.transform/1col/image.png", "Piastri", "PIA", "F58020", "McLaren" },
                    { new Guid("17afd016-bf4b-4354-b72c-4b3881c373be"), "G RUSSELL", "GBR", 63, "George", "George RUSSELL", "https://www.formula1.com/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png.transform/1col/image.png", "Russell", "RUS", "6CD3BF", "Mercedes" },
                    { new Guid("1c53f800-6037-439f-9e7d-358a40a5d92d"), "C SAINZ", "ESP", 55, "Carlos", "Carlos SAINZ", "https://www.formula1.com/content/dam/fom-website/drivers/C/CARSAI01_Carlos_Sainz/carsai01.png.transform/1col/image.png", "Sainz", "SAI", "F91536", "Ferrari" },
                    { new Guid("1dadd12f-0a98-413c-beb8-3e5fb5df6018"), "C LECLERC", "MON", 16, "Charles", "Charles LECLERC", "https://www.formula1.com/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/1col/image.png", "Leclerc", "LEC", "F91536", "Ferrari" },
                    { new Guid("22f84a1e-dc2f-4d53-9c78-5e5a6bbdbfc5"), "L NORRIS", "GBR", 4, "Lando", "Lando NORRIS", "https://www.formula1.com/content/dam/fom-website/drivers/L/LANNOR01_Lando_Norris/lannor01.png.transform/1col/image.png", "Norris", "NOR", "F58020", "McLaren" },
                    { new Guid("25b73cf2-899b-4f59-81ee-bf352be45b7e"), "S PEREZ", "MEX", 11, "Sergio", "Sergio PEREZ", "https://www.formula1.com/content/dam/fom-website/drivers/S/SERPER01_Sergio_Perez/serper01.png.transform/1col/image.png", "Perez", "PER", "3671C6", "Red Bull Racing" },
                    { new Guid("930087b2-3c90-4f82-a2ab-7fd4db440f65"), "M VERSTAPPEN", "NED", 1, "Max", "Max VERSTAPPEN", "https://www.formula1.com/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/1col/image.png", "Verstappen", "VER", "3671C6", "Red Bull Racing" },
                    { new Guid("bcee83ab-dd03-44fd-b46b-30869256a058"), "L HAMILTON", "GBR", 44, "Lewis", "Lewis HAMILTON", "https://www.formula1.com/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png.transform/1col/image.png", "Hamilton", "HAM", "6CD3BF", "Mercedes" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Drivers",
                keyColumn: "Id",
                keyValue: new Guid("06fd52cc-bcae-4f73-a363-68c0674de1bb"));

            migrationBuilder.DeleteData(
                table: "Drivers",
                keyColumn: "Id",
                keyValue: new Guid("17afd016-bf4b-4354-b72c-4b3881c373be"));

            migrationBuilder.DeleteData(
                table: "Drivers",
                keyColumn: "Id",
                keyValue: new Guid("1c53f800-6037-439f-9e7d-358a40a5d92d"));

            migrationBuilder.DeleteData(
                table: "Drivers",
                keyColumn: "Id",
                keyValue: new Guid("1dadd12f-0a98-413c-beb8-3e5fb5df6018"));

            migrationBuilder.DeleteData(
                table: "Drivers",
                keyColumn: "Id",
                keyValue: new Guid("22f84a1e-dc2f-4d53-9c78-5e5a6bbdbfc5"));

            migrationBuilder.DeleteData(
                table: "Drivers",
                keyColumn: "Id",
                keyValue: new Guid("25b73cf2-899b-4f59-81ee-bf352be45b7e"));

            migrationBuilder.DeleteData(
                table: "Drivers",
                keyColumn: "Id",
                keyValue: new Guid("930087b2-3c90-4f82-a2ab-7fd4db440f65"));

            migrationBuilder.DeleteData(
                table: "Drivers",
                keyColumn: "Id",
                keyValue: new Guid("bcee83ab-dd03-44fd-b46b-30869256a058"));

            migrationBuilder.InsertData(
                table: "Drivers",
                columns: new[] { "Id", "BroadcastName", "CountryCode", "DriverNumber", "FirstName", "FullName", "HeadshotURL", "LastName", "NameAcronym", "TeamColor", "TeamName" },
                values: new object[] { new Guid("fe2a45ea-4426-46d4-9fc5-ca7ef4ed5754"), "M VERSTAPPEN", "NED", 1, "Max", "Max VERSTAPPEN", "https://www.formula1.com/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/1col/image.png", "Verstappen", "VER", "3671C6", "Red Bull Racing" });
        }
    }
}
