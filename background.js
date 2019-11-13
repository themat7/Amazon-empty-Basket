chrome.browserAction.onClicked.addListener(function(tabs) {
    chrome.tabs.executeScript(null, {file: "amazon.js"});
 });

console.log("hello");
//AMAZON SCRIPT--Removes items from cart like a reight cunt
