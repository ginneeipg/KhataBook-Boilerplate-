"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import LoadingBar from "react-top-loading-bar";

function LoadingTopBar() {
  const ref = useRef<any>(null);
  const pathName = usePathname();
  const [isComplete, setIsComplete] = useState(false);



  return (
    <LoadingBar
      color="#f11946"
      progress={50}
      ref={ref}
      onLoaderFinished={() => setIsComplete(true)}
    />
  );
}

export default LoadingTopBar;
