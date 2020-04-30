let request = require('request'),
		fs = require('fs'),
		mongoose = require('mongoose'),
		Redis = require('ioredis'),
		cheerio = require('cheerio'),
		cate = ["全部","华语","欧美","日语","韩语","粤语","小语种","流行","摇滚","民谣","电子","舞曲","说唱","轻音乐","爵士","乡村","R&B/Soul","古典","民族","英伦","金属","朋克","蓝调","雷鬼","世界音乐","拉丁","另类/独立","New Age","古风","后摇","Bossa Nova","清晨","夜晚","学习","工作","午休","下午茶","地铁","驾车","运动","旅行","散步","酒吧","怀旧","清新","浪漫","性感","伤感","治愈","放松","孤独","感动","兴奋","快乐","安静","思念","影视原声","ACG","儿童","校园","游戏","70后","80后","90后","网络歌曲","KTV","经典","翻唱","吉他","钢琴","器乐","榜单","00后"],
		number = 35,
		all,
		flag,
		offset = 35,
		initUrl = `https://music.163.com/discover/playlist/?order=hot&cat=${cate[0]}&limit=${number}&offset=${offset}`,
		prefix = 'https://music.163.com'
var redis = new Redis();
var wangyiSchema = new mongoose.Schema({
	title:String,
	href:String,
	type:String,
	playnumber:String,
	name:String,
});
var wanyi= mongoose.model('wanyi',wangyiSchema);



mongoose.connect('mongodb://127.0.0.1:27017/wangyiyun',{ useNewUrlParser: true },()=>{
	console.log('connect to mongodb succeed.');
});


// cate = cate.slice(1,3);

;(async ()=>{
	for(let c = 0;c<cate.length;c++){
		flag = await redis.get('cate');
		if(flag>=c){
			c = flag;
			console.log(`${cate[c]} 已经获取过了,跳至第${flag}项,${cate[flag]}`)
			continue
		}
		for(var a = 0;a<99;a++){
			offset = number * (a);
			initUrl = `https://music.163.com/discover/playlist/?order=hot&cat=${encodeURIComponent(cate[c])}&limit=${number}&offset=${offset}`;
			console.log(`开始抓取类型: ${cate[c]} ,第: ${a+1} 页`)
			console.log(initUrl);
			all = [];
			await new Promise((resolve,reject)=>{
				request({
					url:initUrl,
					headers:{
						'User-Agent':'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:61.0) Gecko/20100101 Firefox/61.0'
					}
				},(err,res,body)=>{
					if(err){
						console.log(initUrl);
						return console.log(err)
					}
					// console.log(body);
					var $ = cheerio.load(body);
					if(body.indexOf('暂无数据')!=-1){
						console.log('这个类型抓完了,	请换下一个');
						a = 101;
						resolve();
					}
					var titles = $('ul.m-cvrlst.f-cb li a.msk');
					var hrefs = $('ul.m-cvrlst.f-cb li a.msk');
					var plays = $('ul.m-cvrlst.f-cb li span.nb');
					var names = $('ul.m-cvrlst.f-cb li p a.nm');
					titles.each(e=>{
						all.push({
							title:$(titles[e]).attr('title'),
							href:prefix+$(hrefs[e]).attr('href'),
							type:cate[c],
							playnumber:$(plays[e]).text(),
							name:$(names[e]).attr('title')
						});
						// wanyi.find({title:$(titles[e]).attr('title'),href:prefix+$(hrefs[e]).attr('href'),playnumber:$(plays[e]).text()},(err,doc)=>{
						// 	if(err) return console.log(err)
						// })
					});
					console.log(`抓取类型:${cate[c]},第:${a+1}页,总共抓取: ${all.length} 条`);
					console.log('插入数据库');
					wanyi.insertMany(all,(err,doc)=>{
						if(err) return console.log(err)
						console.log('插入完毕,下一页');
						setTimeout(()=>{
							console.log('休息0.2s')
							resolve();
						},200)
					});
				})
			});
			console.log('结束这一轮啦');
		}
		// fs.writeFileSync(cate[c].replace('/','')+'.js',JSON.stringify(all));
		redis.set('cate',c);
	}
})();
