import express from "express";
import fs from "fs";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import net from "net";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
let port = process.env.PORT || 3000;

function checkPortInUse(port, callback) {
  const server = net.createServer((socket) => {
    socket.write("Echo server\r\n");
    socket.pipe(socket);
  });

  server.listen(port, "127.0.0.1");
  server.on("error", (err) => {
    if (err.code === "EADDRINUSE") {
      callback(true);
    } else {
      callback(false);
    }
  });

  server.on("listening", () => {
    server.close();
    callback(false);
  });
}

function startServer() {
  checkPortInUse(port, (isInUse) => {
    if (isInUse) {
      console.log(`Port ${port} is in use, trying port ${port + 1}...`);
      port += 1;
      startServer(); // Recursively check the next port
    } else {
      app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
      });
    }
  });
}

app.get("/", (req, res) => {
  fs.readFile(path.join(__dirname, "index.html"), "utf8", (err, data) => {
    if (err) {
      return res.status(500).send("Error reading index.html");
    }

    const replacedData = data
      .replace(
        "const githubToken = 'YOUR_GITHUB_TOKEN';",
        `const githubToken = '${process.env.GITHUB_TOKEN}';`,
      )
      .replace(
        "const vercelToken = 'YOUR_VERCEL_TOKEN';",
        `const vercelToken = '${process.env.VERCEL_TOKEN}';`,
      );

    res.send(replacedData);
  });
});

startServer();
