const { expect } = require("@playwright/test")
const navigatePage = (page)=>({

    async firstJoinPage(){
        await page.frameLocator('#iframeId').locator('[data-test-id="featured-table"] [data-test-id="button-click-join-table-button"]').click(); //select the top/main 'join Table' on the website
}
})
module.exports = navigatePage