import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Assignment from "../pages/Assignment/Assignment";
import Login from "../pages/Login/Login";
import Registration from "../Sheard/Registration";
import CreateAssignments from "../pages/CreateAssignments/CreateAssignments";
import SubmittedAssignments from "../pages/SubmittedAssignments/SubmittedAssignments";
import MyAssignments from "../pages/MyAssignments/MyAssignments";
import ErrorPage from "../component/ErrorPage/ErrorPage";
import View from "../component/View/View";
import UpdateAssignment from "../component/UpdateAssignment/UpdateAssignment";
import PrivateRoute from "./PrivateRoute";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/createAssignments',
            element:<PrivateRoute><CreateAssignments></CreateAssignments></PrivateRoute>
        },
        {
            path:'/assignments',
            element:<Assignment></Assignment>
        },
        {
            path:'/myAssignments',
            element:<MyAssignments></MyAssignments>
        },
        {
            path:'/submittedAssignments',
            element:<SubmittedAssignments></SubmittedAssignments>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/registration',
            element:<Registration></Registration>
        },
        {
          path:'/view/:id',
          element:<PrivateRoute><View></View></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/assignments/${params.id}`)
        },
        {
          path:'/updateAssignment/:id',
          element:<UpdateAssignment></UpdateAssignment>,
          loader: ({params}) => fetch(`http://localhost:5000/assignments/${params.id}`)
        }
      ]
    },
  ]);

export default router; 