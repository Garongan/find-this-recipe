/* eslint-disable react/prop-types */
import { AppBar, Toolbar, Typography } from "@mui/material";
import SearchRecipe from "./SearchRecipe";

export default function Header({search}) {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          Find This Recipe
        </Typography>
        <SearchRecipe search={search} />
      </Toolbar>
    </AppBar>
  );
}
