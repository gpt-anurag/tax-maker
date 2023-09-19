import React from "react";
import { v4 as uuidv4 } from "uuid";
import SingleAccordionItem from "./SingleAccordionItem";

const accordion_data = [
  {
    id: uuidv4(),
    question: "What is GST and GSTIN?",
    answer:
      "Goods and Services Tax(GST) is a comprehensive tax levied on manufacture, trade and services across India. From 1st July, 2017 GST has replaced most of Centre and State imposed indirect taxes like VAT, Service Tax , Excise etc. Goods and Services Tax Identification Number (GSTIN) is a 15 digits state-wise PAN-based number to be used to identify businesses registered under GST. <a>Click here</a> to know your GSTIN.",
  },
  {
    id: uuidv4(),
    question: "What is GST and GSTIN?",
    answer:
      "Goods and Services Tax(GST) is a comprehensive tax levied on manufacture, trade and services across India. From 1st July, 2017 GST has replaced most of Centre and State imposed indirect taxes like VAT, Service Tax , Excise etc. Goods and Services Tax Identification Number (GSTIN) is a 15 digits state-wise PAN-based number to be used to identify businesses registered under GST. <a>Click here</a> to know your GSTIN.",
  },
  {
    id: uuidv4(),
    question: "What is GST and GSTIN?",
    answer:
      "Goods and Services Tax(GST) is a comprehensive tax levied on manufacture, trade and services across India. From 1st July, 2017 GST has replaced most of Centre and State imposed indirect taxes like VAT, Service Tax , Excise etc. Goods and Services Tax Identification Number (GSTIN) is a 15 digits state-wise PAN-based number to be used to identify businesses registered under GST. <a>Click here</a> to know your GSTIN.",
  },
  {
    id: uuidv4(),
    question: "What is GST and GSTIN?",
    answer:
      "Goods and Services Tax(GST) is a comprehensive tax levied on manufacture, trade and services across India. From 1st July, 2017 GST has replaced most of Centre and State imposed indirect taxes like VAT, Service Tax , Excise etc. Goods and Services Tax Identification Number (GSTIN) is a 15 digits state-wise PAN-based number to be used to identify businesses registered under GST. <a>Click here</a> to know your GSTIN.",
  },
  {
    id: uuidv4(),
    question: "What is GST and GSTIN?",
    answer:
      "Goods and Services Tax(GST) is a comprehensive tax levied on manufacture, trade and services across India. From 1st July, 2017 GST has replaced most of Centre and State imposed indirect taxes like VAT, Service Tax , Excise etc. Goods and Services Tax Identification Number (GSTIN) is a 15 digits state-wise PAN-based number to be used to identify businesses registered under GST. <a>Click here</a> to know your GSTIN.",
  },
];

const Accordion = () => {
  return (
    <section className="flex flex-col gap-5 p-4">
      {accordion_data.map((item) => {
        return (
          <div key={item.id} className="">
            <SingleAccordionItem />
          </div>
        );
      })}
    </section>
  );
};

export default Accordion;
