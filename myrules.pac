var hostNames = [
    // google
    "google.com",
    "googleusercontent.com",
    "gstatic.com",
    "googleapis.com",
    // youtube
    "youtube.com",
    "googlevideo.com",
    "ytimg.com",
    "ggpht.com",
    // gist.github
    // "github.com",
    // "githubassets.com",
    // "githubusercontent.com",
    // "githubapp.com",
    // "github.io",
    // medium
    "medium.com",
    // docker
    // "cloudfront.net",
    // wikipedia
    "wikipedia.org",
    // hacker news
    // "news.ycombinator.com",
    // privoxy
    "privoxy.org",
    "proxifier.com",
    // jetbrains
    // "jetbrains.com",
    // "jetbrains.org",
    // lantern
    "getlantern.org",
    // quora
    "quora.com",
    "quoracdn.net",
    // reddit
    "reddit.com",
    "redditmedia.com",
    "redd.it",
    // twitter
    "twitter.com",
    "twimg.com",
    // facebook
    "facebook.com",
    "facebook.net",
    "fbcdn.net",
    "fbsbx.com",
    "atdmt.com",
    // stackoverflow
    "imgur.com",
    // download
    "uploaded.net",
    //amazonaws
    "amazonaws.com"
];


var hostMatchs = [
    "google"
];


function FindProxyForURL(url, host) {
    for (var i = 0; i < hostNames.length; i++) {
        if (dnsDomainIs(host, hostNames[i])) {
            return "PROXY 127.0.0.1:8255; PROXY 127.0.0.1:8256";
        }
    }
    for (var i = 0; i < hostMatchs.length; i++) {
        if (shExpMatch(host, "*" + hostMatchs[i] + "*")) {
            return "PROXY 127.0.0.1:8255; PROXY 127.0.0.1:8256";
        }
    }
    return "DIRECT";
};
