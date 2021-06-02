// pages/api/webhooks/github.js
const { exec } = require("child_process");
const crypto = require("crypto");
const util = require("util");

// Handle GitHub Webhooks
export default function handler(req, res) {
  exec(
      "cd " +
          process.env.REPO_PATH +
          " && systemctl --user stop nodejs"
  );
  console.log("stopped node");
  res.end();
  return;
};
