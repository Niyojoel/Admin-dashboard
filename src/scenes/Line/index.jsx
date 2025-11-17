import { Box } from "@mui/material";
import {Header, LineChart} from "../../components/global";

const Line = ({contentStyles}) => {
  return (
    <Box>
      <Header title="Line Chart" subtitle="Simple and Representative Line Chart" />
      <Box height={contentStyles.height}>
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
