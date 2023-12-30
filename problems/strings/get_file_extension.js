// get file extension 

function getFileExtension(filename){
    const extension = filename.split('.').pop()
    return console.log(extension)
}

let file = 'module.js'
getFileExtension(file)

function getFileExtension1(filename){
    const extension = filename.substring(filename.lastIndexOf('.') + 1, filename.length)
    return console.log(extension)
}

getFileExtension1(file)