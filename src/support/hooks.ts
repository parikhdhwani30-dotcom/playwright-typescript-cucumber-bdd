import { Before, After, Status } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import { CustomWorld } from './custom-world';

Before({ timeout: 30000 }, async function (this: CustomWorld) {
  this.browser = await chromium.launch({ headless: true });
  this.context = await this.browser.newContext({
    viewport: { width: 1440, height: 900 }
  });
  this.page = await this.context.newPage();
});

After({ timeout: 15000 }, async function (this: CustomWorld, scenario) {
  if (this.page) {
    if (scenario.result?.status === Status.FAILED) {
      const screenshot = await this.page.screenshot({
        path: `reports/screenshots/${scenario.pickle.name.replace(/[^a-zA-Z0-9]/g, '_')}.png`,
        fullPage: true
      });
      await this.attach(screenshot, 'image/png');
    }
    await this.page.close();
  }
  if (this.context) {
    await this.context.close();
  }
  if (this.browser) {
    await this.browser.close();
  }
});
