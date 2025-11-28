import { test, request, expect } from '@playwright/test';
import { apiBaseUrl, getApiKey } from '../../utils/testData';

test.describe('Movies API', () => {
  const apiKey = getApiKey();
  

  test('fetch popular movies', async () => {
    const apiContext = await request.newContext();
    const response = await apiContext.get(`${apiBaseUrl}/movie/popular?api_key=${apiKey}`);
    expect(response.ok()).toBeTruthy();
    const body = await response.json();
    expect(body.results.length).toBeGreaterThan(0);
  });
});
