

function displayHome(){

    function display1(){

        let videosHome = document.createElement('div');
        videosHome.className = "videosHome";
        let videoSectionHome = document.createElement('div');
        videoSectionHome.className = "videoSectionHome";
    
        for(var i = 0; i < 12; i++){
    
            let videoContainerHome = document.createElement('article');
            videoContainerHome.className = "videoContainerHome";
            let thumbnailHome = document.createElement('a');
            thumbnailHome.href = "#";
            thumbnailHome.className = "thumbnailHome";
            thumbnailHome.setAttribute("data-duration", "12:24");
            let thumbnailImgHome = document.createElement('img');
            thumbnailImgHome.src = "https://img.youtube.com/vi/rhPSo4_Tgi0/1.jpg";
            thumbnailImgHome.className = "thumbnailImgHome";
            let vidBottomSectionHome = document.createElement('div');
            vidBottomSectionHome.className = "vidBottomSectionHome";
            let channelIconHome = document.createElement('a');
            channelIconHome.href = "#";
            let iconImgHome = document.createElement('img');
            iconImgHome.src = "http://unsplash.it/36/36?gravity=center";
            iconImgHome.className = "iconImgHome";
            let videoDetailsHome = document.createElement('div');
            videoDetailsHome.className = "videoDetailsHome";
            let videoTitleHome = document.createElement('a');
            videoTitleHome.href = "#"
            videoTitleHome.className = "videoTitleHome";
            videoTitleHome.textContent = "Video Title";
            // videoTitle.textContent = list[i];
            let channelNameHome = document.createElement('a');
            channelNameHome.href = "#"
            channelNameHome.className = "channelNameHome";
            channelNameHome.textContent = "Channel Name";
            let videoMetaHome = document.createElement('div');
            videoMetaHome.className = "videoMetaHome";
            let viewsHome = document.createElement('span');
            viewsHome.textContent = "12k views";
            let dotHome = document.createElement('span')
            dotHome.textContent = " • "
            let dateHome = document.createElement('span');
            dateHome.textContent = "1 week ago"
            let recommenderHome = document.createElement('div');
            recommenderHome.className = "reccommenderHome";
            recommenderHome.textContent = "Recommended by Tarun"
    
            videoMetaHome.appendChild(viewsHome);
            videoMetaHome.appendChild(dotHome);
            videoMetaHome.appendChild(dateHome);
            videoMetaHome.appendChild(recommenderHome);
    
            videoDetailsHome.appendChild(videoTitleHome);
            videoDetailsHome.appendChild(channelNameHome);
            videoDetailsHome.appendChild(videoMetaHome);
    
            channelIconHome.appendChild(iconImgHome);
    
            vidBottomSectionHome.appendChild(channelIconHome);
            vidBottomSectionHome.appendChild(videoDetailsHome);
    
            thumbnailHome.appendChild(thumbnailImgHome);
    
            videoContainerHome.appendChild(thumbnailHome);
            videoContainerHome.appendChild(vidBottomSectionHome);
    
            videoSectionHome.appendChild(videoContainerHome);
    
        }
    
    
        videosHome.appendChild(videoSectionHome);
    
        let child = document.getElementById('primary').childNodes[0];
    
        child.insertBefore(videosHome, child.childNodes[3]);
    
    }

    function myFuncHome() {
        let condition = document.getElementById('primary').childNodes[0];
        if (!Boolean(condition.tagName)){
            location.reload();
            setTimeout(myFuncHome, 1000);
            console.log("tagname not found")
        } else {
            console.log("shit is happening at home");
            console.log(!Boolean(condition.tagName)); 
            display1();
        }
    }

    myFuncHome();

}



function displayWatch(){
    
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
}



// chrome.runtime.sendMessage({greeting: "hello"}, 
//     function(response){
//         console.log(response.farewell);
//         // setInterval(function(){console.log(response.farewell)}, 2000);
// })



function main(){
    
    if(location.href == "https://www.youtube.com/"){
        let loadedHome = document.getElementsByClassName("videosHome");
        for(let i = 0; i < loadedHome.length; i++){
            loadedHome.item(i).remove();
        }
        console.log("running home page");
        displayHome();
    } else if(location.href.startsWith("https://www.youtube.com/watch")){
        let loadedWatch = document.getElementsByClassName("videos");
        for(let i = 0; i < loadedWatch.length; i++){
            loadedWatch.item(i).remove();
        }
        console.log("running watch page")
        displayWatch();
    }
    console.log(location.href);
}

main();







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
