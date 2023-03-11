import React, { useState } from "react";
import { baseApi } from "../../services/baseAPI";
import Skeleton from "../common/Skeleton";

function ShapesBar() {
  const { data: shapes, isLoading } = baseApi.useFetchShapesQuery();
  const [loading, setLoading] = useState(true);

  return (
    <div className="flex overflow-x-hidden">
      {isLoading && (
        <>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </>
      )}
      {shapes &&
        shapes.map((shape) => (
          <div key={shape.id}>
            <button className="m-3 shrink-0">
              <img
                width={500}
                height={500}
                className="h-32 w-24 rounded-xl"
                src={shape.imageSrc}
                alt={shape.name}
              />
            </button>
          </div>
        ))}
    </div>
  );
}

export default ShapesBar;
