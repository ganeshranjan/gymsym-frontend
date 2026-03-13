import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import AppLayout from "../components/layout/AppLayout.tsx";

import DashboardPage from "../modules/dashboard/pages/DashboardPage.tsx";
import MemberPage from "../modules/members/pages/memberPage.tsx";
import AttendancePage from "../modules/attendance/pages/AttendancePages.tsx";
import PaymentsPage from "../modules/payments/pages/PaymentsPage.tsx";
import PlansPage from "../modules/plans/pages/PlansPage.tsx";
import ReportsPage from "../modules/reports/pages/ReportsPage.tsx";
import SettingsPage from "../modules/settings/pages/SettingsPage.tsx";
import LoginPage from "../modules/auth/pages/loginPage.tsx";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
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
      {
        path: "payments",
        element: <PaymentsPage />,
      },
      {
        path: "plans",
        element: <PlansPage />,
      },
      {
        path: "reports",
        element: <ReportsPage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
