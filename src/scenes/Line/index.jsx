import { Box } from "@mui/material";
import {Header, LineChart} from "../../components/global";

const Line = () => {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Simple and Representative Line Chart" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
