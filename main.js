var fs = require('fs')

function main() {
    let projectName = process.argv[2]

    fs.mkdirSync(projectName)
}

main()