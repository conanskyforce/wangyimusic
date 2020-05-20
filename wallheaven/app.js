const fetch = require('node-fetch');
const qs = require('querystring');
let apiUrl = `https://wallhaven.cc/api/v1/search`
const { apikey } = require('./config');
const fs = require('fs');
const writer = fs.createWriteStream('./all_nsfw.txt', { flags: 'a+' })
const logWriter = fs.createWriteStream('./log_nsfw.txt', { flags: 'a+' })
const queryOptions = {
    purity: 'nsfw',
    topRange: '1000M',
    sorting: 'toplist',
    order: 'desc',
    page: 1,
    apikey
}
const timeoutOption = { timeout: 20000 };
const fetchFunc = (confition) => {
    let api;
    if (confition) {
        confition = {...confition, apikey };
        confition = qs.stringify(confition);
        api = apiUrl + '?' + confition;
    }
    console.log(api)
    logWriter.write(api)
    return fetch(api, timeoutOption).then(res => res.json())
}

var startPage = 1;

var start = (page) => {
    var cond = { page };
    fetchFunc(cond)
        .then(res => {
            console.log(res.meta);
            if (res && res.data && res.data.length > 0) {
                writer.write(JSON.stringify(res) + '\n');
            }
            if (res && res.meta && res.meta.current_page < res.meta.last_page) {
                setTimeout(() => {
                    start(page + 1)
                }, 1500)
            }
        })
        .catch(err => {
            console.log(err);
            logWriter.write('err: ' + page)
            setTimeout(() => {
                start(page)
            }, 2000)
        })
}
start(startPage);