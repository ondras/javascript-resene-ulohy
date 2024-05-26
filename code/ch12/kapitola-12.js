import * as fs from "node:fs";
import * as http from "node:http";
import validateUsername from "./validate-username.js";


let accounts = [];
try {
	let data = fs.readFileSync("accounts.json");
	accounts = JSON.parse(data);
} catch (e) {}

function processRequest(req, res) {
	if (req.method != "POST") {
		res.writeHead(204);
		res.end();
		return;
	}

	let body = "";
	req.on("data", chunk => body += chunk.toString());

	req.on("end", () => {
		let data = JSON.parse(body);

		if (validateUsername(data.username)) {
			accounts.push(data);
			res.writeHead(200);
			fs.writeFile("accounts.json", JSON.stringify(accounts), e => {});
		} else {
			res.writeHead(400);
		}

		res.end();
	});
}

const server = http.createServer(processRequest);
server.listen(8000);
