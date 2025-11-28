import { test, expect } from '@playwright/test';
import { log } from '../../utils/loggers';
import { baseUrl } from '../../utils/testData';

test.describe('Pagination Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    await page.click('text=Popular')
  });

  test('should navigate through first few pages', async ({ page }) => {
    for (let i = 1; i <= 3; i++) { // first few pages
      await page.click(`button[aria-label="Go to page ${i}"]`);
      log.info(`Navigated to page ${i}`);
      const movies = await page.$$eval('.movie-card', cards => cards.length);
      log.info(`Movies displayed on page ${i}: ${movies}`);
    }
  });

  test('should handle last pages gracefully', async ({ page }) => {
    const lastPage = 50; // Assuming demo site max
    await page.click(`button[aria-label="Go to page ${lastPage}"]`).catch(() => {
      log.warn('Last page may not function properly.');
    });
    const movies = await page.$$eval('.movie-card', cards => cards.length);
    log.info(`Movies displayed on last page: ${movies}`);
  });
});
