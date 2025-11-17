import { useEffect, useRef, useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, List, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import {
  HomeOutlined, 
  PeopleOutlined, 
  ContactsOutlined, 
  ReceiptOutlined, 
  PersonOutlined, 
  CalendarTodayOutlined, 
  HelpOutlineOutlined, 
  BarChartOutlined, 
  PieChartOutlineOutlined, 
  TimelineOutlined, 
  MenuOutlined, 
  MapOutlined,
  ArrowDropUpOutlined,
  ArrowDropDownOutlined
} from "@mui/icons-material";
import { MenuNav } from "../../components";

const SideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("index");
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menusRef = useRef(null);

  return (
    <Box
      position="sticky"
      sx={{
        "& .ps-menu-button:hover": {
          color: "#868dfb !important",
        },
        "& .ps-active": {
          color: "#6870fa !important",
        },
      }}
      ref={menusRef}
    >
      <Sidebar 
        collapsed={isCollapsed} 
        backgroundColor={colors.primary[400]}
        style={{border: "none"}}
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
            ref={menusRef} 
            height={isCollapsed ? "90.5dvh" : "60.7dvh"}
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

            <MenuGroup title="Data" isCollapsed={isCollapsed}>
              <MenuNav
                title="Manage Team"
                to="/team"
                icon={<PeopleOutlined />}
                selected={selected}
                setSelected={setSelected}
                isCollapsed ={isCollapsed}
              />
              <MenuNav
                title="Contacts Information"
                to="/contacts"
                icon={<ContactsOutlined />}
                selected={selected}
                setSelected={setSelected}
                isCollapsed ={isCollapsed}
              />
              <MenuNav
                title="Invoices Balances"
                to="/invoices"
                icon={<ReceiptOutlined />}
                selected={selected}
                setSelected={setSelected}
                isCollapsed ={isCollapsed}
              />
            </MenuGroup>

            <MenuGroup title="Pages" isCollapsed={isCollapsed}>
              <MenuNav
                title="Profile Form"
                to="/form"
                icon={<PersonOutlined />}
                selected={selected}
                setSelected={setSelected}
                isCollapsed ={isCollapsed}
              />
              <MenuNav
                title="Calendar"
                to="/calendar"
                icon={<CalendarTodayOutlined />}
                selected={selected}
                setSelected={setSelected}
                isCollapsed ={isCollapsed}
              />
              <MenuNav
                title="FAQ Page"
                to="/faq"
                icon={<HelpOutlineOutlined />}
                selected={selected}
                setSelected={setSelected}
                isCollapsed ={isCollapsed}
              />
            </MenuGroup>

            <MenuGroup title="Charts" isCollapsed={isCollapsed}>
              <MenuNav
                title="Bar Chart"
                to="/bar"
                icon={<BarChartOutlined />}
                selected={selected}
                setSelected={setSelected}
                isCollapsed ={isCollapsed}
              />
              <MenuNav
                title="Pie Chart"
                to="/pie"
                icon={<PieChartOutlineOutlined />}
                selected={selected}
                setSelected={setSelected}
                isCollapsed ={isCollapsed}
              />
              <MenuNav
                title="Line Chart"
                to="/line"
                icon={<TimelineOutlined />}
                selected={selected}
                setSelected={setSelected}
                isCollapsed ={isCollapsed}
              />
              <MenuNav
                title="Geography Chart"
                to="/geography"
                icon={<MapOutlined />}
                selected={selected}
                setSelected={setSelected}
                isCollapsed ={isCollapsed}
              />
            </MenuGroup>
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  )
}

const MenuGroup = ({children, title, isCollapsed})=> {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [dropDown, setDropDown] = useState(null);

    useEffect(()=> {
      setDropDown(false)
    },[])

    return (
      <Box>
        <List 
          sx={{
            display:'flex',
            alignItems:'center',
            justifyContent: isCollapsed ? "center" : "initial",
            margin: isCollapsed ? "0": "0px 0 0px 15px",
            textTransform: "capitalize",
            cursor: "pointer"
          }}
          onClick={()=> {
            setDropDown(!dropDown); 
          }}
        >
        <Typography
          variant="h6"
          color={colors.grey[300]}
          marginRight="-5px"
          letterSpacing={!isCollapsed && "1px"}
        >  
          {title}
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