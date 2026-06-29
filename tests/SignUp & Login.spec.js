const{test, expect}=require('@playwright/test');

test("TC1 Sign up and Login",async({browser})=> 
{
   const context= await browser.newContext();
   const page = await context.newPage();
   await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
   await page.locator("[class='text-reset']").click();
   console.log(await page.title());
   console.log(await page.locator("[class='login-title']").textContent());
   await expect(page.locator("[class='login-title']")).toContainText("Register");

   await page.locator('input#firstName').fill("Rahul");
   await page.locator('input#lastName').fill("shetty");
   await page.locator('input#userEmail').fill("s@yopmail.com");
   await page.locator('input#userMobile').fill("1234567893");

   const dropdown= page.locator("[formcontrolname='occupation']");
   dropdown.selectText("2: Student");
     
   const radiobutton1= page.locator("[value='Male']");
   await radiobutton1.click();
   expect (radiobutton1.last()).toBeChecked();
   console.log(await radiobutton1.isChecked());

   const radiobutton2= page.locator("[value='Female']");
   console.log(await radiobutton1.isChecked());
   await radiobutton2.click();

   await page.locator('#userPassword').fill("DonutDonut04$");
   await page.locator('#confirmPassword').fill("DonutDonut0$");// Check for different password
   await page.locator("[value='Register']").click();
   const PWD_Check=page.getByText('Password and Confirm Password must match with each other.');
   await PWD_Check.textContent();
   
   await page.locator('#userPassword').fill("DonutDonut04$");
   await page.locator('#confirmPassword').fill("DonutDonut04$");// Check for different password
   //await page.locator.getByText('*Please check above checkbox');

  const checkbox=  page.locator("[type='checkbox']");
  await checkbox.click();
  console.log(checkbox.last().isChecked());
  
  await checkbox.uncheck();
  console.log(await checkbox.last().isChecked());
  await checkbox.click();
  await page.locator("[value='Register']").click();
  
  test.only("TC2 Sign In",async({browser})=> 
  { 
  const context= await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  await page.locator('input#userEmail').fill("salvisiddhi81@gmail.com");
  await page.locator('#userPassword').fill("DonutDonut04$");
  await page.locator('#login').click();
  
  });
 
   
    
    
  

   






});