var list = require('./wallheaven/writer2.txt');
var mapLimit = require('./mapLimit').mapLimit;
var fetch = require('node-fetch');
var apiUrl = 'http://localhost:3600/api/wallheaven/save';
var tryList = [];

const save = async (apiUrl,source)=>{
  return fetch(apiUrl,{method:'POST',body:JSON.stringify(source)})
        .then(res=>res.json())
}

function generateTasks(sourceList,resHandle=resHandler){
  if(!Array.isArray(sourceList)) throw new Error('sourceList must be array!')
  return sourceList.map(source=>{
    return  (callback) => {
      save(apiUrl,source)
      .then(res=>{
        resHandle(res,source.id);
        callback();
      })
      .catch(err=>{
        tryList.push(sourceList);
      })
    }
  })
}
function resHandler(res,id){
  debugMode && console.log(`${id} saved.`);
}

var sourceList = list;
var debugMode = true;
var hrTimeStart = process.hrtime()[0];
var start = mapLimit(generateTasks(sourceList),20,()=>{
  console.log('finished all!');
  var hrTimeEnd = process.hrtime()[0];
  console.log(`time cost: ${hrTimeEnd - hrTimeStart} s`);
  processTryList()
},debugMode);
start()
var processTryList = () =>{
  let newArr = generateTasks(tryList);
  tryList = [];
  var startTry = mapLimit(newArr,10,()=>{
    console.log('finished all!');
    var hrTimeEnd = process.hrtime()[0];
    console.log(`time cost: ${hrTimeEnd - hrTimeStart} s`);
    // processTryList();
  },debugMode);
  startTry()
}
