import { test, expect, request } from '@playwright/test';
import { getApiKey } from '../../utils/testData';

const apiKey = getApiKey();

test.describe('TV Shows API', () => {
  test('should fetch popular TV shows', async () => {
    const apiContext = await request.newContext();
    const response = await apiContext.get(`https://api.themoviedb.org/3/tv/popular?api_key=${getApiKey()}`);
    const body = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(body.results.length).toBeGreaterThan(0);
  });

  test('should handle invalid API key', async () => {
    const apiContext = await request.newContext();
    const response = await apiContext.get('https://api.themoviedb.org/3/tv/popular?api_key=INVALID_KEY');
    expect(response.status()).toBe(401);
  });
});
