var list = require('./list_all')
var mapLimit = require('./mapLimit').mapLimit;
var fetch = require('node-fetch')

var apiUrl = 'http://localhost:3600/api/netease/save'

function generateTasks(sourceList,resHandle=resHandler){
  if(!Array.isArray(sourceList)) throw new Error('sourceList must be array!')
  return sourceList.map(source=>{
    return  (callback) => {
      fetch('http://localhost:3600/api/netease/save',{method:'POST',body:JSON.stringify(source)})
      .then(res=>res.json())
      .then(res=>{
        resHandle(res,source.title);
        callback();
      })
    }
  })
}
function resHandler(res,title){
  debugMode && console.log(`${title} saved.`);
}

var sourceList = list;
var debugMode = true;
var start = mapLimit(generateTasks(sourceList),10,()=>{
  console.log('finished all!');
  var hrTimeEnd = process.hrtime()[0];
  console.log(`time cost: ${hrTimeEnd - hrTimeStart} s`);
},debugMode);

var hrTimeStart = process.hrtime()[0];
start()
