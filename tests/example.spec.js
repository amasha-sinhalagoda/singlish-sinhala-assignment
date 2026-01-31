const { test, expect } = require('@playwright/test');

test.describe('Singlish → Sinhala Translator – PASS Use Cases', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
  });

  const inputBox = (page) => page.getByRole('textbox');

  // -------------------------
  // SIMPLE & DAILY USAGE
  // -------------------------

  test('PASS 01 – Simple descriptive sentence', async ({ page }) => {
    await inputBox(page).fill('aeya harima lassanayi.');
    await expect(page.locator('body')).toContainText('ලස්සන');
  });

  test('PASS 02 – Cause and effect sentence', async ({ page }) => {
    await inputBox(page).fill('kanna dheyak naethi nisaa hodhatama badaginiyi.');
    await expect(page.locator('body')).toContainText('බඩගිනියි');
  });

  test('PASS 03 – Interrogative question', async ({ page }) => {
    await inputBox(page).fill('eyaalaa enne kohomadha?');
    await expect(page.locator('body')).toContainText('කොහොමද');
  });

  test('PASS 04 – Imperative command', async ({ page }) => {
    await inputBox(page).fill('araka ganna.');
    await expect(page.locator('body')).toContainText('ගන්න');
  });

  // -------------------------
  // TENSE & NEGATION
  // -------------------------

  test('PASS 05 – Past tense sentence', async ({ page }) => {
    await inputBox(page).fill('eyaa eekata visaDHumak hoyaagaththaa.');
    await expect(page.locator('body')).toContainText('හොයා');
  });

  test('PASS 06 – Past tense with negation', async ({ page }) => {
    await inputBox(page).fill('eyaa eekata visaDHumak hoyaagaththe naee.');
    await expect(page.locator('body')).toContainText('නෑ');
  });

  // -------------------------
  // GREETINGS & POLITENESS
  // -------------------------

  test('PASS 07 – Greeting', async ({ page }) => {
    await inputBox(page).fill('suba aluth avurudhdhak!');
    await expect(page.locator('body')).toContainText('සුබ');
  });

  test('PASS 08 – Polite request', async ({ page }) => {
    await inputBox(page).fill('puLuvannam mata karalaa dhenna.');
    await expect(page.locator('body')).toContainText('පුළුව');
  });

  test('PASS 09 – Apology sentence', async ({ page }) => {
    await inputBox(page).fill('sidhu vuu apahasuthaavayata samaavenna.');
    await expect(page.locator('body')).toContainText('සමාව');
  });

  // -------------------------
  // INFORMAL & SLANG
  // -------------------------

  test('PASS 10 – Informal slang expression', async ({ page }) => {
    await inputBox(page).fill('uBA palayan!');
    await expect(page.locator('body')).toContainText('පලයන්');
  });

  test('PASS 11 – Emphasized repetition', async ({ page }) => {
    await inputBox(page).fill('baee baee');
    await expect(page.locator('body')).toContainText('බෑ');
  });

  // -------------------------
  // WORD COMBINATIONS
  // -------------------------

  test('PASS 12 – Segmented words', async ({ page }) => {
    await inputBox(page).fill('eyaata bathala kanna oonelu.');
    await expect(page.locator('body')).toContainText('බතල');
  });

  test('PASS 13 – Joined words handled', async ({ page }) => {
    await inputBox(page).fill('eyaatabathalakannaoonelu.');
    await expect(page.locator('body')).toContainText('බතල');
  });

  // -------------------------
  // MIXED LANGUAGE & TECH TERMS
  // -------------------------

  test('PASS 14 – Mixed English and Sinhala', async ({ page }) => {
    await inputBox(page).fill('api software eka hadhalaa testing karalaa balamu.');
    await expect(page.locator('body')).toContainText('software');
  });

  test('PASS 15 – Brand names preserved', async ({ page }) => {
    await inputBox(page).fill('Instagram, Bluetooth');
    await expect(page.locator('body')).toContainText('Instagram');
  });

  test('PASS 16 – Technical abbreviations', async ({ page }) => {
    await inputBox(page).fill('DM CCTV HDTV HDMI');
    await expect(page.locator('body')).toContainText('CCTV');
  });

  // -------------------------
  // NUMBERS, DATE, TIME, UNITS
  // -------------------------

  test('PASS 17 – Currency format', async ({ page }) => {
    await inputBox(page).fill('AUD 5000');
    await expect(page.locator('body')).toContainText('5000');
  });

  test('PASS 18 – Time format', async ({ page }) => {
    await inputBox(page).fill('10.56 PM');
    await expect(page.locator('body')).toContainText('10.56');
  });

  test('PASS 19 – Date format', async ({ page }) => {
    await inputBox(page).fill('pebaravaari 20');
    await expect(page.locator('body')).toContainText('20');
  });

  test('PASS 20 – Distance unit', async ({ page }) => {
    await inputBox(page).fill('50 km');
    await expect(page.locator('body')).toContainText('km');
  });

  // -------------------------
  // LONG & COMPLEX INPUT
  // -------------------------

  test('PASS 21 – Long paragraph input', async ({ page }) => {
    await inputBox(page).fill(
      'hamaas sQQviDhaanaya saha iishraayala hamudhaava athara paevaethi gaetumvalin palasthiinuuvan 70,000k pamaNa miya gos aethi bava iishraayala aarakShaka hamudhaava pavasayi.'
    );
    await expect(page.locator('body')).toContainText('70,000');
  });

  // -------------------------
  // MULTI-LINE INPUT
  // -------------------------

  test('PASS 22 – Multi-line conversational input', async ({ page }) => {
    await inputBox(page).fill('mata kanna oone.\noyath enavadha?');
    await expect(page.locator('body')).toContainText('කන්න');
  });

});