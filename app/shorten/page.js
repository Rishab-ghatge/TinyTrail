"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";

const page = () => {
  const [url, seturl] = useState("");
  const [shorturl, setshorturl] = useState("");
  const [generated, setGenerated] = useState("");

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shorturl: shorturl,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
        seturl("")
        setshorturl("")
        console.log(result)
        alert(result.message)
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="md:mx-auto max-w-lg bg-violet-200 my-16 p-10 rounded-xl flex flex-col gap-5 mx-4">
      <h1 className="text-center font-bold text-2xl">Create Your Tiny URLs</h1>
      <div className="flex flex-col gap-2">
        <input
          className="p-2 py-2 focus:outline-violet-400 rounded-lg"
          value={url}
          type="text"
          placeholder="Drop your long link here!"
          onChange={(e) => {
            seturl(e.target.value);
          }}
        />

        <input
          className="p-2 py-2 focus:outline-violet-400 rounded-lg"
          value={shorturl}
          type="text"
          placeholder="Want a custom name? Type it here"
          onChange={(e) => {
            setshorturl(e.target.value);
          }}
        />

        <button
          onClick={generate}
          type="button"
          className="text-white bg-gradient-to-br from-purple-400 to-blue-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-2 py-2 text-center me-2 mb-2">
          Generate
        </button>
      </div>
      {generated && <> <span className="font-bold text-xl">Your Link:</span><code><Link target="_blank" href={generated}>{generated}</Link></code> </>}
    </div>
  );
};

export default page;
