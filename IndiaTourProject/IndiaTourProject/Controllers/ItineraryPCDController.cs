using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using IndiaTourProject.Models;
using System.Web.Mvc;

namespace IndiaTourProject.Controllers
{
    public class ItineraryPCDController : ApiController
    {
        
            private IndiaTourEntitiesContext db = new IndiaTourEntitiesContext();

            // GET api/ItineraryPCD
            public IList<ItineraryPCD> GetItineraryPCD(int packid,int datepackid)
            {
                //int aid = Convert.ToInt32(id);
                IList<ItineraryPCD> ll = new List<ItineraryPCD>();

                var iPCDlist = from pcd in db.PackageCompleteDetails
                               join dpd in db.DatePackageDetails on pcd.packageid equals dpd.packageid
                               join pd1 in db.PriceDetails1 on dpd.packageid equals pd1.packageid
                               join iti in db.Itineraries on dpd.packageid equals iti.packageid
                               where pcd.packageid == packid && dpd.datepackageid==datepackid

                               select new
                               {
                                   packageid = pcd.packageid,
                                   datepackageid = dpd.datepackageid,
                                   tourname = pcd.tourname,
                                   tourimage = pcd.tourimage,
                                   description = pcd.description,
                                   startdate = dpd.startdate,
                                   enddate = dpd.enddate,
                                   dayid = iti.dayid,
                                   daywisedescription = iti.daywisedescription,
                                   location = iti.location,
                                   tourcost = pd1.tourcost
                               };
                foreach ( var i in iPCDlist)
                {
                    ItineraryPCD i1 = new ItineraryPCD();
                    i1.packageid=i.packageid;
                    i1.datepackageid=i.datepackageid;
                    i1.tourname=i.tourname;
                    i1.tourimage=i.tourimage;
                    i1.description=i.description;
                    i1.startdate=i.startdate;
                    i1.enddate=i.enddate;
                    i1.dayid=i.dayid;
                    i1.daywisedescription =i.daywisedescription;
                    i1.location=i.location;
                    i1.tourcost = i.tourcost;

                    ll.Add(i1);
                }
                return ll;       
            }
        

    }
}
