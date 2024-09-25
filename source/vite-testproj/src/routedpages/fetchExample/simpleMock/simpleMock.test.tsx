/**
 * @jest-environment jsdom
 */
import { vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, expect, test, it } from "vitest";
import Buttonwfetch from '../Buttonwfetch';
import React from 'react';
import '@testing-library/jest-dom/vitest'


// Test som rendrer component til console
describe('Test vi.fn().mockResolvedValue', () => {

    const norrisJokeResponse = {
        ok: true,
        statusText: "OK",
        json: async () => ({value: "Norris"}),
    } as Response;

    global.fetch = vi.fn().mockResolvedValue(norrisJokeResponse);

    it('Click w mock', async () => {

        // Arrange
        render(<Buttonwfetch />);

        // Act
        const button = screen.getByText("fetch data");
        fireEvent.click(button);

        // Assert
        await waitFor(() => {
            expect(screen.getByTestId("joke")?.textContent).toContain("Norris");
            //screen.debug();
        });

    });

})
