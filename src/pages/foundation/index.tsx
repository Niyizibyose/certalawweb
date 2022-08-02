import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import Image from 'next/image';
import Header from 'modules/_partials/Header';
import Footer from 'modules/_partials/Footer';
import FoundationArticle from 'modules/_partials/FoundationArticle';
import ProbonoArticle from 'modules/_partials/ProbonoArticle';
import DigitalGovernanceAritlce from 'modules/_partials/DigitalGovernanceAritlce';
import FoundationSteper from 'modules/_partials/FoundationSteper';

const ProBrono: NextPage = () => {
  return (
    <>
      <Head>
        <title>CERTA LAW</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col h-screen overflow-y-auto">
        <Header />
        <div className="relative bg-black cursor-default flex flex-col items-center justify-center min-h-[70vh] w-full">
          <Image
            src="/assets/images/foundation.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
            loading="lazy"
            // objectPosition="top"
            className="top-0 absolute z-0"
          />
          <div className="justify-end bg-gradient-to-t from-black to-white/25 top-0 h-full absolute flex flex-col items-center text-white w-full">
            <div className="text-3xl text-white md:text-6xl font-bold tracking-wide w-full md:max-w-6xl flex flex-col border-b border-white pb-4">
              <h1 className="">The Certa</h1>
              <h1 className="">Foundation.</h1>
            </div>
          </div>
        </div>
        <div className="bg-black p-4 md:p-8 text-white w-full flex flex-col items-center">
          <div className="flex flex-col w-full max-w-6xl relative">
            <FoundationArticle />
          </div>
        </div>

        <div className="relative bg-black cursor-default flex flex-col items-center justify-center min-h-[70vh] w-full">
          <Image
            src="/assets/images/foundation.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
            loading="lazy"
            // objectPosition="top"
            className="top-0 absolute z-0"
          />
          <div className="justify-end bg-gradient-to-t from-black to-white/25 top-0 h-full absolute flex flex-col items-center text-white w-full">
            <div className="text-3xl text-white md:text-6xl font-bold tracking-wide w-full md:max-w-6xl flex flex-col border-b border-white pb-4">
              <h1 className="">Pro-bono</h1>
            </div>
          </div>
        </div>
        <div className="bg-black p-4 md:p-8 text-white w-full flex flex-col items-center">
          <div className="w-full flex flex-col max-w-6xl">
            <ProbonoArticle />
          </div>
        </div>

        <div className="relative bg-black cursor-default flex flex-col items-center justify-center min-h-[70vh] w-full">
          <Image
            src="/assets/images/foundation.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
            loading="lazy"
            // objectPosition="top"
            className="top-0 absolute z-0"
          />
          <div className="justify-end bg-gradient-to-t from-black to-white/25 top-0 h-full absolute flex flex-col items-center text-white w-full">
            <div className="text-3xl text-white md:text-6xl font-bold tracking-wide w-full md:max-w-6xl flex flex-col border-b border-white pb-4">
              <h1 className="">The Centre for Law &</h1>
              <h1 className="">Digital Governance</h1>
            </div>
          </div>
        </div>
        <div className="bg-black p-4 md:p-8 text-white w-full flex flex-col items-center">
          <div className="w-full flex flex-col max-w-6xl">
            <DigitalGovernanceAritlce />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ProBrono;
