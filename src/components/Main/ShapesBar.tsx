import React from "react";
import { shapesApi } from "../../services/shapesAPI";

function ShapesBar() {
  const { data: shapes } = shapesApi.useFetchShapesQuery();

  return (
    <>
      {shapes?.map((shape) => (
        <div key={shape.id}>
          <button className="m-3 shrink-0 snap-start first:snap-center">
            <img
              width={500}
              height={500}
              className="w-24 rounded-xl"
              src={shape.imageSrc}
              alt={shape.name}
            />
          </button>
          <h1>{shape.handSrc}</h1>
        </div>
      ))}
    </>
  );
}

export default ShapesBar;
