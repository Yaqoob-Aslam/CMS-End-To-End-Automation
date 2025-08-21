# Test info

- Name: CMS Application Automation >> should display dashboard after login
- Location: /home/yaqoob/CMS-End-to-End-Automation-with-Playwright/tests/POM-CMS.E2E.spec.js:54:7

# Error details

```
Error: page.goto: net::ERR_TIMED_OUT at https://moyai-cms.innov8.jp/login
Call log:
  - navigating to "https://moyai-cms.innov8.jp/login", waiting until "load"

    at LoginPage.goto (/home/yaqoob/CMS-End-to-End-Automation-with-Playwright/pages/LoginPage.js:11:25)
    at /home/yaqoob/CMS-End-to-End-Automation-with-Playwright/tests/POM-CMS.E2E.spec.js:50:21
```

# Page snapshot

```yaml
- heading "This site can’t be reached" [level=1]
- paragraph:
  - strong: moyai-cms.innov8.jp
  - text: took too long to respond.
- paragraph: "Try:"
- list:
  - listitem: Checking the connection
  - listitem:
    - link "Checking the proxy and the firewall":
      - /url: "#buttons"
- text: ERR_TIMED_OUT
- button "Reload"
- button "Details"
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
> 11 |         await this.page.goto(url, { timeout: 90000 });
     |                         ^ Error: page.goto: net::ERR_TIMED_OUT at https://moyai-cms.innov8.jp/login
  12 |     }
  13 |
  14 |     async login(email, password) {
  15 |         if (!email || !password) {
  16 |             throw new Error('Missing CMS_EMAIL or CMS_PASSWORD in .env');
  17 |         }
  18 |         await this.emailInput.fill(email);
  19 |         await this.passwordInput.fill(password);
  20 |         await this.loginButton.click();
  21 |         
  22 |     }
  23 | }
  24 |
```