# YT Social

YT Social is a Chrome extension that changes your YouTube website to natively show videos recommended by your friends and allows you to recommend videos to them. It works best when deployed between a small group of people. 


## How does it work?

### 1. Find a group

Find a group of people who you'd want to share videos amongst. You could pick people who share very similar interests which would lead to you getting a fairly consistent list of recommendations about shared interests. Alternatively, you could choose a group that has varied interests which would expand your bubble through videos different from what you'd watch.

### 2. Set your space up

Using this extension requires you to get your own API keys for Youtube and Airtable. 

#### Youtube API key

1. Log into or create a Google account, and use that to access your [developer console](https://console.developers.google.com/)
2. Create a new project and enable the Youtube Data API v3
3. Create your credentials and note down the API key 
4. Plug this into your `content.js` and `popup.js` file

#### Airtable API key

1. Log into or create an Airtable account, and copy the base using the [YT Social Airtable template](https://www.airtable.com/universe/exprcK5aesvl2jTB9/yt-social)
2. Customize the `recommended_by` and `watched_by` fields with the names of your friends
3. To get the API key for the base you just created, go to [airtable.com/api](https://www.airtable.com/api) and select your base
4. Note down the ID and API key for the base
5. Plug these into your `content.js` and `popup.js` file

### 3. Send it to your friends

Send a copy of these files to all the people in your group, and make sure each person's `content.js` and `popup.js` files have their name in it at the beginning. 


### 4. Everyone installs the extenstion

Install the extension in any Chromium based browser. If you're using Chrome as your browser, you can install it by going to [chrome://extensions](chrome://extensions), clicking on "Load unpacked extension" and selecting the folder which contains your YT Social files. 

### 5. Enjoy!

You're all set! Recommend videos you want to share with your friends, and see what your friends want to share with you right from your homepage! 
