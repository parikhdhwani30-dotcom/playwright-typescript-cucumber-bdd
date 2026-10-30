import { World, setWorldConstructor, IWorldOptions } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium } from 'playwright';

export interface CustomWorldContext extends World {
  browser?: Browser;
  context?: BrowserContext;
  page?: Page;
}

export class CustomWorld extends World implements CustomWorldContext {
  browser?: Browser;
  context?: BrowserContext;
  page?: Page;

  constructor(options: IWorldOptions) {
    super(options);
  }
}

setWorldConstructor(CustomWorld);
