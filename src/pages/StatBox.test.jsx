import React from "react";
import { render, screen } from "@testing-library/react";
import { FaDollarSign } from "react-icons/fa";
import StatBox from "../components/StatBox";

test("renders StatBox with correct label and value", () => {
  render(<StatBox icon={FaDollarSign} label="Revenue" value="$50,000" change="+5%" />);
  const labelElement = screen.getByText(/Revenue/i);
  const valueElement = screen.getByText(/\$50,000/i);
  const changeElement = screen.getByText(/\+5%/i);

  expect(labelElement).toBeInTheDocument();
  expect(valueElement).toBeInTheDocument();
  expect(changeElement).toBeInTheDocument();
});
