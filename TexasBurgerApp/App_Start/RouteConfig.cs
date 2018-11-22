﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace TexasBurgerApp
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
               "AddBurger",
               "AddBurger/{custName}/{tableID}/{bunID}/{meatID}/{cheeseID}/{greenID}/{dressingID}",
               new {
                   controller = "Burger",
                   action = "AddBurger",
                   custName = "",
                   tableID = "",
                   bunID = "",
                   meatID = "",
                   cheeseID = 0,
                   greenID = 0,
                   dressingID = 0 }
           );
            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Burger", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
