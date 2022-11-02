import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { Stack } from "@mui/material";

export default function Navbar() {
  return (
    <Box component="div" className="navbar">
      <Box component="div">
        <Button variant="contained" size="small">
          <Link to="/">Sentimientos</Link>
        </Button>
      </Box>
      <Box component="div">
        <Button variant="contained" size="small">
          <Link to="/botinteractivo"> Venta cruzada </Link>
        </Button>
      </Box>
      <Box component="div">
        <Button variant="contained" size="small">
          <Link to="/ventacruzada"> Bot interactivo</Link>
        </Button>
      </Box>
    </Box>
  );
}
