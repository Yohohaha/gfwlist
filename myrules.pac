var rules = [
    // google
    "google",
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
    // reddit
    "reddit.com",
    // twitter
    "twitter.com",
    "twimg.com"
];

function FindProxyForURL(url, host) {
    for (var i = 0; i < rules.length; i++) {
        if (dnsDomainIs(host, rules[i])) {
            return "PROXY 127.0.0.1:8255; PROXY 127.0.0.1:8256";
        }
    }
    return "DIRECT";
};
