import { imageProvider } from "@/public/images/imageProvide";
import React from "react";
import { Button } from "../Button";
import Product from "../Product";

// Product.test.tsx
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// Product.test.tsx
// --- Manual Mocks ---

// Mock for imageProvider
jest.mock("@/public/images/imageProvide", () => ({
  imageProvider: {
    banner: "/test-banner.png",
  },
}));

// Mock for next/image
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    // Simulate the <img> element for testing
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

// --- MockButtonProps interface ---
interface MockButtonProps {
  children: React.ReactNode;
  className: string;
}

// --- Begin Test Suite ---

describe("Product() Product method", () => {
  // Happy Path Tests
  describe("Happy Paths", () => {
    test("renders all main elements: image, title, price, and Buy Now button", () => {
      // This test ensures the Product component renders its main UI elements correctly.
      render(<Product />);
      // Image
      const img = screen.getByAltText("product");
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute("src", "/test-banner.png");
      expect(img).toHaveAttribute("width", "160");
      expect(img).toHaveAttribute("height", "160");
      // Title
      expect(
        screen.getByText(
          "Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)"
        )
      ).toBeInTheDocument();
      // Price
      expect(screen.getByText("From $999.00")).toBeInTheDocument();
      // Buy Now Button
      expect(screen.getByText("Buy Now")).toBeInTheDocument();
    });

    test("Buy Now button has correct className and children", () => {
      // This test checks that the Button receives the correct className and children from Product.
      render(<Product />);
      const buyNowButton = screen.getByText("Buy Now");
      expect(buyNowButton).toHaveClass(
        "px-4 py-2 bg-main_black text-main_white"
      );
    });

    test("Image alt attribute is set correctly", () => {
      // This test ensures the alt attribute for the product image is set as expected.
      render(<Product />);
      const img = screen.getByAltText("product");
      expect(img).toBeInTheDocument();
    });
  });

  // Edge Case Tests
  describe("Edge Cases", () => {
    test("renders with a different imageProvider.banner value", () => {
      // This test simulates a different imageProvider.banner value to ensure the image src updates.
      // Override the mock for this test
      (imageProvider as any).banner = "/another-banner.png";
      render(<Product />);
      const img = screen.getByAltText("product");
      expect(img).toHaveAttribute("src", "/another-banner.png");
      // Reset for other tests
      (imageProvider as any).banner = "/test-banner.png";
    });

    test("Button renders with custom children and className (integration)", () => {
      // This test demonstrates how the Product component passes children and className to Button.
      // We'll render Button directly to simulate the integration.
      const mockProps: MockButtonProps = {
        children: "Custom Buy",
        className: "custom-class",
      };
      render(<Button {...(mockProps as any)} />);
      const customButton = screen.getByText("Custom Buy");
      expect(customButton).toHaveClass("custom-class");
    });

    test("Product renders correctly even if imageProvider.banner is an empty string", () => {
      // This test checks the edge case where the image src is an empty string.
      (imageProvider as any).banner = "";
      render(<Product />);
      const img = screen.getByAltText("product");
      expect(img).toHaveAttribute("src", "");
      // Reset for other tests
      (imageProvider as any).banner = "/test-banner.png";
    });

    test("Product renders correctly if imageProvider.banner is a long string", () => {
      // This test checks the edge case where the image src is a very long string.
      const longSrc = "/".padEnd(300, "a") + ".png";
      (imageProvider as any).banner = longSrc;
      render(<Product />);
      const img = screen.getByAltText("product");
      expect(img).toHaveAttribute("src", longSrc);
      // Reset for other tests
      (imageProvider as any).banner = "/test-banner.png";
    });
  });
});
