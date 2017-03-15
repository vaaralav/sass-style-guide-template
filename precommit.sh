#!/bin/sh
yarn run build

if [ $? -eq 0 ]
then
  git add index.html main.js main.css
  exit 0
fi
exit 1
