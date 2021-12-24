const fs = require('fs');
const { resolve } = require('path');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if there's an error, reject the promise and send the error to the promise's cacth method
            if (err){
                reject(err);
                return;
            }

            // if everything went well, resolved the promise and send the successful data to the then method
            resolve({
                ok: true,
                message: 'File Created!'
            })
        })
    });
}

const copyFile = () => {
    fs.copyFile('./dist/index.html', './utils/index.html', err =>{
        if (err) {
            reject(err);
            return;
        }

        resolve({
            ok: true,
            message: 'File Copied!'
        })
    })
}

module.exports ={
    writeFile: writeFile,
    copyFile: copyFile
};