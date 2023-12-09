import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('Uploadfile', () => {

    test('Verify button',async ({page}) => {

        await page.goto('https://the-internet.herokuapp.com/upload');

            //store test file path
            const filepath = path.join(__dirname , './data/my.jpeg');



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
