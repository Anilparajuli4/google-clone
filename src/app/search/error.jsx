"use client";
import React, { useEffect } from "react";

export default function error({ error, reset }) {
  useEffect(() => {
    console.log("Error: ", error);
  }, [error]);
  return (
    <div className="flex flex-col justify-center items-center mt-8">
      <h1 className="text-xl mb-4">Something went wrong</h1>
      <button
        className="text-blue-500 hover:text-blue-700"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
