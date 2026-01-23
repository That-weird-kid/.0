function FindProxyForURL(url, host) {

    // --- LIST OF WEBSITES THAT SHOULD USE THE PROXY ---
    if (
        dnsDomainIs(host, ".chatgpt.com") ||
        dnsDomainIs(host, ".snapchat.com") ||
        dnsDomainIs(host, ".poki.com") ||
        dnsDomainIs(host, ".roblox.com") ||
        dnsDomainIs(host, ".ro.blox.com") ||
        shExpMatch(host, "*.roblox.com")
        shExpMatch(host, "*.ro.blox.com")

    ) {
        // Replace with your proxy details
        return "PROXY 142.111.48.253:7030";
    }

    // --- EVERYTHING ELSE GOES DIRECT ---
    return "DIRECT";
}
