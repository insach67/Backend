const get = (req,res)=>{
    res.send([
      {
        "id": 1,
        "name": "Health",
       
        "author": "Nivedita Mishra",
        "title": "Best vitamins B supplements: ",
        "description": "The much-needed B group of vitamins is the building block of our body that gives us energy and boost our immunity.",
        "url": "https://www.hindustantimes.com/shop-now/health-and-beauty/best-vitamins-b-supplements-give-boost-to-your-immunity-energy-levels-101653379309663.html",
        "urlToImage": "https://images.hindustantimes.com/img/2022/05/24/400x225/Vitamin_B_Complex_1653388761451_1653388816199.jpg",
        "publishedAt": "2022-05-24T11:21:00Z",
        "content": null
       },
       {
        "id": 2,
        "name": "Health",
        "author": "Ridhi Suri",
        "title": "Monkeypox Vs Coronavirus: Which ",
        "description": "Experts believe that the monkeypox virus is less dangerous and lethal than COVID. Compared to the Monkeypox virus, COVID-19 is more dangerous as it can spread rapidly from one person to another.",
        "url": "https://www.indiatvnews.com/health/monkeypox-vs-coronavirus-which-one-is-a-bigger-threat-are-the-two-alike-covid19-2022-05-24-778988",
        "urlToImage": "https://resize.indiatvnews.com/en/resize/newbucket/715_-/2022/05/pjimage-2022-05-24t161125-1653388888.jpg",
        "publishedAt": "2022-05-24T10:42:37Z",
        "content": "At a time when the world is already struggling to deal with COVID19, reports of a monkeypox outbreak have raised concerns. Both the viruses are equally dangerous on the ground of transmission. Accord… [+3247 chars]"
       },
       {
        "id": 3,
        "name": "Health",
       
        "author": null,
        "title": "US releasing Monkeypox vaccine - 11Alive",
        "description": "The CDC is trying to get ahead of a potential outbreak.",
        "url": "https://www.youtube.com/watch?v=WXKi90jFJ7w",
        "urlToImage": "https://i.ytimg.com/vi/WXKi90jFJ7w/hqdefault.jpg",
        "publishedAt": "2022-05-24T10:34:04Z",
        "content": null
       
       },
       {
       
        "id": 4,
        "name": "Health",
       
        "author": "ABP News Bureau",
        "title": "No Need To Fear Over Spread Of Monkeypox, ",
        "description": "The monkeypox outbreak is currently reported in countries including the UK, the US and Canada.",
        "url": "https://news.abplive.com/tamil-nadu/no-need-to-fear-over-spread-of-monkeypox-says-tn-health-minister-ma-subramanian-1533452",
        "urlToImage": "https://feeds.abplive.com/onecms/images/uploaded-images/2022/05/23/d76b1109b262faf8ce3877ca925d0a16_original.jpg?impolicy=abp_cdn&imwidth=1200&imheight=628",
        "publishedAt": "2022-05-24T10:19:21Z",
        "content": "Chennai: Tamil Nadu Health Minister Ma Subramanian requested the people of the state to remain without fear over the spread of monkeypox fever. He also said that the transmission rate of the fever is… [+1591 chars]"
       },
       {
      
      
        "id": 5,
        "name": "Health",
       
        "author": null,
        "title": "Monkeypox Outbreak I Cases expected to",
        "description": "Monkeypox is a disease of close contact and the risk to the general public remains low. So says the head of the World Health Organization's Smallpox Secretar...",
        "url": "https://www.youtube.com/watch?v=o15SWsupr40",
        "urlToImage": "https://i.ytimg.com/vi/o15SWsupr40/maxresdefault.jpg",
        "publishedAt": "2022-05-24T10:18:02Z",
        "content": null
       
       },
       {
        "id": 6,
        "name": "Health",
       
        "author": "Mashum",
        "title": "Drug Consumption, Abuse, And Addiction",
        "description": "Since the beginning of the 2000s, the issue of drug addiction has become highly prominent. Please keep reading to find out more about it.",
        "url": "https://www.devdiscourse.com/article/health/2048512-drug-consumption-abuse-and-addiction-trends-across-the-united-states",
        "urlToImage": "https://www.devdiscourse.com/remote.axd?https://devdiscourse.blob.core.windows.net/devnews/24_05_2022_15_37_15_1312848.jpg?width=920&format=jpeg",
        "publishedAt": "2022-05-24T10:15:20Z",
        "content": "Introduction\r\nUnlike the eastern section of the world, the western part, especially the USA, has put many stringent drug policies in place. However, the government was (or is) still unable to prevent… [+6234 chars]"
       },
       {
       
        "id": 7,
        "name": "Health",
       
        "author": null,
        "title": "Monkeypox Conspiracy Theories, ",
        "description": "Monkeypox has symptoms similar to smallpox but is far less severe, with most people recovering within weeks.",
        "url": "https://www.ndtv.com/world-news/monkeypox-conspiracy-theories-blaming-us-for-spread-swirl-in-china-3004566",
        "urlToImage": "https://c.ndtvimg.com/2022-05/jtn9hrmo_monkeypox-virus-reuters-650_625x300_24_May_22.jpg",
        "publishedAt": "2022-05-24T10:02:21Z",
        "content": "Over 100 suspected and confirmed cases have been reported in Europe, US outbreak. (Reuters Photo)\r\nChinese social media users are saying that the United States could be the source of the rise in monk… [+2535 chars]"
       }

    ])
}

module.exports.apiController = get;
        