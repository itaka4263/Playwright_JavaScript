/////////////////////////////////////////////////////////////
// Playwright設定ファイル：playwright.config.js
// 
// 設定項目	     内容
// testDir	    テストファイルが格納されているディレクトリ
// timeout	    テストのタイムアウト時間
// use	        ブラウザの動作設定（ベースURL、スクリーンショット等）
// projects	    テスト対象のブラウザ（Chromium、Firefox、WebKit など）
// reporter	    テスト結果の出力形式
// webServer	テスト前に起動するローカルサーバーの設定
/////////////////////////////////////////////////////////////
import { defineConfig } from '@playwright/test';

export default defineConfig({
  projects: [
    { name: 'Chromium',
      use: { browserName: 'chromium' }
    },
    { name: 'Firefox',
      use: { browserName: 'firefox' }
    }
    // { name: 'WebKit',
    //   use: { browserName: 'webkit' }
    // }
  ],

  reporter: [                                // 
    ['list'],                                // 
    ['allure-playwright'],                   // Allureレポート用
    ['html', { outputFolder: 'playwright-report', open: 'never' }] // htmlレポート用
  ],

  use: {
    headless: true,                          // false:ブラウザ表示, true:ブラウザ非表示（デフォルト）
                                             // 注意:ブラウザ表示と非表示ではウィンドウサイズが違うため、スクショのサイズも変わります。
    viewport: null,                          // viewportを固定しない（最大化に必須）
    //viewport: { width: 1920, height: 1080 }, // viewportを固定する
    trace: 'on',                             // Allureレポート用　トレース
    screenshot: 'on',                        // Allureレポート用　on：常に保存, only-on-failure:失敗時に保存（デフォルト）
    video: 'on',                             // Allureレポート用　ビデオ
    launchOptions: {
      args: ['--start-maximized']            // ブラウザを最大化して起動
    }
  }
});
