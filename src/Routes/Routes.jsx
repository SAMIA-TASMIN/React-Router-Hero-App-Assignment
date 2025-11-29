import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/Errorpage/ErrorPage";
import Home from "../Pages/Home/Home";
import AllApps from "../Pages/AllApps/AllApps";
import AppDetaill from "../Pages/AppDetail/AppDetaill";
import Installation from "../Pages/Installation/Installation";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            index:true,
            loader:()=>fetch('/data.json'),
            Component:Home
        },
        {
          path:'/allapps',
          loader:()=>fetch('/data.json'),
          Component:AllApps
        },
        {
          path:"/app/:appId",
          loader:()=>fetch('/data.json'),
          Component:AppDetaill
        },
        {
          path:'/installation',
          loader:()=>fetch('/data.json'),
          Component:Installation
        }
    ]

  },
]);