import { Box } from "@mui/material"
import { PieChart, Header } from "../../components/global"

const index = ({contentStyles}) => {
  return (
    <Box>
      <Header title="PIE CHART" subtitle="Simple and Representative Pie Chart" />
      <Box height={contentStyles.height}>
        <PieChart/>
      </Box>
    </Box>
  )
}

export default index