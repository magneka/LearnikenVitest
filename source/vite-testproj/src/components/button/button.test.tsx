import { render, screen } from '@testing-library/react'
import { describe, expect, it } from "vitest";
import Button from './Button';
import '@testing-library/jest-dom/vitest'

// Test som rendrer component til console
describe('Test Button Component', () => {
  it('Sjekk at label er korrekt', () => {

    // Arrange
    render(<Button 
        label='Test' 
        onClick= {()=> console.log('clicked')}/>)
    
    screen.debug(); // prints out the jsx in the App component unto the command line

    expect(screen.getByText("Test")).toBeDefined();
  })
})