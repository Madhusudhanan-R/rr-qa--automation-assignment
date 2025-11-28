import { test, expect } from '@playwright/test';
import { categories, baseUrl } from '../../utils/testData';
import {log } from '../../utils/loggers'

test.describe('Slug Navigation', () => {
  test('should navigate using category slugs', async ({ page }) => {
    await page.goto(baseUrl); //main page
    await page.click('text=Popular');
    for (const category of categories) {
      const slug = category.toLowerCase().replace(' ', '-');
      const url = `https://tmdb-discover.surge.sh/${slug}`;
      await page.goto(url).catch(() => log.warn(`Slug ${slug} may not load correctly.`));
      const heading = await page.textContent('h1').catch(() => 'No heading');
      log.info(`Heading for slug ${slug}: ${heading}`);
    }
  });
});