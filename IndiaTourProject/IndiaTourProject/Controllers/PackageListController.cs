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
    public class PackageListController : ApiController
    {
        private IndiaTourEntitiesContext db = new IndiaTourEntitiesContext();

        // GET api/PackageList/5
        public IList<PackageList> GetPackageList(int id)
        {
            //int aid = Convert.ToInt32(id);
            IList<PackageList> ll = new List<PackageList>();
            var list = from pcd in db.PackageCompleteDetails
                       join dpd in db.DatePackageDetails on
                       pcd.packageid equals dpd.packageid
                       join pd1 in db.PriceDetails1 on dpd.packageid equals pd1.packageid
                       where pcd.catsubid==id 
                       select new
                       {
                           packageid = pcd.packageid,
                           tourname = pcd.tourname,
                           tourimage = pcd.tourimage,
                           tourcost = pd1.tourcost,
                           enddate = dpd.enddate,
                           startdate = dpd.startdate,
                           datepackageid = dpd.datepackageid
                       };

            foreach (var i in list)
            {
                PackageList p = new PackageList();
                p.packageid = i.packageid;
                p.tourname = i.tourname;
                p.tourimage = i.tourimage;
                p.tourcost = i.tourcost;
                p.enddate = i.enddate;
                p.startdate = i.startdate;
                p.datepackageid = i.datepackageid;
                ll.Add(p);
            }
            return ll;                                    
        }
    }
}
