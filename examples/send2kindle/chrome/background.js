chrome.browserAction.onClicked.addListener(
    function fetchUrl() {
        let url = window.location.toString()
        fetch('<https://api.github.com/repos/<GITHUB_USERNAME>/page2pdf/dispatches>', {
            body: JSON.stringify({
                'event_type': 'send2kindle',
                'client_payload': {'text': url}
            }),
            headers: {
                'Accept': 'application/vnd.github.everest-preview+json',
                'Authorization': 'token <GITHUB_PERSONAL_ACCESS_TOKEN>',
            },
            method: 'POST',
        })
        alert('Page is on the way to your Kindle. 5 minute countdown!')
    }
)