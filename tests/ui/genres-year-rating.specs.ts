import { test, expect } from '@playwright/test';
import { genres, years, ratings } from '../../utils/testData';
import { log } from '../../utils/loggers';

test.describe('Filters: Genres, Year & Rating', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://tmdb-discover.surge.sh/');
    await page.click('text=Popular');
  });

  test('filter by genre, year, and rating', async ({ page }) => {
    await page.selectOption('select#genre', genres[0]);
    await page.selectOption('select#year', years[0].toString());
    await page.selectOption('select#rating', ratings[1].toString());

    const filteredMovies = await page.$$eval('.movie-card', cards => cards.length);
    log.info(`Filtered movies count: ${filteredMovies}`);
  });
});
