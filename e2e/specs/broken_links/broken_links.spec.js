const helper = require('./../../helpers/helpers.js');
const homepage = require('./../../pageObjects/homepage.js');

describe('Homepage - Check Broken Links', () => {

  const links = homepage.mainContainer.all(by.tagName('a'));
  let urls;

  it(`Fetch all links from homepage`, async () => {

    await links.getAttribute('href').then( (URL) => {
      allure.createStep(`Total no: of links in homepage are: ${URL.length}`, () => {})();
      console.log(`Total no: of links in homepage are: ${URL.length}`);
      urls = URL;
    });
  });

  it(`Visit links to check if any broken`, async () => {
    
    await helper.visitLink(urls);
  });
});