//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IndiaTourProject.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class BookingDetail
    {
        public BookingDetail()
        {
            this.PassengerDetails1 = new HashSet<PassengerDetails1>();
        }
    
        public int bookingid { get; set; }
        public Nullable<System.DateTime> bookingdate { get; set; }
        public string activestatus { get; set; }
        public Nullable<int> datepackageid { get; set; }
        public Nullable<int> packageid { get; set; }
        public Nullable<int> customerid { get; set; }
    
        public virtual ICollection<PassengerDetails1> PassengerDetails1 { get; set; }
        public virtual CustomerDetail CustomerDetail { get; set; }
        public virtual DatePackageDetail DatePackageDetail { get; set; }
        public virtual PackageCompleteDetail PackageCompleteDetail { get; set; }
    }
}
