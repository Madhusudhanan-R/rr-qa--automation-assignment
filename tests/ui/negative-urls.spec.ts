import { test, expect } from '@playwright/test';
import { log } from '../../utils/loggers';

test.describe('Negative URL tests', () => {
  test('should handle non-existing pages gracefully', async ({ page }) => {
    const invalidUrls = [
      'https://tmdb-discover.surge.sh/invalid-page',
      'https://tmdb-discover.surge.sh/12345'
    ];

    for (const url of invalidUrls) {
      await page.goto(url).catch(() => log.warn(`Failed to load ${url}`));
      const errorText = await page.textContent('body');
      log.info(`Page content for ${url}: ${errorText?.substring(0, 100)}...`);
    }
  });
});
