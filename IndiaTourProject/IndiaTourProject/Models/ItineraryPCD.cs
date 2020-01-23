using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IndiaTourProject.Models
{
    public class ItineraryPCD
    {
        public int packageid { get; set; }
        public int datepackageid { get; set; }
        public string tourname { get; set; }
        public string tourimage { get; set; }
        public string description { get; set; }
        

        
        public Nullable<System.DateTime> startdate { get; set; }
        public Nullable<System.DateTime> enddate { get; set; }

        public int dayid { get; set; }
        public string daywisedescription { get; set; }
        public string location { get; set; }

        public Nullable<decimal> tourcost { get; set; }
    }
}