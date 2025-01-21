import { Box } from "@mui/material"
import { PieChart, Header } from "../../components/global"

const index = () => {
  return (
    <Box m="20px">
      <Header title="PIE CHART" subtitle="Simple and Representative Pie Chart" />
      <Box height="75vh">
        <PieChart/>
      </Box>
    </Box>
  )
}

export default index