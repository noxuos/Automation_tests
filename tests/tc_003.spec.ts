import { test, expect } from '@playwright/test';

/**
 * Test filling out and submitting the Text Box form
 * @tags forms, regression
 * @priority 1
 */
test('Validate Text Box Submission', async ({ page }) => {
  // Step 1: Navigate to the Text Box page
  await page.goto('/text-box');
  await page.waitForLoadState('networkidle');
  // Expected: Text Box page loads with all fields visible

  // Step 2: Enter full name 'Peter Doe' into the Full Name field
  await page.getByLabel('Full Name').fill('Peter Doe');
  // Expected: Full name is entered

  // Step 3: Enter email 'peter.doe@example.com' into the Email field
  await page.getByLabel('Email').fill('peter.doe@example.com');
  // Expected: Email is entered

  // Step 4: Enter 'Sample Test Address' in the Current Address field
  await page.getByLabel('Address').fill('Sample Test Address');
  // Expected: Current address is entered

  // Step 5: Enter 'Secondary Address' in the Permanent Address field
  await page.getByLabel('Address').fill('Secondary Address');
  // Expected: Permanent address is entered

  // Step 6: Click the Submit button
  await page.getByRole('button', { name: 'Submit' }).click();
  // Expected: Output section displays all entered information

});