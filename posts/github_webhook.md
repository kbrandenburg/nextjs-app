---
title: 'Github Webhook Deployment'
date: '2021-06-02'
status: new
---

We have liftoff! Now when I push to my github repository, github will send a request to my api which will trigger a pull and rebuild. Testing with this post!

Required several more tweaks to get it fully working, also I realized at one point I couldnt use the stop command and then start because node couldn't continue deployment after stopping haha. I switched systemctl from --user back to regular system .service at one point in diagnosing the issue, I may look into making it run as regular user again.