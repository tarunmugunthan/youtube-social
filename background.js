

let array = [
    "The", 
    "Extension",
    "Is",
    "Working"
]


chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log(sender.tab ?
                  "from a content script:" + sender.tab.url :
                  "from the extension");
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