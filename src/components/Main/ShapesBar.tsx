import React from "react";
import { shapesApi } from "../../services/shapesAPI";

function ShapesBar() {
  const {
    data: shapes,
    isLoading,
    isFetching,
  } = shapesApi.useFetchShapesQuery();

  return (
    <>
      {isLoading ||
        (isFetching && (
          <div className="flex w-screen items-center justify-center">
            <div
              className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          </div>
        ))}
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
        </div>
      ))}
    </>
  );
}

export default ShapesBar;
