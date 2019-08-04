const request = require('sync-request');
const assert = require('assert');

exports.visitLink = async (urls) => {
 
  for (i=0; i<urls.length; i++){
    
    if(urls[i].includes("mailto")){
      console.log(`${urls[i]} ==> Invalid:`);
      continue;
    }
    await checkLink(urls[i], i);
  }
}

exports.checkLink = checkLink = async (URL, i) => {
  
  const res = request('GET', URL);
  allure.createStep(`Link No: ${i}`, () => {
    
    allure.createStep(`URL: ${URL}`, () => {})();
    allure.createStep(`Status Code: ${res.statusCode}`, () => {})();

    console.log(`${i}: ${URL} \n==> statusCode: ${res.statusCode}`);
    assert.equal(res.statusCode, 200, 'Status code is not OK');
  })();
}