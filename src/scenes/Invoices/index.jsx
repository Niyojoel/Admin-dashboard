import { Box, Typography, useTheme } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import {tokens} from "../../theme"
import Header from '../../components/global/Header'
import {mockDataInvoices} from '../../data/mockData'

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
      field:"name",
      headerName: "Name",
      flex: 1,
      cellClassName: 'name-column--cell'
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
      field: "cost",
      headerName: "Cost",
      flex: 1,
      cellClassName: 'cost-column--cell',
      /*renderCell: ({cost}) => (
        <Typography color={colors.greenAccent[500]}>
          {cost}
        </Typography>
      )*/
    },
    {
      field:"date",
      headerName: "Date",
      flex: 1
    }
  ]

  return (
    <Box m="20px">
      <Header title="INVOICES" subtitle="The List of Invoice Balances"/>
      <Box
        mt="40px"
        height="75vh"
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
         '& .cost-column--cell': {
            color: colors.greenAccent[500]
         },
         '& .MuiCheckbox-root': {
            color: `${colors.greenAccent[100]} !important`
         }
        }}
      >
        <DataGrid
          checkboxSelection
          rows={mockDataInvoices}
          columns={columns}
        />
      </Box>
    </Box>
  )
}

export default index