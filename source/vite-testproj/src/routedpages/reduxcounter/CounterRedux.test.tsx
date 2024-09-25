//import { test } from "vitest";
import { fireEvent, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Counter from "./Counter";
import { renderWithProviders } from "../../redux/utils-for-tests";
import '@testing-library/jest-dom/vitest';

describe('Counter with redux', () => {

  it("Counter with initalvalue", () => {

    const initialCounter = { count: 55 };

    renderWithProviders(<Counter />, {
      preloadedState: {
        counter: initialCounter
      }
    })

    screen.debug();

    expect(screen.getByTestId("count")?.textContent).toContain("55");
  })

  it("Counter with increase clicked", async () => {

    const initialCounter = { count: 55 };

    renderWithProviders(<Counter />, {
      preloadedState: {
        counter: initialCounter
      }
    })

    const button = screen.getByText("Add 1");

    await fireEvent.click(button);

    await waitFor(() => {          
      expect(screen.getByTestId("count")?.textContent).toContain("56");
    })
  })
})