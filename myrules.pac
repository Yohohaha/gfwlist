var FindProxyForURL = function(init, profiles) {
    return function(url, host) {
        "use strict";
        var result = init, scheme = url.substr(0, url.indexOf(":"));
        do {
            result = profiles[result];
            if (typeof result === "function") result = result(url, host, scheme);
        } while (typeof result !== "string" || result.charCodeAt(0) === 43);
        return result;
    };
}("+auto switch", {
    "+auto switch": function(url, host, scheme) {
        "use strict";
        if (/(?:^|\.)youtube\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)google\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)gstatic\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)googleusercontent\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)googleapis\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)medium\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)googlevideo\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)ytimg\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)ggpht\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)facebook\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)fbcdn\.net$/.test(host)) return "+proxy";
        if (/(?:^|\.)atdmt\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)fbsbx\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)gist\.github\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)cloudfront\.net$/.test(host)) return "+proxy";
        return "DIRECT";
    },
    "+proxy": function(url, host, scheme) {
        "use strict";
        if (/^127\.0\.0\.1$/.test(host) || /^::1$/.test(host) || /^localhost$/.test(host)) return "DIRECT";
        return "PROXY 127.0.0.1:8255";
    }
});
