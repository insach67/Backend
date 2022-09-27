const get = (req,res) =>{
    res.send([
      {
        "id": 1,
        "name": "Hollywood",
        "author": "Emily Mae Czachor",
        "title": "Chris Pratt And Katherine . .",
        "description": "\"We are so excited to announce the birth of our second daughter.\"",
        "url": "https://www.buzzfeed.com/emilymaeczachor/chris-pratt-and-katherine-schwarzenegger-welcome-baby-no-2",
        "urlToImage": "https://img.buzzfeed.com/buzzfeed-static/static/2022-05/23/14/enhanced/9c2e2e069690/original-418-1653317199-3.jpg?crop=1083:567;65,0%26downsize=1250:*",
        "publishedAt": "2022-05-23T15:39:57Z",
        "content": null,
        },
        {
        "id": 2,
        "name": "Hollywood",
        "author": null,
        "title": "Noah Thompson talks winning 20th season.",
        "description": "Thompson is joined by runner-up HunterGirl after winning the singing competition during Sunday night's finale.READ MORE: https://gma.abc/3wBGlvGSUBSCRIBE to ...",
        "url": "https://www.youtube.com/watch?v=wh5-f8PhtcM",
        "urlToImage": "https://i.ytimg.com/vi/wh5-f8PhtcM/hqdefault.jpg",
        "publishedAt": "2022-05-23T15:24:26Z",
        "content": null,
        },
        {
        "id":3,
        "name": "Hollywood",
        "author": "Elizabeth Rosner, Ben Kesslen",
        "title": "Kate Moss will testify in Johnny Depp, ",
        "description": "Model Kate Moss is expected to be called to the stand this week in Johnny Depp’s bombshell defamation trial against Amber Heard, The Post exclusively learned Monday. The British fashion icon, 48, w…",
        "url": "https://nypost.com/2022/05/23/kate-moss-will-testify-in-johnny-depp-amber-heard-trial/",
        "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/05/moss-depp-comp.jpg?quality=75&strip=all&w=1024",
        "publishedAt": "2022-05-23T15:16:00Z",
        "content": "Model Kate Moss is expected to be called to the stand this week in Johnny Depps bombshell defamation trial against Amber Heard, The Post exclusively learned Monday.\r\nThe British fashion icon, 48, wil… [+3364 chars]"
        },
       {
        "id":4,
        "name": "Hollywood",
        "author": "Tom Breihan",
        "title": "The xx's Oliver Sim Shares New Song \"Hideous",
        "description": "",
        "url": "https://www.stereogum.com/2187613/the-xxs-oliver-sim-shares-new-song-hideous-about-living-with-hiv/music/",
        "urlToImage": "https://static.stereogum.com/uploads/2022/05/Oliver-Sim-1653315421.jpg",
        "publishedAt": "2022-05-23T14:41:00Z",
        "content": "The xxs Oliver Sim has been living in the public eye for well over a decade, but he’s always been a fairly reserved, mysterious presence. Today, Sim has told the world something that he’s been keepi… [+4808 chars]"
        },
        {
        "id": 5,
        "name": "Hollywood",
        "author": "Ellen Durney",
        "title": "Fans Think Kim Kardashian May Have Sneakily.",
        "description": "Its no secret that Pete made a number of references to Ye during his eight-year run on SNL. However, it seems Kim wasn’t going to let that prevent her from celebrating his departure from the show.",
        "url": "https://www.buzzfeednews.com/article/ellendurney/kim-kardashian-kanye-west-reference-in-pete-davidson-snl",
        "urlToImage": "https://img.buzzfeed.com/buzzfeed-static/static/2022-05/23/14/enhanced/4e5322ead11c/original-12592-1653315741-17.jpg?crop=1244:651;5,11%26downsize=1250:*",
        "publishedAt": "2022-05-23T14:39:49Z",
        "content": null
        },
    ])
}
module.exports.apiController = get;