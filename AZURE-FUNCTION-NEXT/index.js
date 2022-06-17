module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const browser = await (await puppeteer).launch({
        pipe: true,
        ignoreHTTPSErrors: true,
        args: [
          '--disable-gpu',
          '--font-render-hinting=none',
          '--full-memory-crash-report',
          '--unlimited-storage',
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-dev-shm-usage',
          '--disable-web-security',
          '--ignore-certificate-errors',
        ],
        devtools: false,
        headless: true,
      });
    
    const page = await browser.newPage();
    await page.goto("https://www.google.com/search?q=page&rlz=1C5GCEM_enIN1005IN1005&oq=page+&aqs=chrome..69i57j35i39j0i67j0i67i131i433j0i512j69i60l3.4218j0j7&sourceid=chrome&ie=UTF-8");
    const buffer = await page.pdf({
      format: "LETTER",
      printBackground: true,
      displayHeaderFooter: false,
      scale: 1,
      landscape: false,
      height: '1440px',
      width: '900px',
      margin: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
    });
    

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: buffer,
    };
}