#!/bin/bash
if [[ "$1" =~ (^TASK#[0-9]{5}:) ]];
then
  cd $PWD
  git commit -m "$1"
else
  echo "Invalid commit"
fi
