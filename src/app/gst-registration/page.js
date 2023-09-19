import React from "react";
import SectionContainer from "../components/SectionContainer";
import Link from "next/link";
import RequiredDocuments from "../components/RequiredDocuments";
import Accordion from "../components/accordion/Accordion";

const GSTRegistration = () => {
  return (
    <>
      <SectionContainer>
        <h1 className="my-10 text-center text-5xl font-semibold">
          GST Registration
        </h1>
        <div className="flex">
          <aside className="mr-10 hidden basis-1/5 border-r-2 md:block">
            <ul className="flex flex-col gap-5 text-xl font-semibold">
              <li>Intro</li>
              <li>Benifits</li>
              <li>Documents</li>
              <li>FAQ</li>
            </ul>
          </aside>
          <main className="flex basis-4/5 flex-col gap-10">
            <div id="intro">
              <h2 className="text-3xl font-semibold">Intro</h2>
              <p className=" text-xl text-FontDark200 md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, obcaecati. Incidunt harum dolore iste ullam
                placeat, sequi inventore. Reprehenderit, non.
              </p>
            </div>
            <div id="benifits">
              <h2 className="text-3xl font-semibold">Benifits</h2>
              <p className=" text-xl text-FontDark200 md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, obcaecati. Incidunt harum dolore iste ullam
                placeat, sequi inventore. Reprehenderit, non.
              </p>
            </div>
            <div id="documents">
              <h2 className="mb-6 text-3xl font-semibold">Documents</h2>
              <RequiredDocuments />
            </div>
            <div id="faq">
              <h2 className="text-3xl font-semibold">FAQ</h2>
              <Accordion />
            </div>
          </main>
        </div>
      </SectionContainer>
    </>
  );
};

export default GSTRegistration;
