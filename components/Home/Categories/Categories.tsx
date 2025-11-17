import { Container } from "@/components/commoncomponents/Container";
import { Category } from "@/types/types";
import React from "react";
import { BiCamera, BiHeadphone, BiPhone } from "react-icons/bi";
import { FaComputer } from "react-icons/fa6";
import { GiAmericanFootballBall } from "react-icons/gi";

export const Categories = () => {
  const category: Category[] = [
    {
      id: 1,
      name: "phones",
      path: "/",
      icon: <BiPhone />,
    },
    {
      id: 2,
      name: "computers",
      path: "/about",
      icon: <FaComputer />,
    },
    {
      id: 3,
      name: "smart phones",
      path: "/contact",
      icon: <BiPhone />,
    },
    {
      id: 4,
      name: "cameras",
      path: "/blog",
      icon: <BiCamera />,
    },
    {
      id: 5,
      name: "headphones",
      path: "/blog",
      icon: <BiHeadphone />,
    },
    {
      id: 6,
      name: "Gaming",
      path: "/blog",
      icon: <GiAmericanFootballBall />,
    },
  ];
  return (
    <div className="bg-secondary_charcoal py-4">
      <Container>
        <div>
          <ul className="grid grid-cols-6 items-center">
            {category?.map((item, index) => {
              const isLastItem = index === category.length - 1;

              return (
                <li
                  key={item.id}
                  className={`
              flex items-center gap-x-5 text-main_white px-5  border-r border-r-main_white cursor-pointer 
              ${isLastItem ? " justify-self-end border-r-0" : ""} `}
                >
                  <span>{item.icon}</span>
                  <span className="font-medium text-lg">{item.name}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </div>
  );
};
