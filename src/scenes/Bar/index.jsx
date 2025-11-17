import { Box } from "@mui/material"
import { BarChart, Header } from "../../components/global"

const index = ({contentStyles}) => {
  return (
    <Box >
      <Header title="BAR CHART" subtitle="Simple and Representative Bar Chart" />
      <Box height= {contentStyles.height}>
        <BarChart/>
      </Box>
    </Box>
  )
}

export default index