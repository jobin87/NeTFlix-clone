// import Login from "./pages/login";
import { lazy } from "react";

const Homepage = lazy(() => import("src/pages/dashboard/home"));
const Moviepage = lazy(() => import("src/pages/dashboard/movies"));
import { Outlet } from "react-router-dom";

export const dashboardroutes = [
  {
    path: "/dashboard",
    element:(
      <Outlet/>
    ),
    children:[
      {
        path:"home",
        element:(
          <Homepage/>
        )
      },
      {
        path:"movies",
        element:(
          <Moviepage/>
        )
      }
    ]
  },
  
];