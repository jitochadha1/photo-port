import React from "react";
import PhotoList from "../Photolist/index.js";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Gallery({ currentCategory }) {
  const { name, description } = currentCategory;
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
      <p>{description}</p>
      <PhotoList category={name} />
    </section>
  );
}

export default Gallery;