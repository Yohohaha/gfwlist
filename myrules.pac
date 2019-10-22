var rules = [
    // google
    "google",
    "google.com",
    "google.com.hk",
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
    "imgur.com"
];

function FindProxyForURL(url, host) {
    for (var i = 0; i < rules.length; i++) {
        if (dnsDomainIs(host, rules[i])) {
            return "PROXY 127.0.0.1:8255; PROXY 127.0.0.1:8256";
        }
    }
    return "DIRECT";
};
