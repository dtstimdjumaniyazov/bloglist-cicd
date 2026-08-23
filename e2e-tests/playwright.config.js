// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 1,
  
  reporter: 'html',
  
  webServer: {
    command: 'npm run start:test',
    cwd: '../',
    url: 'http://localhost:3001',
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    headless: true,
    channel: 'chrome',
    trace: 'on-first-retry',
    baseURL: 'http://localhost:3001',
  },
});

