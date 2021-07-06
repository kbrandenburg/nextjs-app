// pages/api/webhooks/github.js
const { exec } = require("child_process");
const crypto = require("crypto");
const util = require("util");
const command = "cd " + process.env.REPO_PATH +" && git checkout -f && git pull && systemctl restart node";

// Handle GitHub Webhooks
export default function handler(req, res) {
    try {
        console.log("Incoming Request");
        if (req.method !== 'POST') {
            res.send(404);
            return;
        }
        let sig =
            "sha256=" +
            crypto
                .createHmac("sha256", process.env.WEBHOOKS_SECRET)
                .update(JSON.stringify(req.body))
                .digest("hex");

	console.log("sig=" + sig)
	console.log("git=" + req.headers["x-hub-signature-256"])
        if (
            req.headers["x-hub-signature-256"] === sig &&
            req.body?.ref === "refs/heads/main" &&
            process.env.REPO_PATH
        ) {
            exec(command, (err, stdout, stderr) => {
              console.log(stdout)
              console.log(err)
              console.log(stderr)
            })

            console.log("GitHub Webhook ran successfully");
            res.end();
            return;
        }
        console.log("GitHub Webhook failed");
        res.end();
        return;
    } catch (e) {
        console.log(e);
    }
};
