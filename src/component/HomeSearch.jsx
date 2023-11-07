"use client";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { useRouter } from "next/navigation";

function HomeSearch() {
  const router = useRouter();
  const [input, setInput] = useState();
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  }
  async function randomSearch() {
    setRandomSearchLoading(true);
    const response = await fetch("https://random-word-api.herokuapp.com/word");
    const data = await response.json();
    const word = data[0];
    if (!response) return;
    router.push(`/search/web?searchTerm=${word}`);
    setRandomSearchLoading(false);
  }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex w-full mt-5 mx-auto mx-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl"
      >
        <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow focus:outline-none"
          type="text"
        />
        <BsFillMicFill />
      </form>
      <div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:flex-row mt-8">
        <button onClick={handleSubmit} className="btn">
          Google Search
        </button>
        <button
          onClick={randomSearch}
          className="btn flex justify-center items-center disabled:opacity-80"
          disabled={randomSearchLoading}
        >
          {randomSearchLoading ? (
            <img src="spinner.svg" alt="loading" className="h-6 text-center" />
          ) : (
            "I am feeling lucky"
          )}
        </button>
      </div>
    </>
  );
}

export default HomeSearch;
