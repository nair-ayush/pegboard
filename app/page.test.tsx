import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { getCurrentFolderNameFromPath } from "../lib/path";
import Home from "./page";

describe(getCurrentFolderNameFromPath(__dirname), () => {
  it("render content", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Home" })
    ).toBeDefined();
  });
});
