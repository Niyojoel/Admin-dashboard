import { Box, useTheme } from '@mui/material'
import { DataGrid, GridToolbar} from '@mui/x-data-grid'
import {tokens} from "../../theme"
import Header from '../../components/global/Header'
import {mockDataContacts} from '../../data/mockData'
import { BoxWithHeight } from '../layout'


const index = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const columns = [
    {
      field:"id",
      headerName: "ID",
      flex: 0.5
    },
    {
      field:"registrarId",
      headerName: "Registrar ID",
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
      align: 'left',
      flex: 0.5
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
      field:"address",
      headerName: "Address",
      flex: 1
    },
    {
      field:"city",
      headerName: "City",
      flex: 1
    },
    {
      field:"zipCode",
      headerName: "ZipCode",
      flex: 1
    },
  ]

  return (
    <Box>
      <Header title="CONTACTS" subtitle="The List of Contacts for Future Reference"/>
      <BoxWithHeight
        sx={{
         '& .MuiDataGrid-root': {
            border: "none",
            fontSize: "16px",
            fontWeight: "200",
            letterSpacing: "1px"
         },
         '& .css-1dfjlxv-MuiDataGrid-root': {
          "--DataGrid-containerBackground":'transparent',
          "--DataGrid-rowBorderColor": 'transparent',
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
         },
         '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
            color: `${colors.grey[100]} !important`,
            fontSize: "15px",
            marginBottom: "3px"
         }
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          slots={{toolbar: GridToolbar}}
        />
      </BoxWithHeight>
    </Box>
  )
}

export default index