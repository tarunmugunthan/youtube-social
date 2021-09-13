var userData = {
	username: "tarun",
	group: "1"
}


function displayHome(videoListData, userData){
	
	console.log(userData)
	myFuncHome(videoListData, userData);
	
	function myFuncHome(videoListData, userData) {
		let condition = document.getElementById('primary').childNodes[0];
		if (!Boolean(condition.tagName)){
			location.reload();
			setTimeout(myFuncHome, 500);
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
			display1(videoListData, userData);
		}

	function display1(videoListData, userData){

		let toShow = [...videoListData.videos, ...videoListData.watched] 

		console.log("display1 videoList ", toShow)
		videosHome = document.getElementById("videosHome");
		videoSectionHome = document.getElementById("videoSectionHome");
		// videoSectionHome.style.display = "grid";
		// videoSectionHome.style.gridTemplateColumns = "repeat(auto-fit, minmax(250px, 1fr))";
	
		for(let i = 0; i < 12; i++){
			// console.log("display1 ", i, toShow[i])	
			let currentVideo = toShow[i]
			
			let videoContainerHome = document.createElement('article');
			videoContainerHome.className = "videoContainerHome";
			
			let thumbnailHome = document.createElement('div');
			thumbnailHome.id = "thumbnailHome-" + currentVideo.youtubeData.id
			thumbnailHome.className = "thumbnailHome";
			thumbnailHome.setAttribute("data-duration", getDuration(currentVideo.youtubeData.contentDetails.duration));
			if (currentVideo.flag == "w") {
				// do css for watched videos
				thumbnailHome.setAttribute("data-duration", "WATCHED");
			}
			thumbnailHome.addEventListener("click", () => markWatched(currentVideo.youtubeData.id, userData))
			
			let thumbnailImgHome = document.createElement('img');
			thumbnailImgHome.src = currentVideo.youtubeData.snippet.thumbnails.high.url;
			thumbnailImgHome.className = "thumbnailImgHome";

			let vidBottomSectionHome = document.createElement('div');
			vidBottomSectionHome.className = "vidBottomSectionHome";

			let channelIconHome = document.createElement('a');
			channelIconHome.href = "https://www.youtube.com/channel/" + currentVideo.youtubeData.snippet.channelId;
			let iconImgHome = document.createElement('img');
			iconImgHome.src = currentVideo.youtubeData.channelThumbnail;
			iconImgHome.className = "iconImgHome";
			
			let videoDetailsHome = document.createElement('div');
			videoDetailsHome.className = "videoDetailsHome";
			let videoTitleHome = document.createElement('p');
			// videoTitleHome.href = "https://www.youtube.com/watch?v=" + currentVideo.youtubeData.id;
			// videoTitleHome.href = "#";
			videoTitleHome.className = "videoTitleHome";
			videoTitleHome.addEventListener("click", () => { markWatched(currentVideo.youtubeData.id, userData)})
			videoTitleHome.textContent = currentVideo.youtubeData.snippet.title;
			let channelNameHome = document.createElement('a');
			channelNameHome.href = "https://www.youtube.com/channel/" + currentVideo.youtubeData.snippet.channelId;
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

	
		}
	
	}

	}

}


function displayWatch(videoListData, userData){
	
	
	myFunc(videoListData, userData);
	
	function myFunc(videoListData, userData) {
		
		if (document.getElementById('secondary-inner')) {
			console.log("shit is happening")	
			display(videoListData, userData);
		} else 
			setTimeout(myFunc, 15);
			
		if (document.getElementById('info'))
			button(userData);
		else 
			setTimeout(myFunc, 15);
	}
	

	
	function display(videoListData, userData){
	
	let toShow = [...videoListData.videos, ...videoListData.watched] 
	// console.log(toShow)


	let videos = document.createElement('div');
	videos.className = "videos";
	let videoSection = document.createElement('div');
	videoSection.className = "videoSection";

	for(var i = 0; i < 4; i++){

		// console.log(toShow[i])
		let currentVideo = toShow[i]
		let videoContainer = document.createElement('article');
		videoContainer.className = "videoContainer";
		let thumbnailContainer = document.createElement('div');
		thumbnailContainer.className = "thumbnailContainer";
		thumbnailContainer.id = "thumbnailContainer-" + currentVideo.youtubeData.id;

		let thumbnail = document.createElement('div');
		thumbnail.className = "thumbnail";
		thumbnail.setAttribute("data-duration", getDuration(currentVideo.youtubeData.contentDetails.duration));
		thumbnail.addEventListener("click", () => markWatched(currentVideo.youtubeData.id, userData))
		
		let thumbnailImg = document.createElement('img');
		thumbnailImg.src = currentVideo.youtubeData.snippet.thumbnails.high.url;
		thumbnailImg.className = "thumbnailImg";
		
		let vidBottomSection = document.createElement('div');
		vidBottomSection.className = "vidBottomSection";
		let videoDetails = document.createElement('div');
		videoDetails.className = "videoDetails";
		let videoTitle = document.createElement('p');
		// videoTitle.href = "https://www.youtube.com/watch?v=" + currentVideo.youtubeData.id;
		videoTitle.className = "videoTitle";
		videoTitle.textContent = currentVideo.youtubeData.snippet.title;
		videoTitle.addEventListener("click", () => markWatched(currentVideo.youtubeData.id, userData))
		let channelName = document.createElement('a');
		channelName.href = "https://www.youtube.com/channel/" + currentVideo.youtubeData.snippet.channelId;
		channelName.className = "channelName";
		channelName.textContent = currentVideo.youtubeData.snippet.channelTitle;
		
		let videoMeta = document.createElement('div');
		videoMeta.className = "videoMeta";
		let views = document.createElement('span');
		views.textContent = getViews(currentVideo.youtubeData.statistics.viewCount) + " views";
		let dot = document.createElement('span')
		dot.textContent = " • "
		let date = document.createElement('span');
		date.textContent = getTime(currentVideo.youtubeData.snippet.publishedAt);
		let recommender = document.createElement('div');
		recommender.className = "recommender";
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

		recommender.textContent = recoText;

		videoMeta.appendChild(views);
		videoMeta.appendChild(dot);
		videoMeta.appendChild(date);
		videoMeta.appendChild(recommender);

		videoDetails.appendChild(videoTitle);
		videoDetails.appendChild(channelName);
		videoDetails.appendChild(videoMeta);

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
	
	function button(userData){
		let currentVideo = location.href.split('=')[1].split('&')[0]
		let recommendFlag = false
	

		fetch("https://api.airtable.com/v0/app7p5QzizdfWc9z4/Group_" + userData.group + "?api_key=key9aJ5YsRgxI007V", {
			headers: {
					Authorization: "Bearer key9aJ5YsRgxI007V",
					"Content-Type": "application/json"
				},
			method: "GET"
			})
			.then(response => response.json())
			.then(result => {

				let loadedButton = document.getElementById('recommendButton');
				console.log(loadedButton);
				console.log(loadedButton == true);
				if(loadedButton != null){
					loadedButton.remove();
				}

				let buttonContainer = document.createElement('div');
				buttonContainer.id = "recommendButton";
				let buttonLabel = document.createTextNode("");
				
				for (record of result.records) {
					if (record.fields.video_id == currentVideo) 
						if (record.fields.recommended_by.includes(userData.username))
							recommendFlag = true
				}
				buttonContainer.className = recommendFlag ? "buttonContainerDisabled" : "buttonContainer";
				buttonContainer.textContent = recommendFlag ? "RECOMMENDED" : "RECOMMEND";
				buttonContainer.appendChild(buttonLabel);
				
				let buttonStarContainer = document.createElement('div');
				buttonStarContainer.className = "buttonStar"
				let buttonStar = document.createTextNode(' ☆');

				buttonStarContainer.appendChild(buttonStar);
				if (!recommendFlag) {
					buttonContainer.appendChild(buttonStarContainer);
					buttonContainer.addEventListener("click", () => recommend(currentVideo, userData))
				} 
				let pos = document.getElementById('menu-container');
				pos.style.paddingRight = "120px";
				pos.insertBefore(buttonContainer, pos.childNodes[0]);
			
			})
			.catch(e => console.log("recommend button error: ",e))
	
	
	}
	
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


function markWatched(url, userData) {
	let recordData = {}
	fetch("https://api.airtable.com/v0/app7p5QzizdfWc9z4/Group_" + userData.group + "?api_key=key9aJ5YsRgxI007V", {
	headers: {
			Authorization: "Bearer key9aJ5YsRgxI007V",
			"Content-Type": "application/json"
		},
	method: "GET",
	})
		.then(response => response.json())
		.then(result => {
			console.log("markw", result)
			for (record of result.records) {
				if (record.fields.video_id == url) 
					recordData = record
			}
			console.log("markWatched GET:", recordData)
			if (recordData.id) {
				if (!recordData.fields.watched_by.includes(userData.username))
					recordData.fields.watched_by.push(userData.username)
				delete recordData.createdTime;
				delete recordData.fields.lastModified
				let postData = {
					records: [recordData]
				}
				console.log("to put ", postData)
				fetch("https://api.airtable.com/v0/app7p5QzizdfWc9z4/Group_" + userData.group + "?api_key=key9aJ5YsRgxI007V", {
					headers: {
						Authorization: "Bearer key9aJ5YsRgxI007V",
						"Content-Type": "application/json"
					},
					method: "PUT",
					body: JSON.stringify(postData),
				})
					.then(response => response.json())
					.then(result => {
						console.log(result)
						window.location.href = "https://www.youtube.com/watch?v=" + url;
					})
					.catch(e => console.log("PUT error:", e))
			}
		})
		.then(res => res)
		.catch(e => console.log("GET error: ", e))
	console.log("watched!")
}

function recommend(url, userData) {
	
	fetch("https://api.airtable.com/v0/app7p5QzizdfWc9z4/Group_" + userData.group + "?api_key=key9aJ5YsRgxI007V", {
		headers: {
				Authorization: "Bearer key9aJ5YsRgxI007V",
				"Content-Type": "application/json"
			},
		method: "GET",
	})
		.then(response => response.json())
		.then(result => {
			let record
			record = result.records.find(record => record.fields.video_id === url)
			console.log(record)
			if (record !== undefined) {
				// that means it exists and you need to PUT

				record.fields.recommended_by.push(userData.username)
				delete record.createdTime;
				delete record.fields.lastModified
				let postData = { records: [record] }

				fetch("https://api.airtable.com/v0/app7p5QzizdfWc9z4/Group_" + userData.group + "?api_key=key9aJ5YsRgxI007V", {
					headers: {
							Authorization: "Bearer key9aJ5YsRgxI007V",
							"Content-Type": "application/json"
						},
					method: "PUT",
					body: JSON.stringify(postData),
				})
					.then(response => response.json())
					.then(result => {
						console.log("PUT: ", result)
					})
			}	
			else {
				// you need to POST

				let record = {
					fields: {
    				recommended_by: [userData.username],
    				watched_by: [userData.username],
    				video_id: url,
				}}
				let postData = { records: [record] }
				fetch("https://api.airtable.com/v0/app7p5QzizdfWc9z4/Group_" + userData.group + "?api_key=key9aJ5YsRgxI007V", {
					headers: {
							Authorization: "Bearer key9aJ5YsRgxI007V",
							"Content-Type": "application/json"
						},
					method: "POST",
					body: JSON.stringify(postData),
				})
					.then(response => response.json())
					.then(result => {
						console.log("POST: ", result)
					})
			}

			let recommendButton = document.getElementById("recommendButton")
			recommendButton.textContent = "RECOMMENDED";
			recommendButton.className = 'buttonContainerDisabled';
		})
		.catch(e => console.log("recommend post error: ", e))

	console.log(url)
}


function main(videoListData, userData){
	
	if (location.href == "https://www.youtube.com/" || location.href == "https://www.youtube.com/#"){
		let loadedHome = document.getElementsByClassName("videosHome");

		for(let i = 0; i < loadedHome.length; i++)
			loadedHome.item(i).remove();

		// console.log("running home page");
		displayHome(videoListData, userData);

	} 

	else if (location.href.startsWith("https://www.youtube.com/watch")){
		let loadedWatch = document.getElementsByClassName("videos");
		// let loadedButton = document.getElementsByClassName("buttonContainer")
		// let loadedButtonDisabled = document.getElementsByClassName("buttonContainerDisabled")
		// loadedWatch.append(document.getElementsByClassName("buttonContainer"))
		
		for (let i = 0; i < loadedWatch.length; i++){
			loadedWatch.item(i).remove();
		}

		displayWatch(videoListData, userData);
	}
	console.log(location.href);
}




function getData(username,group, userData) {

	fetch("https://api.airtable.com/v0/app7p5QzizdfWc9z4/Group_" + group + "?api_key=key9aJ5YsRgxI007V", {
	headers: {
			Authorization: "Bearer key9aJ5YsRgxI007V",
			"Content-Type": "application/json"
		},
	method: "GET"
	})
	.then(response => response.json())
	.then(data => sortVideo(data, username, userData))
	.catch(e => console.log("getData error: ", e))
}

function sortVideo(data, username, userData) {
	let watched = [];
	let videos = [];

	records = data.records;
	for (let record of records) {
		record.fields.lastModified = Date.parse(record.fields.lastModified)
		if (record.fields.recommended_by.includes(username)); 
				// do nothing
		
		else if (record.fields.watched_by.includes(username))	{
			watched.push(record)
		}

		else {
			record.fields.lastModified = Date.parse(record.fields.lastModified)
			videos.push(record)
		}

	}
	console.log("sortVideo success: ", watched, videos);
	getYoutubeData([watched, videos], userData);
}

function getYoutubeData(videos, userData) {
	let watchedList = videos[0];
	let videoList = videos[1];
	const watchedPromises = [];
	const videoPromises = [];

	let videoMax = Math.min(videoList.length, 12)
	let watchedMax = videoMax >= 12 ? 0 : (Math.min(watchedList.length, 12 - videoList.length))

	let videoListData = {
		watched: [],
		videos: []
	};

	for (let i = 0; i < videoMax; ++i) {
		let video = videoList[i]
		url = video.fields.video_id
		videoPromises.push(fetch("https://www.googleapis.com/youtube/v3/videos?id=" + url + "&t&key=AIzaSyDbsWuM_ZIIISlvJoGjLoEoi2G9lFTmkxQ&part=snippet,contentDetails,statistics,status", {
			method: "GET"
		})
			.then(response => response.json())
			.then(result => ({
				youtubeData: result.items[0],
				recordData: video,
				flag: "v"
			}))
			.catch(e => console.log("error youtubeApi: " + e))
		)
	}
	

	for (let i = 0; i < watchedMax; ++i) {
		let video = watchedList[i]
		url = video.fields.video_id
		watchedPromises.push(fetch("https://www.googleapis.com/youtube/v3/videos?id=" + url + "&t&key=AIzaSyDbsWuM_ZIIISlvJoGjLoEoi2G9lFTmkxQ&part=snippet,contentDetails,statistics,status", {
			method: "GET"
		})
			.then(response => response.json())
			.then(result => ({
				youtubeData: result.items[0],
				recordData: video,
				flag: "w"
			}))
			.catch(e => console.log("error youtubeApi: " + e))
		)
	}

	let called = false;
	Promise.all(videoPromises)
		.then((values) => {
			videoListData.videos.push(...values)
			console.log("videoPromises pushed", videoListData.videos.length, videoListData.watched.length)
			console.log("videoListData", videoListData)
			if (videoListData.watched.length === watchedMax && !called) {
				called = true;
				console.log(1)
				getChannelData(videoListData, userData)
			}
		})

	Promise.all(watchedPromises)
		.then((values) => {
			videoListData.watched.push(...values)
			console.log("watchedPromises pushed", videoListData.videos.length, videoListData.watched.length)
			console.log("videoListData", videoListData)
			if (videoListData.videos.length === videoMax && !called) {
				called = true
				console.log(2)
				getChannelData(videoListData, userData)
			}
		})
}

function getChannelData(videoListData, userData) {
	let channelPromises = []
	let videoList = [...videoListData.videos, ... videoListData.watched]
	console.log(videoList)
	for (video of videoList) {
		let data = video
		channelPromises.push(fetch("https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=" + video.youtubeData.snippet.channelId + "&key=AIzaSyDbsWuM_ZIIISlvJoGjLoEoi2G9lFTmkxQ", {
			method: "GET"
		})
			.then(response => response.json())
			.then(result =>  ({
				[data.youtubeData.id]: result.items[0].snippet.thumbnails.default.url
			}))
			.catch(e => console.log("error channel: " + e))
		)
	}

	Promise.all(channelPromises)
		.then(values => {
			let result = {
				watched: [],
				videos: []
			}
			data = Object.assign({}, ...values);
			// console.log("channel ",values)
			for (list in videoListData) {
				for (video of videoListData[list]) {
					video.youtubeData.channelThumbnail = data[video.youtubeData.id]
					if (video.flag == "w") 
						result.watched.push(video)
					else if (video.flag == "v")
						result.videos.push(video)
					// console.log(video)
				}
			}
			result.watched.sort((a,b) => b.recordData.fields.lastModified - a.recordData.fields.lastModified)
			result.videos.sort((a,b) => b.recordData.fields.lastModified - a.recordData.fields.lastModified)
			main(result, userData)	
		})
}

function start() {
	let username = "tarun";
	let group = "1";

	var userData = {
		username: username,
		group: group
	}
	getData(username,group,userData)
}

start()



