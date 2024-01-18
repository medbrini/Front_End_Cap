import Acceuil from "View/Acceuil";
import Service from "View/Service";
import Document from "components/Icons/Document";
import SpaceShip from "components/Icons/SpaceShip";
import CustomerSupport from "components/Icons/CustomerSupport";
import Ticket from "View/Ticket";
import Suivi from "View/Suivi";
import Contact from "View/Contact";
import Register from "View/admin/auth/register";
import Login from "View/admin/auth/login";
import Layout from "View/admin/agent/agentLayout";
import Dashboard from "View/admin/agent/dashbord";
import Profile from "View/admin/agent/profile";
import Configuration from "View/admin/agent/configuration";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children }) => {
  const hasToken = !!localStorage.getItem('token');
  console.log("hasToken:", hasToken);
  
  return (
    (hasToken) ? children : <Navigate to='/login' replace />
  );
};

const AuthRoute = ({ children}) => {
  const hasToken = !!localStorage.getItem('token');
  return (
    hasToken === false ? children : <Navigate to='/'  />
  )
}


const routes = [
  {
    type: "collapse",
    name: "accueil",
    key: "accueil",
    route: "/",
    icon: <Document size="12px" />,
    component: <Acceuil />,
    noCollapse: true,
    protected: true
  },
  {
    type: "collapse",
    name: "ticket",
    key: "ticket",
    route: "/ticket/:service",
    icon: <Document size="12px" />,
    component: <Ticket />,
    noCollapse: true,
    protected: true
  },
  {
    type: "collapse",
    name: "Service",
    key: "Service",
    route: "/service",
    icon: <CustomerSupport size="12px" />,
    component: <Service />,
    noCollapse: true,
    protected: true,
  },
  {
    type: "collapse",
    name: "Suivi",
    key: "suivi",
    route: "/suivi",
    icon: <SpaceShip size="12px" />,
    component: <Suivi />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Contact",
    key: "contact",
    route: "/contact",
    icon: <SpaceShip size="12px" />,
    component: <Contact />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Register",
    key: "register",
    route: "/register",
    icon: <SpaceShip size="12px" />,
    component: <AuthRoute><Register /></AuthRoute>,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Login",
    key: "login",
    route: "/login",
    icon: <SpaceShip size="12px" />,
    component:<AuthRoute><Login /></AuthRoute> ,
    noCollapse: true,
  },
  // {
  //   type: "collapse",
  //   name: "logout",
  //   key: "logout",
  //   route: "/login",
  //   icon: <SpaceShip size="12px" />,
  //   component:<AuthRoute><Login /></AuthRoute> ,
  //   noCollapse: true,
  // },
  {
    type: "collapse",
    name: "configuration",
    key: "configuration",
    route: "/configuration",
    icon: <SpaceShip size="12px" />,
    component: <Configuration />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "dashboard",
    key: "dashboard",
    route: "/dashboard" ,
    icon: <SpaceShip size="12px" />,
    component: <PrivateRoute><Dashboard /></PrivateRoute>,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "profile",
    key: "profile",
    route: "/profil",
    icon: <SpaceShip size="12px" />,
    component: <PrivateRoute><Profile /></PrivateRoute>,
    noCollapse: true,
  }
];

export default routes;
