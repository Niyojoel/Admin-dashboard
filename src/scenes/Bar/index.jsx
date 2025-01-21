import { Box } from "@mui/material"
import { BarChart, Header } from "../../components/global"

const index = () => {
  return (
    <Box m="20px">
      <Header title="BAR CHART" subtitle="Simple and Representative Bar Chart" />
      <Box height="75vh">
        <BarChart/>
      </Box>
    </Box>
  )
}

export default index