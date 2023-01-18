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
        <title>Salah&apos;s Website</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    </>
  );
};

export default Home;
