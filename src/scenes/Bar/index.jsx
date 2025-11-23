import { Box } from "@mui/material"
import { BarChart, Header } from "../../components/global"
import { BoxWithHeight } from "../layout"

const index = () => {
  return (
    <Box >
      <Header title="BAR CHART" subtitle="Simple and Representative Bar Chart" />
      <BoxWithHeight>
        <BarChart/>
      </BoxWithHeight>
    </Box>
  )
}

export default index