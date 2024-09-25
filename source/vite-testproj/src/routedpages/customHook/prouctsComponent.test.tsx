import { renderHook, waitFor } from '@testing-library/react';
import { useProducts } from './useProducts';
import { describe, vi, beforeAll, afterAll, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest'

describe('Test ProductsComponent', () => {
  //Spy on the global fetch function
  const fetchSpy = vi.spyOn(window, 'fetch');

  //Run before all the tests
  beforeAll(() => {
    //Mock the return value of the global fetch function
    const mockResolveValue = {
      ok: true,
      json: () =>
        new Promise((resolve) =>
          resolve([
            {
              id: 1,
              title: 'T-shirt',
              price: 109.95,
              Description: 'A nice t-shirt',
            },
          ])
        ),
    };
    fetchSpy.mockReturnValue(mockResolveValue as any);
  });

  //Run after all the tests
  afterAll(() => {
    fetchSpy.mockRestore();
  });

  it('should fetch a single product', async () => {
    const { result } = renderHook(() => useProducts());

    expect(result.current.isLoading).toEqual(true);
    await waitFor(() => expect(result.current.products.length).toEqual(1));
    expect(result.current.isLoading).toEqual(false);
  });
});
