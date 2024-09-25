import { render, screen } from '@testing-library/react'
import { describe, expect, test, it } from "vitest";
import InputPage from './InputPage';
import React from 'react';
import '@testing-library/jest-dom/vitest'



describe('Test Button', () => {
  it('Button rendres', () => {

    // Arrange
    render(<InputPage />)
    
    screen.debug(); // prints out the jsx in the App component unto the command line

    // Oppgave
    // Klikk på knappen 
    
    // Sjekk at feltet har blitt uppercase
    
    
  })
})