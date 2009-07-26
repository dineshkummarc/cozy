#!/bin/sh

/usr/bin/find . -type f \( -name tests.sh -or -name tests.js \) -exec {} \;
