/* eslint-disable react/prop-types */
import { ImageList, ImageListItem } from "@mui/material";
import RecipeCard from "../RecipeCard/RecipeCard";

export default function RecipeList ({recipe}) {
  return (
    <ImageList
      variant="masonry"
      sx={{
        columnCount: {
          xs: "1 !important",
          sm: "2 !important",
          md: "3 !important",
          lg: "3 !important",
          xl: "5 !important",
        },
        overflowY: "visible",
      }}
      gap={20}
    >
      {recipe.map((item) => (
        <ImageListItem key={item.id}>
          <RecipeCard
            img={item.image}
            title={item.title}
            summary={item.summary}
            instructions={item.instructions}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
