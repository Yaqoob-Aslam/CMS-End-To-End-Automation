# Test info

- Name: CMS Application Automation >> should display dashboard after login
- Location: /home/yaqoob/CMS-End-to-End-Automation-with-Playwright/tests/POM-CMS.E2E.spec.js:55:7

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('textbox', { name: 'Enter your email address' })

    at LoginPage.login (/home/yaqoob/CMS-End-to-End-Automation-with-Playwright/pages/LoginPage.js:18:31)
    at /home/yaqoob/CMS-End-to-End-Automation-with-Playwright/tests/POM-CMS.E2E.spec.js:52:21
```

# Test source

```ts
   1 |
   2 | export default class LoginPage {
   3 |     constructor(page) {
   4 |         this.page = page;
   5 |         this.emailInput = page.getByRole('textbox', { name: 'Enter your email address' });
   6 |         this.passwordInput = page.getByRole('textbox', { name: 'Enter your password' });
   7 |         this.loginButton = page.getByRole('button', { name: 'Login' });
   8 |     }
   9 |
  10 |     async goto(url) {
  11 |         await this.page.goto(url, { timeout: 90000 });
  12 |     }
  13 |
  14 |     async login(email, password) {
  15 |         if (!email || !password) {
  16 |             throw new Error('Missing CMS_EMAIL or CMS_PASSWORD in .env');
  17 |         }
> 18 |         await this.emailInput.fill(email);
     |                               ^ Error: locator.fill: Target page, context or browser has been closed
  19 |         await this.passwordInput.fill(password);
  20 |         await this.loginButton.click();
  21 |         
  22 |     }
  23 | }
  24 |
```