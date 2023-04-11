import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { Stack } from "@mui/material";
import { BottomNavigationAction } from "@mui/material";
import { BottomNavigation } from "@mui/material";
import { Paper } from "@mui/material";
import { useState } from "react";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const menu = [
    { route: "/", id: 0 },
    { route: "/botinteractivo", id: 1 },
    { route: "/ventacruzada", id: 2 },
  ];

  return (
    <div>
      <Box component="div">
        {/* <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>*/}
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            const option = menu.filter((e) => e.id == newValue);
            console.log(option);
            navigate(option[0].route);
          }}
        >
          <BottomNavigationAction
            label="Questions"
            icon={<FavoriteIcon />}
          ></BottomNavigationAction>
          <BottomNavigationAction label="Soporte" icon={<SupportAgentIcon />} />
          <BottomNavigationAction label="Venta" icon={<AttachMoneyIcon />} />
        </BottomNavigation>
        {/*/</Box></Paper>*/}
      </Box>
    </div>
  );
}
