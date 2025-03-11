function convertToBash() {
    let input = document.getElementById("inputText").value.trim();
    let lines = input.split("\n");
    let mkdirPaths = new Set();
    let touchPaths = new Set();
    let pathStack = [];
    let rootFolder = "";

    lines.forEach((line, index) => {
        let cleanedLine = line.replace(/[\│├──└──]/g, "").trim();
        if (!cleanedLine) return;

        let level = (line.match(/^\s+/) || [""])[0].length / 4;

        if (index === 0 && cleanedLine.endsWith("/")) {
            rootFolder = cleanedLine.replace("/", "");
            pathStack = [rootFolder];
            return;
        }

        pathStack = pathStack.slice(0, level);

        if (cleanedLine.endsWith("/")) {
            let dirName = cleanedLine.replace("/", "");
            if (dirName === "images") {
                pathStack.push("static");
            }
            let dirPath = [rootFolder, ...pathStack, dirName].join("/");
            mkdirPaths.add(dirPath);
            pathStack.push(dirName);
        } else if (cleanedLine.includes(".")) {
            let filePath = [rootFolder, ...pathStack, cleanedLine].join("/");
            if (cleanedLine === "index.html") {
                filePath = `${rootFolder}/templates/index.html`;
            } else if (cleanedLine === "styles.css") {
                filePath = `${rootFolder}/static/styles.css`;
            }
            touchPaths.add(filePath);
        }
    });

    let mkdirCommand = `mkdir -p ${[...mkdirPaths].map(path => `"${path}"`).join(" ")}`;
    let touchCommand = `touch ${[...touchPaths].map(path => `"${path}"`).join(" ")}`;

    document.getElementById("outputText").value = mkdirCommand + "\n" + touchCommand;
}

function copyToClipboard() {
    let output = document.getElementById("outputText");
    output.select();
    document.execCommand("copy");
    alert("Copied to clipboard!");
}
