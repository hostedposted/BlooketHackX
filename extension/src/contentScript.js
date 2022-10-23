async function insertCode () {
    try {
        const cheatMenuRequest = await (await fetch("https://raw.githubusercontent.com/hostedposted/BlooketX/master/dist/bundle.js")).text()
        document.documentElement.setAttribute("onreset", cheatMenuRequest.replaceAll("new URL", "new window.URL"))
        document.documentElement.dispatchEvent(new CustomEvent("reset"))
        document.documentElement.removeAttribute("onreset")
    } catch (e) {
        alert("Failed to load hack\n" + e.message)
    }
}

if (!window.scriptIsInjected) {
    window.scriptIsInjected = true
    setTimeout(insertCode, 1000)
}
