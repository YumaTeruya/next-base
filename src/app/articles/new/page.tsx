"use client";

import React, { useState } from "react";
import { createArticle } from "../../../blogApi";
import { useRouter } from "next/navigation";

function createBlogPage() {
  const router = useRouter();
  const [id, setId] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await createArticle(id, title, contents);

    router.push("/");
    router.refresh();
  };

  return (
    <div className="min-h-screen py-8 px-4 md:px-12">
      <h2 className="text-2xl font-bold mb-4">Create Article</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-slate-200 p-6 rounded shadow-lg"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            URL
          </label>
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            タイトル
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            本文
          </label>
          <textarea
            value={contents}
            onChange={(e) => setContents(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40"
          ></textarea>
        </div>

        <button
          type="submit"
          //   className={`py-2 px-4 border rounded-md ${
          //     loading
          //       ? "bg-orange-300 cursor-not-allowed"
          //       : "bg-orange-400 hover:bg-orange-500"
          //   } text-white font-semibold focus:outline-none`}
          //   disabled={loading}
        >
          作成
        </button>
      </form>
    </div>
  );
}

export default createBlogPage;
