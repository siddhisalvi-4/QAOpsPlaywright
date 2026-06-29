const {test,expect} = require('@playwright/test');
const { promises } = require('node:dns');


test('TC1:To verify login with coorect credentials',async({browser})=>
{
  const context = await browser.newContext(); // broswer is open
  const page = await context.newPage();  //open the tab
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/"); //Hit the URL
  console.log(await page.title()); // this will print the title
  await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy"); // Check title
  await page.locator('#username').fill('rahulshettyacademy'); // Enter correct username 
  await page.locator('#password').fill('Learning@830$3mK2');  // Enter correct password 

  // UI Controls:
  const dropdown= page.locator("select.form-control");// locate DropDown 
  await dropdown.selectText("teach"); // select value from DropDown 

  await page.locator('.radiotextsty').last().click(); //Radio Button Selectype
  await page.locator('#okayBtn').click(); // click ok button from message box
  await expect (page.locator('.radiotextsty').last()).toBeChecked(); //assertion for selected  radio button
  console.log(await page.locator('.radiotextsty').last().isChecked()); //to verify if radiobutton is selected

  await page.locator('#terms').click(); //to check check box
  console.log(await page.locator('#terms').last().isChecked());//assertion for checkbox  radio button
  await page.locator('#terms').uncheck();
  expect (await page.locator('#terms').isChecked()).toBeFalsy();

  const documentlink=page.locator("[href*='documents-request']");
  await expect (documentlink).toHaveAttribute("class","blinkingText");

});

  test('TC2:child windo handling',async({browser})=>  
  { 
  const context = await browser.newContext();
  const page = await context.newPage();  //open the tab
  const username=page.locator('#username');
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");  //Hit the URL
  const documentlink=page.locator("[href*='documents-request']");  // new page / Child window which opens link
  
  const [newPage1]= await Promise.all(
    [
     context.waitForEvent('page'), //listen for new page
     documentlink.click(),
    ]);
     
   const text = await newPage1.locator(".red").textContent();
   console.log(text);
   const arraytext = text.split("@")
   const domain = arraytext[1].split(" ")[0]
   console.log(domain);
   await page.locator("#username").fill(domain);
   console.log(await page.locator("#username").inputValue(domain));
   

   
 
  });

 








 