#!/bin/sh

find . \
    -type f \
    -mindepth 2\
    -name tests.sh \
    -exec {} \;

find . \
    -type f \
    -name tests.js \
    -exec {} \;

find . \
    -type f \
    -path "./tests/*" \
    -exec {} \;
