import * as fs from 'fs/promises';

fs.cp('server', 'build', {recursive: true}).then(() => {
    console.log('Success!')
}).catch(err => {
    console.error(err);
});