import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, test, it } from "vitest";
import UseStateCounter from './UseStateCounter';
import '@testing-library/jest-dom/vitest';

// Test som rendrer component til console
describe('Test button with counter', () => {
  it('One Click', () => {
    
    // Arrange
    render(<UseStateCounter />);
    
    // Act    
    const button = screen.getByText("Increase");
    fireEvent.click(button);
    screen.debug(); // prints out the jsx in the App component unto the command line

    // Assert
    expect(screen.getByTestId("count")?.textContent).toContain("1");

  });

  it('Two Clicks', () => {
    
    // Arrange
    render(<UseStateCounter />);
    
    // Act
    const button = screen.getByText("Increase");
    fireEvent.click(button);
    fireEvent.click(button);
    screen.debug(); // prints out the jsx in the App component unto the command line

    // Assert
    expect(screen.getByTestId("count")?.textContent).toContain("2");

  })
})