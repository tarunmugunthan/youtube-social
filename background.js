
setInterval(function(){ console.log("Hello"); }, 1000);

// chrome.tabs.onCreated.addListener(function(tab) {
//         console.log(tab.url);
//         console.log("tab hi");
//     }
// )

// let current_url = " ";

// chrome.tabs.onUpdated.addListener(function(number, object, tab) {
//         // console.log(number);
//         // console.log(object);
//         console.log(tab.url);
//         // console.log("tab hi 2");

//         if(tab.url.indexOf("https://www.youtube.com/") !== -1){
//             console.log("ON YOUTUBE");
//             if(tab.url !== current_url){
//                 current_url = tab.url;
//                 console.log("url has changed");
//                 if(tab.url == "https://www.youtube.com/"){
//                     console.log("executing script")
//                     // chrome.scripting.executeScript( { target: {tabId: tab.id}, files: ['content.js']} )
//                 }
//             }
//         } else{
//             console.log("NOT ON YOUTUBE");
//         }
//     }
// )

// chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
//     chrome.tabs.query(
//         { currentWindow: true, active: true },
//         function (tabArray) { 
//             let activeTab = tabArray[0];
//             console.log(activeTab); 
//             console.log("Chutiya");
//             chrome.scripting.executeScript( { target: {tabId: activeTab.id}, files: ['content.js']} );
//         }
//     );
// });

let array = [
    "The", 
    "Extension",
    "Is",
    "Working"
]


chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log("from a content script:" + sender.tab.url);
      if (request.greeting === "hello")
        sendResponse({farewell: array});
    }
);



// chrome.tabs.query({}, function(tabs) {
//     for (var i=0; i<tabs.length; ++i) {
//         chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
//             console.log(response.farewell); 
//         });
//     };
// });

// chrome.tabs.sendMessage(tab.id, { action: 'fetchArray' }, response => {
//     console.log(response);
// });