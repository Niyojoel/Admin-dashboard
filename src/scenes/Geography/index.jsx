import { Box, useTheme } from "@mui/material";
import {GeographyChart, Header} from "../../components/global";
import { tokens } from "../../theme";
import { useEffect, useRef } from "react";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const geoRef = useRef();
  const chartRef = useRef();

  useEffect(()=> {
    if (geoRef.current == null) return

    const observer = new ResizeObserver(entries => {
      const container = entries[0]?.target;
      
      if(container== null) return;
      console.log(geoRef.current.clientWidth);
      chartRef.current.style.width= geoRef.current.clientWidth;
      });
      observer.observe(geoRef.current);

      return ()=> {
        observer.disconnect();
      }
  }, [geoRef])

  return (
    <Box m="20px" ref={geoRef}>
      <Header title="Geography" subtitle="The World Geography Chart (Map) with Density Representation" />
      <Box
        height="75vh"
        // width="100%"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
        ref = {chartRef}
      >
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geography;
