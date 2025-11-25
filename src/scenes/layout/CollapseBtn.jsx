import { IconButton } from "@mui/material";
import { useScreenSizeContext } from "../../context/useScreenSizeContext";
import { CancelOutlined, MenuOutlined } from "@mui/icons-material";
import { AiOutlineClose} from "react-icons/ai"

const CollapseBtn = ({isMobileBarIcon = false}) => {
    const {toggleSidebar, isCollapsed} = useScreenSizeContext();

    if(isMobileBarIcon) return (
        <IconButton onClick={toggleSidebar}>
            <MenuOutlined />
        </IconButton>
    )
    
    return (
        <IconButton onClick={toggleSidebar}>
            {isCollapsed ? <MenuOutlined /> : <AiOutlineClose/>}
        </IconButton>
    )
}

export default CollapseBtn;