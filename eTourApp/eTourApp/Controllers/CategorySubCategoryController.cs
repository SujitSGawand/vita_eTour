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
using eTourApp.Models;

namespace eTourApp.Controllers
{
    public class CategorySubCategoryController : ApiController
    {
        private IndiaTourEntities db = new IndiaTourEntities();

        // GET api/CategorySubCategory
        public IEnumerable<CategorySubCategory> GetCategorySubCategories()
        {
            return db.CategorySubCategories.AsEnumerable();
        }

        // GET api/CategorySubCategory/5
        public CategorySubCategory GetCategorySubCategory(int id)
        {
            CategorySubCategory categorysubcategory = db.CategorySubCategories.Find(id);
            if (categorysubcategory == null)
            {
                throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.NotFound));
            }

            return categorysubcategory;
        }

        // PUT api/CategorySubCategory/5
        public HttpResponseMessage PutCategorySubCategory(int id, CategorySubCategory categorysubcategory)
        {
            if (ModelState.IsValid && id == categorysubcategory.catsubid)
            {
                db.Entry(categorysubcategory).State = EntityState.Modified;

                try
                {
                    db.SaveChanges();
                }
                catch (DbUpdateConcurrencyException)
                {
                    return Request.CreateResponse(HttpStatusCode.NotFound);
                }

                return Request.CreateResponse(HttpStatusCode.OK);
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }
        }

        // POST api/CategorySubCategory
        public HttpResponseMessage PostCategorySubCategory(CategorySubCategory categorysubcategory)
        {
            if (ModelState.IsValid)
            {
                db.CategorySubCategories.Add(categorysubcategory);
                db.SaveChanges();

                HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created, categorysubcategory);
                response.Headers.Location = new Uri(Url.Link("DefaultApi", new { id = categorysubcategory.catsubid }));
                return response;
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }
        }

        // DELETE api/CategorySubCategory/5
        public HttpResponseMessage DeleteCategorySubCategory(int id)
        {
            CategorySubCategory categorysubcategory = db.CategorySubCategories.Find(id);
            if (categorysubcategory == null)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound);
            }

            db.CategorySubCategories.Remove(categorysubcategory);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound);
            }

            return Request.CreateResponse(HttpStatusCode.OK, categorysubcategory);
        }

        protected override void Dispose(bool disposing)
        {
            db.Dispose();
            base.Dispose(disposing);
        }
    }
}