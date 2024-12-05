import { render, screen } from "@testing-library/react";
import { CommonText } from "./index";

describe("CommonText", () => {
  it("renders text correctly", () => {
    render(<CommonText text="Test Text" />);
    expect(screen.getByText("Test Text")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<CommonText text="Test Text" className="custom-class" />);
    const element = screen.getByText("Test Text");
    expect(element).toHaveClass("custom-class");
    expect(element).toHaveClass("flex");
    expect(element).toHaveClass("justify-center");
    expect(element).toHaveClass("items-center");
  });

  it("renders without optional className", () => {
    render(<CommonText text="Test Text" />);
    const element = screen.getByText("Test Text");
    expect(element).toHaveClass("flex");
    expect(element).toHaveClass("justify-center");
    expect(element).toHaveClass("items-center");
  });
});
