#/bin/bash
while ! nc -z 172.18.0.2 3306;
do
  echo sleeping;
  sleep 1;
done;
  echo Connected to Mysql!;
  node server.js
