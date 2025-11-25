import { IconButton } from "@mui/material";
import { useScreenSizeContext } from "../../context/useScreenSizeContext";
import { MenuOutlined } from "@mui/icons-material";

const CollapseBtn = () => {
    const {toggleSidebar} = useScreenSizeContext();
    return (
        <IconButton onClick={toggleSidebar}>
            <MenuOutlined />
        </IconButton>
    )
}

export default CollapseBtn;