#!/usr/bin/sh

# starts the frida server if not started
startfrida()
usage="hook.sh com.package.android fridascript.js"
if [[ $1 == "" ]]; then
    #statements
    echo $usage
    exit
fi
python3 hook.py $1 $2
