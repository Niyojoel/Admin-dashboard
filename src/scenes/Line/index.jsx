import { Box } from "@mui/material";
import {Header, LineChart} from "../../components/global";
import { BoxWithHeight } from "../layout";

const Line = () => {
  return (
    <Box>
      <Header title="Line Chart" subtitle="Simple and Representative Line Chart" />
      <BoxWithHeight>
        <LineChart />
      </BoxWithHeight>
    </Box>
  );
};

export default Line;
