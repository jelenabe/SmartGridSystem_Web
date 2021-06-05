using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Web2Project_API.Migrations
{
    public partial class updateIncident : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Consumers_Locations_LocationId",
                table: "Consumers");

            migrationBuilder.DropForeignKey(
                name: "FK_Incidents_Crews_CrewId",
                table: "Incidents");

            migrationBuilder.AlterColumn<int>(
                name: "ResolutionSubcauses",
                table: "Incidents",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "ResolutionMaterials",
                table: "Incidents",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "ResolutionConstructionTypes",
                table: "Incidents",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "ResolutionCauses",
                table: "Incidents",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "CrewId",
                table: "Incidents",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "LocationId",
                table: "Consumers",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: 1,
                columns: new[] { "PasswordHash", "PasswordSalt" },
                values: new object[] { new byte[] { 236, 79, 196, 218, 79, 124, 237, 170, 232, 190, 74, 5, 44, 74, 175, 244, 1, 44, 234, 184, 73, 86, 173, 53, 254, 79, 8, 8, 191, 87, 49, 10, 61, 20, 233, 50, 115, 246, 103, 195, 45, 132, 60, 217, 102, 182, 19, 72, 100, 221, 155, 56, 184, 213, 0, 106, 194, 69, 221, 79, 241, 6, 90, 210 }, new byte[] { 158, 170, 175, 194, 131, 64, 240, 243, 38, 144, 81, 178, 179, 61, 93, 225, 68, 228, 183, 58, 6, 136, 178, 40, 204, 80, 21, 237, 156, 48, 55, 224, 21, 14, 194, 172, 105, 213, 176, 35, 75, 158, 217, 125, 253, 238, 198, 97, 75, 220, 173, 111, 220, 159, 245, 160, 55, 102, 254, 140, 68, 32, 143, 215, 215, 224, 50, 236, 113, 228, 252, 182, 95, 196, 3, 200, 1, 17, 131, 50, 201, 175, 121, 96, 78, 146, 46, 97, 122, 243, 152, 143, 13, 255, 136, 238, 177, 236, 187, 119, 244, 228, 67, 62, 217, 160, 23, 126, 169, 194, 89, 28, 173, 9, 203, 110, 7, 160, 29, 19, 118, 85, 95, 110, 163, 247, 88, 165 } });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: 2,
                columns: new[] { "PasswordHash", "PasswordSalt" },
                values: new object[] { new byte[] { 236, 79, 196, 218, 79, 124, 237, 170, 232, 190, 74, 5, 44, 74, 175, 244, 1, 44, 234, 184, 73, 86, 173, 53, 254, 79, 8, 8, 191, 87, 49, 10, 61, 20, 233, 50, 115, 246, 103, 195, 45, 132, 60, 217, 102, 182, 19, 72, 100, 221, 155, 56, 184, 213, 0, 106, 194, 69, 221, 79, 241, 6, 90, 210 }, new byte[] { 158, 170, 175, 194, 131, 64, 240, 243, 38, 144, 81, 178, 179, 61, 93, 225, 68, 228, 183, 58, 6, 136, 178, 40, 204, 80, 21, 237, 156, 48, 55, 224, 21, 14, 194, 172, 105, 213, 176, 35, 75, 158, 217, 125, 253, 238, 198, 97, 75, 220, 173, 111, 220, 159, 245, 160, 55, 102, 254, 140, 68, 32, 143, 215, 215, 224, 50, 236, 113, 228, 252, 182, 95, 196, 3, 200, 1, 17, 131, 50, 201, 175, 121, 96, 78, 146, 46, 97, 122, 243, 152, 143, 13, 255, 136, 238, 177, 236, 187, 119, 244, 228, 67, 62, 217, 160, 23, 126, 169, 194, 89, 28, 173, 9, 203, 110, 7, 160, 29, 19, 118, 85, 95, 110, 163, 247, 88, 165 } });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: 3,
                columns: new[] { "PasswordHash", "PasswordSalt" },
                values: new object[] { new byte[] { 236, 79, 196, 218, 79, 124, 237, 170, 232, 190, 74, 5, 44, 74, 175, 244, 1, 44, 234, 184, 73, 86, 173, 53, 254, 79, 8, 8, 191, 87, 49, 10, 61, 20, 233, 50, 115, 246, 103, 195, 45, 132, 60, 217, 102, 182, 19, 72, 100, 221, 155, 56, 184, 213, 0, 106, 194, 69, 221, 79, 241, 6, 90, 210 }, new byte[] { 158, 170, 175, 194, 131, 64, 240, 243, 38, 144, 81, 178, 179, 61, 93, 225, 68, 228, 183, 58, 6, 136, 178, 40, 204, 80, 21, 237, 156, 48, 55, 224, 21, 14, 194, 172, 105, 213, 176, 35, 75, 158, 217, 125, 253, 238, 198, 97, 75, 220, 173, 111, 220, 159, 245, 160, 55, 102, 254, 140, 68, 32, 143, 215, 215, 224, 50, 236, 113, 228, 252, 182, 95, 196, 3, 200, 1, 17, 131, 50, 201, 175, 121, 96, 78, 146, 46, 97, 122, 243, 152, 143, 13, 255, 136, 238, 177, 236, 187, 119, 244, 228, 67, 62, 217, 160, 23, 126, 169, 194, 89, 28, 173, 9, 203, 110, 7, 160, 29, 19, 118, 85, 95, 110, 163, 247, 88, 165 } });

            migrationBuilder.AddForeignKey(
                name: "FK_Consumers_Locations_LocationId",
                table: "Consumers",
                column: "LocationId",
                principalTable: "Locations",
                principalColumn: "LocationId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Incidents_Crews_CrewId",
                table: "Incidents",
                column: "CrewId",
                principalTable: "Crews",
                principalColumn: "CrewId",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Consumers_Locations_LocationId",
                table: "Consumers");

            migrationBuilder.DropForeignKey(
                name: "FK_Incidents_Crews_CrewId",
                table: "Incidents");

            migrationBuilder.AlterColumn<int>(
                name: "ResolutionSubcauses",
                table: "Incidents",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "ResolutionMaterials",
                table: "Incidents",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "ResolutionConstructionTypes",
                table: "Incidents",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "ResolutionCauses",
                table: "Incidents",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "CrewId",
                table: "Incidents",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "LocationId",
                table: "Consumers",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: 1,
                columns: new[] { "PasswordHash", "PasswordSalt" },
                values: new object[] { new byte[] { 34, 88, 25, 69, 237, 58, 221, 248, 71, 223, 31, 229, 77, 168, 46, 170, 225, 189, 223, 161, 36, 125, 255, 101, 91, 121, 234, 143, 163, 39, 196, 172, 197, 36, 151, 62, 42, 209, 85, 139, 141, 253, 137, 75, 81, 183, 185, 203, 126, 135, 176, 94, 75, 182, 202, 121, 80, 155, 117, 241, 54, 47, 229, 34 }, new byte[] { 221, 39, 44, 166, 150, 55, 252, 162, 197, 213, 152, 27, 209, 31, 49, 230, 171, 237, 50, 94, 53, 130, 224, 223, 144, 208, 90, 191, 8, 217, 1, 89, 133, 6, 255, 203, 173, 232, 123, 73, 13, 55, 20, 72, 48, 247, 20, 123, 60, 217, 106, 208, 56, 78, 255, 188, 230, 139, 173, 247, 203, 85, 201, 28, 221, 108, 173, 147, 123, 186, 118, 184, 74, 81, 53, 248, 236, 158, 147, 124, 13, 157, 214, 0, 172, 145, 209, 213, 35, 80, 171, 73, 95, 5, 97, 106, 102, 130, 79, 95, 138, 48, 219, 248, 132, 82, 182, 14, 69, 12, 121, 214, 145, 85, 50, 40, 147, 79, 162, 80, 46, 196, 26, 65, 73, 199, 127, 155 } });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: 2,
                columns: new[] { "PasswordHash", "PasswordSalt" },
                values: new object[] { new byte[] { 34, 88, 25, 69, 237, 58, 221, 248, 71, 223, 31, 229, 77, 168, 46, 170, 225, 189, 223, 161, 36, 125, 255, 101, 91, 121, 234, 143, 163, 39, 196, 172, 197, 36, 151, 62, 42, 209, 85, 139, 141, 253, 137, 75, 81, 183, 185, 203, 126, 135, 176, 94, 75, 182, 202, 121, 80, 155, 117, 241, 54, 47, 229, 34 }, new byte[] { 221, 39, 44, 166, 150, 55, 252, 162, 197, 213, 152, 27, 209, 31, 49, 230, 171, 237, 50, 94, 53, 130, 224, 223, 144, 208, 90, 191, 8, 217, 1, 89, 133, 6, 255, 203, 173, 232, 123, 73, 13, 55, 20, 72, 48, 247, 20, 123, 60, 217, 106, 208, 56, 78, 255, 188, 230, 139, 173, 247, 203, 85, 201, 28, 221, 108, 173, 147, 123, 186, 118, 184, 74, 81, 53, 248, 236, 158, 147, 124, 13, 157, 214, 0, 172, 145, 209, 213, 35, 80, 171, 73, 95, 5, 97, 106, 102, 130, 79, 95, 138, 48, 219, 248, 132, 82, 182, 14, 69, 12, 121, 214, 145, 85, 50, 40, 147, 79, 162, 80, 46, 196, 26, 65, 73, 199, 127, 155 } });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: 3,
                columns: new[] { "PasswordHash", "PasswordSalt" },
                values: new object[] { new byte[] { 34, 88, 25, 69, 237, 58, 221, 248, 71, 223, 31, 229, 77, 168, 46, 170, 225, 189, 223, 161, 36, 125, 255, 101, 91, 121, 234, 143, 163, 39, 196, 172, 197, 36, 151, 62, 42, 209, 85, 139, 141, 253, 137, 75, 81, 183, 185, 203, 126, 135, 176, 94, 75, 182, 202, 121, 80, 155, 117, 241, 54, 47, 229, 34 }, new byte[] { 221, 39, 44, 166, 150, 55, 252, 162, 197, 213, 152, 27, 209, 31, 49, 230, 171, 237, 50, 94, 53, 130, 224, 223, 144, 208, 90, 191, 8, 217, 1, 89, 133, 6, 255, 203, 173, 232, 123, 73, 13, 55, 20, 72, 48, 247, 20, 123, 60, 217, 106, 208, 56, 78, 255, 188, 230, 139, 173, 247, 203, 85, 201, 28, 221, 108, 173, 147, 123, 186, 118, 184, 74, 81, 53, 248, 236, 158, 147, 124, 13, 157, 214, 0, 172, 145, 209, 213, 35, 80, 171, 73, 95, 5, 97, 106, 102, 130, 79, 95, 138, 48, 219, 248, 132, 82, 182, 14, 69, 12, 121, 214, 145, 85, 50, 40, 147, 79, 162, 80, 46, 196, 26, 65, 73, 199, 127, 155 } });

            migrationBuilder.AddForeignKey(
                name: "FK_Consumers_Locations_LocationId",
                table: "Consumers",
                column: "LocationId",
                principalTable: "Locations",
                principalColumn: "LocationId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Incidents_Crews_CrewId",
                table: "Incidents",
                column: "CrewId",
                principalTable: "Crews",
                principalColumn: "CrewId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
