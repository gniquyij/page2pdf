#!/usr/bin/env bash

URL=$1

curl -v -H "Accept: application/vnd.github.everest-preview+json"\
  -H 'Authorization: token '"$GITHUB_PERSONAL_ACCESS_TOKEN"''\
  --request POST\
  --data '{"event_type": "send2kindle", "client_payload": {"text": "'"$URL"'"}}'\
  https://api.github.com/repos/$GITHUB_USERNAME/page2pdf/dispatches