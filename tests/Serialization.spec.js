// serialなし（順番が崩れる）-----------------------------------------
/**/
import { test, chromium } from '@playwright/test';

test('Serialization_A', async () => {
  console.log('A start');
  const browser = await chromium.launch();
  const context = await browser.newContext();
  await new Promise(r => setTimeout(r, 2000));
  console.log('A end');
  await browser.close();
});

test('Serialization_B', async () => {
  console.log('B start');
  const browser = await chromium.launch();
  const context = await browser.newContext();
  await new Promise(r => setTimeout(r, 1000));
  console.log('B end');
  await browser.close();
});

test('Serialization_C', async () => {
  console.log('C start');
  const browser = await chromium.launch();
  const context = await browser.newContext();
  console.log('C end');
  await browser.close();
});
/**/


// serialあり（順番が固定される） ---------------------------------------
/*
import { test, chromium } from '@playwright/test';

test.describe.serial('Serial tests', () => {

  test('Serialization_A', async () => {
    console.log('A start');
    const browser = await chromium.launch();
    const context = await browser.newContext();
    await new Promise(r => setTimeout(r, 2000));
    console.log('A end');
    await browser.close();
  });

  test('Serialization_B', async () => {
    console.log('B start');
    const browser = await chromium.launch();
    const context = await browser.newContext();
    await new Promise(r => setTimeout(r, 1000));
    console.log('B end');
    await browser.close();
  });

  test('Serialization_C', async () => {
    console.log('C start');
    const browser = await chromium.launch();
    const context = await browser.newContext();
    console.log('C end');
    await browser.close();
  });

});
*/