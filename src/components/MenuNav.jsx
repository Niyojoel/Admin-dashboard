import { Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { MenuItem } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";
import { useScreenSizeContext } from "../context/useScreenSizeContext";

const MenuNav = ({title, to, icon, selected, setSelected, isCollapsed}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const {collapseSidebar, isMobileScreen} = useScreenSizeContext();
  
  return (
    <MenuItem
      active = {title?.toLowerCase() == selected?.toLowerCase() }
      style={{
        backgroundColor: 'transparent',
        color: colors.grey[100],
        marginLeft: !isCollapsed ? "-15px" : '0',
      }}
      onClick={() => {
        setSelected(title);
        navigate(to);
        isMobileScreen && collapseSidebar();
      }}
      icon={icon}
    >
      <Typography>{isCollapsed ? "" : title}</Typography>
    </MenuItem>
  );
}

export default MenuNav