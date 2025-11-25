import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";

const Header = ({title, subtitle, style={height:"11dvh"}}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box height={style.height}>
        <Typography 
          variant="h2" 
          color={colors.grey[100]} 
          fontWeight="bold" 
          sx={{mb: "5px"}}
        >
          {title}
        </Typography>
        <Typography variant="h5" color={colors.primary[300]}> 
          {subtitle}
        </Typography>
    </Box>
  )
}

export default Header