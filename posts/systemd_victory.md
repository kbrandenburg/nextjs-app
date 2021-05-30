---
title: 'Systemd Victory!'
date: '2021-05-26'
status: archived
---
I decided I really wanted to make systemd work with my node server, it will simplify things once I get my githook working. It took much trial and error, I even tried creating shell scripts to handle the environment but systemd did not like those either. However I will post the .service file I used to finally get things working (some elements have been changed for security purposes):

[Unit]
Description=NodeJS server, NextJS public frontend
After=network.target


[Service]
Type=simple

User=someuser

Group=somegroup

Environment=NODE_PORT=integerofmyport

Restart=on-failure

RestartSec=10
WorkingDirectory=/pathtomysiteroot
ExecStart=/pathtomysiteroot/node_modules/next/dist/bin/next dev
ExecStop=killall node

[Install]
WantedBy=multi-user.target
