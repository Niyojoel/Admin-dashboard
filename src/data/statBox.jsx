import { Email, PersonAdd, PointOfSale, Traffic  } from "@mui/icons-material"
import { useTheme } from "@mui/material";
import { tokens } from "../theme";

export const StatBox = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const iconStyles = { color: colors.greenAccent[600], fontSize: "26px" }

    const statBoxData = [ 
        {
            title:"12,361", 
            subtitle:"Emails sent", 
            progress:'0.75',
            increase:"+14%", 
            icon: <Email sx={iconStyles}/>
        },
        {
            title: "431,225", 
            subtitle: "Sales obtained", 
            progress: '0.5',
            increase: "+21%",
            icon: <PointOfSale sx={iconStyles}/>, 
        },
            {title:"32,441",
            subtitle:"New Clients",
            progress:"0.30",
            increase:"+5%",
            icon: <PersonAdd sx={iconStyles}/>,
        },
        {
            title: "1,325,134",
            subtitle: "Traffic Received",
            progress: "0.80",
            increase: "+43%",
            icon: <Traffic sx={iconStyles}/>
        }
    ]

    return {statBoxData}
}