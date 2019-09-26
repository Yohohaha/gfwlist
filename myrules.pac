var rules = [
    "google.com",
    "youtube.com"
];

function FindProxyForURL(url, host) {
    for (var i = 0; i < rules.length; i++) {
        if (dnsDomainIs(host, rules[i])) {
            return "PROXY 127.0.0.1:8255";
        }
    }
    return "DIRECT";
};
