import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import Header from 'modules/_partials/Header';
import Footer from 'modules/_partials/Footer';

const InsightArticle: NextPage = () => {
  return (
    <>
      <Head>
        <title>CERTA LAW</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col h-screen overflow-y-auto">
        <Header />
        <div className="bg-white p-4 md:px-8 py-8 md:py-12 flex flex-col items-center flex-grow w-full">
          <div className="w-full md:max-w-6xl flex flex-col">
            <h1 className="text-2xl md:text-4xl font-semibold">
            ADJUDICATION: RWANDA’S DELAYED POTENTIAL IN CONSTRUCTION DISPUTES
            </h1>
            <div className="mt-3 mb-1 flex-wrap flex items-center text-xs tracking-wide space-x-4">
              <p>Published 14 June 2022.</p>
              <p>Author: Legal Associate</p>
            </div>
            <img
              src="/assets/images/estate.jpg"
              alt=""
              className="object-contain h-[400px] md:h-[500px] w-full bg-black"
            />
            <article className="inline-grid sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-5 mt-3">
              <section>
              Disputes in contracts are an inevitability that cannot be avoided. The construction 
              industry is no exception to the susceptibility to disputes, and its very distinctive 
              nature, in particular, poses a legal question about how to best handle such disputes in a 
              timely manner that maintains a consistent cashflow. A construction boom is on the rise in 
              Rwanda and in the last two decades, it has experienced an exponential growth with earnings 
              from the sector rising over 60% since 2012. GDP From Construction in Rwanda increased to 181 RWF
               Billion in the first quarter of 2022 from 180 RWF Billion in the fourth quarter of 2021 courtesy of the National Institute of Statistics of Rwanda. It contributes around 8 percent
               to national employment.
              </section>
              <section>
              It is a no brainer that the government’s investor-friendly policy has contributed a great 
              deal to this growth but factors such as the emerging middle class which has prompted the growth 
              of the real estate sub-sector in affordable housing, government’s massive investment in 
              infrastructure among others have had their share of contribution to this growth.
              Yet, as the construction industry grows so do disputes arising from construction projects and 
              contracts.The uncertain and complex nature of construction projects makes such long-term 
              transactions susceptible to disputes as it is almost impossible to cover all the tiny details 
              and foresee every eventuality at the outset.
              </section>
              <section>
              The occurrence of disputes can be devastating especially when projects haven’t been completed. The
              implication of such as occurrence is that projects can be put on hold until such disputes are settled, and in
              instances where they are not, cashflow is greatly affected, a crucial tool for the day-to-day running of
construction projects. Dispute resolution therefore, steps in as a form of damage control and aims to
restore parties to their former positions before the dispute arose.
Rwandan law avails a number of remedies parties can resort to in the occurrence of disputes namely;
              </section>
            </article>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default InsightArticle;
