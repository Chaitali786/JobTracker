import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1, mb: 4 }}>
      <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
        <Toolbar>
          <WorkIcon sx={{ mr: 2 }} />

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold" }}
          >
            JobLog Tracker
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
