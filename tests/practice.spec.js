const {test}= require('@playwright/test');

const context = await browser.newcontext();
const page= await context.newpage();
await page.goto('www.google.com');
