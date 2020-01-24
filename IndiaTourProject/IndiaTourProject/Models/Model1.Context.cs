namespace IndiaTourProject.Models
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class IndiaTourEntitiesContext : DbContext
    {
        public IndiaTourEntitiesContext()
            : base("name=IndiaTourEntitiesContext")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public DbSet<BookingDetail> BookingDetails { get; set; }
        public DbSet<CategorySubCategory> CategorySubCategories { get; set; }
        public DbSet<CustomerDetail> CustomerDetails { get; set; }
        public DbSet<DatePackageDetail> DatePackageDetails { get; set; }
        public DbSet<Itinerary> Itineraries { get; set; }
        public DbSet<PackageCompleteDetail> PackageCompleteDetails { get; set; }
        public DbSet<PassengerDetails1> PassengerDetails1 { get; set; }
        public DbSet<PriceDetails1> PriceDetails1 { get; set; }
    }
}