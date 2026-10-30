import { Page, Locator, expect } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly title: Locator;
  readonly addToCartBtn: Locator;
  readonly cartBadge: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('.title');
    this.addToCartBtn = page.locator('#add-to-cart-sauce-labs-backpack');
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  async assertPageLoaded() {
    await expect(this.title).toBeVisible();
    await expect(this.title).toHaveText('Products');
  }

  async addBackpackToCart() {
    await this.addToCartBtn.click();
  }

  async assertCartCount(count: string) {
    await expect(this.cartBadge).toHaveText(count);
  }
}

