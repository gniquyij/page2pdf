# page2pdf

page2pdf saves web page to pdf using [Puppeteer](https://github.com/GoogleChrome/puppeteer).

## Usage
```
- uses: gniquyij/page2pdf@v1.0.0
  with:
    url: <url>   # E.g. 'https://gniquyij.github.io'
```

## Examples

- [Daily email Hacker News](https://github.com/gniquyij/page2pdf/blob/master/.github/workflows/hackernews.yml)

- [Read web page later on Kindle](https://github.com/gniquyij/page2pdf/blob/master/.github/workflows/send2kindle.yml)
```
$ curl -H "Accept: application/vnd.github.everest-preview+json"\
    -H "Authorization: token <your-Github-personal-access-token>"\
    --request POST\
    --data '{"event_type": "send2kindle", "client_payload": {"text": <url>}}'\   # E.g. "https://gniquyij.github.io"
    https://api.github.com/repos/gniquyij/page2pdf/dispatches
```