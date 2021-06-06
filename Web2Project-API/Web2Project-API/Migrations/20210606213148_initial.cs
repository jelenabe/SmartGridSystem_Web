using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Web2Project_API.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AdminNotifications",
                columns: table => new
                {
                    NotificationId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Type = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Display = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AdminNotifications", x => x.NotificationId);
                });

            migrationBuilder.CreateTable(
                name: "Crews",
                columns: table => new
                {
                    CrewId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Crews", x => x.CrewId);
                });

            migrationBuilder.CreateTable(
                name: "FieldSettings",
                columns: table => new
                {
                    FieldId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Display = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FieldSettings", x => x.FieldId);
                });

            migrationBuilder.CreateTable(
                name: "Locations",
                columns: table => new
                {
                    LocationId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    City = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Street = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PostNumber = table.Column<int>(type: "int", nullable: false),
                    Lat = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Lon = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Priority = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Locations", x => x.LocationId);
                });

            migrationBuilder.CreateTable(
                name: "Notifications",
                columns: table => new
                {
                    NotificationId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Details = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Read = table.Column<bool>(type: "bit", nullable: false),
                    Type = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Notifications", x => x.NotificationId);
                });

            migrationBuilder.CreateTable(
                name: "Consumers",
                columns: table => new
                {
                    ConsumerId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    LocationId = table.Column<int>(type: "int", nullable: true),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Lastname = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Type = table.Column<int>(type: "int", nullable: false),
                    Phone = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Account_id = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Consumers", x => x.ConsumerId);
                    table.ForeignKey(
                        name: "FK_Consumers_Locations_LocationId",
                        column: x => x.LocationId,
                        principalTable: "Locations",
                        principalColumn: "LocationId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    UserId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PasswordHash = table.Column<byte[]>(type: "varbinary(max)", nullable: true),
                    PasswordSalt = table.Column<byte[]>(type: "varbinary(max)", nullable: true),
                    LocationId = table.Column<int>(type: "int", nullable: true),
                    CrewId = table.Column<int>(type: "int", nullable: true),
                    ConsumerId = table.Column<int>(type: "int", nullable: true),
                    Username = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Lastname = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Birthday = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Picture = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserType = table.Column<int>(type: "int", nullable: false),
                    Approved = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.UserId);
                    table.ForeignKey(
                        name: "FK_Users_Consumers_ConsumerId",
                        column: x => x.ConsumerId,
                        principalTable: "Consumers",
                        principalColumn: "ConsumerId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Users_Crews_CrewId",
                        column: x => x.CrewId,
                        principalTable: "Crews",
                        principalColumn: "CrewId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Users_Locations_LocationId",
                        column: x => x.LocationId,
                        principalTable: "Locations",
                        principalColumn: "LocationId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "WorkPlans",
                columns: table => new
                {
                    WorkPlanId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CreatedByUserId = table.Column<int>(type: "int", nullable: true),
                    CrewId = table.Column<int>(type: "int", nullable: true),
                    ChangedByUserId = table.Column<int>(type: "int", nullable: true),
                    LocationId = table.Column<int>(type: "int", nullable: true),
                    Company = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    StartDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    EndDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatedOn = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DateOfTheChange = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Details = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Equipmet = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    HistroyType = table.Column<int>(type: "int", nullable: false),
                    Instructions = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Notes = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Phone = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Pictures = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Purpose = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Status = table.Column<int>(type: "int", nullable: false),
                    Type = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WorkPlans", x => x.WorkPlanId);
                    table.ForeignKey(
                        name: "FK_WorkPlans_Crews_CrewId",
                        column: x => x.CrewId,
                        principalTable: "Crews",
                        principalColumn: "CrewId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_WorkPlans_Locations_LocationId",
                        column: x => x.LocationId,
                        principalTable: "Locations",
                        principalColumn: "LocationId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_WorkPlans_Users_ChangedByUserId",
                        column: x => x.ChangedByUserId,
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_WorkPlans_Users_CreatedByUserId",
                        column: x => x.CreatedByUserId,
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Incidents",
                columns: table => new
                {
                    IncidentId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IncidentType = table.Column<int>(type: "int", nullable: false),
                    Priority = table.Column<int>(type: "int", nullable: true),
                    Confirmed = table.Column<bool>(type: "bit", nullable: false),
                    IncidentStatus = table.Column<int>(type: "int", nullable: false),
                    ETA = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ATA = table.Column<DateTime>(type: "datetime2", nullable: true),
                    ETR = table.Column<DateTime>(type: "datetime2", nullable: false),
                    OutageTime = table.Column<DateTime>(type: "datetime2", nullable: true),
                    ScheduledTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    VoltageLevel = table.Column<double>(type: "float", nullable: true),
                    CallNumber = table.Column<int>(type: "int", nullable: true),
                    AffectedCustomers = table.Column<int>(type: "int", nullable: true),
                    Assigned = table.Column<bool>(type: "bit", nullable: true),
                    ResolutionCauses = table.Column<int>(type: "int", nullable: true),
                    ResolutionSubcauses = table.Column<int>(type: "int", nullable: true),
                    ResolutionConstructionTypes = table.Column<int>(type: "int", nullable: true),
                    ResolutionMaterials = table.Column<int>(type: "int", nullable: true),
                    UserId = table.Column<int>(type: "int", nullable: true),
                    CrewId = table.Column<int>(type: "int", nullable: true),
                    WorkPlanId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Incidents", x => x.IncidentId);
                    table.ForeignKey(
                        name: "FK_Incidents_Crews_CrewId",
                        column: x => x.CrewId,
                        principalTable: "Crews",
                        principalColumn: "CrewId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Incidents_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Incidents_WorkPlans_WorkPlanId",
                        column: x => x.WorkPlanId,
                        principalTable: "WorkPlans",
                        principalColumn: "WorkPlanId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "SafetyDocs",
                columns: table => new
                {
                    SafetyDocumentId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Details = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Notes = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    OperationCompleted = table.Column<bool>(type: "bit", nullable: false),
                    TagsRemoved = table.Column<bool>(type: "bit", nullable: false),
                    GroundingRemoved = table.Column<bool>(type: "bit", nullable: false),
                    ReadyForService = table.Column<bool>(type: "bit", nullable: false),
                    CreatedTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    SafetyDocType = table.Column<int>(type: "int", nullable: false),
                    DocumentStatus = table.Column<int>(type: "int", nullable: false),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    WorkPlanId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SafetyDocs", x => x.SafetyDocumentId);
                    table.ForeignKey(
                        name: "FK_SafetyDocs_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_SafetyDocs_WorkPlans_WorkPlanId",
                        column: x => x.WorkPlanId,
                        principalTable: "WorkPlans",
                        principalColumn: "WorkPlanId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Calls",
                columns: table => new
                {
                    CallId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ConsumerId = table.Column<int>(type: "int", nullable: true),
                    IncidentId = table.Column<int>(type: "int", nullable: true),
                    LocationId = table.Column<int>(type: "int", nullable: false),
                    Comment = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    HazardName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Reason = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Calls", x => x.CallId);
                    table.ForeignKey(
                        name: "FK_Calls_Consumers_ConsumerId",
                        column: x => x.ConsumerId,
                        principalTable: "Consumers",
                        principalColumn: "ConsumerId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Calls_Incidents_IncidentId",
                        column: x => x.IncidentId,
                        principalTable: "Incidents",
                        principalColumn: "IncidentId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Calls_Locations_LocationId",
                        column: x => x.LocationId,
                        principalTable: "Locations",
                        principalColumn: "LocationId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "MultimediaAttachmentIncident",
                columns: table => new
                {
                    MultimediaAttachmentId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Url = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IncidentId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MultimediaAttachmentIncident", x => x.MultimediaAttachmentId);
                    table.ForeignKey(
                        name: "FK_MultimediaAttachmentIncident_Incidents_IncidentId",
                        column: x => x.IncidentId,
                        principalTable: "Incidents",
                        principalColumn: "IncidentId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "WorkRequests",
                columns: table => new
                {
                    WorkRequestId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CreatedByUserId = table.Column<int>(type: "int", nullable: true),
                    ChangedByUserId = table.Column<int>(type: "int", nullable: true),
                    IncidentId = table.Column<int>(type: "int", nullable: true),
                    LocationId = table.Column<int>(type: "int", nullable: true),
                    WorkPlanId = table.Column<int>(type: "int", nullable: true),
                    Company = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CreatedOn = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DateOfTheChange = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Emergency = table.Column<bool>(type: "bit", nullable: false),
                    EndDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Equipment = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    HistoryType = table.Column<int>(type: "int", nullable: false),
                    Notes = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Phone = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Pictures = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Purpose = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    StartDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Type = table.Column<int>(type: "int", nullable: false),
                    Status = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WorkRequests", x => x.WorkRequestId);
                    table.ForeignKey(
                        name: "FK_WorkRequests_Incidents_IncidentId",
                        column: x => x.IncidentId,
                        principalTable: "Incidents",
                        principalColumn: "IncidentId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_WorkRequests_Locations_LocationId",
                        column: x => x.LocationId,
                        principalTable: "Locations",
                        principalColumn: "LocationId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_WorkRequests_Users_ChangedByUserId",
                        column: x => x.ChangedByUserId,
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_WorkRequests_Users_CreatedByUserId",
                        column: x => x.CreatedByUserId,
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_WorkRequests_WorkPlans_WorkPlanId",
                        column: x => x.WorkPlanId,
                        principalTable: "WorkPlans",
                        principalColumn: "WorkPlanId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Devices",
                columns: table => new
                {
                    DeviceId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Type = table.Column<int>(type: "int", nullable: false),
                    DeviceCounter = table.Column<int>(type: "int", nullable: false),
                    Timestamp = table.Column<DateTime>(type: "datetime2", nullable: false),
                    LocationId = table.Column<int>(type: "int", nullable: false),
                    IncidentId = table.Column<int>(type: "int", nullable: true),
                    SafetyDocumentId = table.Column<int>(type: "int", nullable: true),
                    WorkPlanId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Devices", x => x.DeviceId);
                    table.ForeignKey(
                        name: "FK_Devices_Incidents_IncidentId",
                        column: x => x.IncidentId,
                        principalTable: "Incidents",
                        principalColumn: "IncidentId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Devices_Locations_LocationId",
                        column: x => x.LocationId,
                        principalTable: "Locations",
                        principalColumn: "LocationId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Devices_SafetyDocs_SafetyDocumentId",
                        column: x => x.SafetyDocumentId,
                        principalTable: "SafetyDocs",
                        principalColumn: "SafetyDocumentId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Devices_WorkPlans_WorkPlanId",
                        column: x => x.WorkPlanId,
                        principalTable: "WorkPlans",
                        principalColumn: "WorkPlanId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "HistoryOfStateChanges",
                columns: table => new
                {
                    HistoryId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    State = table.Column<int>(type: "int", nullable: false),
                    Timestamp = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    SafetyDocumentId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HistoryOfStateChanges", x => x.HistoryId);
                    table.ForeignKey(
                        name: "FK_HistoryOfStateChanges_SafetyDocs_SafetyDocumentId",
                        column: x => x.SafetyDocumentId,
                        principalTable: "SafetyDocs",
                        principalColumn: "SafetyDocumentId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_HistoryOfStateChanges_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "MultimediaAttachmentSafetyDocument",
                columns: table => new
                {
                    MultimediaAttachmentSafetyDocumentId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Url = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SafetyDocumentId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MultimediaAttachmentSafetyDocument", x => x.MultimediaAttachmentSafetyDocumentId);
                    table.ForeignKey(
                        name: "FK_MultimediaAttachmentSafetyDocument_SafetyDocs_SafetyDocumentId",
                        column: x => x.SafetyDocumentId,
                        principalTable: "SafetyDocs",
                        principalColumn: "SafetyDocumentId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "AdminNotifications",
                columns: new[] { "NotificationId", "Display", "Type" },
                values: new object[,]
                {
                    { 1, true, "ERROR" },
                    { 2, true, "SUCCES" },
                    { 3, true, "INFO" },
                    { 4, true, "WARNING" }
                });

            migrationBuilder.InsertData(
                table: "FieldSettings",
                columns: new[] { "FieldId", "Display", "Name" },
                values: new object[] { 1, true, "Comment" });

            migrationBuilder.InsertData(
                table: "Locations",
                columns: new[] { "LocationId", "City", "Lat", "Lon", "PostNumber", "Priority", "Street" },
                values: new object[,]
                {
                    { 2, "Novi Sad", "122° 36' 52.5\"", "100° 26' 30\"", 21000, 1, "Balzakova 40" },
                    { 3, "Novi Sad", "45.238896", "19.833034", 21000, 2, "Narodnog Fronta 54" },
                    { 4, "Beograd", "44.796319", "20.486268", 11118, 3, "Jovana Rajica 7" },
                    { 5, "Novi Sad", "44.796319", "20.486268", 21000, 4, "Dalmatinska 4" },
                    { 6, "Novi Sad", "44.796319", "20.486268", 21000, 1, "Bulevar Evrope" }
                });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "UserId", "Approved", "Birthday", "ConsumerId", "CrewId", "Email", "Lastname", "LocationId", "Name", "PasswordHash", "PasswordSalt", "Picture", "UserType", "Username" },
                values: new object[] { 1, true, new DateTime(1998, 6, 17, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, "milan.momcilovic582@gmail.com", "Momcilovic", 2, "Milan", new byte[] { 92, 99, 225, 49, 250, 92, 254, 214, 147, 166, 153, 4, 102, 46, 52, 197, 114, 251, 106, 162, 190, 203, 74, 151, 186, 165, 136, 119, 209, 106, 122, 218, 67, 213, 130, 1, 32, 218, 69, 84, 195, 36, 37, 110, 168, 49, 172, 196, 165, 119, 153, 1, 91, 120, 78, 135, 173, 153, 122, 90, 90, 20, 55, 21 }, new byte[] { 78, 87, 127, 199, 51, 242, 9, 149, 94, 79, 122, 128, 155, 191, 80, 198, 169, 152, 70, 71, 41, 253, 54, 131, 198, 174, 161, 3, 193, 41, 185, 177, 169, 20, 158, 7, 214, 145, 209, 244, 17, 8, 44, 1, 21, 232, 47, 27, 44, 91, 210, 26, 173, 50, 128, 82, 86, 89, 171, 68, 72, 140, 48, 230, 191, 5, 246, 140, 153, 119, 245, 78, 109, 227, 204, 174, 255, 5, 15, 65, 228, 190, 125, 81, 210, 162, 34, 208, 162, 202, 214, 205, 178, 178, 76, 226, 251, 101, 33, 35, 196, 189, 187, 143, 179, 204, 110, 145, 226, 137, 186, 141, 119, 132, 2, 95, 181, 38, 82, 116, 203, 166, 224, 4, 242, 75, 244, 98 }, null, 3, "Admin1" });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "UserId", "Approved", "Birthday", "ConsumerId", "CrewId", "Email", "Lastname", "LocationId", "Name", "PasswordHash", "PasswordSalt", "Picture", "UserType", "Username" },
                values: new object[] { 2, true, new DateTime(1997, 12, 10, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, "milica.simeunovic97@gmail.com", "Simeunovic", 2, "Milica", new byte[] { 92, 99, 225, 49, 250, 92, 254, 214, 147, 166, 153, 4, 102, 46, 52, 197, 114, 251, 106, 162, 190, 203, 74, 151, 186, 165, 136, 119, 209, 106, 122, 218, 67, 213, 130, 1, 32, 218, 69, 84, 195, 36, 37, 110, 168, 49, 172, 196, 165, 119, 153, 1, 91, 120, 78, 135, 173, 153, 122, 90, 90, 20, 55, 21 }, new byte[] { 78, 87, 127, 199, 51, 242, 9, 149, 94, 79, 122, 128, 155, 191, 80, 198, 169, 152, 70, 71, 41, 253, 54, 131, 198, 174, 161, 3, 193, 41, 185, 177, 169, 20, 158, 7, 214, 145, 209, 244, 17, 8, 44, 1, 21, 232, 47, 27, 44, 91, 210, 26, 173, 50, 128, 82, 86, 89, 171, 68, 72, 140, 48, 230, 191, 5, 246, 140, 153, 119, 245, 78, 109, 227, 204, 174, 255, 5, 15, 65, 228, 190, 125, 81, 210, 162, 34, 208, 162, 202, 214, 205, 178, 178, 76, 226, 251, 101, 33, 35, 196, 189, 187, 143, 179, 204, 110, 145, 226, 137, 186, 141, 119, 132, 2, 95, 181, 38, 82, 116, 203, 166, 224, 4, 242, 75, 244, 98 }, null, 3, "Admin1" });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "UserId", "Approved", "Birthday", "ConsumerId", "CrewId", "Email", "Lastname", "LocationId", "Name", "PasswordHash", "PasswordSalt", "Picture", "UserType", "Username" },
                values: new object[] { 3, true, new DateTime(1998, 6, 17, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, "jelena.beader@gmail.com", "Beader", 3, "Jelena", new byte[] { 92, 99, 225, 49, 250, 92, 254, 214, 147, 166, 153, 4, 102, 46, 52, 197, 114, 251, 106, 162, 190, 203, 74, 151, 186, 165, 136, 119, 209, 106, 122, 218, 67, 213, 130, 1, 32, 218, 69, 84, 195, 36, 37, 110, 168, 49, 172, 196, 165, 119, 153, 1, 91, 120, 78, 135, 173, 153, 122, 90, 90, 20, 55, 21 }, new byte[] { 78, 87, 127, 199, 51, 242, 9, 149, 94, 79, 122, 128, 155, 191, 80, 198, 169, 152, 70, 71, 41, 253, 54, 131, 198, 174, 161, 3, 193, 41, 185, 177, 169, 20, 158, 7, 214, 145, 209, 244, 17, 8, 44, 1, 21, 232, 47, 27, 44, 91, 210, 26, 173, 50, 128, 82, 86, 89, 171, 68, 72, 140, 48, 230, 191, 5, 246, 140, 153, 119, 245, 78, 109, 227, 204, 174, 255, 5, 15, 65, 228, 190, 125, 81, 210, 162, 34, 208, 162, 202, 214, 205, 178, 178, 76, 226, 251, 101, 33, 35, 196, 189, 187, 143, 179, 204, 110, 145, 226, 137, 186, 141, 119, 132, 2, 95, 181, 38, 82, 116, 203, 166, 224, 4, 242, 75, 244, 98 }, null, 3, "Admin1" });

            migrationBuilder.CreateIndex(
                name: "IX_Calls_ConsumerId",
                table: "Calls",
                column: "ConsumerId");

            migrationBuilder.CreateIndex(
                name: "IX_Calls_IncidentId",
                table: "Calls",
                column: "IncidentId");

            migrationBuilder.CreateIndex(
                name: "IX_Calls_LocationId",
                table: "Calls",
                column: "LocationId");

            migrationBuilder.CreateIndex(
                name: "IX_Consumers_LocationId",
                table: "Consumers",
                column: "LocationId");

            migrationBuilder.CreateIndex(
                name: "IX_Devices_IncidentId",
                table: "Devices",
                column: "IncidentId");

            migrationBuilder.CreateIndex(
                name: "IX_Devices_LocationId",
                table: "Devices",
                column: "LocationId");

            migrationBuilder.CreateIndex(
                name: "IX_Devices_SafetyDocumentId",
                table: "Devices",
                column: "SafetyDocumentId");

            migrationBuilder.CreateIndex(
                name: "IX_Devices_WorkPlanId",
                table: "Devices",
                column: "WorkPlanId");

            migrationBuilder.CreateIndex(
                name: "IX_HistoryOfStateChanges_SafetyDocumentId",
                table: "HistoryOfStateChanges",
                column: "SafetyDocumentId");

            migrationBuilder.CreateIndex(
                name: "IX_HistoryOfStateChanges_UserId",
                table: "HistoryOfStateChanges",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Incidents_CrewId",
                table: "Incidents",
                column: "CrewId");

            migrationBuilder.CreateIndex(
                name: "IX_Incidents_UserId",
                table: "Incidents",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Incidents_WorkPlanId",
                table: "Incidents",
                column: "WorkPlanId",
                unique: true,
                filter: "[WorkPlanId] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_MultimediaAttachmentIncident_IncidentId",
                table: "MultimediaAttachmentIncident",
                column: "IncidentId");

            migrationBuilder.CreateIndex(
                name: "IX_MultimediaAttachmentSafetyDocument_SafetyDocumentId",
                table: "MultimediaAttachmentSafetyDocument",
                column: "SafetyDocumentId");

            migrationBuilder.CreateIndex(
                name: "IX_SafetyDocs_UserId",
                table: "SafetyDocs",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_SafetyDocs_WorkPlanId",
                table: "SafetyDocs",
                column: "WorkPlanId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Users_ConsumerId",
                table: "Users",
                column: "ConsumerId",
                unique: true,
                filter: "[ConsumerId] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_Users_CrewId",
                table: "Users",
                column: "CrewId");

            migrationBuilder.CreateIndex(
                name: "IX_Users_LocationId",
                table: "Users",
                column: "LocationId");

            migrationBuilder.CreateIndex(
                name: "IX_WorkPlans_ChangedByUserId",
                table: "WorkPlans",
                column: "ChangedByUserId");

            migrationBuilder.CreateIndex(
                name: "IX_WorkPlans_CreatedByUserId",
                table: "WorkPlans",
                column: "CreatedByUserId");

            migrationBuilder.CreateIndex(
                name: "IX_WorkPlans_CrewId",
                table: "WorkPlans",
                column: "CrewId");

            migrationBuilder.CreateIndex(
                name: "IX_WorkPlans_LocationId",
                table: "WorkPlans",
                column: "LocationId");

            migrationBuilder.CreateIndex(
                name: "IX_WorkRequests_ChangedByUserId",
                table: "WorkRequests",
                column: "ChangedByUserId");

            migrationBuilder.CreateIndex(
                name: "IX_WorkRequests_CreatedByUserId",
                table: "WorkRequests",
                column: "CreatedByUserId");

            migrationBuilder.CreateIndex(
                name: "IX_WorkRequests_IncidentId",
                table: "WorkRequests",
                column: "IncidentId",
                unique: true,
                filter: "[IncidentId] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_WorkRequests_LocationId",
                table: "WorkRequests",
                column: "LocationId");

            migrationBuilder.CreateIndex(
                name: "IX_WorkRequests_WorkPlanId",
                table: "WorkRequests",
                column: "WorkPlanId",
                unique: true,
                filter: "[WorkPlanId] IS NOT NULL");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AdminNotifications");

            migrationBuilder.DropTable(
                name: "Calls");

            migrationBuilder.DropTable(
                name: "Devices");

            migrationBuilder.DropTable(
                name: "FieldSettings");

            migrationBuilder.DropTable(
                name: "HistoryOfStateChanges");

            migrationBuilder.DropTable(
                name: "MultimediaAttachmentIncident");

            migrationBuilder.DropTable(
                name: "MultimediaAttachmentSafetyDocument");

            migrationBuilder.DropTable(
                name: "Notifications");

            migrationBuilder.DropTable(
                name: "WorkRequests");

            migrationBuilder.DropTable(
                name: "SafetyDocs");

            migrationBuilder.DropTable(
                name: "Incidents");

            migrationBuilder.DropTable(
                name: "WorkPlans");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "Consumers");

            migrationBuilder.DropTable(
                name: "Crews");

            migrationBuilder.DropTable(
                name: "Locations");
        }
    }
}
