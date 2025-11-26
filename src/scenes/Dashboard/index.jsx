import { Box, Button, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material"
import Header from "../../components/global/Header"
import {ProgressPie, StatBox } from "../../components"
import { mockTransactions } from "../../data/mockData"
import { tokens } from "../../theme"
import { BarChart, GeographyChart, LineChart} from "../../components/global"
import { DownloadOutlined, Email, PersonAdd, PointOfSale, Traffic } from "@mui/icons-material"
import { useEffect, useState } from "react"
import { useScreenSizeContext } from "../../context/useScreenSizeContext"
import { BoxWithHeight } from "../layout"
import contentStyles from "../../utils/genericSceneStyles"
import { Navigate, useNavigate} from "react-router-dom"

const Dashboard = () => {

  const {isContainerSize} = useScreenSizeContext();
  
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const greenMid = colors.greenAccent[500];
  const greyText = colors.grey[100]

  return (
    <Box>
      <BoxSpaceBetween styles={{display:"flex", flexWrap:"wrap", alignItems:"center"}}>
        <Header title='DASHBOARD' subtitle='Welcome to your dashboard'/>
        {/* Download report button */}
        <Box>
          <Button sx={{
            backgroundColor: colors.blueAccent[700], 
            color: greyText, 
            fontSize: '14px', 
            fontWeight:"bold", 
            padding: "8px 12px",
            marginBottom: isContainerSize.s && contentStyles.spacing
          }}>
          <DownloadOutlined sx={{mr: "8px"}}/>
            Download Reports
          </Button>
        </Box>
      </BoxSpaceBetween>

      {/* GRIDS AND CHARTS */}
      <BoxWithHeight sx={{
        display:"grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        gridAutoRows:"140px",
        gap: contentStyles.spacing
      }}>
        {/* FIRST ROW */}
        <BoxSpan span={3} display="flex">
          <StatBox 
            title={"12,361"} 
            subtitle={"Emails sent"} 
            increase={"+14%"} 
            icon={<Email sx={{color: colors.greenAccent[600], fontSize: "26px"}}/>} 
            progress={'0.75'}
          />
        </BoxSpan>

        <BoxSpan span={3} display="flex">
          <StatBox 
            title={"431,225"} 
            subtitle={"Sales obtained"} 
            increase={"+21%"} 
            icon={<PointOfSale sx={{color: colors.greenAccent[600], fontSize: "26px"}}/>} 
            progress={'0.5'}
          />
        </BoxSpan>

        <BoxSpan span={3} display="flex">
          <StatBox
            title="32,441"
            subtitle="New Clients"
            progress="0.30"
            increase="+5%"
            icon={<PersonAdd sx={{ color: colors.greenAccent[600], fontSize: "26px" }}/>}
          />
        </BoxSpan>

        <BoxSpan span={3} display="flex">
          <StatBox
            title="1,325,134"
            subtitle="Traffic Received"
            progress="0.80"
            increase="+43%"
            icon={<Traffic sx={{ color: colors.greenAccent[600], fontSize: "26px" }}/>}
          />
        </BoxSpan>

        {/* SECOND ROW */}
        <BoxSpan span={8} rowSpan={2} link={"/line"}>
          <BoxSpaceBetween 
            styles={{ mt:"25px", padding:"0 30px"}} 
          >
            <Box>
              <Typography 
                variant="h5" 
                fontWeight="600" 
                color={greyText}
              >
                Revenue Generated
              </Typography>
              <Typography 
                variant="h3" 
                fontWeight="bold" 
                color={greenMid}
              >
                59,342.32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlined
                  sx={{ fontSize: "26px", color: greenMid }}
                />
              </IconButton>
            </Box>
          </BoxSpaceBetween>
          <Box height="250px" mt="-20px">
            <LineChart isDashboard={true} />
          </Box>
        </BoxSpan>

        <BoxSpan span={4} rowSpan={2} styles={{overflow: "auto"}}>
          <BoxSpaceBetween 
            styles={{
              borderBottom: `4px solid ${colors.primary[500]}`, 
              color: greyText, 
              padding:"15px" 
            }}
          >
            <Typography 
              color={greyText} 
              variant="h5"
              fontWeight="600"
            >
              Recent Transactions
            </Typography>
          </BoxSpaceBetween>
          {mockTransactions.map((transaction, i)=> (
            <BoxSpaceBetween 
              key={`${transaction.txId}-${i}`}
              styles={{
                borderBottom: `4px solid ${colors.primary[500]}`,
                padding:'15px'
              }}
            >
              <Box>
                <Typography 
                  color={greenMid} 
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={greyText}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={greyText}>{transaction.date}</Box>
              <Box 
                backgroundColor={greenMid} 
                p="5px 10px" 
                borderRadius="4px"
              >
                {transaction.cost}
              </Box>
            </BoxSpaceBetween>
          ))}
          
        </BoxSpan>

        {/* THIRD ROW */}
        <BoxSpan span={4} rowSpan={2} styles={{padding: "30px"}} link={"/pie"}>
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box 
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressPie size={125}/>
            <Typography variant="h4" color={greenMid} sx={{mt: "15px"}}>  
              $48, 352 
              <Typography color={greyText} fontWeight= "200" display="inline" sx={{ml:"7px"}}>revenue generated</Typography>
            </Typography>
            <Typography fontWeight= "200" fontSize="15px" sx={{mt: "5px"}}>
              Includes extra miscell. expenditures and costs
            </Typography>
          </Box>
        </BoxSpan>

        <BoxSpan span={4} rowSpan={2} link={"/bar"}>
          <Typography variant="h5" fontWeight="600" sx={{p:"30px 30px 0 30px"}}>
            Sales Quantity
          </Typography>
          <Box 
            height="250px"
            mt="-20px"
          >
          <BarChart isDashboard={true}/>
          </Box>
        </BoxSpan>

        <BoxSpan span={4} rowSpan={2} styles={{padding: "30px"}} link={"/geography"}>
          <Typography variant="h5" fontWeight="600" sx={{marginBottom: "15px"}}>
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true}/>
          </Box>
        </BoxSpan>
      </BoxWithHeight>
    </Box>
  )
}

const BoxSpan = ({children, span, rowSpan = 1, display="block", styles, link})=> {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const {isContainerSize} = useScreenSizeContext();
  const navigate = useNavigate()

  const [widthSpan, setWidthSpan] = useState({
    l: "",
    xl: ""
  })

  useEffect(() => {
    let l;
    if (span === 3 || 4) {
      l = "span 6"
    }
    if (span === 8) {
      l = "span 12"
    }
    setWidthSpan({l, xl:`span ${span}`})
  }, [span])

  const onClick = (link) => navigate(link)


  return (
    widthSpan.xl &&
    <Box
      gridColumn={isContainerSize.s ? "span 12" : isContainerSize.m ? widthSpan.l : widthSpan.xl}
      gridRow={`span ${rowSpan}`}
      backgroundColor={colors.primary[400]}
      display={display}
      alignItems={"center"}
      justifyContent={"center"}
      sx={styles}
      onClick={()=>onClick(link)}
    >
        {children}
    </Box>
  )
}

const BoxSpaceBetween = ({children, styles}) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      sx={styles}
    >
      {children}
    </Box>
  )
}

export default Dashboard