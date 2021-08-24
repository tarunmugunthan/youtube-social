let username = "tarun";
let group = "1";



function displayHome(videoListData){
	
	myFuncHome(videoListData);
	
	function myFuncHome(videoListData) {
		let condition = document.getElementById('primary').childNodes[0];
		if (!Boolean(condition.tagName)){
			location.reload();
			setTimeout(myFuncHome, 1000);
			console.log("tagname not found")
		} else {
			console.log("shit is happening at home", !Boolean(condition.tagName));
			let videosHome = document.createElement('div');
			videosHome.className = "videosHome";
			videosHome.id = "videosHome";
			let videoSectionHome = document.createElement('div');
			videoSectionHome.className = "videoSectionHome";
			videoSectionHome.id = "videoSectionHome";
			videosHome.appendChild(videoSectionHome);
			let child = document.getElementById('primary').childNodes[0];
			child.insertBefore(videosHome, child.childNodes[3]);
			display1(videoListData.videos, "v");
			display1(videoListData.watched, "w");
		}

	function display1(videoList, type){
		// let videoList = videoListData.videos;
		// console.log("display1 videoList ", videoList)


		videosHome = document.getElementById("videosHome");
		videoSectionHome = document.getElementById("videoSectionHome");
	
		for(let i = 0; i < videoList.length; i++){
			// console.log("display1 ", i, videoList[i])	
			let currentVideo = videoList[i]
			
			let videoContainerHome = document.createElement('article');
			videoContainerHome.className = "videoContainerHome";
			let thumbnailHome = document.createElement('a');
			thumbnailHome.href = "#";
			thumbnailHome.className = "thumbnailHome";
			thumbnailHome.setAttribute("data-duration", getDuration(currentVideo.youtubeData.contentDetails.duration));
			let thumbnailImgHome = document.createElement('img');
			thumbnailImgHome.src = currentVideo.youtubeData.snippet.thumbnails.standard.url;
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
			videoTitleHome.textContent = currentVideo.youtubeData.snippet.title;
			let channelNameHome = document.createElement('a');
			channelNameHome.href = "#"
			channelNameHome.className = "channelNameHome";
			channelNameHome.textContent = currentVideo.youtubeData.snippet.channelTitle;
			let videoMetaHome = document.createElement('div');
			videoMetaHome.className = "videoMetaHome";
			let viewsHome = document.createElement('span');
			viewsHome.textContent = getViews(currentVideo.youtubeData.statistics.viewCount) + " views";
			let dotHome = document.createElement('span')
			dotHome.textContent = " • "
			let dateHome = document.createElement('span');
			dateHome.textContent = getTime(currentVideo.youtubeData.snippet.publishedAt);
			let recommenderHome = document.createElement('div');
			recommenderHome.className = "reccommenderHome";
			let recoText = "Recommended by ";
			let recoNum = currentVideo.recordData.fields.recommended_by.length;
			
			if (recoNum >= 1) 
				recoText += currentVideo.recordData.fields.recommended_by[0]
			
			if (recoNum == 2) 
				recoText += " and " + currentVideo.recordData.fields.recommended_by[1]

			if (recoNum >= 3) {
				recoText += ", " + currentVideo.recordData.fields.recommended_by[1] + " and "
				if (recoNum == 3) 
					recoText += currentVideo.recordData.fields.recommended_by[2]
				else 
					recoText += (recoNum - 2) + " more people"
			}

			recommenderHome.textContent = recoText
	
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

			if (type == "w") {
				videoContainerHome.style["background-color"] = "#aabbcc"
			}
	
		}
	
	}

	}


}


function displayWatch(){
	
			let videoContainer = document.createElement('article');
	function display(){

		let videos = document.createElement('div');
		videos.className = "videos";
		let videoSection = document.createElement('div');
		videoSection.className = "videoSection";
	
		for(var i = 0; i < 4; i++){
	
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



function getViews(views) {
	views = "" + views
	let result = "", l = views.length
	
	if (l <= 3) 			result += views
	else if (l <= 6)	result += views.slice(0,-3) + "K"
	else if (l <= 9)	result += views.slice(0,-6) + "M"
	else if (l <= 12) result += views.slice(0, -9) + "B"

	return result
}

function getTime(previous) {

		let now = Date.now();
		previous = Date.parse(previous)
		let res 

    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
		var msPerWeek = msPerDay * 7;
    var msPerMonth = msPerWeek * 4;
    var msPerYear = msPerDay * 365;

    var elapsed = now - previous;

    if (elapsed < msPerMinute) {
			res = Math.round(elapsed/1000)
      return res + (res == 1 ? " second ago" : ' seconds ago');   
		}

    else if (elapsed < msPerHour) {
      res = Math.round(elapsed/msPerMinute)
			return  res + (res == 1 ? " minute ago" : ' minutes ago');   
		}

    else if (elapsed < msPerDay ) {
      res = Math.round(elapsed/msPerHour)
      return res + (res == 1 ? " hour ago" : ' hours ago');   
    }

    else if (elapsed < msPerWeek) {
      res = Math.round(elapsed/msPerDay)
      return res + (res == 1 ? " day ago" : ' days ago');   
    }

    else if (elapsed < msPerMonth ) {
      res = Math.round(elapsed/msPerWeek)
      return res + (res == 1 ? " week ago" : ' weeks ago');   
    }

    else if (elapsed < msPerYear) {
      res = Math.round(elapsed/msPerMonth)
      return res + (res == 1 ? " month ago" : ' months ago');   
    }

    else {
      res = Math.round(elapsed/msPerYear)
      return res + (res == 1 ? " year ago" : ' years ago');   
    }
}

function getDuration(duration) {
	let time = {
		h: "00",
		m: "00",
		s: "00"
	}

	duration = duration.slice(2,duration.length)
	for (let char of duration) {
		if (/^[A-Z]$/i.test(char)) {															// regex
			if (char == "H")
				time.h = duration.slice(0, duration.indexOf(char))
			else if (char == "M") 
				time.m = duration.slice(0, duration.indexOf(char))
			else if (char == "S")
				time.s = duration.slice(0, duration.indexOf(char)).padStart(2, 0)
			
			duration = duration.slice(duration.indexOf(char)+1)
		}
	}
	result = time.m + ":" + time.s 
	if (time.h != "00")	result = time.h + ":" + result

	return result
}

function main(videoListData){
	
	if (location.href == "https://www.youtube.com/"){
		let loadedHome = document.getElementsByClassName("videosHome");
		console.log(loadedHome.length)

		for(let i = 0; i < loadedHome.length; i++)
			loadedHome.item(i).remove();

		// console.log("running home page");
		displayHome(videoListData);

	} 

	else if (location.href.startsWith("https://www.youtube.com/watch")){
		let loadedWatch = document.getElementsByClassName("videos");
		for (let i = 0; i < loadedWatch.length; i++){
			loadedWatch.item(i).remove();
		}
		console.log("running watch page")
		displayWatch();
	}
	console.log(location.href);
}


// var box = document.createElement("div");
// box.className = "ext-container"
// var header = document.createElement("h1");
// header.className = "ext-header"
// var text = document.createTextNode("Shared Videos");

// var videoContainer = document.createElement("div");
// videoContainer.className = "videoContainer"




// header.appendChild(text);

// for( var i = 0; i < 12; i++){

//	 var videoSection = document.createElement("div");
//	 // var videoThumbnail = document.createElement("div");
//	 // var videoContent = document.createElement("div");
//	 // var videoText = document.createTextNode("Video Name");
//	 videoSection.className = "videoSection"
//	 // videoThumbnail.className = "videoThumbnail"
//	 // videoContent.className = "videoContent"
//	 // videoText.className = "videoText"

//	 // videoSection.appendChild(videoThumbnail);
//	 // // videoThumbnail.prepend('<img class = "yt-simple-endpoint inline-block style-scope ytd-thumbnail" src="tarun.png" />')
//	 // videoSection.appendChild(videoContent);
//	 // videoContent.appendChild(videoText);
//	 videoContainer.appendChild(videoSection);

// }



// box.appendChild(header);
// box.appendChild(videoContainer);


// let element = document.getElementById("contents")
// $('<h1>HAHAHA</h1>').insertBefore(element, null);

//put it in the beginning of content



function getData(username, group) {
	fetch("https://api.airtable.com/v0/app7p5QzizdfWc9z4/Group_" + group + "?api_key=key9aJ5YsRgxI007V", {
	headers: {
			Authorization: "Bearer key9aJ5YsRgxI007V",
			"Content-Type": "application/json"
		},
	method: "GET"
	})
	.then(response => response.json())
	.then(data => sortVideo(data, username))
	.catch(e => console.log("getData error: ", e))
}


function sortVideo(data, username) {
	let watched = [];
	let videos = [];

	records = data.records;
	for (let record of records) {
		if (record.fields.recommended_by.includes(username)); 
				// do nothing
		else if (record.fields.watched_by.includes(username))	{
			record.fields.lastModified = Date.parse(record.fields.lastModified)
			watched.push(record)
		}

		else {
			record.fields.lastModified = Date.parse(record.fields.lastModified)
			videos.push(record)
		}

	}
	console.log("sortVideo success: ", watched, videos);
	getYoutubeData([watched, videos]);
}


async function getYoutubeData(videos) {
	let watchedList = videos[0];
	let videoList = videos[1];
	const watchedPromises = [];
	const videoPromises = [];

	const videoListData = {
		watched: [],
		videos: []
	};

	for (let video of videoList) {
		url = video.fields.video_id
		videoPromises.push(fetch("https://www.googleapis.com/youtube/v3/videos?id=" + url + "&t&key=AIzaSyDbsWuM_ZIIISlvJoGjLoEoi2G9lFTmkxQ&part=snippet,contentDetails,statistics,status", {
			method: "GET"
		})
			.then(response => response.json())
			.then(result => ({
				youtubeData: result.items[0],
				recordData: video
			}))
			.catch(e => console.log("error youtubeApi: " + e))
		)
	}

	for (let video of watchedList) {
		url = video.fields.video_id
		watchedPromises.push(fetch("https://www.googleapis.com/youtube/v3/videos?id=" + url + "&t&key=AIzaSyDbsWuM_ZIIISlvJoGjLoEoi2G9lFTmkxQ&part=snippet,contentDetails,statistics,status", {
			method: "GET"
		})
			.then(response => response.json())
			// .then(result =>)
			.then(result => ({
				youtubeData: result.items[0],
				recordData: video
			}))
			.catch(e => console.log("error youtubeApi: " + e))
		)
	}

	
	Promise.all(videoPromises)
		.then((values) => {
			videoListData.videos.push(...values)
			console.log("videoPromises pushed", videoListData.videos.length, videoListData.watched.length)
			console.log("videoListData", videoListData)
			if (videoListData.watched.length === watchedList.length) {
				videoListData.watched.sort((a,b) => b.recordData.fields.lastModified - a.recordData.fields.lastModified)
				videoListData.videos.sort((a,b) => b.recordData.fields.lastModified - a.recordData.fields.lastModified)
				console.log(1)
				main(videoListData)
			}
		})

	Promise.all(watchedPromises)
		.then((values) => {
			videoListData.watched.push(...values)
			console.log("watchedPromises pushed", videoListData.videos.length, videoListData.watched.length)
			console.log("videoListData", videoListData)
			if (videoListData.videos.length === videoList.length) {
				videoListData.videos.sort((a,b) => b.recordData.fields.lastModified - a.recordData.fields.lastModified)
				videoListData.watched.sort((a,b) => b.recordData.fields.lastModified - a.recordData.fields.lastModified)
				console.log(2)
				main(videoListData)
			}
		})
}







/***  CODE EXECUTES FROM HERE  ***/
// getData() --> sortVideo() --> getYoutubeData() --> main() --> displayHome() --> myFunc() --> display1() --> getViews(), getTime(), getDuration()

getData(username, group)