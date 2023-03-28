
async function AddToCard(page, context) {
  await page.goto(context.vars.target);
  await page.getByRole('link', { name: 'Men\'s Outerwear Shop Now' }).click();
  await page.getByRole('img', { name: 'Anvil L/S Crew Neck - Grey' }).click();
  await page.getByRole('combobox', { name: 'Size' }).selectOption('L');

  await page.getByRole('button', { name: 'Add this item to cart' }).click();
  await page.getByRole('link', { name: 'Checkout' }).click();
}

async function Checkout(page, context, events) {
  await page.goto(context.vars.target);
  await page.getByRole('link', { name: 'Men\'s Outerwear Shop Now' }).click();
  await page.getByRole('img', { name: 'Anvil L/S Crew Neck - Grey' }).click();
  await page.getByRole('combobox', { name: 'Size' }).selectOption('L');
  await page.getByRole('button', { name: 'Add this item to cart' }).click();
  await page.getByRole('link', { name: 'Checkout' }).click();
  await page.getByPlaceholder('Email').fill('test@email.com');
  await page.getByPlaceholder('Phone Number').fill('0343488999');
  await page.getByPlaceholder('Cardholder Name').click();
  await page.getByPlaceholder('Cardholder Name').fill('Test User');
  await page.getByPlaceholder('Card Number').fill('009988776622');
  await page.getByRole('combobox', { name: 'Expiry month' }).selectOption('03');
  await page.getByRole('combobox', { name: 'Expiry year' }).selectOption('2022');
  await page.getByPlaceholder('CVV').click();
  await page.getByPlaceholder('CVV').fill('3542');
  await page.getByPlaceholder('Card Number').fill('009988776622222');
  await page.getByRole('textbox', { name: 'Address Shipping Address' }).fill('7 Testing address ');
  await page.getByRole('textbox', { name: 'City Shipping Address' }).fill('Melbourne');
  await page.getByRole('textbox', { name: 'State/Province Shipping Address' }).fill('VIC');
  await page.getByRole('textbox', { name: 'Zip/Postal Code Shipping Address' }).fill('3000');

  const startedTime = Date.now();
  await page.getByRole('button', { name: 'Place Order' }).click();
  const difference = Date.now() - startedTime;
  events.emit('histogram', 'time_taken_for_checkout_part', difference);
  await page.getByRole('link', { name: 'Finish' }).click();
}


module.exports = {
  AddToCard,
  Checkout
};