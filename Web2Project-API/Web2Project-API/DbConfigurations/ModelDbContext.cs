using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web2Project_API.Models;

namespace Web2Project_API.DbConfigurations
{
    public class ModelDbContext : DbContext
    {
        public ModelDbContext(DbContextOptions<ModelDbContext> options)
            : base(options)
        {
        }
        public DbSet<User> Users { get; set; } 
        public DbSet<Crew> Crews { get; set; } 
        public DbSet<Location> Locations { get; set; } 
        public DbSet<Call> Calls { get; set; } 
        public DbSet<Consumer> Consumers { get; set; } 
        public DbSet<Device> Devices { get; set; } 
        public DbSet<Notification> Notifications { get; set; } 
        public DbSet<Incident> Incidents { get; set; } 
        public DbSet<WorkPlan> WorkPlans { get; set; } 
        public DbSet<WorkRequest> WorkRequests { get; set; } 
        public DbSet<SafetyDocument> SafetyDocs { get; set; } 


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().HasOne<Location>(x => x.Location).WithMany(x=>x.Users).HasForeignKey(x => x.LocationId).OnDelete(DeleteBehavior.Restrict);
            modelBuilder.Entity<User>().HasOne<Crew>(x => x.Crew).WithMany(x=>x.Users).HasForeignKey(x => x.CrewId);
            modelBuilder.Entity<Consumer>().HasOne<Location>(x => x.Location).WithMany(x => x.Consumers).HasForeignKey(x => x.LocationId);
            modelBuilder.Entity<Call>().HasOne<Consumer>(x => x.Consumer).WithMany(x=> x.Calls).HasForeignKey(x => x.ConsumerId);
            modelBuilder.Entity<Device>().HasOne<Location>(x => x.Location).WithMany(x=> x.Devices).HasForeignKey(x => x.LocationId);
            modelBuilder.Entity<Device>().HasOne<SafetyDocument>(x => x.SafetyDocument).WithMany(x => x.Devices).HasForeignKey(x => x.SafetyDocumentId);
            modelBuilder.Entity<Incident>().HasOne<Crew>(x => x.Crew).WithMany(x=> x.Incidents).HasForeignKey(x => x.CrewId);
            modelBuilder.Entity<Call>().HasOne<Incident>(x => x.Incident).WithMany(x => x.Calls).HasForeignKey(x => x.IncidentId);
            modelBuilder.Entity<Call>().HasOne<Location>(x => x.Location).WithMany(x => x.Calls).HasForeignKey(x => x.LocationId);

            modelBuilder.Entity<WorkPlan>().HasOne<Location>(x => x.Location).WithMany(x => x.WorkPlans).HasForeignKey(x => x.LocationId);
            modelBuilder.Entity<WorkPlan>().HasOne<User>(x => x.CreatedByUser).WithMany(x => x.CreatedWorkPlans).HasForeignKey(x => x.CreatedByUserId);
            modelBuilder.Entity<WorkPlan>().HasOne<Crew>(x => x.Crew).WithMany(x => x.WorkPlans).HasForeignKey(x => x.CrewId);
            modelBuilder.Entity<WorkPlan>().HasOne<Incident>(x => x.Incident).WithOne(x => x.WorkPlan).HasForeignKey<Incident>(x => x.WorkPlanId);
            modelBuilder.Entity<WorkPlan>().HasOne<WorkRequest>(x => x.WorkRequest).WithOne(x => x.WorkPlan).HasForeignKey<WorkRequest>(x => x.WorkPlanId);
            modelBuilder.Entity<WorkPlan>().HasOne<User>(x => x.ChangedByUser).WithMany(x => x.ChangedWorkPlans).HasForeignKey(x => x.ChangedByUserId);
            modelBuilder.Entity<WorkRequest>().HasOne<User>(x => x.ChangedByUser).WithMany(x => x.ChangedWorkRequest).HasForeignKey(x => x.ChangedByUserId);
            modelBuilder.Entity<WorkRequest>().HasOne<User>(x => x.CreatedByUser).WithMany(x => x.CreatedWorkRequest).HasForeignKey(x => x.CreatedByUserId);
            modelBuilder.Entity<WorkRequest>().HasOne<Location>(x => x.Location).WithMany(x => x.WorkRequests).HasForeignKey(x => x.LocationId);
            modelBuilder.Entity<Incident>().HasOne<WorkRequest>(x => x.WorkRequest).WithOne(x => x.Incident).HasForeignKey<WorkRequest>(x => x.IncidentId);

            modelBuilder.Entity<WorkPlan>().HasOne<SafetyDocument>(x => x.SafetyDoc).WithOne(x => x.WorkPlan).HasForeignKey<SafetyDocument>(x => x.WorkPlanId);
            modelBuilder.Entity<Consumer>().HasOne<User>(x => x.User).WithOne(x => x.Consumer).HasForeignKey<User>(x => x.ConsumerId);
            modelBuilder.Entity<SafetyDocument>().HasOne<User>(x => x.User).WithMany(x => x.SafetyDocuments).HasForeignKey(x => x.UserId);
            modelBuilder.Entity<Incident>().HasOne<User>(x => x.User).WithMany(x => x.Incidents).HasForeignKey(x => x.UserId);
            modelBuilder.Entity<Device>().HasOne<WorkPlan>(x => x.WorkPlan).WithMany(x => x.Devices).HasForeignKey(x => x.WorkPlanId);
            modelBuilder.Entity<Device>().HasOne<Incident>(x => x.Incident).WithMany(x => x.Devices).HasForeignKey(x => x.IncidentId);
            modelBuilder.Entity<HistoryOfStateChanges>().HasOne<User>(x => x.User).WithMany(x => x.HistoryOfStateChanges).HasForeignKey(x => x.UserId).OnDelete(DeleteBehavior.Restrict);
            modelBuilder.Entity<HistoryOfStateChanges>().HasOne<SafetyDocument>(x => x.SafetyDocument).WithMany(x => x.HistoryOfStateChanges).HasForeignKey(x => x.SafetyDocumentId).OnDelete(DeleteBehavior.Restrict);
            modelBuilder.Entity<MultimediaAttachmentIncident>().HasOne<Incident>(x => x.Incident).WithMany(x => x.MultimediaAttachmentIncidents).HasForeignKey(x => x.IncidentId);
            modelBuilder.Entity<MultimediaAttachmentSafetyDocument>().HasOne<SafetyDocument>(x => x.SafetyDocument).WithMany(x => x.MultimediaAttachmentSafetyDocuments).HasForeignKey(x => x.SafetyDocumentId);


        }
    }
}
