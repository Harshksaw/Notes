import {Page, Locator} from '@playwright/test'

class HomePage{
    page: Locator;
    getStartedBtn: Locator;
    constructor(page){

        this.page = page
        this.getStartedBtn = page.
        locator("#get-started")
        this.headingText = page.locator('text=Thinkdifferent')
        this.HomeLink = page.locator('//*[@id="primary")

    }
}
export default HomePage;