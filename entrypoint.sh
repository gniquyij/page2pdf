#!/bin/sh -l

node ./main.js $1 > domain
. ./domain
echo "::set-output name=domain::$DOMAIN"