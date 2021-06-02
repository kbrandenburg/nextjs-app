---
title: 'Logging'
date: '2021-06-01'
status: modified
---

Trying to capture logs for a systemd process was weird. Many things were being ignored. I ended up setting up the .service to write to file outs which solved most my issues. I also ran into a lot of problems getting environment variables to work with systemd. I ended up using full path to node in my exec statements. 

I finally discovered I could use Environment: statements to add environment variables, which is how I setup my secret for github api and my repo path. 