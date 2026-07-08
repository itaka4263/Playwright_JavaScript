import { test, expect } from '@playwright/test';
import dayjs from 'dayjs';

const sleep = (time) => new Promise((r) => setTimeout(r, time));  // timeはミリ秒
const timestamp = () => dayjs().format('YYYYMMDD_HHmmss_SSS');    // スクショ保存時のタイムスタンプ

test('Recoding.test',{tag: '@aaa'}, async ({ page }, testInfo) => {
  console.log("Recoding1.Start.");
  // 1.1. ページ移動（ロード完了まで待つ）
  await page.goto('https://example.com/', { waitUntil: 'load' });
  // 1.2. ネットワークが静かになるまで待つ（SPA対策）
  await page.waitForLoadState('networkidle');
  // 1.3. 検証  部分一致：toContainText(), 完全一致：toHaveText()
  await expect(page.getByRole('heading')).toContainText('Example Domain');
  await expect(page.locator('div')).toContainText('This domain is for use in documentation examples without needing permission. Avoid use in operations.');
  // 1.3.5.ブラウザ名を取得
  const browserName = testInfo.project.name;
  // 1.4. スクリーンショット
  // await page.screenshot({path: `screenshots${timestamp()}.png`, fullPage: true});
  await page.screenshot({path: `./screenshots/${browserName}_Screenshot1.png`, fullPage: true});
  await expect(page.getByRole('link')).toContainText('Learn more');
  // 1.5. リンクのクリック
  await page.getByRole('link', { name: 'Learn more' }).click();
  // 2.1. ネットワークが静かになるまで待つ（SPA対策）
  await page.waitForLoadState('networkidle');
  // 2.2. スクリーンショット
  // await page.screenshot({path: `screenshots${timestamp()}.png`, fullPage: true});
  await page.screenshot({path: `./screenshots/${browserName}_Screenshot2.png`, fullPage: true});
  // 2.3. 検証  部分一致：toContainText(), 完全一致：toHaveText()
  await expect(page.locator('#example-domains')).toContainText('Example Domains');
  // 2.4. スリープ
  await sleep(1000);
	console.log("Recoding.End.");

});