chrome.browserAction.onClicked.addListener(function(tabs) {
    chrome.tabs.executeScript(null, {file: "amazon.js"});
 });

console.log("hello");
//AMAZON SCRIPT--Removes items from cart
//Runs main stuff when the icon is clicked
