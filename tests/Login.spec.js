const {test,expect} = require ('@playwright/test');


test('TC1:To verify login with coorect credentials',async({browser})=>
{
  const context = await browser.newContext(); // broswer is open
  const page = await context.newPage();  //open the tab
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/"); //Hit the URL
  console.log(await page.title()); // this will print the title
  await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy"); // Check title
  await page.locator('#username').fill('rahulshettyacademy'); // Enter correct username 
  await page.locator('#password').fill('Learning@830$3mK2');  // Enter correct password 
  await page.locator("#signInBtn").click();                   // Click on Sign in button
 
});

test('TC2:To verify login with incorrect credentials',async({browser})=>
{
  const context = await browser.newContext(); // broswer is open
  const page = await context.newPage();  //open the tab
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/"); //Hit the URL
  console.log(await page.title()); // this will print the title
  await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
  await page.locator('#username').fill('ruul'); // Enter Incorrect username 
  await page.locator('#password').fill('Learning@830$3mK2'); // Enter correct password 
  await page.locator("#signInBtn").click();                   // Click on Sign in button
  console.log(await page.locator("[style*='block']").textContent());        // Check for error message 
  await expect(page.locator("[style*='block']")).toContainText('Incorrect username/password.');  //Assertion for error message text
});

test('TC3:To verify login with incorrect credentials and then clear & renter details for sign in',async({browser})=>
{
  const context = await browser.newContext(); // broswer is open
  const page = await context.newPage();  //open the tab
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/"); //Hit the URL
  console.log(await page.title()); // this will print the title

  // Code is optimised with 
  const username=page.locator('#username');
  const signInButton = page.locator("#signInBtn");
  const cardTitle = page.locator(".card-body a");

  // Incoorect Login Details
  await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
  await page.locator('#username').fill('ruul'); // Enter Incorrect username 
  await page.locator('#password').fill('Learning@830$3mK2'); // Enter correct password 
  await page.locator("#signInBtn").click();                   // Click on Sign in button
  console.log(await page.locator("[style*='block']").textContent());        // Check for error message 
  await expect(page.locator("[style*='block']")).toContainText('Incorrect username/password.');  //Assertion for error message text
  
  //Corrected login details 
  await username.fill("");  // This clears the field
  await username.fill("rahulshettyacademy"); // this enters correct data
  await signInButton.click();


  //To access the element after sign in suceess - Defn refer line 41 (cardTitle=page.locator(".card-body a")
  console.log(await cardTitle.first().textContent());  //First element value  
  console.log(await cardTitle.last().textContent());   //last  element value 
  console.log(await cardTitle.nth(1).textContent());   //second   element value 

  //All the product list in single step allTextContents()
  const allTitles = await cardTitle.allTextContents();
  console.log(allTitles);
   
});















