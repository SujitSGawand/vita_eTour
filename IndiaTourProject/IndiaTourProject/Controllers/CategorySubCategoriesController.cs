﻿using System;
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
    public class CategorySubCategoriesController : ApiController
    {
        private IndiaTourEntitiesContext db = new IndiaTourEntitiesContext();

        // GET api/CategorySubCategories
        public IEnumerable<CategorySubCategory> GetCategorySubCategories()
        {
            return db.CategorySubCategories.AsEnumerable();
        }

        // GET api/CategorySubCategories/5
        public CategorySubCategory GetCategorySubCategory(int id)
        {
            CategorySubCategory categorysubcategory = db.CategorySubCategories.Find(id);
            if (categorysubcategory == null)
            {
                throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.NotFound));
            }

            return categorysubcategory;
        }

        // PUT api/CategorySubCategories/5
        public HttpResponseMessage PutCategorySubCategory(int id, CategorySubCategory categorysubcategory)
        {
            if (!ModelState.IsValid)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }

            if (id != categorysubcategory.catsubid)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }

            db.Entry(categorysubcategory).State = EntityState.Modified;

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

        // POST api/CategorySubCategories
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
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }
        }

        // DELETE api/CategorySubCategories/5
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
            catch (DbUpdateConcurrencyException ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex);
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