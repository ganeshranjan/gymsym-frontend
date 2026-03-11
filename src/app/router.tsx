import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import AppLayout from "../components/layout/AppLayout.tsx";

import DashboardPage from "../modules/dashboard/pages/DashboardPage.tsx";
import MemberPage from "../modules/members/pages/memberPage.tsx";
import AttendancePage from "../modules/attendance/pages/AttendancePages.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />,
      },
      {
        path: "dashboard",
        element: <DashboardPage />,
      },
      {
        path: "members",
        element: <MemberPage />,
      },
      {
        path: "attendance",
        element: <AttendancePage />,
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
