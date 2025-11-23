import { Box, useTheme } from "@mui/material";
import {GeographyChart, Header} from "../../components/global";
import { tokens } from "../../theme";
import { useEffect, useRef } from "react";
import { BoxWithHeight } from "../layout";
import { useScreenSizeContext } from "../../context/useScreenSizeContext";


const Geography = () => {

  const {observeContainerSize} = useScreenSizeContext()

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const geoRef = useRef(null);
  const chartRef = useRef(null);

  // const fitGraph = (geo) => {
  //    chartRef?.current?.style.width = geo.clientWidth;
  // } 

  // useEffect(()=> {
  //   observeContainerSize(geoRef, fitGraph)
  // }, [geoRef])

  return (
    <Box ref={geoRef}>
      <Header title="Geography" subtitle="World Geography Chart with Density Representation" />
      <BoxWithHeight
        sx={{
          border: `1px solid ${colors.grey[100]}`,
          borderRadius: "4px"
        }}
        ref = {chartRef}
      >
        <GeographyChart />
      </BoxWithHeight>
    </Box>
  );
};

export default Geography;
