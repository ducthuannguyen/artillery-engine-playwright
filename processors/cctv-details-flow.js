
async function ShowDeviceDetails(page, context, events) {

  // Login part - We don't count this time to the scenario
  await page.goto('https://tst-1.tst.vicdot.au.optimalreality.com/situational-awareness');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('user_with_power_user_role');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('(Site~Chock9Yellow).');
  await page.getByRole('button', { name: 'submit' }).click();

  // Start record time
  const startedTime = Date.now();

  // Click on Watchlist button
  await page.getByTestId('watchlist-btn').click();
  // Click on expand button
  await page.getByTestId('collapse-expand-btn').click();
  // Select All CCTV TST section
  await page.locator("//span[.='All CCTV TST']").click();
  // Select to 18511 camera
  await page.locator("//p[contains(text(),'18511')]/ancestor::div[@class='footer']/preceding-sibling::div//span[contains(text(),'View details')]").click();
  // Wait for CCTV - 18511 details appear
  await page.getByText('CCTV - 18511').click();
  
  // Calculate the total time for round
  const difference = Date.now() - startedTime;
  // Log the time
  events.emit('histogram', 'time_taken_for_view_CCTV_details', difference);

};

module.exports = {
  ShowDeviceDetails
};