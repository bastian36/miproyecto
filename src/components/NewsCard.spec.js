import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import NewsCard from "./NewsCard";

describe("NewsCard Component", () => {
  let onClick;

  const props = {
    thumb: "test.png",
    date: "15 de julio, 2024",
    title: "Test Title",
    text: "Test Description",
    get onClick() { return onClick; },
  };

  beforeEach(() => {
    onClick = jasmine.createSpy('onClick');
  });

  it("debe renderizar el título correctamente", () => {
    render(<NewsCard {...props} />);
    expect(screen.getByRole("heading", { name: /test title/i })).toBeTruthy();
  });

  it("debe renderizar la fecha correctamente", () => {
    render(<NewsCard {...props} />);
    expect(screen.getByText(/15 de julio, 2024/i)).toBeTruthy();
  });

  it("debe llamar onClick cuando se hace clic", () => {
    render(<NewsCard {...props} />);
    fireEvent.click(screen.getByRole("button", { name: /leer/i }));
    expect(onClick).toHaveBeenCalled();
  });

  it("debe mostrar la imagen con alt = título", () => {
    render(<NewsCard {...props} />);
    expect(screen.getByRole("img", { name: /test title/i })).toBeTruthy();
  });
});
