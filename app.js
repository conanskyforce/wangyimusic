var fs = require('fs');
var all = require('./lists_of_all.js');

//播放量排序
all = all.map(e=>{
  if(e.numbers.indexOf('万')!=0){
    return {
      title:e.title,
      numbers:e.numbers.replace('万','0000')
    }
  }
}).sort((x,y)=>{return y.numbers- x.numbers});

var hash = {};
all = all.reduce((init,next)=>{
  (hash[next.title])?'':((hash[next.title]=true)&&init.push(next));
  return init;
},[])


fs.writeFileSync('100.js',JSON.stringify(all.slice(0,100)));