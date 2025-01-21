import { Accordion, AccordionDetails, AccordionSummary, Box, Typography, useTheme } from '@mui/material'
import { tokens } from "../theme";
import { ExpandMore } from '@mui/icons-material';

const ExpandableQandA = ({question, answer}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  return (
    <Box>
      <Accordion defaultExpanded sx={{backgroundColor: colors.primary[500]}}>
        <AccordionSummary expandIcon={<ExpandMore/>}>
          <Typography color={colors.grey[400]} variant='h5'>
            {question} ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default ExpandableQandA