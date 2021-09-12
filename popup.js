start()

function start() {
	let userData = {
		username: "tarun",
		group: "1"
	}
	getRecommended(userData)
}


function getRecommended(userData) {
	fetch("https://api.airtable.com/v0/app7p5QzizdfWc9z4/Group_" + userData.group + "?api_key=key9aJ5YsRgxI007V", {
		headers: {
				Authorization: "Bearer key9aJ5YsRgxI007V",
				"Content-Type": "application/json"
			},
		method: "GET",
	})
		.then(response => response.json())
		.then(result => {
			records = result.records
			console.log(records)
			recommended = records.filter(record => record.fields.recommended_by.includes(userData.username))
			recommended.sort((a,b) => Date.parse(b.fields.lastModified) - Date.parse(a.fields.lastModified))
			result = recommended.map(record => ({ url: record.fields.video_id, recommended: record.fields.recommended_by.filter(person => person != userData.username)}))

			getYoutube(result) 
		})
		.catch(e => console.log(e))
}

function getYoutube(list) {
	let urlList = list.map(record => record.url)
	console.log(urlList)

	let fetchPromises = []

	for (let item of list) {
		
		fetchPromises.push(fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" + item.url + "&key=AIzaSyDbsWuM_ZIIISlvJoGjLoEoi2G9lFTmkxQ", {
			method: "GET"
		})
			.then(response => response.json())
			.then(result => ({
				youtubeData: {
					id: result.items[0].id,
					title: result.items[0].snippet.title,
					channelName: result.items[0].snippet.channelTitle,
					channelId: result.items[0].snippet.channelId,
					thumbnail: "http://img.youtube.com/vi/" + result.items[0].id + "/mqdefault.jpg",
				},
				recommendData: {
					recommended_by: item.recommended
				}
			}))
			.catch(e => console.log(e))
		)
	}

	Promise.all(fetchPromises)
		.then(result => {
			console.log(result)
			displayPopup(result)
		})
}


function displayPopup(list) {
	
	for (let i = 0; i < 10; ++i) {
	// for (let video of list) {
		video = list[i]
		console.log(video)
		let itemContainer = document.createElement("div"); itemContainer.className = "itemContainer"
		itemContainer.addEventListener("click", () => window.open("https://www.youtube.com/watch?v=" + video.youtubeData.id, "_blank"))
		
		let thumbnailContainer = document.createElement("div"); thumbnailContainer.className = "thumbnailContainer"
		
		let thumbnailImage = document.createElement("img")
		thumbnailImage.src = video.youtubeData.thumbnail
		itemContainer.appendChild(thumbnailContainer)
		thumbnailContainer.appendChild(thumbnailImage)

		let videoDetails = document.createElement("div"); videoDetails.className = "videoDetails"

		let videoTitle = document.createElement("p"); videoTitle.className = "videoTitle"
		videoTitle.textContent = video.youtubeData.title
		videoDetails.appendChild(videoTitle)

		// let channel = document.createElement("a"); channel.className = "channel"
		// channel.textContent = video.youtubeData.channelName
		// channel.href = "https://www.youtube.com/channel/" + video.youtubeData.channelId
		// videoDetails.appendChild(channel)

		let recommenders = document.createElement("p"); recommenders.className = "recommenders"
		
		let recoNum = video.recommendData.recommended_by.length;
		let recoText = "" 
		if (recoNum >= 1) recoText += "also recommended by " + video.recommendData.recommended_by[0]
		if (recoNum == 2)	recoText += " and " + video.recommendData.recommended_by[1]
		if (recoNum >= 3) {
			recoText += ", " + video.recommendData.recommended_by[1] + " and "
			if (recoNum == 3) recoText += video.recommendData.recommended_by[2]
			else recoText += (recoNum - 2) + " more people"
		}
		recommenders.textContent = recoText
		videoDetails.appendChild(recommenders)
		
		itemContainer.appendChild(videoDetails)
		
		let container = document.getElementById("container")
		container.appendChild(itemContainer)

	}
}

