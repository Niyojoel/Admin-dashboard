import { Box } from '@mui/material'

const BoxWithHeight = ({children, sx, ref}) => {
  return (
    <Box height="75.3dvh" sx={sx} ref={ref}>{children}</Box>
  )
}

export default BoxWithHeight