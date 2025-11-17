import { Box } from "@mui/material"
import { ExpandableQandA } from "../../components"
import { Header } from "../../components/global"

const index = ({contentStyles}) => (
  <Box >
    <Header title="FAQ" subtitle='Frequently Asked Questions'/>
    <Box height={contentStyles.height}display="flex" flexDirection="column" gap={contentStyles.spacing}>
      <ExpandableQandA question=' An Important Question' answer='How well does a student need to learn and practice writing coding, and for how long and how consistently should the exercise be  does a student need to learn and practice writing coding, and for how long'/>
      <ExpandableQandA question=' An critical Question' answer='I have been looking through some important aspects of critical writing can you please enlighten me have been looking through some important aspects of critical writing can you please'/>
      <ExpandableQandA question=' How to Live Life Question' answer='The best way to live life is in Love, Joy and Peace, coupled with being blessed and prosperous abundantly'/>
      <ExpandableQandA question=' How many ways are there to make an honest living in the earth' answer='Going by information gathered from a research carried out in the USA there are well around 32,000 professions,careers and job opportunities'/>
      <ExpandableQandA question='How to work' answer='Doing excellent work (The best way to work) starts by loving what one does, not just that but also the turmoils of labour as a process of individual capacity building and development'/>
    </Box>   
  </Box>        
)

export default index