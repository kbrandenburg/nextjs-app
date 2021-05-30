---
title: 'Systemd is a pain'
date: '2021-05-24'
status: archived
---
Trying to create a custom systemd service for nodejs is being a real chore. Even though I tell it to run as my user it does not see the path my user sees. 
Ive looked at many an article on how to setup env path within the .service file but to no avail. Why is this so **difficult**! I even tried explicitly typing out full paths but node does not like fullpath/node fullpath/npm command.

For the meantime I have decided to utilize the screen utility to create a screen session, run npm, and detach from the session leaving it running.

Posted from my iphone using Terminal and ssh app.

