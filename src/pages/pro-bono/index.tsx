import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import Image from 'next/image';
import Header from 'modules/_partials/Header';
import Footer from 'modules/_partials/Footer';

const ProBrono: NextPage = () => {
  return (
    <>
      <Head>
        <title>CERTA LAW</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col h-screen overflow-y-auto">
        <Header />
        <div className="relative bg-primary p-4 md:p-8 cursor-default flex flex-col items-center justify-center  min-h-[70vh] w-full bg-center bg-no-repeat bg-cover">
          <Image
            src="/assets/images/slide2.png"
            alt=""
            layout="fill"
            objectFit="cover"
            loading="lazy"
            // objectPosition="top"
            className="top-0 absolute z-0"
          />
          <div className="top-0 h-full absolute flex flex-col justify-center text-white w-full md:max-w-6xl">
            <h2 className="text-2xl text-white md:text-4xl font-bold">
              The Certa Law Foundation.
            </h2>
            <h2 className="mt-1 italic">Justice for everyone</h2>
          </div>
        </div>
        <div className="bg-white p-4 md:px-8 py-8 md:py-12 flex flex-col items-center flex-grow w-full">
          <div className="w-full md:max-w-6xl flex flex-col">
            <h1 className="text-xl md:text-2xl font-semibold pb-4">
              Our social commitment to enable justice for just
              everyone.
            </h1>
            <article className="inline-grid sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-5 mt-3">
              <section className="flex flex-col">
                <h1>Human Right Law</h1>
                At CERTA we are against any kind of injustice. Much of
                what wedo here is pro bono. We represent individuals
                who have beenvictims of sexual gender-based violence,
                defilement,reproductive rights such as surrogacy and
                abortion, rights of thearrested persons, right
                todefence and representation, victimsand witnesses
                protection among others. It is ourpassion
                andresponsibility to make sure that the guaranteed
                constitutionalrights arerespected, fulfilled and
                protected in Rwanda. .
              </section>

              <section className="flex flex-col">
                <h1>WILLS, TRUSTS & PROBATE LAW:</h1>
                CERTA is part of the leading law firms in Rwanda
                providing FullRange Estate PlanningServices. We advise
                our clients and helpthem draft all sorts of trusts and
                wills includingliving trusts, alast will and
                testament, durable powers of attorney, and a
                livingwill. <br />
                Planningfor future is very critical, it raises issues
                ofexecutors, heirs and beneficiaries we
                accordinglyassist inprobate matters such as a breach
                of fiduciary duty or a claimagainst executor. <br />
                Given the novelty of regulation of wills and trusts in
                Rwanda,our attorneys have quicklyspecialised in Wills
                and Trustsregistration, interpretation, professional
                execution and theentire administration of estate
                planning. .
              </section>

              <section className="flex flex-col">
                <h1>MEDICAL LAW</h1>
                In Rwanda, Medical law is a nascent area of practice.
                However, at CERTA our lawyers have the in-depth
                knowledge in medical malpractice, negligence and
                confidentiality of patient data. When handling this
                kind of sensitive cases, we are obliged by law and
                legal ethics to observe the rights and
                responsibilities of medical professionals and their
                patients. We have successfully represented hospitals,
                patients, and individual medical professionals in
                surgical claims, medical liability, and failure to
                observe medical procedures. Our lawyers are as well
                very conversant and highly experienced in advising the
                medical statutory bodies and doctors in matters
                related to professional misconduct, and breaches of
                ethical code.
                <div className="flex flex-col mt-6">
                  <button
                    type="button"
                    className="hover:bg-gray-200 hover:text-primary uppercase px-12 py-2 rounded-lg bg-brand-yellow text-white"
                  >
                    Download report(pdf)
                  </button>
                </div>
              </section>
              <section className="flex flex-col">
                <h1>INSOLVENCY LAW</h1>
                CERTA Law regularly advices its clients on various
                aspects of insolvency and bankruptcy, both for
                corporates and individuals. Using the available legal
                tools, we help our clients to: <br />
                • Voluntarily wind-up company’s operations <br />
                • Manage the bankruptcy process <br />
                • Restructure the business and re-finance and
                renegotiate the credit terms <br />
                • Handle the compulsory liquidation and <br />
                • Company administration <br /> <br />
                We understand that usually for our client to approach
                us forinsolvency services it isbecause the client’s
                company hasreached a very critical moment of its life.
                We thereforehandlethe case with prudence and due
                diligence. The overridingobjective here is to helpthe
                client re-gain the moment of thebusiness operations or
                if not possible, transition wellwith noharm done. .
              </section>
            </article>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ProBrono;
