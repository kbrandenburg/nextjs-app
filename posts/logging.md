---
title: 'Logging'
date: '2021-06-01'
status: new
---

I was dinking around with the logging of systemd using journalctl and realized my console.log was not appearing. I tried to make it work but as I investigated the issue it dawned on me that we do not want to capture console.log on a production system. Major security issue. 

I also found it interesting how I could not log environment variables, I tried logging process.env.REPO_PATH and got undefined. This is a good thing from a security standpoint, if I accidentally left logging enabled on a production environment someone could see a secret like database connection or github api secret or something else. 

Journalctl does capture major events like when the server was started and I think it will print out exceptions to a degree.

