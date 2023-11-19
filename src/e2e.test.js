import puppeteer from "puppeteer";

describe("App.js", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({});
    page = await browser.newPage();
  });

  it("selects two random launches and compare", async () => {
    await page.goto("http://localhost:5000");
    await page.select("#launch-select-first", "1");
    await page.click("#launch-select-second", "2");
    await page.click("#compare-btn");
  });

  afterAll(() => browser.close());
});
