#!/usr/bin/env node

import * as commander from "commander";
import {Application} from "..";
import {Global} from "../global";

async function main() {
    commander.version(Global.version)
        .description('start running validator server')
        .option('-P, --port <port>',
            'the port to serve api', 11601)
        .action((options) => {

            const port = options.port || 11601;
            const api = new Application();
            api.start(port);
        });

    commander.parse(process.argv);
}

main().then(() => {
    // console.info('running eosSignValidator succeeded.');
}).catch((reason => {
    console.error(reason + '\nrunning eosSignValidator failed.');
    process.exit(1);
}));

