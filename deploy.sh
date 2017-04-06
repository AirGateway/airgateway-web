#!/bin/bash

user="root"
host="web.airgateway.net"
port=22
site_folder="_site"
remote_folder="/srv/airgateway.net/"

scp -P $port -r ${site_folder}/* ${user}@${host}:${remote_folder}
