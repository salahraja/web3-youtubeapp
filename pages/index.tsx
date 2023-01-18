import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      <Head>
        <title>YouTube Clone on Web3</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-6xl font-bold text-slate-900">
          Web3 YouTube Clone
        </h1>
        <h3 className="text-2xl mt-8 text-slate-900">
          Next.js, TailwindCSS, Solidity, IPFS, The Graph and Polygon
        </h3>
      </div>
    </>
  );
};

export default Home;
