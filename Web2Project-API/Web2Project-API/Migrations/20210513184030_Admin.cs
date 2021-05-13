using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Web2Project_API.Migrations
{
    public partial class Admin : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "LocationId",
                table: "Users",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "UserId", "Approved", "Birthday", "ConsumerId", "CrewId", "Email", "Lastname", "LocationId", "Name", "PasswordHash", "PasswordSalt", "Picture", "UserType", "Username" },
                values: new object[] { 1, false, new DateTime(1998, 6, 17, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, "milan.momcilovic582@gmail.com", "Momcilovic", null, "Milan", new byte[] { 191, 226, 171, 228, 248, 69, 236, 252, 98, 128, 63, 43, 56, 72, 70, 214, 27, 31, 75, 83, 121, 134, 177, 147, 159, 205, 250, 103, 62, 118, 200, 184, 159, 202, 231, 19, 188, 119, 98, 73, 197, 27, 41, 151, 232, 76, 242, 4, 223, 186, 166, 246, 41, 219, 125, 201, 222, 67, 43, 185, 130, 96, 148, 34 }, new byte[] { 229, 8, 160, 54, 35, 129, 44, 134, 238, 13, 135, 45, 27, 10, 110, 3, 148, 72, 237, 249, 216, 158, 211, 238, 165, 221, 13, 143, 209, 212, 96, 244, 46, 160, 160, 235, 42, 36, 220, 253, 101, 212, 29, 119, 56, 215, 245, 196, 142, 73, 139, 141, 243, 211, 85, 201, 137, 69, 232, 101, 132, 105, 219, 238, 75, 117, 86, 185, 36, 97, 44, 150, 34, 101, 187, 13, 223, 155, 204, 63, 111, 18, 217, 155, 135, 64, 5, 159, 108, 123, 54, 32, 22, 126, 87, 112, 101, 172, 7, 68, 84, 47, 40, 139, 61, 132, 172, 233, 184, 182, 173, 10, 54, 199, 10, 227, 24, 195, 238, 118, 143, 64, 128, 236, 197, 139, 236, 245 }, null, 3, "Admin1" });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "UserId", "Approved", "Birthday", "ConsumerId", "CrewId", "Email", "Lastname", "LocationId", "Name", "PasswordHash", "PasswordSalt", "Picture", "UserType", "Username" },
                values: new object[] { 2, false, new DateTime(1997, 12, 10, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, "milica.simeunovic97@gmail.com", "Simeunovic", null, "Milica", new byte[] { 191, 226, 171, 228, 248, 69, 236, 252, 98, 128, 63, 43, 56, 72, 70, 214, 27, 31, 75, 83, 121, 134, 177, 147, 159, 205, 250, 103, 62, 118, 200, 184, 159, 202, 231, 19, 188, 119, 98, 73, 197, 27, 41, 151, 232, 76, 242, 4, 223, 186, 166, 246, 41, 219, 125, 201, 222, 67, 43, 185, 130, 96, 148, 34 }, new byte[] { 229, 8, 160, 54, 35, 129, 44, 134, 238, 13, 135, 45, 27, 10, 110, 3, 148, 72, 237, 249, 216, 158, 211, 238, 165, 221, 13, 143, 209, 212, 96, 244, 46, 160, 160, 235, 42, 36, 220, 253, 101, 212, 29, 119, 56, 215, 245, 196, 142, 73, 139, 141, 243, 211, 85, 201, 137, 69, 232, 101, 132, 105, 219, 238, 75, 117, 86, 185, 36, 97, 44, 150, 34, 101, 187, 13, 223, 155, 204, 63, 111, 18, 217, 155, 135, 64, 5, 159, 108, 123, 54, 32, 22, 126, 87, 112, 101, 172, 7, 68, 84, 47, 40, 139, 61, 132, 172, 233, 184, 182, 173, 10, 54, 199, 10, 227, 24, 195, 238, 118, 143, 64, 128, 236, 197, 139, 236, 245 }, null, 3, "Admin1" });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "UserId", "Approved", "Birthday", "ConsumerId", "CrewId", "Email", "Lastname", "LocationId", "Name", "PasswordHash", "PasswordSalt", "Picture", "UserType", "Username" },
                values: new object[] { 3, false, new DateTime(1998, 6, 17, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, "jelena.beader@gmail.com", "Beader", null, "Jelena", new byte[] { 191, 226, 171, 228, 248, 69, 236, 252, 98, 128, 63, 43, 56, 72, 70, 214, 27, 31, 75, 83, 121, 134, 177, 147, 159, 205, 250, 103, 62, 118, 200, 184, 159, 202, 231, 19, 188, 119, 98, 73, 197, 27, 41, 151, 232, 76, 242, 4, 223, 186, 166, 246, 41, 219, 125, 201, 222, 67, 43, 185, 130, 96, 148, 34 }, new byte[] { 229, 8, 160, 54, 35, 129, 44, 134, 238, 13, 135, 45, 27, 10, 110, 3, 148, 72, 237, 249, 216, 158, 211, 238, 165, 221, 13, 143, 209, 212, 96, 244, 46, 160, 160, 235, 42, 36, 220, 253, 101, 212, 29, 119, 56, 215, 245, 196, 142, 73, 139, 141, 243, 211, 85, 201, 137, 69, 232, 101, 132, 105, 219, 238, 75, 117, 86, 185, 36, 97, 44, 150, 34, 101, 187, 13, 223, 155, 204, 63, 111, 18, 217, 155, 135, 64, 5, 159, 108, 123, 54, 32, 22, 126, 87, 112, 101, 172, 7, 68, 84, 47, 40, 139, 61, 132, 172, 233, 184, 182, 173, 10, 54, 199, 10, 227, 24, 195, 238, 118, 143, 64, 128, 236, 197, 139, 236, 245 }, null, 3, "Admin1" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: 3);

            migrationBuilder.AlterColumn<int>(
                name: "LocationId",
                table: "Users",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);
        }
    }
}
