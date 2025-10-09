import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import NewsCard from "./NewsCard";

describe("NewsCard Component", () => {
  const onClick = jasmine.createSpy("onClick");

  const props = {
    thumb: "test.png", // que renderice <img>
    date: "15 de julio, 2024",
    title: "Test Title",
    text: "Test Description",
    onClick,
  };

  beforeEach(() => onClick.calls.reset());

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
    fireEvent.click(screen.getByRole("button", { name: /leer/i })); // evitar acento estricto
    expect(onClick).toHaveBeenCalled();
  });

  it("debe mostrar la imagen con alt = título", () => {
    render(<NewsCard {...props} />);
    expect(screen.getByRole("img", { name: /test title/i })).toBeTruthy();
  });
});
