import {
  ChevronDown,
  ChevronUp,
  GaugeCircle,
  Box,
  Users,
  Globe2,
  Pipette,
  File,
  MessageCircle,
  Inbox,
  Calendar,
  Stars,
  Settings,
  GripHorizontal,
  ArrowRightCircle,
  KanbanSquare,
  Component,
} from "lucide-react";
import React from "react";

export const Menus = [
  {
    title: "Dashboard",
    icon: <GaugeCircle />,
    iconClosed: <ChevronDown />,
    iconOpened: <ChevronUp />,

    subMenus: [
      {
        title: "Main",
        path: "/main",
      },
      {
        title: "Analytics",
        path: "/analytics",
      },
      {
        title: "FIntech",
        path: "/fintech",
      },
    ],
  },

  {
    title: "E-commerce",
    icon: <Box />,
    iconClosed: <ChevronDown />,
    iconOpened: <ChevronUp />,

    subMenus: [
      {
        title: "Customers",
        path: "/customers",
      },
      {
        title: "Orders",
        path: "/orders",
      },
      {
        title: "Invoices",
        path: "/invoices",
      },
      {
        title: "Shop",
        path: "/shop",
      },
      {
        title: "Shop2",
        path: "/shop2",
      },
      {
        title: "Single Product",
        path: "/singleproduct",
      },
      {
        title: "Cart",
        path: "/cart",
      },
      {
        title: "Cart2",
        path: "/cart2",
      },
      {
        title: "Cart3",
        path: "/cart3",
      },
      {
        title: "Pay",
        path: "/pay",
      },
    ],
  },
  {
    title: "Commnunity",
    icon: <Users />,
    iconClosed: <ChevronDown />,
    iconOpened: <ChevronUp />,

    subMenus: [
      {
        title: "Users - Tabs",
        path: "/userstabs",
      },
      {
        title: "Users - Tiles",
        path: "/userstiles",
      },
      {
        title: "Profile",
        path: "/profile",
      },
      {
        title: "Feed",
        path: "/feed",
      },
      {
        title: "Forum",
        path: "/forum",
      },
      {
        title: "Forum-Post",
        path: "/forumpost",
      },
      {
        title: "Meetups",
        path: "/meetups",
      },
      {
        title: "Meetups-Post",
        path: "/meetupspost",
      },
    ],
  },
  {
    title: "Finance",
    icon: <Globe2 />,
    iconClosed: <ChevronDown />,
    iconOpened: <ChevronUp />,

    subMenus: [
      {
        title: "Cards",
        path: "/cards",
      },
      {
        title: "Transactions",
        path: "/transactions",
      },
      {
        title: "Transaction Details",
        path: "/transactiondetails",
      },
    ],
  },
  {
    title: "Job Board",
    icon: <Pipette />,
    iconClosed: <ChevronDown />,
    iconOpened: <ChevronUp />,

    subMenus: [
      {
        title: "Listing",
        path: "/listing",
      },
      {
        title: "Job Post",
        path: "/jobpost",
      },
      {
        title: "Company Profile",
        path: "/companyprofile",
      },
    ],
  },
  {
    title: "Tasks",
    icon: <File />,
    iconClosed: <ChevronDown />,
    iconOpened: <ChevronUp />,

    subMenus: [
      {
        title: "Kanban",
        path: "/kanban",
      },
      {
        title: "List",
        path: "/list",
      },
    ],
  },
  {
    title: "Messages",
    icon: <MessageCircle />,
    path: "/messages",
    iconClosed: <ChevronDown />,
    iconOpened: <ChevronUp />,
  },
  {
    title: "Inbox",
    icon: <Inbox />,
    path: "/inbox",
    iconClosed: <ChevronDown />,
    iconOpened: <ChevronUp />,
  },
  {
    title: "Calendar",
    icon: <Calendar />,
    path: "/calendar",
    iconClosed: <ChevronDown />,
    iconOpened: <ChevronUp />,
  },
  {
    title: "Campaigns",
    icon: <Stars />,
    path: "/campaigns",
    iconClosed: <ChevronDown />,
    iconOpened: <ChevronUp />,
  },
  {
    title: "Settings",
    icon: <Settings />,
    iconClosed: <ChevronDown />,
    iconOpened: <ChevronUp />,

    subMenus: [
      {
        title: "My Account",
        path: "/myaccount",
      },
      {
        title: "My Notifications",
        path: "/mynotifications",
      },
      {
        title: "Connected Apps",
        path: "/connectedapps",
      },
      {
        title: "Plans",
        path: "/plans",
      },
      {
        title: "Billing & Invoices",
        path: "/billing&invoices",
      },
      {
        title: "Give Feedback",
        path: "/givefeedback",
      },
    ],
  },
  {
    title: "Utility",
    icon: <GripHorizontal />,
    iconClosed: <ChevronDown />,
    iconOpened: <ChevronUp />,

    subMenus: [
      {
        title: "Changelog",
        path: "/changelog",
      },
      {
        title: "Roadmap",
        path: "/roadmap",
      },
      {
        title: "FAQs",
        path: "/faqs",
      },
      {
        title: "Empty State",
        path: "/emptystate",
      },
      {
        title: "404",
        path: "/404",
      },
      {
        title: "Knowledge Base",
        path: "/knowledgebase",
      },
    ],
  },
  {
    title: "Authentication",
    icon: <ArrowRightCircle />,
    iconClosed: <ChevronDown />,
    iconOpened: <ChevronUp />,

    subMenus: [
      {
        title: "Sign In",
        path: "/signin",
      },
      {
        title: "Sign Up",
        path: "/signup",
      },
      {
        title: "Reset Password",
        path: "/resetpassword",
      },
    ],
  },
  {
    title: "Onboarding",
    icon: <KanbanSquare />,
    iconClosed: <ChevronDown />,
    iconOpened: <ChevronUp />,

    subMenus: [
      {
        title: "Step1",
        path: "/step1",
      },
      {
        title: "Step 2",
        path: "/step2",
      },
      {
        title: "Step 3",
        path: "/step3",
      },
      {
        title: "Step 4",
        path: "/step4",
      },
    ],
  },
  {
    title: "Components",
    icon: <Component />,
    iconClosed: <ChevronDown />,
    iconOpened: <ChevronUp />,

    subMenus: [
      {
        title: "Button",
        path: "/button",
      },
      {
        title: "Input Form",
        path: "/inputform",
      },
      {
        title: "DropDown",
        path: "/dropdown",
      },
      {
        title: "Alert & Banner",
        path: "/alert&banner",
      },
      {
        title: "Modal",
        path: "/modal",
      },
      {
        title: "Pagination",
        path: "/pagination",
      },
      {
        title: "Tabs",
        path: "/tabs",
      },
      {
        title: "Breadcrump",
        path: "/breadcrump",
      },
      {
        title: "Badge",
        path: "/badge",
      },
      {
        title: "Avatar",
        path: "/avatar",
      },
      {
        title: "Tooltip",
        path: "/tooltip",
      },
      {
        title: "Accordion",
        path: "/accordion",
      },
      {
        title: "Icons",
        path: "/icons",
      },
    ],
  },
];
