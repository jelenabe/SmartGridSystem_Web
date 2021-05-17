﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Web2Project_API.DbConfigurations;

namespace Web2Project_API.Migrations
{
    [DbContext(typeof(ModelDbContext))]
    partial class ModelDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.5")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Web2Project_API.Models.Call", b =>
                {
                    b.Property<int>("CallId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Comment")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("ConsumerId")
                        .HasColumnType("int");

                    b.Property<string>("HazardName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("IncidentId")
                        .HasColumnType("int");

                    b.Property<int>("LocationId")
                        .HasColumnType("int");

                    b.Property<int>("Reason")
                        .HasColumnType("int");

                    b.HasKey("CallId");

                    b.HasIndex("ConsumerId");

                    b.HasIndex("IncidentId");

                    b.HasIndex("LocationId");

                    b.ToTable("Calls");
                });

            modelBuilder.Entity("Web2Project_API.Models.Consumer", b =>
                {
                    b.Property<int>("ConsumerId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Account_id")
                        .HasColumnType("int");

                    b.Property<string>("Lastname")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("LocationId")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Phone")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Type")
                        .HasColumnType("int");

                    b.HasKey("ConsumerId");

                    b.HasIndex("LocationId");

                    b.ToTable("Consumers");
                });

            modelBuilder.Entity("Web2Project_API.Models.Crew", b =>
                {
                    b.Property<int>("CrewId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("CrewId");

                    b.ToTable("Crews");
                });

            modelBuilder.Entity("Web2Project_API.Models.Device", b =>
                {
                    b.Property<int>("DeviceId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("DeviceCounter")
                        .HasColumnType("int");

                    b.Property<int?>("IncidentId")
                        .HasColumnType("int");

                    b.Property<int>("LocationId")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("SafetyDocumentId")
                        .HasColumnType("int");

                    b.Property<int>("Type")
                        .HasColumnType("int");

                    b.Property<int?>("WorkPlanId")
                        .HasColumnType("int");

                    b.HasKey("DeviceId");

                    b.HasIndex("IncidentId");

                    b.HasIndex("LocationId");

                    b.HasIndex("SafetyDocumentId");

                    b.HasIndex("WorkPlanId");

                    b.ToTable("Devices");
                });

            modelBuilder.Entity("Web2Project_API.Models.HistoryOfStateChanges", b =>
                {
                    b.Property<int>("HistoryId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("SafetyDocumentId")
                        .HasColumnType("int");

                    b.Property<int>("State")
                        .HasColumnType("int");

                    b.Property<DateTime>("Timestamp")
                        .HasColumnType("datetime2");

                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.HasKey("HistoryId");

                    b.HasIndex("SafetyDocumentId");

                    b.HasIndex("UserId");

                    b.ToTable("HistoryOfStateChanges");
                });

            modelBuilder.Entity("Web2Project_API.Models.Incident", b =>
                {
                    b.Property<int>("IncidentId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime?>("ATA")
                        .HasColumnType("datetime2");

                    b.Property<int?>("AffectedCustomers")
                        .HasColumnType("int");

                    b.Property<bool?>("Assigned")
                        .HasColumnType("bit");

                    b.Property<int?>("CallNumber")
                        .HasColumnType("int");

                    b.Property<bool>("Confirmed")
                        .HasColumnType("bit");

                    b.Property<int>("CrewId")
                        .HasColumnType("int");

                    b.Property<DateTime>("ETA")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("ETR")
                        .HasColumnType("datetime2");

                    b.Property<int>("IncidentStatus")
                        .HasColumnType("int");

                    b.Property<int>("IncidentType")
                        .HasColumnType("int");

                    b.Property<DateTime?>("OutageTime")
                        .HasColumnType("datetime2");

                    b.Property<int?>("Priority")
                        .HasColumnType("int");

                    b.Property<int>("ResolutionCauses")
                        .HasColumnType("int");

                    b.Property<int>("ResolutionConstructionTypes")
                        .HasColumnType("int");

                    b.Property<int>("ResolutionMaterials")
                        .HasColumnType("int");

                    b.Property<int>("ResolutionSubcauses")
                        .HasColumnType("int");

                    b.Property<DateTime>("ScheduedTime")
                        .HasColumnType("datetime2");

                    b.Property<int?>("UserId")
                        .HasColumnType("int");

                    b.Property<double?>("VoltageLevel")
                        .HasColumnType("float");

                    b.Property<int?>("WorkPlanId")
                        .HasColumnType("int");

                    b.HasKey("IncidentId");

                    b.HasIndex("CrewId");

                    b.HasIndex("UserId");

                    b.HasIndex("WorkPlanId")
                        .IsUnique()
                        .HasFilter("[WorkPlanId] IS NOT NULL");

                    b.ToTable("Incidents");
                });

            modelBuilder.Entity("Web2Project_API.Models.Location", b =>
                {
                    b.Property<int>("LocationId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("City")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Lat")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Lon")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("PostNumber")
                        .HasColumnType("int");

                    b.Property<int>("Priority")
                        .HasColumnType("int");

                    b.Property<string>("Street")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("LocationId");

                    b.ToTable("Locations");

                    b.HasData(
                        new
                        {
                            LocationId = 2,
                            City = "Novi Sad",
                            Lat = "122° 36' 52.5\"",
                            Lon = "100° 26' 30\"",
                            PostNumber = 21000,
                            Priority = 1,
                            Street = "Balzakova 40"
                        },
                        new
                        {
                            LocationId = 3,
                            City = "Novi Sad",
                            Lat = "45.238896",
                            Lon = "19.833034",
                            PostNumber = 21000,
                            Priority = 2,
                            Street = "Narodnog Fronta 54"
                        },
                        new
                        {
                            LocationId = 4,
                            City = "Beograd",
                            Lat = "44.796319",
                            Lon = "20.486268",
                            PostNumber = 11118,
                            Priority = 3,
                            Street = "Jovana Rajica 7"
                        });
                });

            modelBuilder.Entity("Web2Project_API.Models.MultimediaAttachmentIncident", b =>
                {
                    b.Property<int>("MultimediaAttachmentId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("IncidentId")
                        .HasColumnType("int");

                    b.Property<string>("Url")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("MultimediaAttachmentId");

                    b.HasIndex("IncidentId");

                    b.ToTable("MultimediaAttachmentIncident");
                });

            modelBuilder.Entity("Web2Project_API.Models.MultimediaAttachmentSafetyDocument", b =>
                {
                    b.Property<int>("MultimediaAttachmentSafetyDocumentId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("SafetyDocumentId")
                        .HasColumnType("int");

                    b.Property<string>("Url")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("MultimediaAttachmentSafetyDocumentId");

                    b.HasIndex("SafetyDocumentId");

                    b.ToTable("MultimediaAttachmentSafetyDocument");
                });

            modelBuilder.Entity("Web2Project_API.Models.Notification", b =>
                {
                    b.Property<int>("NotificationId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("Date")
                        .HasColumnType("datetime2");

                    b.Property<string>("Details")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("Read")
                        .HasColumnType("bit");

                    b.Property<int>("Type")
                        .HasColumnType("int");

                    b.HasKey("NotificationId");

                    b.ToTable("Notifications");
                });

            modelBuilder.Entity("Web2Project_API.Models.SafetyDocument", b =>
                {
                    b.Property<int>("SafetyDocumentId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("CreatedTime")
                        .HasColumnType("datetime2");

                    b.Property<string>("Details")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("DocumentStatus")
                        .HasColumnType("int");

                    b.Property<bool>("GroundingRemoved")
                        .HasColumnType("bit");

                    b.Property<string>("Notes")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("OperationCompleted")
                        .HasColumnType("bit");

                    b.Property<bool>("ReadyForService")
                        .HasColumnType("bit");

                    b.Property<int>("SafetyDocType")
                        .HasColumnType("int");

                    b.Property<bool>("TagsRemoved")
                        .HasColumnType("bit");

                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.Property<int>("WorkPlanId")
                        .HasColumnType("int");

                    b.HasKey("SafetyDocumentId");

                    b.HasIndex("UserId");

                    b.HasIndex("WorkPlanId")
                        .IsUnique();

                    b.ToTable("SafetyDocs");
                });

            modelBuilder.Entity("Web2Project_API.Models.User", b =>
                {
                    b.Property<int>("UserId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("Approved")
                        .HasColumnType("bit");

                    b.Property<DateTime>("Birthday")
                        .HasColumnType("datetime2");

                    b.Property<int?>("ConsumerId")
                        .HasColumnType("int");

                    b.Property<int?>("CrewId")
                        .HasColumnType("int");

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Lastname")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("LocationId")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<byte[]>("PasswordHash")
                        .HasColumnType("varbinary(max)");

                    b.Property<byte[]>("PasswordSalt")
                        .HasColumnType("varbinary(max)");

                    b.Property<string>("Picture")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("UserType")
                        .HasColumnType("int");

                    b.Property<string>("Username")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("UserId");

                    b.HasIndex("ConsumerId")
                        .IsUnique()
                        .HasFilter("[ConsumerId] IS NOT NULL");

                    b.HasIndex("CrewId");

                    b.HasIndex("LocationId");

                    b.ToTable("Users");

                    b.HasData(
                        new
                        {
                            UserId = 1,
                            Approved = false,
                            Birthday = new DateTime(1998, 6, 17, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Email = "milan.momcilovic582@gmail.com",
                            Lastname = "Momcilovic",
                            Name = "Milan",
                            PasswordHash = new byte[] { 34, 88, 25, 69, 237, 58, 221, 248, 71, 223, 31, 229, 77, 168, 46, 170, 225, 189, 223, 161, 36, 125, 255, 101, 91, 121, 234, 143, 163, 39, 196, 172, 197, 36, 151, 62, 42, 209, 85, 139, 141, 253, 137, 75, 81, 183, 185, 203, 126, 135, 176, 94, 75, 182, 202, 121, 80, 155, 117, 241, 54, 47, 229, 34 },
                            PasswordSalt = new byte[] { 221, 39, 44, 166, 150, 55, 252, 162, 197, 213, 152, 27, 209, 31, 49, 230, 171, 237, 50, 94, 53, 130, 224, 223, 144, 208, 90, 191, 8, 217, 1, 89, 133, 6, 255, 203, 173, 232, 123, 73, 13, 55, 20, 72, 48, 247, 20, 123, 60, 217, 106, 208, 56, 78, 255, 188, 230, 139, 173, 247, 203, 85, 201, 28, 221, 108, 173, 147, 123, 186, 118, 184, 74, 81, 53, 248, 236, 158, 147, 124, 13, 157, 214, 0, 172, 145, 209, 213, 35, 80, 171, 73, 95, 5, 97, 106, 102, 130, 79, 95, 138, 48, 219, 248, 132, 82, 182, 14, 69, 12, 121, 214, 145, 85, 50, 40, 147, 79, 162, 80, 46, 196, 26, 65, 73, 199, 127, 155 },
                            UserType = 3,
                            Username = "Admin1"
                        },
                        new
                        {
                            UserId = 2,
                            Approved = false,
                            Birthday = new DateTime(1997, 12, 10, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Email = "milica.simeunovic97@gmail.com",
                            Lastname = "Simeunovic",
                            Name = "Milica",
                            PasswordHash = new byte[] { 34, 88, 25, 69, 237, 58, 221, 248, 71, 223, 31, 229, 77, 168, 46, 170, 225, 189, 223, 161, 36, 125, 255, 101, 91, 121, 234, 143, 163, 39, 196, 172, 197, 36, 151, 62, 42, 209, 85, 139, 141, 253, 137, 75, 81, 183, 185, 203, 126, 135, 176, 94, 75, 182, 202, 121, 80, 155, 117, 241, 54, 47, 229, 34 },
                            PasswordSalt = new byte[] { 221, 39, 44, 166, 150, 55, 252, 162, 197, 213, 152, 27, 209, 31, 49, 230, 171, 237, 50, 94, 53, 130, 224, 223, 144, 208, 90, 191, 8, 217, 1, 89, 133, 6, 255, 203, 173, 232, 123, 73, 13, 55, 20, 72, 48, 247, 20, 123, 60, 217, 106, 208, 56, 78, 255, 188, 230, 139, 173, 247, 203, 85, 201, 28, 221, 108, 173, 147, 123, 186, 118, 184, 74, 81, 53, 248, 236, 158, 147, 124, 13, 157, 214, 0, 172, 145, 209, 213, 35, 80, 171, 73, 95, 5, 97, 106, 102, 130, 79, 95, 138, 48, 219, 248, 132, 82, 182, 14, 69, 12, 121, 214, 145, 85, 50, 40, 147, 79, 162, 80, 46, 196, 26, 65, 73, 199, 127, 155 },
                            UserType = 3,
                            Username = "Admin1"
                        },
                        new
                        {
                            UserId = 3,
                            Approved = false,
                            Birthday = new DateTime(1998, 6, 17, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Email = "jelena.beader@gmail.com",
                            Lastname = "Beader",
                            Name = "Jelena",
                            PasswordHash = new byte[] { 34, 88, 25, 69, 237, 58, 221, 248, 71, 223, 31, 229, 77, 168, 46, 170, 225, 189, 223, 161, 36, 125, 255, 101, 91, 121, 234, 143, 163, 39, 196, 172, 197, 36, 151, 62, 42, 209, 85, 139, 141, 253, 137, 75, 81, 183, 185, 203, 126, 135, 176, 94, 75, 182, 202, 121, 80, 155, 117, 241, 54, 47, 229, 34 },
                            PasswordSalt = new byte[] { 221, 39, 44, 166, 150, 55, 252, 162, 197, 213, 152, 27, 209, 31, 49, 230, 171, 237, 50, 94, 53, 130, 224, 223, 144, 208, 90, 191, 8, 217, 1, 89, 133, 6, 255, 203, 173, 232, 123, 73, 13, 55, 20, 72, 48, 247, 20, 123, 60, 217, 106, 208, 56, 78, 255, 188, 230, 139, 173, 247, 203, 85, 201, 28, 221, 108, 173, 147, 123, 186, 118, 184, 74, 81, 53, 248, 236, 158, 147, 124, 13, 157, 214, 0, 172, 145, 209, 213, 35, 80, 171, 73, 95, 5, 97, 106, 102, 130, 79, 95, 138, 48, 219, 248, 132, 82, 182, 14, 69, 12, 121, 214, 145, 85, 50, 40, 147, 79, 162, 80, 46, 196, 26, 65, 73, 199, 127, 155 },
                            UserType = 3,
                            Username = "Admin1"
                        });
                });

            modelBuilder.Entity("Web2Project_API.Models.WorkPlan", b =>
                {
                    b.Property<int>("WorkPlanId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("ChangedByUserId")
                        .HasColumnType("int");

                    b.Property<string>("Company")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("CreatedByUserId")
                        .HasColumnType("int");

                    b.Property<DateTime>("CreatedOn")
                        .HasColumnType("datetime2");

                    b.Property<int?>("CrewId")
                        .HasColumnType("int");

                    b.Property<DateTime>("DateOfTheChange")
                        .HasColumnType("datetime2");

                    b.Property<string>("Details")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("EndDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("Equipmet")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("HistroyType")
                        .HasColumnType("int");

                    b.Property<string>("Instructions")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("LocationId")
                        .HasColumnType("int");

                    b.Property<string>("Notes")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Phone")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Pictures")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Purpose")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("StartDate")
                        .HasColumnType("datetime2");

                    b.Property<int>("Status")
                        .HasColumnType("int");

                    b.Property<int>("Type")
                        .HasColumnType("int");

                    b.HasKey("WorkPlanId");

                    b.HasIndex("ChangedByUserId");

                    b.HasIndex("CreatedByUserId");

                    b.HasIndex("CrewId");

                    b.HasIndex("LocationId");

                    b.ToTable("WorkPlans");
                });

            modelBuilder.Entity("Web2Project_API.Models.WorkRequest", b =>
                {
                    b.Property<int>("WorkRequestId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("ChangedByUserId")
                        .HasColumnType("int");

                    b.Property<string>("Company")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("CreatedByUserId")
                        .HasColumnType("int");

                    b.Property<DateTime>("CreatedOn")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("DateOfTheChange")
                        .HasColumnType("datetime2");

                    b.Property<bool>("Emergency")
                        .HasColumnType("bit");

                    b.Property<DateTime>("EndDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("Equipment")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("HistoryType")
                        .HasColumnType("int");

                    b.Property<int?>("IncidentId")
                        .HasColumnType("int");

                    b.Property<int?>("LocationId")
                        .HasColumnType("int");

                    b.Property<string>("Notes")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Phone")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Pictures")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Purpose")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("StartDate")
                        .HasColumnType("datetime2");

                    b.Property<int>("Status")
                        .HasColumnType("int");

                    b.Property<int>("Type")
                        .HasColumnType("int");

                    b.Property<int?>("WorkPlanId")
                        .HasColumnType("int");

                    b.HasKey("WorkRequestId");

                    b.HasIndex("ChangedByUserId");

                    b.HasIndex("CreatedByUserId");

                    b.HasIndex("IncidentId")
                        .IsUnique()
                        .HasFilter("[IncidentId] IS NOT NULL");

                    b.HasIndex("LocationId");

                    b.HasIndex("WorkPlanId")
                        .IsUnique()
                        .HasFilter("[WorkPlanId] IS NOT NULL");

                    b.ToTable("WorkRequests");
                });

            modelBuilder.Entity("Web2Project_API.Models.Call", b =>
                {
                    b.HasOne("Web2Project_API.Models.Consumer", "Consumer")
                        .WithMany("Calls")
                        .HasForeignKey("ConsumerId");

                    b.HasOne("Web2Project_API.Models.Incident", "Incident")
                        .WithMany("Calls")
                        .HasForeignKey("IncidentId");

                    b.HasOne("Web2Project_API.Models.Location", "Location")
                        .WithMany("Calls")
                        .HasForeignKey("LocationId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Consumer");

                    b.Navigation("Incident");

                    b.Navigation("Location");
                });

            modelBuilder.Entity("Web2Project_API.Models.Consumer", b =>
                {
                    b.HasOne("Web2Project_API.Models.Location", "Location")
                        .WithMany("Consumers")
                        .HasForeignKey("LocationId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Location");
                });

            modelBuilder.Entity("Web2Project_API.Models.Device", b =>
                {
                    b.HasOne("Web2Project_API.Models.Incident", "Incident")
                        .WithMany("Devices")
                        .HasForeignKey("IncidentId");

                    b.HasOne("Web2Project_API.Models.Location", "Location")
                        .WithMany("Devices")
                        .HasForeignKey("LocationId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Web2Project_API.Models.SafetyDocument", "SafetyDocument")
                        .WithMany("Devices")
                        .HasForeignKey("SafetyDocumentId");

                    b.HasOne("Web2Project_API.Models.WorkPlan", "WorkPlan")
                        .WithMany("Devices")
                        .HasForeignKey("WorkPlanId");

                    b.Navigation("Incident");

                    b.Navigation("Location");

                    b.Navigation("SafetyDocument");

                    b.Navigation("WorkPlan");
                });

            modelBuilder.Entity("Web2Project_API.Models.HistoryOfStateChanges", b =>
                {
                    b.HasOne("Web2Project_API.Models.SafetyDocument", "SafetyDocument")
                        .WithMany("HistoryOfStateChanges")
                        .HasForeignKey("SafetyDocumentId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.HasOne("Web2Project_API.Models.User", "User")
                        .WithMany("HistoryOfStateChanges")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.Navigation("SafetyDocument");

                    b.Navigation("User");
                });

            modelBuilder.Entity("Web2Project_API.Models.Incident", b =>
                {
                    b.HasOne("Web2Project_API.Models.Crew", "Crew")
                        .WithMany("Incidents")
                        .HasForeignKey("CrewId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Web2Project_API.Models.User", "User")
                        .WithMany("Incidents")
                        .HasForeignKey("UserId");

                    b.HasOne("Web2Project_API.Models.WorkPlan", "WorkPlan")
                        .WithOne("Incident")
                        .HasForeignKey("Web2Project_API.Models.Incident", "WorkPlanId");

                    b.Navigation("Crew");

                    b.Navigation("User");

                    b.Navigation("WorkPlan");
                });

            modelBuilder.Entity("Web2Project_API.Models.MultimediaAttachmentIncident", b =>
                {
                    b.HasOne("Web2Project_API.Models.Incident", "Incident")
                        .WithMany("MultimediaAttachmentIncidents")
                        .HasForeignKey("IncidentId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Incident");
                });

            modelBuilder.Entity("Web2Project_API.Models.MultimediaAttachmentSafetyDocument", b =>
                {
                    b.HasOne("Web2Project_API.Models.SafetyDocument", "SafetyDocument")
                        .WithMany("MultimediaAttachmentSafetyDocuments")
                        .HasForeignKey("SafetyDocumentId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("SafetyDocument");
                });

            modelBuilder.Entity("Web2Project_API.Models.SafetyDocument", b =>
                {
                    b.HasOne("Web2Project_API.Models.User", "User")
                        .WithMany("SafetyDocuments")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Web2Project_API.Models.WorkPlan", "WorkPlan")
                        .WithOne("SafetyDoc")
                        .HasForeignKey("Web2Project_API.Models.SafetyDocument", "WorkPlanId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");

                    b.Navigation("WorkPlan");
                });

            modelBuilder.Entity("Web2Project_API.Models.User", b =>
                {
                    b.HasOne("Web2Project_API.Models.Consumer", "Consumer")
                        .WithOne("User")
                        .HasForeignKey("Web2Project_API.Models.User", "ConsumerId");

                    b.HasOne("Web2Project_API.Models.Crew", "Crew")
                        .WithMany("Users")
                        .HasForeignKey("CrewId");

                    b.HasOne("Web2Project_API.Models.Location", "Location")
                        .WithMany("Users")
                        .HasForeignKey("LocationId")
                        .OnDelete(DeleteBehavior.Restrict);

                    b.Navigation("Consumer");

                    b.Navigation("Crew");

                    b.Navigation("Location");
                });

            modelBuilder.Entity("Web2Project_API.Models.WorkPlan", b =>
                {
                    b.HasOne("Web2Project_API.Models.User", "ChangedByUser")
                        .WithMany("ChangedWorkPlans")
                        .HasForeignKey("ChangedByUserId");

                    b.HasOne("Web2Project_API.Models.User", "CreatedByUser")
                        .WithMany("CreatedWorkPlans")
                        .HasForeignKey("CreatedByUserId");

                    b.HasOne("Web2Project_API.Models.Crew", "Crew")
                        .WithMany("WorkPlans")
                        .HasForeignKey("CrewId");

                    b.HasOne("Web2Project_API.Models.Location", "Location")
                        .WithMany("WorkPlans")
                        .HasForeignKey("LocationId");

                    b.Navigation("ChangedByUser");

                    b.Navigation("CreatedByUser");

                    b.Navigation("Crew");

                    b.Navigation("Location");
                });

            modelBuilder.Entity("Web2Project_API.Models.WorkRequest", b =>
                {
                    b.HasOne("Web2Project_API.Models.User", "ChangedByUser")
                        .WithMany("ChangedWorkRequest")
                        .HasForeignKey("ChangedByUserId");

                    b.HasOne("Web2Project_API.Models.User", "CreatedByUser")
                        .WithMany("CreatedWorkRequest")
                        .HasForeignKey("CreatedByUserId");

                    b.HasOne("Web2Project_API.Models.Incident", "Incident")
                        .WithOne("WorkRequest")
                        .HasForeignKey("Web2Project_API.Models.WorkRequest", "IncidentId");

                    b.HasOne("Web2Project_API.Models.Location", "Location")
                        .WithMany("WorkRequests")
                        .HasForeignKey("LocationId");

                    b.HasOne("Web2Project_API.Models.WorkPlan", "WorkPlan")
                        .WithOne("WorkRequest")
                        .HasForeignKey("Web2Project_API.Models.WorkRequest", "WorkPlanId");

                    b.Navigation("ChangedByUser");

                    b.Navigation("CreatedByUser");

                    b.Navigation("Incident");

                    b.Navigation("Location");

                    b.Navigation("WorkPlan");
                });

            modelBuilder.Entity("Web2Project_API.Models.Consumer", b =>
                {
                    b.Navigation("Calls");

                    b.Navigation("User");
                });

            modelBuilder.Entity("Web2Project_API.Models.Crew", b =>
                {
                    b.Navigation("Incidents");

                    b.Navigation("Users");

                    b.Navigation("WorkPlans");
                });

            modelBuilder.Entity("Web2Project_API.Models.Incident", b =>
                {
                    b.Navigation("Calls");

                    b.Navigation("Devices");

                    b.Navigation("MultimediaAttachmentIncidents");

                    b.Navigation("WorkRequest");
                });

            modelBuilder.Entity("Web2Project_API.Models.Location", b =>
                {
                    b.Navigation("Calls");

                    b.Navigation("Consumers");

                    b.Navigation("Devices");

                    b.Navigation("Users");

                    b.Navigation("WorkPlans");

                    b.Navigation("WorkRequests");
                });

            modelBuilder.Entity("Web2Project_API.Models.SafetyDocument", b =>
                {
                    b.Navigation("Devices");

                    b.Navigation("HistoryOfStateChanges");

                    b.Navigation("MultimediaAttachmentSafetyDocuments");
                });

            modelBuilder.Entity("Web2Project_API.Models.User", b =>
                {
                    b.Navigation("ChangedWorkPlans");

                    b.Navigation("ChangedWorkRequest");

                    b.Navigation("CreatedWorkPlans");

                    b.Navigation("CreatedWorkRequest");

                    b.Navigation("HistoryOfStateChanges");

                    b.Navigation("Incidents");

                    b.Navigation("SafetyDocuments");
                });

            modelBuilder.Entity("Web2Project_API.Models.WorkPlan", b =>
                {
                    b.Navigation("Devices");

                    b.Navigation("Incident");

                    b.Navigation("SafetyDoc");

                    b.Navigation("WorkRequest");
                });
#pragma warning restore 612, 618
        }
    }
}
