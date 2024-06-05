import React from "react";
import { render, screen } from "@testing-library/react";
import Index from "./Index";

test("renders Business Dashboard heading", () => {
  render(<Index />);
  const headingElement = screen.getByText(/Business Dashboard/i);
  expect(headingElement).toBeInTheDocument();
});

test("renders all StatBoxes", () => {
  render(<Index />);
  const revenueStat = screen.getByText(/Revenue/i);
  const salesStat = screen.getByText(/Sales/i);
  const customersStat = screen.getByText(/Customers/i);
  const growthStat = screen.getByText(/Growth/i);

  expect(revenueStat).toBeInTheDocument();
  expect(salesStat).toBeInTheDocument();
  expect(customersStat).toBeInTheDocument();
  expect(growthStat).toBeInTheDocument();
});
