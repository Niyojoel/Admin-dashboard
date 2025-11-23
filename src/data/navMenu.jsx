import { BarChartOutlined, CalendarTodayOutlined, ContactsOutlined, HelpOutlineOutlined, MapOutlined, PeopleOutlined, PersonOutlined, PieChartOutlineOutlined, ReceiptOutlined, TimelineOutlined } from "@mui/icons-material";


export const menus = [
  {
    groupTag: "Data",
    navs: [
      {
        title: "Manage Team",
        to: "/team",
        icon: <PeopleOutlined />,
      },
      {
        title: "Contacts Information",
        to: "/contacts",
        icon: <ContactsOutlined />,
      },
      {
        title: "Invoices Balances",
        to: "/invoices",
        icon: <ReceiptOutlined />,
      },
    ],
  },
  {
    groupTag: "Charts",
    navs: [
      {
        title: "Profile Form",
        to: "/form",
        icon: <PersonOutlined />,
      },
      {
        title: "Calendar",
        to: "/calendar",
        icon: <CalendarTodayOutlined />,
      },
      {
        title: "FAQ Page",
        to: "/faq",
        icon: <HelpOutlineOutlined />,
      },
    ],
  },
  {
    groupTag: "Info",
    navs: [
      {
        title: "Bar Chart",
        to: "/bar",
        icon: <BarChartOutlined />,
      },
      {
        title: "Pie Chart",
        to: "/pie",
        icon: <PieChartOutlineOutlined />,
      },
      {
        title: "Line Chart",
        to: "/line",
        icon: <TimelineOutlined />,
      },
      {
        title: "Geography Chart",
        to: "/geography",
        icon: <MapOutlined />,
      },
    ],
  },
]; 
