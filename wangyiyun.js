
var cate = [
  "全部","华语","欧美","日语","韩语","粤语","小语种","流行","摇滚","民谣","电子","舞曲","说唱","轻音乐","爵士","乡村","R&B/Soul","古典","民族","英伦","金属","朋克","蓝调","雷鬼","世界音乐","拉丁","另类/独立","New Age","古风","后摇","Bossa Nova","清晨","夜晚","学习","工作","午休","下午茶","地铁","驾车","运动","旅行","散步","酒吧","怀旧","清新","浪漫","性感","伤感","治愈","放松","孤独","感动","兴奋","快乐","安静","思念","影视原声","ACG","儿童","校园","游戏","70后","80后","90后","网络歌曲","KTV","经典","翻唱","吉他","钢琴","器乐","榜单","00后"
];
// cate = cate.slice(-1,);
var number = 35;
var offset = 35;
// var page = 1;
// offset = offset * page;
var initUrl = `https://music.163.com/discover/playlist/?order=hot&cat=${cate[0]}&limit=${number}&offset=${offset}`;


var html = document.createElement('html');
var ul;
var all = [];


;(async ()=>{
	for(let c = 0;c<cate.length;c++){
		for(var a = 0;a<100;a++){
			offset = number * (a+1);
			initUrl = `https://music.163.com/discover/playlist/?order=hot&cat=${cate[c]}&limit=${number}&offset=${offset}`;
			console.log(`开始抓取类型:${cate[c]},第:${a+1}页`)
			await new Promise((resolve,reject)=>{
				fetch(initUrl)
				.then(res=>res.text())
				.then(res=>{
					html.innerHTML = res;
					Array.prototype.slice.call(html.querySelectorAll('img')).forEach(img=>{
						img.setAttribute('data-my-src',img.src);
						img.src = '';
					})
					if(res.indexOf('暂无数据')!=-1){
						console.log('这个类型抓完了,	请换下一个');
						a = 100;
					}
					// console.log(html.querySelectorAll('#g_iframe')[0].src)
					ul = html.querySelectorAll('ul.m-cvrlst.f-cb li .u-cover');
					[...ul].forEach(e=>{
						// console.log(`Title:${e.querySelector('a').title},收听量:${e.querySelector('span.nb').innerText}`);
						all.push({
							title:e.querySelector('a').title,
							playId:`https://music.163.com/playlist?id=`+e.querySelector('a.icon-play').getAttribute('data-res-id'),
							id:e.querySelector('a.icon-play').getAttribute('data-res-id'),
							type:'playlist',
							numbers:e.querySelector('span.nb').innerText
						})
					});
					console.log(`完成类型:${cate[c]},第:${a+1}页`);
					console.log('休息0.01s')
					setTimeout(()=>{
						resolve();
					},10)
				})
			})
		}
	}
})();

var hash = {};
all.reduce((init,next)=>{
  hash[next.title]?'':(hash[next.title]=true&&init.push(next));
  return init;
},[])

all.map(e=>{
	if(e.numbers.indexOf('万')!=0){
		return {
			title:e.title,
			playId:e.playId,
			id:e.id,
			numbers:e.numbers.replace('万','0000')
		}
	}
}).sort((x,y)=>{return y.numbers- x.numbers})
