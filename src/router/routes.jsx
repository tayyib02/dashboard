import { createBrowserRouter, redirect } from "react-router-dom";
import Main from "../template/Main";
import Dashboard from "../pages/Dashboard";
import Chats from "../pages/Chats";
import Invoices from "../pages/Invoices";
import Settings from "../pages/Settings";
import HistoryUser from "../pages/HistoryUser";
import InvoiceDetail from "../pages/InvoiceDetail";
import DashboardBusiness from "../pages/DashboardBussiness";
import HistoryBussiness from "../pages/HistoryBusiness";
import Services from "../pages/Services";
import ChatMessages from "../pages/ChatMessages";
import NoMessage from "../pages/NoMessage";
import RecentOrders from "../pages/RecentOrders";
import RecentReviews from "../pages/RecentReviews";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "user",
        children: [
          {
            path: "",
            element: <Dashboard />,
          },
          {
            path: "recent-purchases",
            element: <RecentOrders />,
          },
          {
            path: "recent-reviews",
            element: <RecentReviews />,
          },
          {
            path: "chats/open/:id",
            element: <ChatMessages />,
          },
          {
            path: "chats",
            element: <Chats />,
            children: [
              {
                path: "",
                element: <NoMessage />,
              },
              {
                path: ":id",
                element: <ChatMessages />,
              },
            ],
          },
          {
            path: "invoices",

            children: [
              {
                path: "",
                element: <Invoices />,
              },
              {
                path: ":id",
                element: <InvoiceDetail />,
              },
            ],
          },
          {
            path: "history",
            element: <HistoryUser />,
          },
          {
            path: "settings",
            element: <Settings />,
          },
        ],
      },
      {
        path: "business",
        children: [
          {
            path: "",
            element: <DashboardBusiness />,
          },
          {
            path: "recent-orders",
            element: <RecentOrders />,
          },
          {
            path: "chats/open/:id",
            element: <ChatMessages />,
          },
          {
            path: "chats",
            element: <Chats />,
            children: [
              {
                path: "",
                element: <NoMessage />,
              },
              {
                path: ":id",
                element: <ChatMessages />,
              },
            ],
          },
          {
            path: "invoices",

            children: [
              {
                path: "",
                element: <Invoices />,
              },
              {
                path: ":id",
                element: <InvoiceDetail />,
              },
            ],
          },
          {
            path: "history",
            element: <HistoryBussiness />,
          },
          {
            path: "settings",
            element: <Settings />,
          },
          {
            path: "services",
            element: <Services />,
          },
        ],
      },
    ],
  },
]);

export default routes;
