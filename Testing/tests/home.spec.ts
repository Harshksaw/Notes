import { test, expect } from '@playwright/test';
import HomePage from "../pages/home.page"

test.describe('Uploadfile', () => {

    let homePage;
    test('OpenHome Page and ver',async ({page}) => {
        homePage = new HomePage(page);

        await page.goto('https://the-internet.herokuapp.com/upload');

            //store test file path
            const filepath = path.join(__dirname , './data/my.jpeg');


        // await homePage.getStartedBtn.
        //upload test file
        await page.setInputFiles('input#file-upload', filepath)

        await page.locator('#file-submit').click()

        await expect(page.locator('#uploaded-files'))
            .toContainText('my.jpeg')


        // click the submit button




        

        // const testbutton = await page.locator('Lets talk')
            // const expectedlink = [
            //     "Home", "Portfolio","About", "Contact","Experience"


            // ]         
            // const navlink = page.locator('cursor-pointer')
            // expect(await navlink.allTextContents()).toEqual(expectedlink)
        


    })
});
