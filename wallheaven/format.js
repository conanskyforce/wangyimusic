var fs = require('fs')
var reader = fs.createReadStream('./all_nsfw.txt','utf8');
var writer = fs.createWriteStream('./writer.txt','utf8',{flags:'a+'});

var buf = ''
reader.on('data',(chunk)=>{
  buf += chunk;
  pump();
})

function pump() {
  var pos;
  while ((pos = buf.indexOf('\n')) >= 0) { // keep going while there's a newline somewhere in the buffer
      if (pos == 0) { // if there's more than one newline in a row, the buffer will now start with a newline
          buf = buf.slice(1); // discard it
          continue; // so that the next iteration will start with data
      }
      processLine(buf.slice(0,pos)); // hand off the line
      buf = buf.slice(pos+1); // and slice the processed data off the buffer
  }
}

function processLine(line) { // here's where we do something with a line

  if (line[line.length-1] == '\r') line=line.substr(0,line.length-1); // discard CR (0x0D)

  if (line.length > 0) { 
    try{
      let d = JSON.parse(line);
      d.data.forEach(dd=>{
        writer.write(JSON.stringify(dd)+',\n')
      })
    }catch(err){
      console.log(`line:${line} parse error`);
    }
  }
}

// files = files.forEach((file,index)=>{
	// try{
	// 	let d = JSON.parse(file);
	// 	ret = [...ret,...d.data]
	// }catch(err){
	// 	console.log(`index:${index} parse error`);
	// 	errList.push(file)
	// }
// });

// fs.writeFileSync('./formatted.txt',JSON.stringify(ret));
// fs.writeFileSync('./error.txt',JSON.stringify(errList));