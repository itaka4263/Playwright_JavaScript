import { test, expect } from '@playwright/test';

test.describe.serial('Serial tests', () => {

  test('example2_A', async () => {
    console.log('A start');
    await new Promise(r => setTimeout(r, 2000)); // 2秒待つ
    console.log('A end');
  });

  test('example2_B', async () => {
    console.log('B start');
    await new Promise(r => setTimeout(r, 1000)); // 1秒待つ
    console.log('B end');
  });

  test('example2_C', async () => {
    console.log('C start');
    console.log('C end');
  });

});
