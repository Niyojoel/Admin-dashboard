import { Box } from '@mui/material'

const BoxWithHeight = ({children, sx, ref}) => {
  return (
    <Box height="74.8dvh" sx={sx} ref={ref}>{children}</Box>
  )
}

export default BoxWithHeight