import ImageSearchResult from "@/component/ImageSearchResult";

import Link from "next/link";
import React from "react";

async function WebImagePage({ searchParams }) {
  await new Promise((resolve) => setTimeout(resolve, 10000));
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&searchType=image`
  );
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  const data = await response.json();
  const results = data.items;
  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center p-10">
        <h1 className="text-3xl">No results found</h1>
        <p className="text-lg">
          Try searching for something else or go back to the homepage
          <Link href="/" className="text-blue-500 ml-2 hover:text-blue-700">
            Home
          </Link>
        </p>
      </div>
    );
  }

  return <>{results && <ImageSearchResult results={data} />}</>;
}

export default WebImagePage;
