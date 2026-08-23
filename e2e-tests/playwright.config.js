// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 1,
  
  reporter: 'html',
  
  use: {
    headless: true,
    channel: 'chrome',
    trace: 'on-first-retry',
    baseURL: 'http://localhost:8080/',
  },
});

