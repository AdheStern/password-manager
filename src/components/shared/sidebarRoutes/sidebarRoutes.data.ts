import {
  Earth,
  BoxIcon,
  LayoutList,
  Star,
  CreditCard,
  Settings,
  UserPen,
  Landmark,
  Lock,
} from "lucide-react";

export const dataSidebarElements = [
  {
    title: "Elements",
    icon: LayoutList,
    children: [
      {
        item: "Favourites",
        href: "/favourites",
        icon: Star,
      },
      {
        item: "Logins",
        href: "/logins-elements",
        icon: Earth,
      },
      {
        item: "Credit Card",
        href: "/credit-card",
        icon: CreditCard,
      },
    ],
  },
];

export const dataSidebarConfiguration = [
  {
    title: "Configuration",
    icon: Settings,
    children: [
      {
        item: "Profile",
        href: "/profile",
        icon: UserPen,
        premium: false,
      },
      {
        item: "Security",
        href: "/",
        icon: Lock,
        premium: true,
      },
      {
        item: "Suscription",
        href: "/",
        icon: Landmark,
        premium: true,
      },
    ],
  },
];
