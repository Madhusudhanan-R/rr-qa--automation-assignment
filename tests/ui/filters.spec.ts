import { test, expect } from '@playwright/test';
import { log } from '../../utils/loggers';
import { baseUrl, categories } from '../../utils/testData';

test.describe('UI Filters', () => {

  test.beforeEach(async ({ page }) => {
    log.info('Navigating to base url');
    await page.goto(baseUrl);
    await page.click('text=Popular');
  });

  test('filter by category via UI', async ({ page }) => {
    for (const category of categories) {
      log.info(`Testing category filter: ${category}`);
      await page.click(`text=${category}`);
      const visibleItems = await page.$$eval('.movie-card', cards => cards.length);
      log.info(`Found ${visibleItems} items for ${category}`);
      expect(visibleItems).toBeGreaterThan(0);
    }
  });

});
