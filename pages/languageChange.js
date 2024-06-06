const { expect } = require("@playwright/test")
const changeLanguage = (page)=>({

async hamburgerButton(){
    await page.frameLocator('#iframeId').locator('[data-test-id="button-click-open-menu-modal"]').click(); //select menu button
},
async settingsSelection(){
    await page.frameLocator('#iframeId').locator('#settings [data-test-id="menu-link-settings"]').click(); //Select settings
},
async languageButton(){
    await page.frameLocator('#iframeId').locator('[data-test-id="button-click-edit-username-in-settings"]').click(); //select language button
},
async languageDropdown(){
    await page.frameLocator('#iframeId').locator('[data-test-id="button-menu-select-fr"]').click(); // select French(Francais) from the dropdown
},
async closeButton(){
    await page.frameLocator('#iframeId').locator('#close').getByRole('img').click(); //close button
}
});
module.exports = changeLanguage