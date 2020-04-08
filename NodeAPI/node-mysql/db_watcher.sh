#/bin/bash
while ! nc -z 3.21.27.27 3306;
do
  echo sleeping;
  sleep 1;
done;
  echo Connected to Mysql!;
  node server.js
