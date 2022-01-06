const  Puppeteer  = require("puppeteer");

(async()=>{
        
    try {

        let browser=await Puppeteer.launch({
            headless:false
            ,defaultViewport:null
        })
        const page = await browser.newPage();
    await page.goto('https://www.google.com');
    await page.waitForTimeout(3000)
    let typename = await page.type("input", "burger king", { delay: "100" })

    await page.click("input.gNO89b")
    await waitForSelector(".h3.LC20lb.MBeuO.DKV0Md")
    await page.click(".h3.LC20lb.MBeuO.DKV0Md")

    // LC20lb MBeuO DKV0Md
        
    } catch (error) {
        console.log(error);

    }

})()