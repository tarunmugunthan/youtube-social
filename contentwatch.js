// let list;

function display(){

    let videos = document.createElement('div');
    videos.className = "videos";
    let videoSection = document.createElement('div');
    videoSection.className = "videoSection";

    for(var i = 0; i < 4; i++){

        let videoContainer = document.createElement('article');
        videoContainer.className = "videoContainer";
        let thumbnailContainer = document.createElement('div');
        thumbnailContainer.className = "thumbnailContainer";
        let thumbnail = document.createElement('a');
        thumbnail.href = "#";
        thumbnail.className = "thumbnail";
        thumbnail.setAttribute("data-duration", "12:24");
        let thumbnailImg = document.createElement('img');
        thumbnailImg.src = "https://img.youtube.com/vi/rhPSo4_Tgi0/1.jpg";
        thumbnailImg.className = "thumbnailImg";
        let vidBottomSection = document.createElement('div');
        vidBottomSection.className = "vidBottomSection";
        // let channelIcon = document.createElement('a');
        // channelIcon.href = "#";
        // let iconImg = document.createElement('img');
        // iconImg.src = "http://unsplash.it/36/36?gravity=center";
        // iconImg.className = "iconImg";
        let videoDetails = document.createElement('div');
        videoDetails.className = "videoDetails";
        let videoTitle = document.createElement('a');
        videoTitle.href = "#"
        videoTitle.className = "videoTitle";
        videoTitle.textContent = "Video Title: This is me rambling about stuff to fill up space";
        // videoTitle.textContent = list[i];
        let channelName = document.createElement('a');
        channelName.href = "#"
        channelName.className = "channelName";
        channelName.textContent = "Channel Name";
        let videoMeta = document.createElement('div');
        videoMeta.className = "videoMeta";
        let views = document.createElement('span');
        views.textContent = "12k views";
        let dot = document.createElement('span')
        dot.textContent = " • "
        let date = document.createElement('span');
        date.textContent = "1 week ago"
        let reccomender = document.createElement('div');
        reccomender.className = "recommender";
        reccomender.textContent = "Recommended by Tarun, Rishabh, Advait, Rishi, Richa, Pranjal"

        videoMeta.appendChild(views);
        videoMeta.appendChild(dot);
        videoMeta.appendChild(date);
        videoMeta.appendChild(reccomender);

        videoDetails.appendChild(videoTitle);
        videoDetails.appendChild(channelName);
        videoDetails.appendChild(videoMeta);

        // channelIcon.appendChild(iconImg);

        // vidBottomSection.appendChild(channelIcon);
        vidBottomSection.appendChild(videoDetails);

        thumbnail.appendChild(thumbnailImg);
        thumbnailContainer.appendChild(thumbnail);

        videoContainer.appendChild(thumbnailContainer);
        videoContainer.appendChild(vidBottomSection);

        videoSection.appendChild(videoContainer);

    }


    videos.appendChild(videoSection);

    let parent = document.getElementById('secondary-inner');
    console.log(parent);

    parent.insertBefore(videos, parent.childNodes[4]);

    console.log("displayed!");


}

function button(){
    let buttonContainer = document.createElement('div');
    buttonContainer.className = "buttonContainer";
    let buttonImg = document.createElement('img');
    buttonImg.src = "https://img.icons8.com/material-rounded/24/000000/star--v1.png";
    let buttonText = document.createElement('div');
    buttonText.className = "buttonText";
    buttonText.textContent = "RECOMMEND";

    buttonContainer.appendChild(buttonImg);
    buttonContainer.appendChild(buttonText);

    let pos = document.getElementById('info');
    pos.insertBefore(buttonContainer, pos.childNodes[0]);
}

function myFunc() {
    if (document.getElementById('secondary-inner')) {
      console.log("shit is happening")  
      display();
    } else {
      setTimeout(myFunc, 15);
    }

    if (document.getElementById('info')){
        button();
    } else {
      setTimeout(myFunc, 15);
    }
}


myFunc();





// document.addEventListener('DOMContentLoaded', function() {
//     console.log("extension is working");
//     display();
// }, false);




// chrome.runtime.sendMessage({greeting: "hello"}, 
//     function(response){
//         display(response.farewell);
//         console.log(response.farewell);
//         // setInterval(function(){console.log(response.farewell)}, 2000);
// })





// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     if (request.action === 'fetchArray') {
//         console.log(request.content);
//         sendResponse({confirmation: "got it"});
//     }
// });





// display();







// var box = document.createElement("div");
// box.className = "ext-container"
// var header = document.createElement("h1");
// header.className = "ext-header"
// var text = document.createTextNode("Shared Videos");

// var videoContainer = document.createElement("div");
// videoContainer.className = "videoContainer"




// header.appendChild(text);

// for( var i = 0; i < 12; i++){

//     var videoSection = document.createElement("div");
//     // var videoThumbnail = document.createElement("div");
//     // var videoContent = document.createElement("div");
//     // var videoText = document.createTextNode("Video Name");
//     videoSection.className = "videoSection"
//     // videoThumbnail.className = "videoThumbnail"
//     // videoContent.className = "videoContent"
//     // videoText.className = "videoText"

//     // videoSection.appendChild(videoThumbnail);
//     // // videoThumbnail.prepend('<img class = "yt-simple-endpoint inline-block style-scope ytd-thumbnail" src="tarun.png" />')
//     // videoSection.appendChild(videoContent);
//     // videoContent.appendChild(videoText);
//     videoContainer.appendChild(videoSection);

// }



// box.appendChild(header);
// box.appendChild(videoContainer);


// let element = document.getElementById("contents")
// $('<h1>HAHAHA</h1>').insertBefore(element, null);

//put it in the beginning of content
