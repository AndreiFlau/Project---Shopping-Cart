import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Shop from "./Shop";
import { BrowserRouter as Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("Shop component", () => {
  const products = [
    {
      title: "product1",
      image: "/image.jpg",
      price: 100,
      description: "A product 1",
    },
    {
      title: "product2",
      image: "/image2.jpg",
      price: 50,
      description: "A product 2",
    },
  ];
  it("renders loading state", () => {
    render(
      <Router>
        <Shop products={[]} loading={true} error={null} />
      </Router>
    );
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("show an error", () => {
    render(
      <Router>
        <Shop products={[]} loading={false} error={true} />
      </Router>
    );
    expect(screen.getByText(/An error happened while trying to load the page/i)).toBeInTheDocument();
  });

  it("shows the items", () => {
    render(
      <Router>
        <Shop products={products} loading={false} error={false} />
      </Router>
    );
    products.forEach((product) => {
      expect(screen.getByText(product.title)).toBeInTheDocument();
      expect(screen.getByAltText(product.title)).toBeInTheDocument();
      expect(screen.getByText(product.price)).toBeInTheDocument();
      expect(screen.getByText(product.description)).toBeInTheDocument();
    });
  });

  it("renders the shopping cart on the screen", () => {
    render(
      <Router>
        <Shop products={[]} loading={false} error={false} />
      </Router>
    );
    expect(screen.getByText(/shopping cart/i)).toBeInTheDocument();
  });

  it("increases the number of items in the cart", async () => {
    const user = userEvent.setup();
    render(
      <Router>
        <Shop products={products} loading={false} error={false} />
      </Router>
    );
    expect(screen.getByRole("link", { name: /shopping cart/i })).toBeInTheDocument();
    const buttons = screen.getAllByRole("button", { name: /add to cart/i });
    const firstBtn = buttons[0];
    await user.click(firstBtn);
    await user.click(firstBtn);
    expect(screen.getByRole("link", { name: "Shopping Cart (2)" })).toBeInTheDocument();
  });
});
