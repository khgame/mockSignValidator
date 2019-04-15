# mockSignValidator

[![Npm Package](https://img.shields.io/npm/v/@khgame/mock-sign-validator.svg?style=flat)](https://img.shields.io/npm/v/@khgame/mock-sign-validator.svg?style=flat)
![NPM](https://img.shields.io/npm/l/@khgame/mock-sign-validator.svg?color=purple)
![GitHub last commit (branch)](https://img.shields.io/github/last-commit/khgame/mockSignValidator/master.svg?color=purple)
![GitHub stars](https://img.shields.io/github/stars/khgame/mockSignValidator.svg?color=blue)
![npm (tag)](https://img.shields.io/npm/v/@khgame/mock-sign-validator/latest.svg?color=blue)

mockSignValidator is mock library of validator,  
which can be used to simplify the test environment of validation. 

## install

- global:  
    `npm i -g @khgame/mock-sign-validator`
    
- project:  
    `npm i --save @khgame/mock-sign-validator` or  
    `yarn add @khgame/mock-sign-validator`

## run

`mockSignValidator [-P port]` or
`npx mockSignValidator [-P port]`
 
the default port is 11601

## unit test usage

For unit test, the mockSignValidator can be started as a child process. Therefore, it will listen to specific port (default:11601) to enable hence tests .

ex.
```js

import {exec} from 'child_process';
import {forMs} from "kht";

describe(`validate owner_id`, async function () {
    // ...
    
    let validatorProcess;
    before(async () => {
        // ...
        console.log("=> start mock");
        validatorProcess = exec("npx mockSignValidator start -m", function (err) {
            if(err) { console.log('child exit code (exec)', err.code); }
        });
        await forMs(1000);
        console.log("=> start test");
        // ...
    });

    after((done) => {
        //...
        validatorProcess.kill();
        console.log("=> end login server mock");
        // ...
        done();
    });
    
    // it( ...
})

``` 


