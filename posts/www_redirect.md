---
title: 'www'
date: '2021-07-06'
status: new
---

Ahh, weburls that begin with www. Me being lazy, and not quite seeing the point of having www in the url, opted to just go without www in my domain name. I guess it could be useful to differentiate an externally facing website from an internal only, but in the case of my website I have no internal use cases. However, I did see an informative post on serverfault, [What's the point in having "www" in a URL?](https://serverfault.com/questions/145777) that gave one use case, where you are using CNAME records and using a CDN. In that case, I may one day end up having my url contain www. For the time being I am just keeping it short.

Adding redirect rules to handle redirecting www.keithbrandenburg.com for both http and https ended up being a bit of a chore and many many attempts with many restarts of the reverse proxy. I think what was causing the main issue is I was missing some semi colons, which was weird because missing semi-colons did not always result in failure. Sometimes it would work, and sometimes it would cause the web server to not want to start at all. And sometimes the web server would start without complaining but the redirect rule did not work. Never did I get any useful debug information from journalctl or systemd. 