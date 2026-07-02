import { test, expect } from '@playwright/test';

const sleep = (time) => new Promise((r) => setTimeout(r, time));  //timeはミリ秒

test('example最初のテスト', {tag: '@abc'}, async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
  await sleep(1000);
	console.log("1秒経過");
});

test('example中間のテスト', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
  await sleep(1000);
	console.log("1秒経過");
});

test('example最後のテスト', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
  await sleep(1000);
	console.log("1秒経過");
});
