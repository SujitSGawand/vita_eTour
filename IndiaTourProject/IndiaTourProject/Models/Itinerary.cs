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
    
    public partial class Itinerary
    {
        public int dayid { get; set; }
        public string daywisedescription { get; set; }
        public string location { get; set; }
        public int packageid { get; set; }
    
        public virtual PackageCompleteDetail PackageCompleteDetail { get; set; }
    }
}
