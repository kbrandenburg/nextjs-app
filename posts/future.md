---
title: 'Post from the future'
date: '2021-05-27'
status: archived
---

I modified the afore mentioned service to use npm build and start vs dev mode. However the build command appeared to not work, even though I set working directory of the service to the site root npm build failed for some reason. Despite npm start working just fine. Will have to explore this some more.


Ah hah! Systemd reverse syntax got me again. I was trying ExecPreStart when the correct syntax is ExecStartPre. Whatever I'm just glad I got the thing fully working!

