import { Box, Typography, useTheme } from '@mui/material'
import { AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined } from '@mui/icons-material'
import { DataGrid } from '@mui/x-data-grid'
import {tokens} from "../../theme"
import Header from '../../components/global/Header'
import {mockDataTeam} from '../../data/mockData'

const index = ({contentStyles}) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const columns = [
    {
      field:"id",
      headerName: "ID"
    },
    {
      field:"name",
      headerName: "Name",
      flex: 1,
      cellClassName: 'name-column--cell'
    },
    {
      field:"age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: 'left'
    },
    {
      field:"phone",
      headerName: "Phone Number",
      flex: 1
    },
    {
      field:"email",
      headerName: "Email",
      flex: 1
    },
    {
      field:"access",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: {access} }) => {
        return(
          <Box
            width='50%'
            minWidth="100px"
            mr = 'auto'
            p = '6px'
            display = "flex"
            flexWrap="wrap"
            justifyContent="center"
            backgroundColor={access === "admin" ? colors.greenAccent[600] : colors.greenAccent[700]}
            borderRadius='4px'
          >
            {access ==='admin' && <AdminPanelSettingsOutlined/>}
            {access ==='manager' && <SecurityOutlined/>}
            {access ==='user' && <LockOpenOutlined/>}
            <Typography color={colors.grey[100]} sx={{ml: "5px"}}>
              {access}
            </Typography>
          </Box>
        )
      }
    },
  ]

  return (
    <Box fontFamily="Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif">
      <Header title="TEAM" subtitle="Managing the Team Members"/>
      <Box
        height={contentStyles.height}
        sx={{
         '& .MuiDataGrid-root': {
            border: "none",
            fontSize: "16px",
            fontWeight: "200",
            letterSpacing: "1px"
         },
         '& .css-1dfjlxv-MuiDataGrid-root': {
          "--DataGrid-containerBackground":'transparent',
          // "--DataGrid-rowBorderColor": 'transparent',
         },
        "& .MuiDataGrid-cell": {
            display: "flex",
            alignItems: 'center',
         },
         '& .MuiDataGrid-columnHeaders': {
            backgroundColor: `${colors.blueAccent[700]} !important`,
            borderBottom: "transparent",
         },
         '& .MuiDataGrid-virtualScroller': {
            backgroundColor: colors.primary[400],
         },
         '& .MuiDataGrid-footerContainer': {
          borderTop: 'none',
            backgroundColor: colors.blueAccent[700],
         },
         '& .name-column--cell': {
            color: colors.greenAccent[300]
         }
        }}
      >
        <DataGrid
          rows={mockDataTeam}
          columns={columns}
        />
      </Box>
    </Box>
  )
}

export default index