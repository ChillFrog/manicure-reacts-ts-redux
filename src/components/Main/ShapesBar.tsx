import React, { useState } from "react";
import { baseApi } from "../../services/baseAPI";
import Skeleton from "../common/Skeleton";
import row_1_col_1 from "../../assets/Shapes Images/almond_shape.webp";

function ShapesBar() {
  const { data: shapes, isLoading } = baseApi.useFetchShapesQuery();

  return (
    <div className="flex">
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
          <div className="flex" key={shape.id}>
            <button className="mx-3 my-3 flex h-32 w-28 shrink-0 items-center justify-center rounded-3xl bg-white">
              <img
                className=" h-32 rounded-xl"
                src={row_1_col_1}
                alt={shape.name}
              />
            </button>
            <button className="mx-3 my-3 flex h-32 w-28 shrink-0 items-center justify-center rounded-3xl bg-white">
              <img
                className=" h-32 rounded-xl"
                src={row_1_col_1}
                alt={shape.name}
              />
            </button>
            <button className="mx-3 my-3 flex h-32 w-28 shrink-0 items-center justify-center rounded-3xl bg-white">
              <img
                className=" h-32 rounded-xl"
                src={row_1_col_1}
                alt={shape.name}
              />
            </button>
          </div>
        ))}
    </div>
  );
}

export default ShapesBar;
