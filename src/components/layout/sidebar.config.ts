import {
  DashboardOutlined,
  UserOutlined,
  CalendarOutlined,
  DollarCircleOutlined,
  FileOutlined,
  SettingOutlined,
  CreditCardOutlined,
} from "@ant-design/icons";

export interface SidebarConfigItem {
  key: string;
  label: string;
  icon:
    | typeof DashboardOutlined
    | typeof UserOutlined
    | typeof CalendarOutlined;
  path: string;
}

export const sidebarConfig: SidebarConfigItem[] = [
  {
    key: "dashboard",
    label: "Dashboard",
    icon: DashboardOutlined,
    path: "/dashboard",
  },
  {
    key: "members",
    label: "Members",
    icon: UserOutlined,
    path: "/members",
  },
  {
    key: "attendance",
    label: "Attendance",
    icon: CalendarOutlined,
    path: "/attendance",
  },
  {
    key: "plans",
    label: "Plans",
    icon: CreditCardOutlined,
    path: "/plans",
  },
  {
    key: "payments",
    label: "Payments",
    icon: DollarCircleOutlined,
    path: "/payments",
  },
  {
    key: "reports",
    label: "Reports",
    icon: FileOutlined,
    path: "/reports",
  },
  {
    key: "settings",
    label: "Settings",
    icon: SettingOutlined,
    path: "/settings",
  },
];
