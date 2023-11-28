"use client";
import React from "react";

const Error = ({ reset }: { reset: () => void }) => {
  return (
    <>
      <div>Error</div>
      <button onClick={reset}>リフレッシュ</button>
    </>
  );
};

export default Error;
