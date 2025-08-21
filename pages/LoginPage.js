
export default class LoginPage {
    constructor(page) {
        this.page = page;
        this.emailInput = page.getByRole('textbox', { name: 'Enter your email address' });
        this.passwordInput = page.getByRole('textbox', { name: 'Enter your password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }

    async goto(url) {
        await this.page.goto(url, { timeout: 90000 });
    }

    async login(email, password) {
        if (!email || !password) {
            throw new Error('Missing CMS_EMAIL or CMS_PASSWORD in .env');
        }
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
        
    }
}
