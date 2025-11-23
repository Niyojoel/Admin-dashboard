import { Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { MenuItem } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

const MenuNav = ({title, to, icon, selected, setSelected, isCollapsed}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  
  return (
    <MenuItem
      active = {title == selected }
      style={{
        backgroundColor: 'transparent',
        color: colors.grey[100],
        marginLeft: !isCollapsed ? "-15px" : "0",
      }}
      onClick={() => {
        setSelected(title);
        navigate(to)
      }}
      icon={icon}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
}

export default MenuNav