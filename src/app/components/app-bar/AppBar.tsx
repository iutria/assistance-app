import { Box } from "../Box"
import { User } from "./components/User"
import './styles/app-bar.css'

export const AppBar = ({title}:{ title?: string, icon: any }) => {
  return (
    <Box className="app-bar">
      <Box className="flex gap-2 bg-green-500">
        {title}
      </Box>
      <User />
    </Box>
  )
}
