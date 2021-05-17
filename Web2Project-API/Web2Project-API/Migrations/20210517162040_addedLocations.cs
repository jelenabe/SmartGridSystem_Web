﻿using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Web2Project_API.Migrations
{
    public partial class addedLocations : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Locations",
                columns: new[] { "LocationId", "City", "Lat", "Lon", "PostNumber", "Priority", "Street" },
                values: new object[,]
                {
                    { 2, "Novi Sad", "122° 36' 52.5\"", "100° 26' 30\"", 21000, 1, "Balzakova 40" },
                    { 3, "Novi Sad", "45.238896", "19.833034", 21000, 2, "Narodnog Fronta 54" },
                    { 4, "Beograd", "44.796319", "20.486268", 11118, 3, "Jovana Rajica 7" }
                });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: 1,
                columns: new[] { "PasswordHash", "PasswordSalt" },
                values: new object[] { new byte[] { 160, 136, 104, 246, 166, 97, 91, 1, 51, 124, 211, 141, 64, 247, 194, 97, 157, 17, 225, 124, 163, 20, 151, 202, 136, 163, 148, 144, 251, 89, 58, 117, 151, 242, 213, 74, 89, 212, 78, 234, 210, 133, 36, 155, 252, 250, 44, 32, 48, 157, 214, 216, 127, 104, 252, 54, 72, 129, 136, 67, 36, 162, 127, 3 }, new byte[] { 254, 100, 199, 10, 34, 204, 87, 133, 103, 145, 129, 221, 76, 74, 79, 53, 141, 82, 235, 38, 221, 229, 46, 182, 131, 158, 50, 14, 56, 62, 209, 179, 142, 40, 143, 58, 15, 40, 111, 159, 104, 86, 144, 70, 215, 141, 6, 201, 121, 99, 195, 239, 165, 98, 49, 61, 158, 178, 164, 127, 14, 42, 152, 95, 239, 14, 98, 133, 14, 53, 15, 172, 128, 34, 15, 124, 251, 161, 227, 135, 75, 231, 49, 103, 196, 111, 57, 191, 226, 89, 23, 68, 19, 15, 85, 129, 49, 59, 219, 173, 21, 151, 75, 47, 19, 4, 35, 75, 29, 17, 30, 11, 158, 247, 79, 250, 100, 207, 202, 255, 83, 15, 18, 91, 201, 81, 55, 116 } });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: 2,
                columns: new[] { "PasswordHash", "PasswordSalt" },
                values: new object[] { new byte[] { 160, 136, 104, 246, 166, 97, 91, 1, 51, 124, 211, 141, 64, 247, 194, 97, 157, 17, 225, 124, 163, 20, 151, 202, 136, 163, 148, 144, 251, 89, 58, 117, 151, 242, 213, 74, 89, 212, 78, 234, 210, 133, 36, 155, 252, 250, 44, 32, 48, 157, 214, 216, 127, 104, 252, 54, 72, 129, 136, 67, 36, 162, 127, 3 }, new byte[] { 254, 100, 199, 10, 34, 204, 87, 133, 103, 145, 129, 221, 76, 74, 79, 53, 141, 82, 235, 38, 221, 229, 46, 182, 131, 158, 50, 14, 56, 62, 209, 179, 142, 40, 143, 58, 15, 40, 111, 159, 104, 86, 144, 70, 215, 141, 6, 201, 121, 99, 195, 239, 165, 98, 49, 61, 158, 178, 164, 127, 14, 42, 152, 95, 239, 14, 98, 133, 14, 53, 15, 172, 128, 34, 15, 124, 251, 161, 227, 135, 75, 231, 49, 103, 196, 111, 57, 191, 226, 89, 23, 68, 19, 15, 85, 129, 49, 59, 219, 173, 21, 151, 75, 47, 19, 4, 35, 75, 29, 17, 30, 11, 158, 247, 79, 250, 100, 207, 202, 255, 83, 15, 18, 91, 201, 81, 55, 116 } });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: 3,
                columns: new[] { "PasswordHash", "PasswordSalt" },
                values: new object[] { new byte[] { 160, 136, 104, 246, 166, 97, 91, 1, 51, 124, 211, 141, 64, 247, 194, 97, 157, 17, 225, 124, 163, 20, 151, 202, 136, 163, 148, 144, 251, 89, 58, 117, 151, 242, 213, 74, 89, 212, 78, 234, 210, 133, 36, 155, 252, 250, 44, 32, 48, 157, 214, 216, 127, 104, 252, 54, 72, 129, 136, 67, 36, 162, 127, 3 }, new byte[] { 254, 100, 199, 10, 34, 204, 87, 133, 103, 145, 129, 221, 76, 74, 79, 53, 141, 82, 235, 38, 221, 229, 46, 182, 131, 158, 50, 14, 56, 62, 209, 179, 142, 40, 143, 58, 15, 40, 111, 159, 104, 86, 144, 70, 215, 141, 6, 201, 121, 99, 195, 239, 165, 98, 49, 61, 158, 178, 164, 127, 14, 42, 152, 95, 239, 14, 98, 133, 14, 53, 15, 172, 128, 34, 15, 124, 251, 161, 227, 135, 75, 231, 49, 103, 196, 111, 57, 191, 226, 89, 23, 68, 19, 15, 85, 129, 49, 59, 219, 173, 21, 151, 75, 47, 19, 4, 35, 75, 29, 17, 30, 11, 158, 247, 79, 250, 100, 207, 202, 255, 83, 15, 18, 91, 201, 81, 55, 116 } });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Locations",
                keyColumn: "LocationId",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Locations",
                keyColumn: "LocationId",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Locations",
                keyColumn: "LocationId",
                keyValue: 4);

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: 1,
                columns: new[] { "PasswordHash", "PasswordSalt" },
                values: new object[] { new byte[] { 191, 226, 171, 228, 248, 69, 236, 252, 98, 128, 63, 43, 56, 72, 70, 214, 27, 31, 75, 83, 121, 134, 177, 147, 159, 205, 250, 103, 62, 118, 200, 184, 159, 202, 231, 19, 188, 119, 98, 73, 197, 27, 41, 151, 232, 76, 242, 4, 223, 186, 166, 246, 41, 219, 125, 201, 222, 67, 43, 185, 130, 96, 148, 34 }, new byte[] { 229, 8, 160, 54, 35, 129, 44, 134, 238, 13, 135, 45, 27, 10, 110, 3, 148, 72, 237, 249, 216, 158, 211, 238, 165, 221, 13, 143, 209, 212, 96, 244, 46, 160, 160, 235, 42, 36, 220, 253, 101, 212, 29, 119, 56, 215, 245, 196, 142, 73, 139, 141, 243, 211, 85, 201, 137, 69, 232, 101, 132, 105, 219, 238, 75, 117, 86, 185, 36, 97, 44, 150, 34, 101, 187, 13, 223, 155, 204, 63, 111, 18, 217, 155, 135, 64, 5, 159, 108, 123, 54, 32, 22, 126, 87, 112, 101, 172, 7, 68, 84, 47, 40, 139, 61, 132, 172, 233, 184, 182, 173, 10, 54, 199, 10, 227, 24, 195, 238, 118, 143, 64, 128, 236, 197, 139, 236, 245 } });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: 2,
                columns: new[] { "PasswordHash", "PasswordSalt" },
                values: new object[] { new byte[] { 191, 226, 171, 228, 248, 69, 236, 252, 98, 128, 63, 43, 56, 72, 70, 214, 27, 31, 75, 83, 121, 134, 177, 147, 159, 205, 250, 103, 62, 118, 200, 184, 159, 202, 231, 19, 188, 119, 98, 73, 197, 27, 41, 151, 232, 76, 242, 4, 223, 186, 166, 246, 41, 219, 125, 201, 222, 67, 43, 185, 130, 96, 148, 34 }, new byte[] { 229, 8, 160, 54, 35, 129, 44, 134, 238, 13, 135, 45, 27, 10, 110, 3, 148, 72, 237, 249, 216, 158, 211, 238, 165, 221, 13, 143, 209, 212, 96, 244, 46, 160, 160, 235, 42, 36, 220, 253, 101, 212, 29, 119, 56, 215, 245, 196, 142, 73, 139, 141, 243, 211, 85, 201, 137, 69, 232, 101, 132, 105, 219, 238, 75, 117, 86, 185, 36, 97, 44, 150, 34, 101, 187, 13, 223, 155, 204, 63, 111, 18, 217, 155, 135, 64, 5, 159, 108, 123, 54, 32, 22, 126, 87, 112, 101, 172, 7, 68, 84, 47, 40, 139, 61, 132, 172, 233, 184, 182, 173, 10, 54, 199, 10, 227, 24, 195, 238, 118, 143, 64, 128, 236, 197, 139, 236, 245 } });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: 3,
                columns: new[] { "PasswordHash", "PasswordSalt" },
                values: new object[] { new byte[] { 191, 226, 171, 228, 248, 69, 236, 252, 98, 128, 63, 43, 56, 72, 70, 214, 27, 31, 75, 83, 121, 134, 177, 147, 159, 205, 250, 103, 62, 118, 200, 184, 159, 202, 231, 19, 188, 119, 98, 73, 197, 27, 41, 151, 232, 76, 242, 4, 223, 186, 166, 246, 41, 219, 125, 201, 222, 67, 43, 185, 130, 96, 148, 34 }, new byte[] { 229, 8, 160, 54, 35, 129, 44, 134, 238, 13, 135, 45, 27, 10, 110, 3, 148, 72, 237, 249, 216, 158, 211, 238, 165, 221, 13, 143, 209, 212, 96, 244, 46, 160, 160, 235, 42, 36, 220, 253, 101, 212, 29, 119, 56, 215, 245, 196, 142, 73, 139, 141, 243, 211, 85, 201, 137, 69, 232, 101, 132, 105, 219, 238, 75, 117, 86, 185, 36, 97, 44, 150, 34, 101, 187, 13, 223, 155, 204, 63, 111, 18, 217, 155, 135, 64, 5, 159, 108, 123, 54, 32, 22, 126, 87, 112, 101, 172, 7, 68, 84, 47, 40, 139, 61, 132, 172, 233, 184, 182, 173, 10, 54, 199, 10, 227, 24, 195, 238, 118, 143, 64, 128, 236, 197, 139, 236, 245 } });
        }
    }
}
