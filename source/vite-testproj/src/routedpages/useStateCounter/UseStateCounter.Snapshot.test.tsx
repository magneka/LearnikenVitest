import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, test, it } from "vitest";
import UseStateCounter from './UseStateCounter';
import React from 'react';
import '@testing-library/jest-dom/vitest';

// Test som rendrer component til console
describe('Snapshot test counter med useState', () => {

  it('Snapshot after to clicks', () => {
  
    // Act
    var component = render(<UseStateCounter />);

    // Expect
    expect(component).toMatchSnapshot('"UseStateCounter')
    

  })
})

