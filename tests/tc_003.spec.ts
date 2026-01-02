import { test, expect } from '@playwright/test';

test('Validate Text Box Submission', async ({ page }) => {
  // Navigate to the page
  await page.goto('/text-box');

  // Wait for page to load
  await page.waitForLoadState('networkidle');

  // Step 1: Navigate to the Text Box page
  // Navigation handled above
  // Expected: Text Box page loads with all fields visible

  // Step 2: Enter full name 'Peter Doe' into the Full Name field
  await page.locator('#userName').fill('Peter Doe');
  // Expected: Full name is entered

  // Step 3: Enter email 'peter.doe@example.com' into the Email field
  await page.locator('#userEmail').fill('peter.doe@example.com');
  // Expected: Email is entered

  // Step 4: Enter 'Sample Test Address' in the Current Address field
  await page.locator('#currentAddress').fill('Sample Test Address');
  // Expected: Current address is entered

  // Step 5: Enter 'Secondary Address' in the Permanent Address field
  await page.locator('#permanentAddress').fill('Secondary Address');
  // Expected: Permanent address is entered

  // Step 6: Click the Submit button
  await page.locator('#submit').click();
  // Expected: Output section displays all entered information

});