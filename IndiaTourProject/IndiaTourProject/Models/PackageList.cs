﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IndiaTourProject.Models
{
    public class PackageList
    {
        public int packageid { get; set; }
        public string tourname { get; set; }
        public string tourimage { get; set; }
        public Nullable<decimal> tourcost { get; set; }
        public Nullable<System.DateTime> startdate { get; set; }
        public Nullable<System.DateTime> enddate { get; set; }
        public int datepackageid { get; set; } 

        public override string ToString()
        {
            return string.Format("tourname={0},tourimage={1},tourcost={2}",tourname,tourimage,tourcost);
        } 
    }
    
}