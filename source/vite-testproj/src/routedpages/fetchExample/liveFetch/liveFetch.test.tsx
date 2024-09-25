/**
 * @jest-environment jsdom
 */

import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, expect, test, it } from "vitest";
import Buttonwfetch from '../Buttonwfetch';
import '@testing-library/jest-dom/vitest'


// Test som rendrer component til console
describe('Test button with fetch', () => {

    it('Fetch live data', async () => {

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