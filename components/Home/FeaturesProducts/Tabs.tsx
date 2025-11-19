"use client";

import { Suspense, useState } from "react";
import ProductList from "./ProductList";

export default function Tabs() {
  const [active, setActive] = useState("smartphones");

  return (
    <div>
      {/* TAB BUTTONS */}
      <ul className="flex border-b border-gray-200">
        <li>
          <button
            onClick={() => setActive("smartphones")}
            className={`p-4 ${
              active === "smartphones" && "bg-neutral-secondary-soft"
            }`}
          >
            smartphones
          </button>
        </li>

        <li>
          <button
            onClick={() => setActive("tablets")}
            className={`p-4 ${
              active === "tablets" && "bg-neutral-secondary-soft"
            }`}
          >
            tablets
          </button>
        </li>

        <li>
          <button
            onClick={() => setActive("mobile-accessories")}
            className={`p-4 ${
              active === "mobile-accessories" && "bg-neutral-secondary-soft"
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
