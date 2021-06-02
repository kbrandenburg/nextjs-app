---
title: 'Github Webhook Deployment'
date: '2021-06-02'
status: new
---

We have liftoff! Now when I push to my github repository, github will send a request to my api which will trigger a pull and rebuild. Testing with this post!

Required several more tweaks to get it fully working, also I realized at one point I couldnt use the stop command and then start because node couldn't continue deployment after stopping haha. I switched systemctl from --user back to regular system .service at one point in diagnosing the issue, I may look into making it run as regular user again.

Okay ran into a few issues because I had to make sure git on the server was up to sync. Then I deployed something else that had a bug in it which I would had caught if I tested locally before pushing.. Lets hope this commit and push does the trick!
