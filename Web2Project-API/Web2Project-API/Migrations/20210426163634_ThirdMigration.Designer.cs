﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Web2Project_API.DbConfigurations;

namespace Web2Project_API.Migrations
{
    [DbContext(typeof(ModelDbContext))]
    [Migration("20210426163634_ThirdMigration")]
    partial class ThirdMigration
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
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

                    b.Property<int>("HazardPriority")
                        .HasColumnType("int");

                    b.Property<int?>("IncidentId")
                        .HasColumnType("int");

                    b.Property<string>("Reason")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("UserId")
                        .HasColumnType("int");

                    b.HasKey("CallId");

                    b.HasIndex("ConsumerId");

                    b.HasIndex("IncidentId")
                        .IsUnique()
                        .HasFilter("[IncidentId] IS NOT NULL");

                    b.HasIndex("UserId");

                    b.ToTable("Calls");
                });

            modelBuilder.Entity("Web2Project_API.Models.Consumer", b =>
                {
                    b.Property<int>("ConsumerId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

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

                    b.Property<int?>("LocationId")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Type")
                        .HasColumnType("int");

                    b.HasKey("DeviceId");

                    b.HasIndex("LocationId");

                    b.ToTable("Devices");
                });

            modelBuilder.Entity("Web2Project_API.Models.Incident", b =>
                {
                    b.Property<int>("IncidentId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("AffectedCustomers")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("AssignedToYou")
                        .HasColumnType("bit");

                    b.Property<DateTime>("Ata")
                        .HasColumnType("datetime2");

                    b.Property<string>("Calls")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("Confirmed")
                        .HasColumnType("bit");

                    b.Property<int?>("CrewId")
                        .HasColumnType("int");

                    b.Property<DateTime>("Eta")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("Etr")
                        .HasColumnType("datetime2");

                    b.Property<int>("Lvl")
                        .HasColumnType("int");

                    b.Property<DateTime>("OutageTime")
                        .HasColumnType("datetime2");

                    b.Property<string>("Pictures")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Priority")
                        .HasColumnType("int");

                    b.Property<string>("ResolutionConstructionType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ResolutionCouse")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ResolutionMaterial")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ResolutionSubCouse")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("ScheduledTime")
                        .HasColumnType("datetime2");

                    b.Property<int>("Status")
                        .HasColumnType("int");

                    b.Property<int>("Type")
                        .HasColumnType("int");

                    b.Property<int?>("WorkPlanId")
                        .HasColumnType("int");

                    b.HasKey("IncidentId");

                    b.HasIndex("CrewId");

                    b.HasIndex("WorkPlanId")
                        .IsUnique()
                        .HasFilter("[WorkPlanId] IS NOT NULL");

                    b.ToTable("Incidents");
                });

            modelBuilder.Entity("Web2Project_API.Models.IncidentDevices", b =>
                {
                    b.Property<int>("IncidentId")
                        .HasColumnType("int");

                    b.Property<int>("DeviceId")
                        .HasColumnType("int");

                    b.HasKey("IncidentId", "DeviceId");

                    b.HasIndex("DeviceId");

                    b.ToTable("IncidentDevices");
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

                    b.Property<string>("Street")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("LocationId");

                    b.ToTable("Locations");
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

            modelBuilder.Entity("Web2Project_API.Models.SafetyDocs", b =>
                {
                    b.Property<int>("SafetyDocsId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("ChangedByUserId")
                        .HasColumnType("int");

                    b.Property<bool>("Completed")
                        .HasColumnType("bit");

                    b.Property<int?>("CreatedByUserId")
                        .HasColumnType("int");

                    b.Property<DateTime>("CreatedTime")
                        .HasColumnType("datetime2");

                    b.Property<string>("Details")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Devices")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("GroundedRemoved")
                        .HasColumnType("bit");

                    b.Property<string>("Notes")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Phone")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Pictures")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("Ready")
                        .HasColumnType("bit");

                    b.Property<int>("Status")
                        .HasColumnType("int");

                    b.Property<bool>("TagsRemoved")
                        .HasColumnType("bit");

                    b.Property<int>("Type")
                        .HasColumnType("int");

                    b.Property<int?>("WorkPlanId")
                        .HasColumnType("int");

                    b.HasKey("SafetyDocsId");

                    b.HasIndex("ChangedByUserId");

                    b.HasIndex("CreatedByUserId");

                    b.HasIndex("WorkPlanId")
                        .IsUnique()
                        .HasFilter("[WorkPlanId] IS NOT NULL");

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

                    b.HasIndex("CrewId");

                    b.HasIndex("LocationId");

                    b.ToTable("Users");
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
                        .WithOne("Call")
                        .HasForeignKey("Web2Project_API.Models.Call", "IncidentId");

                    b.HasOne("Web2Project_API.Models.User", "User")
                        .WithMany("Calls")
                        .HasForeignKey("UserId");

                    b.Navigation("Consumer");

                    b.Navigation("Incident");

                    b.Navigation("User");
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
                    b.HasOne("Web2Project_API.Models.Location", "Location")
                        .WithMany("Devices")
                        .HasForeignKey("LocationId");

                    b.Navigation("Location");
                });

            modelBuilder.Entity("Web2Project_API.Models.Incident", b =>
                {
                    b.HasOne("Web2Project_API.Models.Crew", "Crew")
                        .WithMany("Incidents")
                        .HasForeignKey("CrewId");

                    b.HasOne("Web2Project_API.Models.WorkPlan", "WorkPlan")
                        .WithOne("Incident")
                        .HasForeignKey("Web2Project_API.Models.Incident", "WorkPlanId");

                    b.Navigation("Crew");

                    b.Navigation("WorkPlan");
                });

            modelBuilder.Entity("Web2Project_API.Models.IncidentDevices", b =>
                {
                    b.HasOne("Web2Project_API.Models.Device", "Device")
                        .WithMany("IncidentsDevices")
                        .HasForeignKey("DeviceId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Web2Project_API.Models.Incident", "Incident")
                        .WithMany("IncidentsDevices")
                        .HasForeignKey("IncidentId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Device");

                    b.Navigation("Incident");
                });

            modelBuilder.Entity("Web2Project_API.Models.SafetyDocs", b =>
                {
                    b.HasOne("Web2Project_API.Models.User", "ChangedByUser")
                        .WithMany("ChangedSafetyDocs")
                        .HasForeignKey("ChangedByUserId");

                    b.HasOne("Web2Project_API.Models.User", "CreatedByUser")
                        .WithMany("CreatedSafetyDocs")
                        .HasForeignKey("CreatedByUserId");

                    b.HasOne("Web2Project_API.Models.WorkPlan", "WorkPlan")
                        .WithOne("SafetyDoc")
                        .HasForeignKey("Web2Project_API.Models.SafetyDocs", "WorkPlanId");

                    b.Navigation("ChangedByUser");

                    b.Navigation("CreatedByUser");

                    b.Navigation("WorkPlan");
                });

            modelBuilder.Entity("Web2Project_API.Models.User", b =>
                {
                    b.HasOne("Web2Project_API.Models.Crew", "Crew")
                        .WithMany("Users")
                        .HasForeignKey("CrewId");

                    b.HasOne("Web2Project_API.Models.Location", "Location")
                        .WithMany("Users")
                        .HasForeignKey("LocationId");

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
                });

            modelBuilder.Entity("Web2Project_API.Models.Crew", b =>
                {
                    b.Navigation("Incidents");

                    b.Navigation("Users");

                    b.Navigation("WorkPlans");
                });

            modelBuilder.Entity("Web2Project_API.Models.Device", b =>
                {
                    b.Navigation("IncidentsDevices");
                });

            modelBuilder.Entity("Web2Project_API.Models.Incident", b =>
                {
                    b.Navigation("Call");

                    b.Navigation("IncidentsDevices");

                    b.Navigation("WorkRequest");
                });

            modelBuilder.Entity("Web2Project_API.Models.Location", b =>
                {
                    b.Navigation("Consumers");

                    b.Navigation("Devices");

                    b.Navigation("Users");

                    b.Navigation("WorkPlans");

                    b.Navigation("WorkRequests");
                });

            modelBuilder.Entity("Web2Project_API.Models.User", b =>
                {
                    b.Navigation("Calls");

                    b.Navigation("ChangedSafetyDocs");

                    b.Navigation("ChangedWorkPlans");

                    b.Navigation("ChangedWorkRequest");

                    b.Navigation("CreatedSafetyDocs");

                    b.Navigation("CreatedWorkPlans");

                    b.Navigation("CreatedWorkRequest");
                });

            modelBuilder.Entity("Web2Project_API.Models.WorkPlan", b =>
                {
                    b.Navigation("Incident");

                    b.Navigation("SafetyDoc");

                    b.Navigation("WorkRequest");
                });
#pragma warning restore 612, 618
        }
    }
}
