import { test, expect, request } from '@playwright/test';
import { getApiKey } from '../../utils/testData';

const apiKey = getApiKey();

test.describe('Genres API', () => {
  test('should fetch movie genres', async () => {
    const apiContext = await request.newContext();
    const response = await apiContext.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${getApiKey()}`);
    const body = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(body.genres.length).toBeGreaterThan(0);
  });

  test('should fetch TV show genres', async () => {
    const apiContext = await request.newContext();
    const response = await apiContext.get(`https://api.themoviedb.org/3/genre/tv/list?api_key=${getApiKey()}`);
    const body = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(body.genres.length).toBeGreaterThan(0);
  });
});
