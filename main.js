var fs = require('fs')

function main() {
    let projectName = process.argv[2]

    if(projectName) {
        fs.mkdirSync(projectName)
    } else {
        console.error('You must give a project name!')
    }

}

main()