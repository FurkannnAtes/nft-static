import { Collapse } from "antd";
import React from "react";
const text = `
Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis asperiores minima in esse corporis quas labore ea praesentium autem facilis quidem veniam eius deserunt illo, totam, blanditiis itaque aliquam alias?   
`;
const getItems = () => [
  {
    key: "1",
    label: "This is panel header 1",
    children: <p>{text}</p>,
  },
  {
    key: "2",
    label: "This is panel header 2",
    children: <p>{text}</p>,
  },
  {
    key: "3",
    label: "This is panel header 3",
    children: <p>{text}</p>,
  },
  {
    key: "4",
    label: "This is panel header 4",
    children: <p>{text}</p>,
  },
  {
    key: "5",
    label: "This is panel header 5",
    children: <p>{text}</p>,
  },
  {
    key: "6",
    label: "This is panel header 6",
    children: <p>{text}</p>,
  },
];
const FAQ = () => {
  return (
    <div id="faq" className="container">
      <div className="font-extrabold mb-10 text-4xl md:text-6xl flex flex-col gap-2 text-transparent text-center  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">
        F.A.Q
      </div>
      <Collapse
        accordion
        className="faq-collapse"
        bordered={false}
        defaultActiveKey={["1"]}
        items={getItems()}
      />
      );
    </div>
  );
};

export default FAQ;
