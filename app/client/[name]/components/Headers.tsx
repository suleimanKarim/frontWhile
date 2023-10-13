import LogoWhile from "@/components/shared/LogoWhile";
import React from "react";

export default function Headers() {
  return (
    <div className="flex flex-row items-start h-12">
      <div className="flex items-center justify-center rounded-2xl text-indigo-700 h-10 w-10">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          ></path>
        </svg>
      </div>
      <LogoWhile />
    </div>
  );
}
