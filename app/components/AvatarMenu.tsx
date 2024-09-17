import * as React from "react";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { deepOrange } from "@mui/material/colors";
import { getCookies, removeCookies } from "../cookies/storeCookies";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AvatarMenu() {
  const router = useRouter();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const logout = async () => {
    await removeCookies();
    const cookies = await getCookies();
    console.log("After logout, cookies:", cookies);
    router.push("/login"); // Redirect to login after logging out
  };
  const handleLogout = () => {
    handleClose();
    // Add your logout logic here
    logout();
    console.log("User logged out");
  };

  return (
    <div>
      <IconButton onClick={handleClick} sx={{ p: 0 }}>
        <Avatar sx={{ bgcolor: deepOrange[500] }}>A</Avatar>{" "}
        {/* You can replace 'A' with user initials or image */}
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 1,
          sx: {
            mt: 1.5,
            "& .MuiMenuItem-root": {
              fontSize: "1rem",
            },
          },
        }}
      >
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
