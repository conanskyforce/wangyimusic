module.exports = {
  mapLimit:function ( tasks, concurrency=1, callback, debugMode = true ) {
    if(!Array.isArray(tasks)) throw new Error('first argument must be array')
    if(typeof(concurrency)!='number') throw new Error('second argument must be number')
    if(typeof(callback)!='function') throw new Error('third argument must be function')
    let index = 0,
        completed = 0,
        running = 0
    function next(){
      debugMode && completed % 10 == 0 && console.log(`running:${running},concurrency:${concurrency},completed:${completed}`);
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
}