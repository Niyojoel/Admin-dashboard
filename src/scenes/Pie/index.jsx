import { Box } from "@mui/material"
import { PieChart, Header } from "../../components/global"
import { BoxWithHeight } from "../layout";

const index = () => {
  return (
    <Box>
      <Header title="PIE CHART" subtitle="Simple and Representative Pie Chart" />
      <BoxWithHeight>
        <PieChart/>
      </BoxWithHeight>
    </Box>
  )
}

export default index