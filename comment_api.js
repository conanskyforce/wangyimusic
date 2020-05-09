var fetch = require('node-fetch')
var fs = require('fs');
var writer = fs.createWriteStream('./comments_all.txt',{flags:'a+'});
var list = require('./list_all')


var playListComment = (playListId = 3204160461) => `http://music.163.com/api/v1/resource/comments/A_PL_0_${playListId}`
var songComment = (songId = 3204160461) => `http://music.163.com/api/v1/resource/comments/R_SO_4_${playListId}`

function mapLimit ( tasks, concurrency=1, callback, debugMode = true ) {
	if(!Array.isArray(tasks)) throw new Error('first argument must be array')
	if(typeof(concurrency)!='number') throw new Error('second argument must be number')
	if(typeof(callback)!='function') throw new Error('third argument must be function')
	let index = 0,
			completed = 0,
			running = 0
	function next(){
    debugMode && console.log(`running:${running},concurrency:${concurrency},completed:${completed}`);
		while ( running <= concurrency && index < tasks.length ) {
			task = tasks[index++]
			task(()=>{
				running--
				completed++
				if ( completed == tasks.length ){
					return callback()
				}
				next()
			})
			running++
		}
	}
  return next
}
function resHandler(res,id){
  debugMode && console.log(res,id);
  writer.write(JSON.stringify({
    id,
    data:res
  })+'\n')
}

function generateTasks(sourceList,resHandle=resHandler){
  if(!Array.isArray(sourceList)) throw new Error('sourceList must be array!')
  return sourceList.map(source=>{
    let apiUrl = playListComment(source.id);
    if(source.type == 'song'){
      apiUrl = songComment(source.id);
    }
    return  (callback) => {
      fetch(apiUrl).then(res=>res.json()).then(res=>{
        resHandle(res,source.id);
        callback();
      })
    }
  })
}

var sourceList = list;
var debugMode = false;
var start = mapLimit(generateTasks(sourceList),10,()=>{
  console.log('finished all!');
  var hrTimeEnd = process.hrtime()[0];
  console.log(`time cost: ${hrTimeEnd - hrTimeStart} s`);
},debugMode);

var hrTimeStart = process.hrtime()[0];
start()


