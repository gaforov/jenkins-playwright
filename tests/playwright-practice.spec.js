import test from "@playwright/test";

test('Youtube Search', async ({page}) => {
    await page.goto('https://www.youtube.com/')
    const searchInput = page.getByRole('combobox', {name: 'Search'});
    // const searchButton = page.getByRole('button', {name: 'Search'});  // this not unique locator, fails. 
    const searchButton = page.getByRole('button', {name: 'Search', exact: true});   // Ensures that only elements with an exact match for name: 'Search' are selected.
    // const searchButton = page.locator("(//button[@title='Search'])[1]");  // this xpath is unique too, works
    
    await searchInput.fill('Playwright Automation');
    await searchButton.click();   
    // await searchInput.press('Enter');   // press works too, mimicks user pressing enter on the keyboard after the search
});
