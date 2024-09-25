/**
 * @jest-environment jsdom
 */

import createFetchMock from 'vitest-fetch-mock';
import { afterEach, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, expect, test, it } from "vitest";
import Buttonwfetch from '../Buttonwfetch';
import React from 'react';
import mockResults from './mockResults';
import '@testing-library/jest-dom/vitest'

const fetchMocker = createFetchMock(vi);

// adds the 'fetchMock' global variable and rewires 'fetch' global to call 'fetchMock' instead of the real implementation
fetchMocker.enableMocks();

// changes default behavior of fetchMock to use the real 'fetch' implementation and not mock responses
fetchMocker.dontMock();

//To enable mocking for a specific URL only:
beforeEach(() => {
    // if you have an existing `beforeEach` just add the following lines to it
    fetchMocker.mockIf(/^https?:\/\/api.chucknorris.io.*$/, (req) => {
      return mockResults(req);
    });
  });

  afterEach(() =>{
    // changes default behavior of fetchMock to use the real 'fetch' implementation and not mock responses
    fetchMocker.dontMock();
  })


// Test som rendrer component til console
describe('Test button with fetch mocked in unit', () => {

    fetchMocker.enableMocks();

    it('Click w mock in unit', async () => {

        // Arrange
        render(<Buttonwfetch />);

        // Act
        const button = screen.getByText("fetch data");
        fireEvent.click(button);

        // Assert
        await waitFor(() => {
            expect(screen.getByTestId("joke")?.textContent).toContain("ChuckJoke");
            //screen.debug();
        });

    });

})
