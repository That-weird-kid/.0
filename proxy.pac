function FindProxyForURL(url, host) {

    // --- LIST OF WEBSITES THAT SHOULD USE THE PROXY ---
    if (
        dnsDomainIs(host, ".chatgpt.com") ||
        dnsDomainIs(host, ".snapchat.com") ||
        dnsDomainIs(host, ".poki.com") ||
        dnsDomainIs(host, ".roblox.com") ||
        dnsDomainIs(host, ".ro.blox.com") ||
        dnsDomainIs(host, "10.10.12.1") ||
    ) {
        // Replace with your proxy details
        return "PROXY 23.95.150.145:6114";
    }

    // --- EVERYTHING ELSE GOES DIRECT ---
    return "DIRECT";
}
