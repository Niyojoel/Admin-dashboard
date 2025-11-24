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

const SideBar = () => {

  const {isMobileScreen} = useScreenSizeContext();
  
  const theme = useTheme();
  const [selected, setSelected] = useState("");
  const [toggledMenu, setToggledMenu] = useState("");
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const pathname = useHref();

  useEffect(()=> {
    let lastSelectedTitle;

    menus.forEach(menu => menu.navs.forEach(nav => {
      if(nav.to == pathname) {
        lastSelectedTitle = nav.title;
      }
      return;
    }));

    selected == "" && setSelected(pathname != '/' ? lastSelectedTitle : 'dashboard');
  },[pathname, selected])

  console.log(selected)
  console.log(pathname)
  return (
    <Box
      position={isMobileScreen && !isCollapsed ? "absolute" : "sticky"}
      width={isMobileScreen && !isCollapsed ? "100%" : "fit-content"}
      display='flex'
      height="100dvh"
      bgcolor={'rgba(255, 255, 255, 0.1)'}
      zIndex={isMobileScreen && !isCollapsed ? "10" : "initial"}
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
        style={{border: "none", zIndex: isMobileScreen && !isCollapsed ? "12" : "initial"}} 
      >
        <Menu>
          {/* LOGO AND MENU ICON */}
          <Box>
            <MenuItem 
              onClick={() => setIsCollapsed(!isCollapsed)}
              icon={isCollapsed ? <MenuOutlined /> : undefined}
              style={{
                backgroundColor: 'transparent',
                margin: "0.45rem 0 0 0",
                color: colors.grey[100],
                height: "2.55rem",
              }}
            >
              {!isCollapsed && (
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  ml="15px"
                >
                  <Typography variant="h3" color={colors.grey[100]}>
                    ADMINS
                  </Typography>
                  <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                    <MenuOutlined />
                  </IconButton>
                </Box>
              )}
            </MenuItem>

            {/* USER */}
            {!isCollapsed && (
              <Box padding ="1.3rem 0">
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
            height={isCollapsed ? "91.8dvh" : "64.7dvh"}
            overflow="auto" 
            padding={isCollapsed ? undefined : "3% 0 3% 10%"}
            borderTop={`1px solid ${colors.primary[500]}`}
          >
            <MenuNav
              title="Dashboard"
              to="/"
              icon={<HomeOutlined />}
              selected={selected}
              setSelected={setSelected}
              isCollapsed ={isCollapsed}
            />

            {menus?.map(menu => (
            <MenuGroup
              key={menu.groupTag}
              tag={menu.groupTag} 
              isCollapsed={isCollapsed} 
              toggledMenu={toggledMenu} 
              setToggledMenu={setToggledMenu}
              selected={selected}
            >
              {menu?.navs?.map(nav =>(
                <MenuNav
                  key={nav.title}
                  title={nav.title}
                  to={nav.to}
                  icon={nav.icon}
                  selected={selected}
                  setSelected={setSelected}
                  isCollapsed ={isCollapsed}
                />
              ))}
            </MenuGroup>))}
          </Box>
        </Menu>
      </Sidebar>
      <Box 
        display={isMobileScreen && !isCollapsed ? 'flex' : 'none'} 
        flex={1} 
        onClick={()=> setIsCollapsed(true)}/>
    </Box>
  )
}


const MenuGroup = ({children, tag, isCollapsed, toggledMenu, selected, setToggledMenu})=> {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [dropDown, setDropDown] = useState(false);
    const [activeMenuGroupTag, setActiveMenuGroupTag] = useState('');

    useEffect(()=> {
      isCollapsed && setToggledMenu('')
    }, [isCollapsed])

    useEffect(()=> {
      setDropDown(toggledMenu === tag ? true : false) 
    }, [toggledMenu]);

    useEffect(()=> {
      const activeGroupTag = menus.find(menu => menu.navs.find(nav => (nav?.title?.toLowerCase() == selected?.toLowerCase())))?.groupTag;
      setActiveMenuGroupTag(activeGroupTag)
    }, [menus, selected])

    return (
      <Box>
        <List 
          sx={{
            display:'flex',
            alignItems:'center',
            justifyContent: isCollapsed ? "center" : "initial",
            margin: isCollapsed ? "0px 0 0px 10px": "0px 0 0px 15px",
            textTransform: "capitalize",
            cursor: "pointer",
          }}
          onClick={()=>setToggledMenu(dropDown ? "" : tag)}
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