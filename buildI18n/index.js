const { execSync } = require("child_process");
const { unlinkSync, writeFileSync } = require("fs");
const path = require("path");
const tools = require('./tools');


function runAction() {

	log("Get the Maven project version…");
	version = run(
		`mvn -version`,
		getInput("directory") || null,
	);
	
	log(`Version : ${version}`)
}

runAction();
