var rules = [
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
    "gist.github.com",
    // medium
    "medium.com",
    // docker
    "cloudfront.net",
    // wikipedia
    "wikipedia.org",
    // hacker news
    "news.ycombinator.com"
];

function FindProxyForURL(url, host) {
    for (var i = 0; i < rules.length; i++) {
        if (dnsDomainIs(host, rules[i])) {
            return "HTTP 127.0.0.1:8255; HTTPS 127.0.0.1:8255; SOCKS 127.0.0.1:8256";
        }
    }
    return "DIRECT";
};
