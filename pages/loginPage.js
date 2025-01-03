const { I } = inject()

class LoginPage {

    constructor() {
        this.inputEmail = "#email"
        this.inputPassword = "#password"
        this.submitButtonLogin = "#submitBTN"
        this.logInPageTest = "#fadein > main > div > div > div > div.pt-3 > div > div > div > div.w-100.text-center.mt-3 > span";
        this.navBar = "#navbarSupportedContent"
    }

    visit() {
        I.amOnPage("/login")      
        I.waitForElement(this.navBar)
        I.seeInCurrentUrl('login')
    }

    login(username, password) {
        I.waitForElement(this.inputEmail)
        I.fillField(this.inputEmail, username)
        I.fillField(this.inputPassword, password)
        I.click(this.submitButtonLogin)
    }

    validateLogin() {
        I.waitForElement(this.logInPageTest, 4)
        I.waitForElement(this.navBar, 4) 
    }

}

module.exports = new LoginPage();
module.exports.LoginPage = LoginPage;