const readlineSync = require('readline-sync')
const fs = require('fs')
const { exec } = require('child_process')
const { resolve } = require('path')

let filePath = `${__dirname}/kata/${readlineSync.question('Enter the problem ID: ')}/index.js`
filePath = resolve(filePath)

if (fs.existsSync(filePath)) {
  exec(`node ${filePath}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing file: ${error.message}`)
      return
    }
    console.log(stdout)
    console.error(stderr)
  })
} else {
  console.log('File not found!')
}