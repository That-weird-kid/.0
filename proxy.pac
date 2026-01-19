function FindProxyForURL(url, host) {

    // --- LIST OF WEBSITES THAT SHOULD USE THE PROXY ---
    if (
        dnsDomainIs(host, "example.com") ||
        dnsDomainIs(host, ".example.com") ||
        dnsDomainIs(host, "another-site.com") ||
        shExpMatch(host, "*.targetsite.org")
    ) {
        // Replace with your proxy details
        return "PROXY proxy.yourprovider.com:10000";
    }

    // --- EVERYTHING ELSE GOES DIRECT ---
    return "DIRECT";
}
