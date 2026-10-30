import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../support/custom-world';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

Given('I open the SauceDemo portal', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page!);
  await loginPage.navigate('https://www.saucedemo.com/');
});

When('I sign in with username {string} and password {string}', async function (this: CustomWorld, username: string, pass: string) {
  const loginPage = new LoginPage(this.page!);
  await loginPage.login(username, pass);
});

Then('I should see the inventory catalog page', async function (this: CustomWorld) {
  const inventoryPage = new InventoryPage(this.page!);
  await inventoryPage.assertPageLoaded();
});

Then('I should see error notification {string}', async function (this: CustomWorld, error: string) {
  const loginPage = new LoginPage(this.page!);
  await loginPage.assertErrorMessage(error);
});

When('I add the backpack product to shopping cart', async function (this: CustomWorld) {
  const inventoryPage = new InventoryPage(this.page!);
  await inventoryPage.addBackpackToCart();
});

Then('the cart badge counter should display {string}', async function (this: CustomWorld, count: string) {
  const inventoryPage = new InventoryPage(this.page!);
  await inventoryPage.assertCartCount(count);
});

