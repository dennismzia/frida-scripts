#!/usr/bin/sh

# starts the frida server if not started
startfrida()
usage="hook.sh com.package.android fridascript.js"
if [ -z $1 ]; then
    #statements
    echo "hook.sh com.package.android fridascript.js"
    exit
fi
python3 ~/scripts/hook.py $1 $2
