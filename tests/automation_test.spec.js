// @ts-check
const { test, expect } = require('@playwright/test');
const join_Table = require('../pages/joinTable');
const Language_Change = require('../pages/languageChange')

test.beforeEach(async ({page}) => {
    await page.goto('https://bombaylobby.com/');
  await page.locator('[class="btn-link"]').filter({hasText: 'Desktop Lobby'}).click()
  expect(await page.locator('[class="menu-component front-page"]')).toBeTruthy()
    
  });

test('test join table', {tag:'@first'},async ({page}) => {
    test.setTimeout(50000);
    const JoinTable = join_Table(page)
    await JoinTable.firstJoinPage()
  
});

test('test language change',{tag:'@second'}, async({page})=>{
    test.setTimeout(50000);
    const language_Change = Language_Change(page)
    await language_Change.hamburgerButton()
    await language_Change.settingsSelection()
    await language_Change.languageButton()
    await language_Change.languageDropdown()
    await language_Change.closeButton()
        
})


