const get = (req,res)=>{
    res.send([
      {
        "id": 1,
        "name": "Technology",
        "author": "HT Tech",
        "title": "5 best travel apps you MUST have on phone.",
        "description": "If you're travelling soon, then these 5 best Travel apps will be proven best travel guides for you! Check the list here.",
        "url": "https://tech.hindustantimes.com/tech/news/5-best-travel-apps-you-must-have-on-phone-from-incredible-india-packpoint-to-google-maps-71653321131316.html",
        "urlToImage": "https://images.hindustantimes.com/tech/img/2022/05/23/1600x900/IMG_3234_1648264812602_1653321541566.jpg",
        "publishedAt": "2022-05-23T15:59:43Z",
        "content": "Are you planning to travel? Well, when it comes to planning a long vacation or even a road trip, your smartphone is the best buddy that can help you to organise the trip or just show you the sights ."
        },
        
       {
        "id": 2,
        "name": "Technology",
        "author": "Mitchel Broussard",
        "title": "Deals: Amazon Discounting Apple's MagSafe Charger.",
        "description": "Today we're tracking a collection of discounts on Apple's charging accessories, including the MagSafe Charger, MagSafe Duo Charger, and...",
        "url": "https://www.macrumors.com/2022/05/23/deals-amazon-magsafe-charger/",
        "urlToImage": "https://images.macrumors.com/t/18WF9X0TZyzIhIPJ14fSjKIabuY=/2500x/article-new/2022/05/magsafe-charger-new-purple.jpg",
        "publishedAt": "2022-05-23T15:03:44Z",
        "content": "Today we're tracking a collection of discounts on Apple's charging accessories, including the MagSafe Charger, MagSafe Duo Charger, and MagSafe Battery Pack. All of these deals can be found on Amazon… [+1170 chars]"
        },
        {
        "id": 3,
        "name": "Technology",
        "author": "Andrew Myrick",
        "title": "Android apps for Windows get their most significant update yet .",
        "description": "Microsoft brings Android 12L to Windows before it's even available on many smartphones.",
        "url": "https://www.androidcentral.com/apps-software/windows-11-android-12l-apps",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/thimyQpk6bpV82doUaSJ4T-1200-80.jpg",
        "publishedAt": "2022-05-23T14:38:22Z",
        "content": "<ul><li>Microsoft has updated the Windows Subsystem for Android to Android 12L. </li><li>When the Subsystem was originally launched, it relied on Android 11. </li><li>The update is currently availabl… [+3377 chars]"
        },
        {
        "id": 4,
        "name": "Technology",
        "author": "Sarah Perez",
        "title": "Epic Games Bandcamp temporarily wins right .",
        "description": "Epic Games isnt just fighting the app stores over the right to process its own in-app payments in its popular game Fortnite, it’s also taken up its antitrust legal battle with the tech giants via Bandcamp, the internet music company Epic acquired in March. T…",
        "url": "https://techcrunch.com/2022/05/23/epic-games-bandcamp-temporarily-wins-right-to-use-its-own-payments-system-on-google-play/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/09/GettyImages-1147500502.jpg?w=600",
        "publishedAt": "2022-05-23T14:27:24Z",
        "content": "Epic Games isnt just fighting the app stores over the right to process its own in-app payments in its popular game Fortnite, it’s also taken up its antitrust legal battle with the tech giants via Ba… [+3097 chars]"
        },
        {
          "id": 5,
          "name": "Technology",
          "author": "ET Spotlight Special",
          "title": "Wordle #338 Answer and Hint for today's Wordl.",
          "description": "Struggling with wordle today? Don't worry we've got you covered. Read this article to know the hints and answer for Wordle 338.",
          "url": "https://economictimes.indiatimes.com/news/international/us/wordle-338-answer-and-hint-for-todays-wordle-may-23/articleshow/91748832.cms",
          "urlToImage": "https://img.etimg.com/thumb/msid-91748810,width-1070,height-580,imgsize-29624,overlay-economictimes/photo.jpg",
          "publishedAt": "2022-05-23T15:04:00Z",
          "content": "As we begin a new week, here is today's Wordle. Well, this first word is an interesting one that may resonate particularly with some players, but it also has an element of challenge that makes it a l… [+1718 chars]"
          },
        ])
}

module.exports.apiController = get;
        