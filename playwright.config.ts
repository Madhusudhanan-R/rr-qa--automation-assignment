import { defineConfig, devices } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const resultsDir = path.join(__dirname, 'test-results');
if (fs.existsSync(resultsDir)) {
  fs.rmSync(resultsDir, { recursive: true, force: true });
}


export default defineConfig({
  testDir: './tests',
  timeout: 60 * 1000,
  retries: 1,
  reporter: [
    ['list'], // console report
    ['html', { outputFolder: path.join('test-results', 'html-reports'), open: 'never' }]
  ],
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',               // save only failing screenshots
    trace: 'retain-on-failure',                 // save trace for failing tests
    video: 'retain-on-failure',                 // optional: save video on failure
    baseURL: 'https://tmdb-discover.surge.sh',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
  outputDir: path.join('test-results'),          // all artifacts go here
});
