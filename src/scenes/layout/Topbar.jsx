import {Box, IconButton, InputBase, useTheme} from "@mui/material";
import {useContext} from 'react';
import {ColorModeContext, tokens} from '../../theme';
import {
  LightModeOutlined,
  DarkModeOutlined, 
  NotificationsOutlined, 
  SettingsOutlined, 
  PersonOutlined, 
  Search
} from "@mui/icons-material";
import { useScreenSizeContext } from "../../context/useScreenSizeContext";


const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const {isContainerSize} = useScreenSizeContext()

  return (
    <Box 
      display="flex" 
      height='8%' 
      justifyContent="space-between" 
      p={isContainerSize.s ? 1 : '1.2rem'}
      >
      {/* SEARCH BAR */}
      <Box 
        display="flex" 
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ml: 2, flex: 1}} placeholder="Search"/>
        <IconButton type="button" sx={{ p: 1}}>
          <Search/>
        </IconButton>
      </Box>

      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (<DarkModeOutlined/>): (<LightModeOutlined/>)}
        </IconButton>
        <IconButton> <NotificationsOutlined/></IconButton>
        <IconButton><SettingsOutlined/></IconButton>
        <IconButton><PersonOutlined/></IconButton>
      </Box>
    </Box>
  )
}

export default Topbar