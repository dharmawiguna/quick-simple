import React from "react";
import Image from "next/image";

type Props = {
  size?: number;
};

const Loading = ({ size = 100 }: Props) => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <Image
        src={"/loading.svg"}
        width={size}
        height={size}
        className="animate-pulse duration-800"
        alt="loading"
      />
    </div>
  );
};

export default Loading;
