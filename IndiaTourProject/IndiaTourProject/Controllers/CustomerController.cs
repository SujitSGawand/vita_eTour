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

namespace IndiaTourProject.Controllers
{
    public class CustomerController : ApiController
    {
        private IndiaTourEntitiesContext db = new IndiaTourEntitiesContext();

        // GET api/Customer
        public IEnumerable<CustomerDetail> GetCustomerDetails()
        {
            return db.CustomerDetails.AsEnumerable();
        }

        // GET api/Customer/5
        public CustomerDetail GetCustomerDetail(int id)
        {
            CustomerDetail customerdetail = db.CustomerDetails.Find(id);
            if (customerdetail == null)
            {
                throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.NotFound));
            }

            return customerdetail;
        }

        // PUT api/Customer/5
        public HttpResponseMessage PutCustomerDetail(int id, CustomerDetail customerdetail)
        {
            if (!ModelState.IsValid)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }

            if (id != customerdetail.customerid)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }

            db.Entry(customerdetail).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex);
            }

            return Request.CreateResponse(HttpStatusCode.OK);
        }

        // POST api/Customer
        public HttpResponseMessage PostCustomerDetail(CustomerDetail customerdetail)
        {
            customerdetail.registrationdate = DateTime.Now;
            if (ModelState.IsValid)
            {
                db.CustomerDetails.Add(customerdetail);
                db.SaveChanges();

                HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created, customerdetail);
                response.Headers.Location = new Uri(Url.Link("DefaultApi", new { id = customerdetail.customerid }));
                return response;
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }
        }

        // DELETE api/Customer/5
        public HttpResponseMessage DeleteCustomerDetail(int id)
        {
            CustomerDetail customerdetail = db.CustomerDetails.Find(id);
            if (customerdetail == null)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound);
            }

            db.CustomerDetails.Remove(customerdetail);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex);
            }

            return Request.CreateResponse(HttpStatusCode.OK, customerdetail);
        }

        protected override void Dispose(bool disposing)
        {
            db.Dispose();
            base.Dispose(disposing);
        }
    }
}