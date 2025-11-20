"use client";

import { Suspense, useState } from "react";
import ProductList from "./ProductList";

export default function Tabs() {
  const [active, setActive] = useState("smartphones");

  return (
    <div>
      {/* TAB BUTTONS */}
      <ul className="flex border-b border-gray-200 ">
        <li>
          <button
            onClick={() => setActive("smartphones")}
            className={`p-4  cursor-pointer  uppercase ${
              active === "smartphones" &&
              "bg-secondary_charcoal text-main_white "
            }`}
          >
            smartphones
          </button>
        </li>

        <li>
          <button
            onClick={() => setActive("tablets")}
            className={`p-4  uppercase cursor-pointer ${
              active === "tablets" && "bg-secondary_charcoal text-main_white"
            }`}
          >
            tablets
          </button>
        </li>

        <li>
          <button
            onClick={() => setActive("mobile-accessories")}
            className={`p-4 cursor-pointer uppercase ${
              active === "mobile-accessories" &&
              "bg-secondary_charcoal text-main_white "
            }`}
          >
            mobile-accessories
          </button>
        </li>
      </ul>

      {/* SERVER COMPONENT RERENDER */}
      <Suspense fallback={<div>Loading...</div>}>
        <ProductList category={active} />
      </Suspense>
    </div>
  );
}
