import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const services_menu = [
  {
    id: uuidv4(),
    title: "Heading",
    options: [
      "Single option",
      "Single option",
      "Single option",
      "Single option",
    ],
  },
  {
    id: uuidv4(),
    title: "Heading",
    options: [
      "Single option",
      "Single option",
      "Single option",
      "Single option",
    ],
  },
  {
    id: uuidv4(),
    title: "Heading",
    options: [
      "Single option",
      "Single option",
      "Single option",
      "Single option",
    ],
  },
  {
    id: uuidv4(),
    title: "Heading",
    options: [
      "Single option",
      "Single option",
      "Single option",
      "Single option",
    ],
  },
];

const ServicesSelection = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <a
        href="#"
        // onMouseOver={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        Services
      </a>
      {isOpen && (
        <div className="absolute -right-96 top-16 hidden w-max gap-8 rounded bg-white/90 p-5 font-thin text-black md:flex">
          {services_menu.map((item) => {
            return (
              <div key={item.id}>
                <h3>{item.title}</h3>
                <ul>
                  {item.options.map((option, index) => (
                    <li key={index}>{option}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ServicesSelection;
