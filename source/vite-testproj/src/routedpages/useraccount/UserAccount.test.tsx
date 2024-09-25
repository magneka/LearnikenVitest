import React from "react";
import UserAccount, { User } from "./UserAccount";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import '@testing-library/jest-dom'

describe("UserAccount", () => {
  it("should render user name", () => {

    /* Todo 
    
    lag instans av User

    Render Useraccount med user som parameter

    Sjekk at user.name er i dokumentet
      - bruk screen.getByText(...).toBeInTheDocument()
    
    */

    expect("Test ").toBe("Implemented")

  });

  it("should render edit button if user is admin", () => {

    /*
    
    Her skal du sende inn user som er admin

    Så kan du finne en knapp
      - du kan bruke getByRole for å lete etter en button (det er bare en her)

    expect knappen til å være i dokumentet
    expect knappen til å ha tekst (toHaveTextContent(regex) 
    regex /edit/i finner alle "Edit" uten case sensitivitet
    
    */

    expect("Test ").toBe("Implemented")
    
  });

  it("should not render edit button if user is not admin", () => {

    /*

    Her skal du gjøre det omvendte, sjekke at det ikke er en knapp i dokumentet

    */

    expect("Test ").toBe("Implemented")
    
  });
});
