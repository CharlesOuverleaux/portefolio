import { FC } from "react";

export const SvgPattern: FC = () => {
  return (
    <svg
      className="absolute top-0 right-0 hidden -mt-20 -mr-20 lg:block"
      width={404}
      height={384}
      fill="none"
      viewBox="0 0 404 384"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="de316486-4a29-4312-bdfc-fbce2132a2c1"
          x={0}
          y={0}
          width={20}
          height={20}
          patternUnits="userSpaceOnUse"
        >
          <rect
            x={0}
            y={0}
            width={4}
            height={4}
            className="text-gray-200"
            fill="currentColor"
          />
        </pattern>
      </defs>
      <rect
        width={404}
        height={384}
        fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
      />
    </svg>
  );
};
