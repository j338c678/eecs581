#/bin/bash
while ! nc -z localhost 3306;
do
  echo sleeping;
  sleep 1;
done;
  echo Connected to Mysql!;
  node server.js
