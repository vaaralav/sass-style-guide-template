#!/bin/bash
yarn run build
RETVAL=$?

if [ $RETVAL -ne 0 ]
then
  exit 1
fi
git add index.html main.js main.css
