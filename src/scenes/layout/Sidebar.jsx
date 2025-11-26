import { useEffect, useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, List, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import {
  ArrowDropDownOutlined,
  ArrowDropUpOutlined,
  HomeOutlined, 
  MenuOutlined, 
} from "@mui/icons-material";
import { MenuNav } from "../../components";
import { useHref } from "react-router-dom";
import { menus } from "../../data/navMenu";
import { useScreenSizeContext } from "../../context/useScreenSizeContext";
import CollapseBtn from "./CollapseBtn";


const SideBar = () => {

  const {isMobileScreen, isCollapsed, toggleSidebar, collapseSidebar} = useScreenSizeContext();
  
  const theme = useTheme();
  const [selectedMenu, setSelectedMenu] = useState("");
  const [toggledMenuGroup, setToggledMenuGroup] = useState("");
  const [activeMenuGroupTag, setActiveMenuGroupTag] = useState('');

  const colors = tokens(theme.palette.mode);

  const pathname = useHref();

  const getSelectedMenuByPath = () => {
    let lastSelectedMenuTitle;
    menus.forEach(menu => menu.navs.forEach(nav => {
      if(nav.to == pathname) {
        lastSelectedMenuTitle = nav.title;
      }
    }));
    return lastSelectedMenuTitle;
  }

  const getActiveMenuGroup = () => {
    const selected = getSelectedMenuByPath ()
    return menus.find(menu => menu.navs.find(nav => (nav?.title?.toLowerCase() == selected?.toLowerCase())))?.groupTag;
  }

  useEffect(()=> {
    setSelectedMenu(pathname != '/' ? getSelectedMenuByPath() : 'dashboard');
    setActiveMenuGroupTag(getActiveMenuGroup());
    setToggledMenuGroup(getActiveMenuGroup());
  },[pathname, selectedMenu])

  return (
    <Box
      position={isMobileScreen ? "absolute" : "sticky"}
      display='flex'
      height="100dvh"
      width={isMobileScreen ? isCollapsed ? "0px" : "100%" :'fit-content'}
      bgcolor={isCollapsed ? `transparent` : 'rgba(255, 255, 255, 0.1)'}
      zIndex={isMobileScreen ? "10" : "initial"}
      sx={{
        backdropFilter:'blur(2.5px) saturate(100%)',
        "& .ps-menu-button:hover": {
          color: "#868dfb !important",
        },
        "& .ps-active": {
          color: "#6870fa !important",
        },          
      }}
    >
      <Sidebar 
        collapsed={isCollapsed}
        backgroundColor={colors.primary[400]}
        style={{
          border: "none", 
          transform: isMobileScreen && isCollapsed
          ? "translateX(-100%)"
          : "translateX(0%)",
          transition: "200ms all ease-in-out",
        }} 
      >
        <Menu>
          {/* LOGO AND MENU ICON */}
          <Box>
            <MenuItem 
              onClick={toggleSidebar}
              icon={isCollapsed ? <MenuOutlined /> : undefined}
              style={{
                backgroundColor: 'transparent',
                margin: "0",
                color: colors.grey[100],
                height: "8dvh",
                borderBottom: `0.5px solid ${colors.primary[500]}`,
              }}
            >
              {(
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  ml="15px"
                  visibility={isCollapsed ? "hidden" : "visible"}
                >
                  <Typography variant="h3" color={colors.grey[100]}>
                    ADMINS
                  </Typography>
                  <CollapseBtn/>
                </Box>
              )}
            </MenuItem>

            {/* USER */}
            {(
              <Box 
                height={!isMobileScreen && isCollapsed ? "0px" : "27.3dvh"}
                display="flex" 
                flexDirection="column"
                justifyContent="center" 
                sx={{
                  transition: "100ms height ease-in-out", 
                  overflow: 'hidden', 
                  visibility: isCollapsed ? "hidden" : "visible"}}>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <img 
                    src="../../assets/user.png" 
                    alt="profile-user" 
                    width="90px" 
                    height="90px" 
                    style={{cursor: 'pointer', borderRadius: "50%"}}
                  />
                </Box>
                <Box textAlign="center">
                  <Typography variant="h3" color={colors.grey[100]} fontWeight="bold" sx={{mt: "10px"}}>Solomon</Typography>
                  <Typography variant="h5" color={colors.greenAccent[500]}>VP Admin</Typography>
                </Box>
              </Box>
            )}
          </Box>
          {/* MENUS */}
          <Box 
            height={isCollapsed && !isMobileScreen ? "90.8dvh" : "63.5dvh"}
            overflowY="auto" 
            padding={isCollapsed ? undefined : "3% 0 3% 10%"}
            borderTop={`1px solid ${colors.primary[500]}`}
            overflowX = 'hidden'
            sx={{transition: "100ms all ease-in-out"}}
          >
            <MenuNav
              title="Dashboard"
              to="/"
              icon={<HomeOutlined />}
              selectedMenu={selectedMenu}
              setSelectedMenu={setSelectedMenu}
              isCollapsed = {isCollapsed}
            />

            {menus?.map(menu => (
            <MenuGroup
              key={menu.groupTag}
              tag={menu.groupTag} 
              toggledMenuGroup={toggledMenuGroup} 
              setToggledMenuGroup={setToggledMenuGroup}
              activeMenuGroupTag={activeMenuGroupTag}
            >
              {menu?.navs?.map(nav =>(
                <MenuNav
                  key={nav.title}
                  title={nav.title}
                  to={nav.to}
                  icon={nav.icon}
                  selectedMenu={selectedMenu}
                  setSelectedMenu={setSelectedMenu}
                  isCollapsed ={isCollapsed}
                />
              ))}
            </MenuGroup>))}
          </Box>
        </Menu>
      </Sidebar>
      <Box display={isMobileScreen && !isCollapsed ? 'flex' : 'none'} 
        flex={1} 
        onClick={collapseSidebar}
      />
    </Box>
  )
}


const MenuGroup = ({children, tag, toggledMenuGroup, activeMenuGroupTag, setToggledMenuGroup})=> {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [dropDown, setDropDown] = useState(false);

    useEffect(()=> {
      setDropDown(toggledMenuGroup === tag ? true : false) 
    }, [toggledMenuGroup]);

    return (
      <Box>
        <List 
          sx={{
            display:'flex',
            alignItems:'center',
            marginLeft: "15px",
            textTransform: "capitalize",
            cursor: "pointer",
          }}
          onClick={()=>setToggledMenuGroup(dropDown ? "" : tag)}
        >
        <Typography
          variant="h6"
          color={tag === activeMenuGroupTag ? colors.blueAccent[400] : colors.grey[200]}
          marginRight="-8px"
          fontWeight={"normal"}
        >  
          {tag}
        </Typography>
        <IconButton disableRipple>
          { dropDown ? <ArrowDropUpOutlined/> : <ArrowDropDownOutlined/>}
        </IconButton>
        </List>
        {dropDown && <Box>  
          {children}
        </Box>}
        
      </Box>
    )
}

export default SideBar