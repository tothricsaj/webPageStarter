var fs = require('fs')

function main() {
    let projectName = process.argv[2]

    if(projectName) {
        fs.mkdirSync(projectName)
    } else {
        console.error('You must give a project name!')
        process.exit()
    }

    fs.copyFileSync('./mockFiles/index.html', `./${projectName}/index.html`)
}

main()