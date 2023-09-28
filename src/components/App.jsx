/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { getInformation, randomGetList, searchRecipe } from "./api.js";
import { Fragment } from "react";
import { CssBaseline } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { useState } from "react";
import Header from "./Header/Header.jsx";
import ErrorPage from "./ErrorPage.jsx";
import RecipeList from "./RecipeList/RecipeList.jsx";

function App() {
  const [recipe, setRecipe] = useState([]);
  const [isError, setIsError] = useState(false);

  const handleSearch = async (query) => {
    if (query.length > 3) {
      const search = await searchRecipe(query);
      const id = search.results.map((item) => item.id);
      const idString = id.join(",");
      await getInformation(idString).then((results) => {
        setRecipe(results);
      });
    }
  };

  useEffect(() => {
    randomGetList()
      .then((results) => {
        if (results.recipes == null) {
          setIsError(true);
        } else {
          setRecipe(results.recipes);
        }
      })
      .catch(() => {
        setIsError(true);
      });
  }, []);

  return (
    <Fragment>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        {/* header start */}
        <Header search={handleSearch} />
        {/* header end */}

        {/* main isi start */}
        {isError ? (
          <Box component="main" padding={3}>
            <Toolbar />
            {/* error page start */}
            <ErrorPage />
            {/* error page end */}
          </Box>
        ) : (
          <Box component="main" padding={3}>
            <Toolbar />
            {/* recipe start */}
            <RecipeList recipe={recipe} />
            {/* recipe end */}
          </Box>
        )}

        {/* main isi end */}
      </Box>
    </Fragment>
  );
}

export default App;
