"use client";

import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Box,
  ListItemIcon,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import PeopleAltOutlineIcon from "@mui/icons-material/PeopleOutline";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { FiCompass, FiHome } from "react-icons/fi";
import CachedIcon from "@mui/icons-material/Cached";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import { Search } from "@/components/Layout/Sidebar/Search";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useUserStore } from "@/store/userStore";
import UserSwitcher from "@/components/Users/UserSwitcher";

interface SidebarProps {
  open: boolean;
  onClose?: () => void;
  toggleDrawer: (open: boolean) => void;
}

export default function Sidebar({ open, toggleDrawer }: SidebarProps) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const pathname = usePathname();
  const router = useRouter();

  const currentUser = useUserStore((state) => state.user);
  const clearUser = useUserStore((state) => state.clearUser);

  const isActive = (path: string) => pathname === path;

  const desktopItems = isDesktop
    ? [
        {
          icon: (
            <FiHome
              className={`text-3xl ${
                isActive("/home") ? "text-orange-500" : "text-[#001F3F]"
              }`}
            />
          ),
          label: "Home",
          href: "/home",
          color: isActive("/home") ? "#F97316" : "#001F3F",
          fontWeight: 600,
        },
        {
          icon: (
            <FiCompass
              className={`text-3xl ${
                isActive("/discover") ? "text-orange-500" : "text-[#001F3F]"
              }`}
            />
          ),
          label: "Discover",
          href: "/discover",
          color: isActive("/discover") ? "#F97316" : "#001F3F",
          fontWeight: 600,
        },
        {
          icon: (
            <CachedIcon
              sx={{
                color: isActive("/trades") ? "#F97316" : "#001F3F",
                fontSize: 30,
              }}
            />
          ),
          label: "My Trades",
          href: "/trades",
          color: isActive("/trades") ? "#F97316" : "#001F3F",
          fontWeight: 600,
        },
        {
          icon: (
            <MailOutlineIcon
              sx={{
                color: isActive("/messages") ? "#F97316" : "#001F3F",
                fontSize: 30,
              }}
            />
          ),
          label: "Messages",
          href: "/messages",
          color: isActive("/messages") ? "#F97316" : "#001F3F",
          fontWeight: 600,
        },
      ]
    : [];

  const baseItems = [
    {
      icon: <PeopleAltOutlineIcon fontSize="large" sx={{ color: "#001F3F" }} />,
      label: "Search users",
      href: "/users",
      color: "#001F3F",
      fontWeight: 600,
    },
    ...(currentUser
      ? [
          {
            icon: (
              <Image
                src={currentUser.avatar}
                alt={currentUser.name}
                width={32}
                height={32}
                className="rounded-full border"
              />
            ),
            label: "My Profile",
            href: `/users/profile`,
            color: "#001F3F",
            fontWeight: 600,
          },
        ]
      : [
          {
            icon: (
              <Image
                src="/logoTrade.png"
                width={28}
                height={28}
                alt="logo"
                className="ml-2"
              />
            ),
            label: "Sign Up",
            href: "/login",
            color: "#050F0F",
          },
          {
            icon: <LoginIcon fontSize="large" sx={{ color: "#001F3F" }} />,
            label: "Log In",
            href: "/login",
            fontWeight: 600,
            color: "#001F3F",
          },
        ]),
  ];

  const topItems = [...desktopItems, ...baseItems];

  const bottomItems = [
    { label: "About", href: "/help" },
    { label: "Help", href: "/help" },
    { label: "Settings", href: "/login" },
    { label: "Discord", href: "https://discord.com/" },
    { label: "Contact Us", href: "/help?contact=true" },
  ];

  const handleLogout = () => {
    router.push("/");
    clearUser();
    toggleDrawer(false);
  };

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={() => toggleDrawer(false)}
      transitionDuration={0}
      slotProps={{
        paper: {
          sx: {
            width: isDesktop ? "26vw" : "95%",
            maxWidth: 400,
            borderRadius: 0,
            zIndex: 30,
          },
        },
      }}
    >
      <Box sx={{ p: 1 }}>
        <Box className="flex items-center justify-between mb-2 mt-3">
          <Search />
          <IconButton onClick={() => toggleDrawer(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {topItems.map(({ icon, label, color, fontWeight, href }) => (
            <Link key={label} href={href} passHref>
              <ListItem onClick={() => toggleDrawer(false)}>
                <ListItemIcon sx={{ minWidth: 50 }}>{icon}</ListItemIcon>
                <ListItemText
                  primary={label}
                  sx={{
                    "& .MuiListItemText-primary": {
                      fontWeight: fontWeight || 400,
                      color: color,
                      fontSize: isDesktop ? "1rem" : "0.9rem",
                    },
                  }}
                />
              </ListItem>
            </Link>
          ))}
        </List>

        <List
          className="text-gray-600"
          sx={{
            "& .MuiListItemText-primary": {
              fontSize: "0.85rem",
              fontWeight: 400,
              color: "#4B5563",
            },
          }}
        >
          {bottomItems.map(({ label, href }) =>
            href.startsWith("http") ? (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => toggleDrawer(false)}
                style={{ textDecoration: "none" }}
              >
                <ListItem>
                  <ListItemText primary={label} />
                </ListItem>
              </a>
            ) : (
              <Link key={label} href={href} passHref>
                <ListItem onClick={() => toggleDrawer(false)}>
                  <ListItemText primary={label} />
                </ListItem>
              </Link>
            )
          )}
        </List>

        <Divider sx={{ my: 1 }} />
        <div className="pl-3">
          <UserSwitcher />
        </div>
        <Divider sx={{ my: 1 }} />

        {currentUser && (
          <ListItem onClick={handleLogout} className="cursor-pointer">
            <ListItemIcon sx={{ minWidth: 50 }}>
              <LogoutIcon sx={{ color: "#9B1C1C" }} />
            </ListItemIcon>
            <ListItemText
              primary="Log Out"
              sx={{
                "& .MuiListItemText-primary": {
                  fontWeight: 600,
                  color: "#9B1C1C",
                  fontSize: isDesktop ? "1rem" : "0.9rem",
                },
              }}
            />
          </ListItem>
        )}
      </Box>
    </Drawer>
  );
}
