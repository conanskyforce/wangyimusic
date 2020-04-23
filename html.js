var  html = `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="baidu-site-verification" content="cNhJHKEzsD" />
<meta property="qc:admins" content="27354635321361636375" />
<link rel="canonical" href="https://music.163.com/discover/playlist/?cat=%E5%85%A8%E9%83%A8&order=hot">
<meta name="applicable-device" content="pc">
<title>全部歌单 - 歌单 - 网易云音乐</title>
<meta name="keywords" content="歌单，精选集，播放列表，网易云音乐，语种，场景，风格，情感，主题，华语，欧美，日语，韩语，粤语，小语种，流行，摇滚，民谣，电子，舞曲，说唱，轻音乐，爵士，乡村，R&amp;B/Soul，古典，民族，英伦，金属" />
<meta name="description" content="全部歌单。网易云音乐歌单，为你提供超过1000万个不同语种、场景、风格、情感、主题的歌单，众多明星DJ、音乐达人贡献优质歌单给你听。" />
<meta property="og:title" content="全部歌单 - 歌单 - 网易云音乐" />
<script type="text/javascript">
var GDownloadLink="";
var GDevice = "phone";
var GFrom="";
var GClient="";
var GPlatform="other";
var GRef = '';
var GInApp = false;
var GMobile = false;
var GAbroad = false;
var GUser={userId:105235894,nickname:"kenandeguohui",avatarUrl:"http://p4.music.126.net/uqQodzTr_3iwKixkltEOnw==/109951163413709114.jpg",birthday:"-2209017600000",userType:0,djStatus:0};
var GAllowRejectComment = false;
var GEnc = true;
var GEnvType = "online";
var GWebpSupport = "1";
window.NEJ_CONF = {p_csrf:{cookie:'__csrf',param:'csrf_token'}};
GUtil = {
getBase:function(){
return location.protocol+'//'+location.hostname;
},
getPathAndHash:function(_url){//获取URL path 之后的所有内容,并将/#/替换成/m/使之成为path的一部分
if(!_url) return '';
var _reg0 = /^https?:\/\/.*?\//i,
_reg1 = /\/?#\/?/i;
return _url.replace(_reg0,'/').replace(_reg1,'/m/');
},
composeRefer:function(_url,_ref){//对所有的页面请求都加上ref参数表示被嵌套的来源
if(!_ref) return _url;
var _hi = _url.indexOf('#'),
_si = _url.indexOf('?');
if(_si>0&&(_si<_hi||_hi<0)){
return _url.substring(0,_si+1)+'ref='+_ref+'&'+_url.substring(_si+1);
}else if(_hi>0&&(_si<0||_si>_hi)){
return _url.substring(0,_hi)+'?ref='+_ref+_url.substring(_hi);
}else{
return _url+'?ref='+_ref;
}
}
};(function(){
var _ua = window.navigator.userAgent,
_isMobile = /(mobile|mobi|wap|iphone)/i.test(_ua),
_isAndroid = /android/i.test(_ua),
_isIpad = /(ipad)/i.test(_ua),
_igList = [/^\/xiami$/,/^\/live$/],//不需要以单页面打开的列表，比如某些活动页面
_pn = location.pathname,
_idx = _pn.lastIndexOf('/'),
_pReg = /\s*(\w+)\s*=\s*(\d+)\s*/,
_redirect2mobile = function() {
var _type,_murl,
_id = 0,
_hash = location.hash,
_mReg = /^#\/?m?\/(share|song|playlist|djradio|dj|program|album|mv|artist|topic|radio|zysf|drqp|qp|activity|store|user|event|video|discover\/toplist)(\/(\d+))?/,
_base = location.protocol+'//'+location.hostname,
_sindex = _hash.lastIndexOf('?'),
_search = _sindex>-1?_hash.substring(_sindex+1):'',
_match = _mReg.exec(_hash);
// 无hash || 不匹配 || 匹配但是商品之外不带参数 || 匹配且是排行榜
if (!_hash.length || !_match || (_match[1] != 'store' && !_search) || /share|discover\/toplist/.test(_match[1])) {
// 有hash && (没有参数 || 排行榜)
if ((!_search || /share|discover\/toplist/.test(_match[1])) && _hash.length) {
location.href = _base + '/' + _hash.replace('#', 'm');
} else {
location.href = _base + '/m/';
}
return;
}
_type = _match[1];
_id = _match[3];
if (_type == 'dj') _type = 'program';
if (_type == 'store') {
_murl = /^#\/store\/(product|concert)\/detail/.test(_hash) ? _hash.replace('#/store', '/store/m') : '/store/m/product/index';
} else {
_murl = '/' + _type + '?' + (_id ? 'id=' + _id + '&': '') + _search;
}
location.href = _base + _murl;
};
if(_isMobile || _isAndroid || _isIpad){
_redirect2mobile();
return;
}
if(!_pn||_pn=='/') return;
for(var i in _igList){
if(_igList[i].test(_pn)) return;
}
if(top==self){
location.href = '/#'+GUtil.getPathAndHash(location.href);
return;
}
//搜索引擎过来的内容页连接
if(top==self&&/^\/static\/(song|playlist|album|artist)/i.test(_pn)){
location.href = '/#'+_pn.substring(0,_idx).replace('/static/','/')+'?id='+_pn.substring(_idx+1);
}
})();
(function(){
var _addEvent = function(_node,_type,_cb){
if(_node.addEventListener){
_node.addEventListener(_type,_cb);
}else if(_node.attachEvent){
_node.attachEvent('on'+_type,_cb);
}
},
_onAnchorClick = function(_event){//截获所有<a>标签的点击事件，自定义页面的跳转
_event = _event||window.event;
var _el = _event.target||_event.srcElement,
_base = location.protocol+'//'+location.host;
while(_el&&_el!=document){
if(_el.tagName&&_el.tagName.toLowerCase()=='a'){
//fix ie6下有时javascript:;不能阻止默认事件的bug.
if(_el.href.indexOf('javascript:')>=0){
!!_event.preventDefault
? _event.preventDefault()
: _event.returnValue = !1;
return;
}
if(_event.button==2) return;//ff 右键会触发click事件
//商城有独立地顶栏了，排除掉。但会员、数字专辑、单曲的商品、订单页仍保持主站frame，
//这些url往往是通过/vip2, /payfee这样的地址跳转的，也没有问题，如果真的有，URL用#配置就好了
var _path = _el.href.replace(/^https?:\/\/.*?\//i, '/').split(/[?#]/)[0];
if(_path.indexOf('/store/')==0) return;
if(_path.indexOf('/m/at/')==0) return;
if(_path.indexOf('/prime/m/')==0) return; // 会员移动端页面
if(_path.indexOf('/oauth2/')==0) return; // 授权页面
if(_path.indexOf('/m/oauth2/')==0) return; // 授权页面
if(_path.indexOf('/octave/m/')==0) return; // 数字专辑移动端购买
if(_path.indexOf('/v/m/album')==0) return; // 数字专辑赠送相关
//新窗口打开的链接、云音乐单页面形式的链接、站外的链接不做拦截处理。
if(_el.target=='_blank'
||_el.target=='blank'
||_isNotSameHost(_el.href)
||_el.href==_base
||_el.href.indexOf(_base+'/#')>=0) return;
!!_event.preventDefault
? _event.preventDefault()
: _event.returnValue = !1;
location.dispatch2(_el.href);
break;
}else{
_el = _el.parentNode;
}
}
},
_isNotSameHost = function(_href){
var _same = true;
if(_href.charAt(0)!='/'){
var _index = _href.indexOf('//'+location.hostname);
if(_index > 0){
var _index2 = _href.indexOf('?');
if(_index2 > 0 && _index2 < _index){
_same = false;
}
}else{
_same = false;
}
}
return !_same;
};
_addEvent(document,'click',_onAnchorClick);
//扩展一个js中直接使用的页面跳转的方法，以拦截js中的页面跳转行为
location.dispatch2 = function(_url,_replace){
var delegate = false;
try{
delegate = !!top.GDispatcher;
}catch(e){
delegate = false;
}
if(delegate){
top.GDispatcher.dispatch(_url,_replace);
}else{
_url = GUtil.composeRefer(_url,GRef);
//邮箱音乐盒中，每次链接的跳转都要将proxy.html的地址合并到hash中
if(GRef&&GRef=='mail'){
var _hindex,_sindex,
_reg = /(https?:\/\/.+\/proxy.html)/,
_hreg = /#(.*?)$/,
_href = decodeURIComponent(location.href);
if(!_reg.test(decodeURIComponent(_url))&&_reg.test(_href)){
_hindex = _url.indexOf('#');
_sindex = _url.lastIndexOf('?');
if(_hindex>0){
_url = _url+(_sindex>_hindex?'&':'?')+'proxy='+encodeURIComponent(RegExp.$1);
}else{
_url = _url+'#proxy='+encodeURIComponent(RegExp.$1);
}
}
}
if(_replace){
location.replace(_url);
}else{
location.href = _url;
}
}
};
})();(function(){
if(window.addEventListener){
window.addEventListener('scroll', onScroll)
}else{
window.attachEvent('onscroll', onScroll)
}
try{
top.scrollTopbar(0);
}catch(e){
}
function onScroll(){
try{
top.scrollTopbar(Math.max(document.body.scrollTop, document.documentElement.scrollTop));
}catch(e){
//ignore
}
};
})();</script>
<base href="//music.163.com/" target="_top">
<link rel="shortcut icon" href="//s1.music.126.net/style/favicon.ico?v20180307" />
<link href="//s2.music.126.net/web/s/core.css?dceadbe2d7d2a1933fb8d2feb6f828be" type="text/css" rel="stylesheet"/><link href="//s2.music.126.net/web/s/pt_frame.css?679ee03dda26d164b2786af978a59c9c" type="text/css" rel="stylesheet"/>
</head>
<body>
<div data-module="discover" data-sub="playlist" id="g_top" class="m-top">&nbsp;</div>
<div id="g_nav" class="m-subnav">&nbsp;</div>
<script>
try{
top.matchNav("discover", "playlist");
}catch(e){
}
</script>
<div class="g-bd" id="m-disc-pl-c">
<div class="g-wrap p-pl f-pr">
<div class="u-title f-cb">
<h3><span class="f-ff2 d-flag">全部</span><a href="javascript:;" class="u-btn2 u-btn2-1 menu d-flag" id="cateToggleLink"><i>选择分类<em class="u-icn u-icn-38"></em></i></a></h3>
<div class="u-btn f-fr u-btn-hot d-flag">
<a href="/discover/playlist/?order=hot&cat=%E5%85%A8%E9%83%A8" class="a1" data-order="hot">热门</a>
<a href="/discover/playlist/?order=new&cat=%E5%85%A8%E9%83%A8" class="a2" data-order="new">最新</a>
</div>
</div>
<div id="cateListBox" class="n-sltlyr d-flag " style="left:0;">
<div class="hd"><i class="icn"></i></div>
<div class="bd">
<h3><a href="/discover/playlist/?order=hot" class="j-flag u-btn u-btn-g s-fc1" data-cat="全部"><em>全部风格</em></a></h3>
<dl class="f-cb">
<dt><i class="u-icn u-icn-71"></i>语种</dt>
<dd >
<a class="s-fc1 " href="/discover/playlist/?cat=%E5%8D%8E%E8%AF%AD&order=hot" data-cat="华语">华语</a><span class="line">|</span>
<a class="s-fc1 " href="/discover/playlist/?cat=%E6%AC%A7%E7%BE%8E&order=hot" data-cat="欧美">欧美</a><span class="line">|</span>
<a class="s-fc1 " href="/discover/playlist/?cat=%E6%97%A5%E8%AF%AD&order=hot" data-cat="日语">日语</a><span class="line">|</span>
<a class="s-fc1 " href="/discover/playlist/?cat=%E9%9F%A9%E8%AF%AD&order=hot" data-cat="韩语">韩语</a><span class="line">|</span>
<a class="s-fc1 " href="/discover/playlist/?cat=%E7%B2%A4%E8%AF%AD&order=hot" data-cat="粤语">粤语</a><span class="line">|</span>
<a class="s-fc1 " href="/discover/playlist/?cat=%E5%B0%8F%E8%AF%AD%E7%A7%8D&order=hot" data-cat="小语种">小语种</a><span class="line">|</span>
</dd>
</dl>
<dl class="f-cb">
<dt><i class="u-icn u-icn-6"></i>风格</dt>
<dd >
<a class="s-fc1 " href="/discover/playlist/?cat=%E6%B5%81%E8%A1%8C&order=hot" data-cat="流行">流行</a><span class="line">|</span>
<a class="s-fc1 " href="/discover/playlist/?cat=%E6%91%87%E6%BB%9A&order=hot" data-cat="摇滚">摇滚</a><span class="line">|</span>
<a class="s-fc1 " href="/discover/playlist/?cat=%E6%B0%91%E8%B0%A3&order=hot" data-cat="民谣">民谣</a><span class="line">|</span>
<a class="s-fc1 " href="/discover/playlist/?cat=%E7%94%B5%E5%AD%90&order=hot" data-cat="电子">电子</a><span class="line">|</span>
<a class="s-fc1 " href="/discover/playlist/?cat=%E8%88%9E%E6%9B%B2&order=hot" data-cat="舞曲">舞曲</a><span class="line">|</span>
<a class="s-fc1 " href="/discover/playlist/?cat=%E8%AF%B4%E5%94%B1&order=hot" data-cat="说唱">说唱</a><span class="line">|</span>
<a class="s-fc1 " href="/discover/playlist/?cat=%E8%BD%BB%E9%9F%B3%E4%B9%90&order=hot" data-cat="轻音乐">轻音乐</a><span class="line">|</span>
<a class="s-fc1 " href="/discover/playlist/?cat=%E7%88%B5%E5%A3%AB&order=hot" data-cat="爵士">爵士</a><span class="line">|</span>
<a class="s-fc1 " href="/discover/playlist/?cat=%E4%B9%A1%E6%9D%91&order=hot" data-cat="乡村">乡村</a><span class="line">|</span>
<a class="s-fc1 " href="/discover/playlist/?cat=R%26B%2FSoul&order=hot" data-cat="R&amp;B/Soul">R&amp;B/Soul</a><span class="line">|</span>
<a class="s-fc1 " href="/discover/playlist/?cat=%E5%8F%A4%E5%85%B8&order=hot" data-cat="古典">古典</a><span class="line">|</span>
<a class="s-fc1 " href="/discover/playlist/?cat=%E6%B0%91%E6%97%8F&order=hot" data-cat="民族">民族</a><span class="line">|</span>
<a class="s-fc1 " href="/discover/playlist/?cat=%E8%8B%B1%E4%BC%A6&order=hot" data-cat="英伦">英伦</a><span class="line">|</span>
<a class="s-fc1 " href="/discover/playlist/?cat=%E9%87%91%E5%B1%9E&order=hot" data-cat="金属">金属</a><span class="line">|</span>
<a class="s-fc1 " href="/discover/playlist/?cat=%E6%9C%8B%E5%85%8B&order=hot" data-cat="朋克">朋克</a><span class="line">|</span>
<a class="s-fc1 " href="/discover/playlist/?cat=%E8%93%9D%E8%B0%83&order=hot" data-cat="蓝调">蓝调</a><span class="line">|</span>
<a class="s-fc1 " href="/discover/playlist/?cat=%E9%9B%B7%E9%AC%BC&order=hot" data-cat="雷鬼">雷鬼</a><span class="line">|</span>
<a class="s-fc1 " href="/discover/playlist/?cat=%E4%B8%96%E7%95%8C%E9%9F%B3%E4%B9%90&order=hot" data-cat="世界音乐">世界音乐</a><span class="line">|</span>
<a class="s-fc1 " href="/discover/playlist/?cat=%E6%8B%89%E4%B8%81&order=hot" data-cat="拉丁">拉丁</a><span class="line">|</span>
<a class="s-fc1 " href="/discover/playlist/?cat=%E5%8F%A6%E7%B1%BB%2F%E7%8B%AC%E7%AB%8B&order=hot" data-cat="另类/独立">另类/独立</a><span class="line">|</span>
<a class="s-fc1 " href="/discover/playlist/?cat=New%20Age&order=hot" data-cat="New Age">New Age</a><span class="line">|</span>
<a class="s-fc1 " href="/discover/playlist/?cat=%E5%8F%A4%E9%A3%8E&order=hot" data-cat="古风">古风</a><span class="line">|</span>
<a class="s-fc1 " href="/discover/playlist/?cat=%E5%90%8E%E6%91%87&order=hot" data-cat="后摇">后摇</a><span class="line">|</span>
<a class="s-fc1 " href="/discover/playlist/?cat=Bossa%20Nova&order=hot" data-cat="Bossa Nova">Bossa Nova</a><span class="line">|</span>
</dd>
</dl>
<dl class="f-cb">
<dt><i class="u-icn u-icn-7"></i>场景</dt>
<dd >
<a class="s-fc1 " href="/discover/playlist/?cat=%E6%B8%85%E6%99%A8&order=hot" data-cat="清晨">清晨</a><span class="line">|</span>
<a class="s-fc1 " href="/discover/playlist/?cat=%E5%A4%9C%E6%99%9A&order=hot" data-cat="夜晚">夜晚</a><span class="line">|</span>
<a class="s-fc1 " href="/discover/playlist/?cat=%E5%AD%A6%E4%B9%A0&order=hot" data-cat="学习">学习</a><span class="line">|</span>
<a class="s-fc1 " href="/discover/playlist/?cat=%E5%B7%A5%E4%BD%9C&order=hot" data-cat="工作">工作</a><span class="line">|</span>
<a class="s-fc1 " href="/discover/playlist/?cat=%E5%8D%88%E4%BC%91&order=hot" data-cat="午休">午休</a><span class="line">|</span>
<a class="s-fc1 " href="/discover/playlist/?cat=%E4%B8%8B%E5%8D%88%E8%8C%B6&order=hot" data-cat="下午茶">下午茶</a><span class="line">|</span>
<a class="s-fc1 " href="/discover/playlist/?cat=%E5%9C%B0%E9%93%81&order=hot" data-cat="地铁">地铁</a><span class="line">|</span>
<a class="s-fc1 " href="/discover/playlist/?cat=%E9%A9%BE%E8%BD%A6&order=hot" data-cat="驾车">驾车</a><span class="line">|</span>
<a class="s-fc1 " href="/discover/playlist/?cat=%E8%BF%90%E5%8A%A8&order=hot" data-cat="运动">运动</a><span class="line">|</span>
<a class="s-fc1 " href="/discover/playlist/?cat=%E6%97%85%E8%A1%8C&order=hot" data-cat="旅行">旅行</a><span class="line">|</span>
<a class="s-fc1 " href="/discover/playlist/?cat=%E6%95%A3%E6%AD%A5&order=hot" data-cat="散步">散步</a><span class="line">|</span>
<a class="s-fc1 " href="/discover/playlist/?cat=%E9%85%92%E5%90%A7&order=hot" data-cat="酒吧">酒吧</a><span class="line">|</span>
</dd>
</dl>
<dl class="f-cb">
<dt><i class="u-icn u-icn-8"></i>情感</dt>
<dd >
<a class="s-fc1 " href="/discover/playlist/?cat=%E6%80%80%E6%97%A7&order=hot" data-cat="怀旧">怀旧</a><span class="line">|</span>
<a class="s-fc1 " href="/discover/playlist/?cat=%E6%B8%85%E6%96%B0&order=hot" data-cat="清新">清新</a><span class="line">|</span>
<a class="s-fc1 " href="/discover/playlist/?cat=%E6%B5%AA%E6%BC%AB&order=hot" data-cat="浪漫">浪漫</a><span class="line">|</span>
<a class="s-fc1 " href="/discover/playlist/?cat=%E6%80%A7%E6%84%9F&order=hot" data-cat="性感">性感</a><span class="line">|</span>
<a class="s-fc1 " href="/discover/playlist/?cat=%E4%BC%A4%E6%84%9F&order=hot" data-cat="伤感">伤感</a><span class="line">|</span>
<a class="s-fc1 " href="/discover/playlist/?cat=%E6%B2%BB%E6%84%88&order=hot" data-cat="治愈">治愈</a><span class="line">|</span>
<a class="s-fc1 " href="/discover/playlist/?cat=%E6%94%BE%E6%9D%BE&order=hot" data-cat="放松">放松</a><span class="line">|</span>
<a class="s-fc1 " href="/discover/playlist/?cat=%E5%AD%A4%E7%8B%AC&order=hot" data-cat="孤独">孤独</a><span class="line">|</span>
<a class="s-fc1 " href="/discover/playlist/?cat=%E6%84%9F%E5%8A%A8&order=hot" data-cat="感动">感动</a><span class="line">|</span>
<a class="s-fc1 " href="/discover/playlist/?cat=%E5%85%B4%E5%A5%8B&order=hot" data-cat="兴奋">兴奋</a><span class="line">|</span>
<a class="s-fc1 " href="/discover/playlist/?cat=%E5%BF%AB%E4%B9%90&order=hot" data-cat="快乐">快乐</a><span class="line">|</span>
<a class="s-fc1 " href="/discover/playlist/?cat=%E5%AE%89%E9%9D%99&order=hot" data-cat="安静">安静</a><span class="line">|</span>
<a class="s-fc1 " href="/discover/playlist/?cat=%E6%80%9D%E5%BF%B5&order=hot" data-cat="思念">思念</a><span class="line">|</span>
</dd>
</dl>
<dl class="f-cb">
<dt><i class="u-icn u-icn-9"></i>主题</dt>
<dd class="last">
<a class="s-fc1 " href="/discover/playlist/?cat=%E5%BD%B1%E8%A7%86%E5%8E%9F%E5%A3%B0&order=hot" data-cat="影视原声">影视原声</a><span class="line">|</span>
<a class="s-fc1 " href="/discover/playlist/?cat=ACG&order=hot" data-cat="ACG">ACG</a><span class="line">|</span>
<a class="s-fc1 " href="/discover/playlist/?cat=%E5%84%BF%E7%AB%A5&order=hot" data-cat="儿童">儿童</a><span class="line">|</span>
<a class="s-fc1 " href="/discover/playlist/?cat=%E6%A0%A1%E5%9B%AD&order=hot" data-cat="校园">校园</a><span class="line">|</span>
<a class="s-fc1 " href="/discover/playlist/?cat=%E6%B8%B8%E6%88%8F&order=hot" data-cat="游戏">游戏</a><span class="line">|</span>
<a class="s-fc1 " href="/discover/playlist/?cat=70%E5%90%8E&order=hot" data-cat="70后">70后</a><span class="line">|</span>
<a class="s-fc1 " href="/discover/playlist/?cat=80%E5%90%8E&order=hot" data-cat="80后">80后</a><span class="line">|</span>
<a class="s-fc1 " href="/discover/playlist/?cat=90%E5%90%8E&order=hot" data-cat="90后">90后</a><span class="line">|</span>
<a class="s-fc1 " href="/discover/playlist/?cat=%E7%BD%91%E7%BB%9C%E6%AD%8C%E6%9B%B2&order=hot" data-cat="网络歌曲">网络歌曲</a><span class="line">|</span>
<a class="s-fc1 " href="/discover/playlist/?cat=KTV&order=hot" data-cat="KTV">KTV</a><span class="line">|</span>
<a class="s-fc1 " href="/discover/playlist/?cat=%E7%BB%8F%E5%85%B8&order=hot" data-cat="经典">经典</a><span class="line">|</span>
<a class="s-fc1 " href="/discover/playlist/?cat=%E7%BF%BB%E5%94%B1&order=hot" data-cat="翻唱">翻唱</a><span class="line">|</span>
<a class="s-fc1 " href="/discover/playlist/?cat=%E5%90%89%E4%BB%96&order=hot" data-cat="吉他">吉他</a><span class="line">|</span>
<a class="s-fc1 " href="/discover/playlist/?cat=%E9%92%A2%E7%90%B4&order=hot" data-cat="钢琴">钢琴</a><span class="line">|</span>
<a class="s-fc1 " href="/discover/playlist/?cat=%E5%99%A8%E4%B9%90&order=hot" data-cat="器乐">器乐</a><span class="line">|</span>
<a class="s-fc1 " href="/discover/playlist/?cat=%E6%A6%9C%E5%8D%95&order=hot" data-cat="榜单">榜单</a><span class="line">|</span>
<a class="s-fc1 " href="/discover/playlist/?cat=00%E5%90%8E&order=hot" data-cat="00后">00后</a><span class="line">|</span>
</dd>
</dl>
</div>
<div class="ft"></div>
</div>
<ul class="m-cvrlst f-cb" id="m-pl-container">
<li>
<div class="u-cover u-cover-1">
<img class="j-flag" src="http://p1.music.126.net/Bg9YMzxgykJpSSN5TC0FoQ==/109951163426607691.jpg?param=140y140"/>
<a title="论 备 胎 的 自 我 修 养" href="/playlist?id=362750972" class="msk"></a>
<div class="bottom">
<a class="icon-play f-fr" title="播放" href="javascript:;"
data-res-type="13"
data-res-id="362750972"
data-res-action="play"></a>
<span class="icon-headset"></span>
<span class="nb">27万</span>
</div>
</div>
<p class="dec">
<a title="论 备 胎 的 自 我 修 养" href="/playlist?id=362750972" class="tit f-thide s-fc0">论 备 胎 的 自 我 修 养</a>
</p>
<p><span class="s-fc4">by</span> <a title="病鹿" href="/user/home?id=265213820" class="nm nm-icn f-thide s-fc3">病鹿</a> </p>
</li>
<li>
<div class="u-cover u-cover-1">
<img class="j-flag" src="http://p1.music.126.net/RwvJxWN47eLsqG1mrG6-Zg==/109951163403826419.jpg?param=140y140"/>
<a title="电子合成器 ° 梦幻旋律" href="/playlist?id=2246083959" class="msk"></a>
<div class="bottom">
<a class="icon-play f-fr" title="播放" href="javascript:;"
data-res-type="13"
data-res-id="2246083959"
data-res-action="play"></a>
<span class="icon-headset"></span>
<span class="nb">91672</span>
</div>
</div>
<p class="dec">
<a title="电子合成器 ° 梦幻旋律" href="/playlist?id=2246083959" class="tit f-thide s-fc0">电子合成器 ° 梦幻旋律</a>
</p>
<p><span class="s-fc4">by</span> <a title="礁池" href="/user/home?id=374353420" class="nm nm-icn f-thide s-fc3">礁池</a> <sup class="u-icn u-icn-84 "></sup>
</p>
</li>
<li>
<div class="u-cover u-cover-1">
<img class="j-flag" src="http://p1.music.126.net/4B_awFt7IT8N108gS_rN6g==/109951163426206591.jpg?param=140y140"/>
<a title="精致节拍 | 时髦的人听什么" href="/playlist?id=2333114395" class="msk"></a>
<div class="bottom">
<a class="icon-play f-fr" title="播放" href="javascript:;"
data-res-type="13"
data-res-id="2333114395"
data-res-action="play"></a>
<span class="icon-headset"></span>
<span class="nb">17万</span>
</div>
</div>
<p class="dec">
<a title="精致节拍 | 时髦的人听什么" href="/playlist?id=2333114395" class="tit f-thide s-fc0">精致节拍 | 时髦的人听什么</a>
</p>
<p><span class="s-fc4">by</span> <a title="原创君" href="/user/home?id=201586" class="nm nm-icn f-thide s-fc3">原创君</a> <sup class="icn u-icn2 u-icn2-music2 "></sup>
</p>
</li>
<li>
<div class="u-cover u-cover-1">
<img class="j-flag" src="http://p1.music.126.net/acrgivA7Bf8VPWTJQrT__A==/18782957139499648.jpg?param=140y140"/>
<a title="【前奏控》叮叮咚咚の日系小调~" href="/playlist?id=2206554259" class="msk"></a>
<div class="bottom">
<a class="icon-play f-fr" title="播放" href="javascript:;"
data-res-type="13"
data-res-id="2206554259"
data-res-action="play"></a>
<span class="icon-headset"></span>
<span class="nb">93083</span>
</div>
</div>
<p class="dec">
<a title="【前奏控》叮叮咚咚の日系小调~" href="/playlist?id=2206554259" class="tit f-thide s-fc0">【前奏控》叮叮咚咚の日系小调~</a>
</p>
<p><span class="s-fc4">by</span> <a title="还你一个夏天" href="/user/home?id=259040755" class="nm nm-icn f-thide s-fc3">还你一个夏天</a> <sup class="u-icn u-icn-84 "></sup>
</p>
</li>
<li>
<div class="u-cover u-cover-1">
<img class="j-flag" src="http://p1.music.126.net/7urRjuuETg0IHzIZSFtTgg==/18715886930225049.jpg?param=140y140"/>
<a title="夏日降温必备 | 气清天朗 吾心爽凉" href="/playlist?id=2296960543" class="msk"></a>
<div class="bottom">
<a class="icon-play f-fr" title="播放" href="javascript:;"
data-res-type="13"
data-res-id="2296960543"
data-res-action="play"></a>
<span class="icon-headset"></span>
<span class="nb">13万</span>
</div>
</div>
<p class="dec">
<a title="夏日降温必备 | 气清天朗 吾心爽凉" href="/playlist?id=2296960543" class="tit f-thide s-fc0">夏日降温必备 | 气清天朗 吾心爽凉</a>
</p>
<p><span class="s-fc4">by</span> <a title="外太空来的Mercy" href="/user/home?id=308097990" class="nm nm-icn f-thide s-fc3">外太空来的Mercy</a> <sup class="u-icn u-icn-84 "></sup>
</p>
</li>
<li>
<div class="u-cover u-cover-1">
<img class="j-flag" src="http://p1.music.126.net/LKJbBnnTv6J3UwCyishcXA==/19069929672760506.jpg?param=140y140"/>
<a title="积极点 今天的阳光也很灿烂呢" href="/playlist?id=2117575882" class="msk"></a>
<div class="bottom">
<a class="icon-play f-fr" title="播放" href="javascript:;"
data-res-type="13"
data-res-id="2117575882"
data-res-action="play"></a>
<span class="icon-headset"></span>
<span class="nb">63435</span>
</div>
</div>
<p class="dec">
<a title="积极点 今天的阳光也很灿烂呢" href="/playlist?id=2117575882" class="tit f-thide s-fc0">积极点 今天的阳光也很灿烂呢</a>
</p>
<p><span class="s-fc4">by</span> <a title="Su_VenaD" href="/user/home?id=99303412" class="nm nm-icn f-thide s-fc3">Su_VenaD</a> <sup class="u-icn u-icn-84 "></sup>
</p>
</li>
<li>
<div class="u-cover u-cover-1">
<img class="j-flag" src="http://p1.music.126.net/EpI_hkgYrrpePyueFTpoog==/18494885093033438.jpg?param=140y140"/>
<a title="国风民谣 |满堂花醉三千客，一剑霜寒十四州" href="/playlist?id=2331136477" class="msk"></a>
<div class="bottom">
<a class="icon-play f-fr" title="播放" href="javascript:;"
data-res-type="13"
data-res-id="2331136477"
data-res-action="play"></a>
<span class="icon-headset"></span>
<span class="nb">130万</span>
</div>
</div>
<p class="dec">
<a title="国风民谣 |满堂花醉三千客，一剑霜寒十四州" href="/playlist?id=2331136477" class="tit f-thide s-fc0">国风民谣 |满堂花醉三千客，一剑霜寒十四州</a>
</p>
<p><span class="s-fc4">by</span> <a title="鹤禅眠" href="/user/home?id=248426205" class="nm nm-icn f-thide s-fc3">鹤禅眠</a> </p>
</li>
<li>
<div class="u-cover u-cover-1">
<img class="j-flag" src="http://p1.music.126.net/tgXn0VYz7mqZECuiSmiP9g==/109951163424138751.jpg?param=140y140"/>
<a title="中文十级空耳神曲 非战斗人士请撤离！" href="/playlist?id=2331139996" class="msk"></a>
<div class="bottom">
<a class="icon-play f-fr" title="播放" href="javascript:;"
data-res-type="13"
data-res-id="2331139996"
data-res-action="play"></a>
<span class="icon-headset"></span>
<span class="nb">15万</span>
</div>
</div>
<p class="dec">
<a title="中文十级空耳神曲 非战斗人士请撤离！" href="/playlist?id=2331139996" class="tit f-thide s-fc0">中文十级空耳神曲 非战斗人士请撤离！</a>
</p>
<p><span class="s-fc4">by</span> <a title="云音乐VIP" href="/user/home?id=1452176465" class="nm nm-icn f-thide s-fc3">云音乐VIP</a> <sup class="u-icn u-icn-1 "></sup>
</p>
</li>
<li>
<div class="u-cover u-cover-1">
<img class="j-flag" src="http://p1.music.126.net/TJx_YE7hRp0OHHIghjYFvQ==/18942386323964130.jpg?param=140y140"/>
<a title="日系青春男声丨成长岁月 青春无悔" href="/playlist?id=2328272659" class="msk"></a>
<div class="bottom">
<a class="icon-play f-fr" title="播放" href="javascript:;"
data-res-type="13"
data-res-id="2328272659"
data-res-action="play"></a>
<span class="icon-headset"></span>
<span class="nb">33万</span>
</div>
</div>
<p class="dec">
<a title="日系青春男声丨成长岁月 青春无悔" href="/playlist?id=2328272659" class="tit f-thide s-fc0">日系青春男声丨成长岁月 青春无悔</a>
</p>
<p><span class="s-fc4">by</span> <a title="桐崎茜Koko" href="/user/home?id=480431733" class="nm nm-icn f-thide s-fc3">桐崎茜Koko</a> <sup class="u-icn u-icn-84 "></sup>
</p>
</li>
<li>
<div class="u-cover u-cover-1">
<img class="j-flag" src="http://p1.music.126.net/z8ys8hhWuWvwQqKH4N-rHw==/109951163424253395.jpg?param=140y140"/>
<a title="天后的幻乐一场" href="/playlist?id=2330204571" class="msk"></a>
<div class="bottom">
<a class="icon-play f-fr" title="播放" href="javascript:;"
data-res-type="13"
data-res-id="2330204571"
data-res-action="play"></a>
<span class="icon-headset"></span>
<span class="nb">15万</span>
</div>
</div>
<p class="dec">
<a title="天后的幻乐一场" href="/playlist?id=2330204571" class="tit f-thide s-fc0">天后的幻乐一场</a>
</p>
<p><span class="s-fc4">by</span> <a title="云音乐VIP" href="/user/home?id=1452176465" class="nm nm-icn f-thide s-fc3">云音乐VIP</a> <sup class="u-icn u-icn-1 "></sup>
</p>
</li>
<li>
<div class="u-cover u-cover-1">
<img class="j-flag" src="http://p1.music.126.net/iVH-BsL5b_aFMtM1wysUjA==/109951163421273646.jpg?param=140y140"/>
<a title="狮子座 | 盛夏有你向阳的温柔。" href="/playlist?id=2327225847" class="msk"></a>
<div class="bottom">
<a class="icon-play f-fr" title="播放" href="javascript:;"
data-res-type="13"
data-res-id="2327225847"
data-res-action="play"></a>
<span class="icon-headset"></span>
<span class="nb">217万</span>
</div>
</div>
<p class="dec">
<a title="狮子座 | 盛夏有你向阳的温柔。" href="/playlist?id=2327225847" class="tit f-thide s-fc0">狮子座 | 盛夏有你向阳的温柔。</a>
</p>
<p><span class="s-fc4">by</span> <a title="Tataaaaaaa_" href="/user/home?id=1489554923" class="nm nm-icn f-thide s-fc3">Tataaaaaaa_</a> </p>
</li>
<li>
<div class="u-cover u-cover-1">
<img class="j-flag" src="http://p1.music.126.net/FT63xhYuuV7QxcHtKs96kg==/109951163427450509.jpg?param=140y140"/>
<a title="幼稚园| 人间不正经生活手册" href="/playlist?id=2333077959" class="msk"></a>
<div class="bottom">
<a class="icon-play f-fr" title="播放" href="javascript:;"
data-res-type="13"
data-res-id="2333077959"
data-res-action="play"></a>
<span class="icon-headset"></span>
<span class="nb">205万</span>
</div>
</div>
<p class="dec">
<a title="幼稚园| 人间不正经生活手册" href="/playlist?id=2333077959" class="tit f-thide s-fc0">幼稚园| 人间不正经生活手册</a>
</p>
<p><span class="s-fc4">by</span> <a title="不摇滚纪事" href="/user/home?id=430637111" class="nm nm-icn f-thide s-fc3">不摇滚纪事</a> </p>
</li>
<li>
<div class="u-cover u-cover-1">
<img class="j-flag" src="http://p1.music.126.net/ZwzAT1spYqvlPJelsvqodw==/109951163429510470.jpg?param=140y140"/>
<a title="「日语｜纯钢琴」这份温柔只想传达给你" href="/playlist?id=2316692615" class="msk"></a>
<div class="bottom">
<a class="icon-play f-fr" title="播放" href="javascript:;"
data-res-type="13"
data-res-id="2316692615"
data-res-action="play"></a>
<span class="icon-headset"></span>
<span class="nb">18万</span>
</div>
</div>
<p class="dec">
<a title="「日语｜纯钢琴」这份温柔只想传达给你" href="/playlist?id=2316692615" class="tit f-thide s-fc0">「日语｜纯钢琴」这份温柔只想传达给你</a>
</p>
<p><span class="s-fc4">by</span> <a title="PurionPurion" href="/user/home?id=62696289" class="nm nm-icn f-thide s-fc3">PurionPurion</a> <sup class="u-icn u-icn-84 "></sup>
</p>
</li>
<li>
<div class="u-cover u-cover-1">
<img class="j-flag" src="http://p1.music.126.net/r4dmNlYm0ApD1Afgdt7OtA==/109951163427654634.jpg?param=140y140"/>
<a title="电影中的钢琴曲｜最会讲故事³" href="/playlist?id=2321804269" class="msk"></a>
<div class="bottom">
<a class="icon-play f-fr" title="播放" href="javascript:;"
data-res-type="13"
data-res-id="2321804269"
data-res-action="play"></a>
<span class="icon-headset"></span>
<span class="nb">59万</span>
</div>
</div>
<p class="dec">
<a title="电影中的钢琴曲｜最会讲故事³" href="/playlist?id=2321804269" class="tit f-thide s-fc0">电影中的钢琴曲｜最会讲故事³</a>
</p>
<p><span class="s-fc4">by</span> <a title="下一颗巧克力" href="/user/home?id=2445590" class="nm nm-icn f-thide s-fc3">下一颗巧克力</a> <sup class="u-icn u-icn-84 "></sup>
</p>
</li>
<li>
<div class="u-cover u-cover-1">
<img class="j-flag" src="http://p1.music.126.net/qMDfJwgh0AnAlbXBU8xeVQ==/109951163428299050.jpg?param=140y140"/>
<a title="《西虹市首富》 歌曲全收录" href="/playlist?id=2335043409" class="msk"></a>
<div class="bottom">
<a class="icon-play f-fr" title="播放" href="javascript:;"
data-res-type="13"
data-res-id="2335043409"
data-res-action="play"></a>
<span class="icon-headset"></span>
<span class="nb">81008</span>
</div>
</div>
<p class="dec">
<a title="《西虹市首富》 歌曲全收录" href="/playlist?id=2335043409" class="tit f-thide s-fc0">《西虹市首富》 歌曲全收录</a>
</p>
<p><span class="s-fc4">by</span> <a title="好人大拇哥" href="/user/home?id=395050255" class="nm nm-icn f-thide s-fc3">好人大拇哥</a> </p>
</li>
<li>
<div class="u-cover u-cover-1">
<img class="j-flag" src="http://p1.music.126.net/6t3Uc4m5gq2u19bRb__vMQ==/109951163410578006.jpg?param=140y140"/>
<a title="「日语摇滚」激燃之上的亮丽女声" href="/playlist?id=2318367080" class="msk"></a>
<div class="bottom">
<a class="icon-play f-fr" title="播放" href="javascript:;"
data-res-type="13"
data-res-id="2318367080"
data-res-action="play"></a>
<span class="icon-headset"></span>
<span class="nb">113万</span>
</div>
</div>
<p class="dec">
<a title="「日语摇滚」激燃之上的亮丽女声" href="/playlist?id=2318367080" class="tit f-thide s-fc0">「日语摇滚」激燃之上的亮丽女声</a>
</p>
<p><span class="s-fc4">by</span> <a title="xept" href="/user/home?id=74029445" class="nm nm-icn f-thide s-fc3">xept</a> <sup class="u-icn u-icn-84 "></sup>
</p>
</li>
<li>
<div class="u-cover u-cover-1">
<img class="j-flag" src="http://p1.music.126.net/oS3ZLQ66uGPMnnOJDzDlBw==/19093019417022416.jpg?param=140y140"/>
<a title="论钢琴的交响性：管弦乐名作及其钢琴改编" href="/playlist?id=2317199475" class="msk"></a>
<div class="bottom">
<a class="icon-play f-fr" title="播放" href="javascript:;"
data-res-type="13"
data-res-id="2317199475"
data-res-action="play"></a>
<span class="icon-headset"></span>
<span class="nb">10万</span>
</div>
</div>
<p class="dec">
<a title="论钢琴的交响性：管弦乐名作及其钢琴改编" href="/playlist?id=2317199475" class="tit f-thide s-fc0">论钢琴的交响性：管弦乐名作及其钢琴改编</a>
</p>
<p><span class="s-fc4">by</span> <a title="团战专用小火把" href="/user/home?id=97412802" class="nm nm-icn f-thide s-fc3">团战专用小火把</a> <sup class="u-icn u-icn-84 "></sup>
</p>
</li>
<li>
<div class="u-cover u-cover-1">
<img class="j-flag" src="http://p1.music.126.net/AnxW3Z3bDOAesm_0GoPh7A==/109951163428847244.jpg?param=140y140"/>
<a title="Diss吴亦凡合集" href="/playlist?id=2335387072" class="msk"></a>
<div class="bottom">
<a class="icon-play f-fr" title="播放" href="javascript:;"
data-res-type="13"
data-res-id="2335387072"
data-res-action="play"></a>
<span class="icon-headset"></span>
<span class="nb">99815</span>
</div>
</div>
<p class="dec">
<a title="Diss吴亦凡合集" href="/playlist?id=2335387072" class="tit f-thide s-fc0">Diss吴亦凡合集</a>
</p>
<p><span class="s-fc4">by</span> <a title="Hiphop嘻哈站" href="/user/home?id=269705954" class="nm nm-icn f-thide s-fc3">Hiphop嘻哈站</a> <sup class="icn u-icn2 u-icn2-music2 "></sup>
</p>
</li>
<li>
<div class="u-cover u-cover-1">
<img class="j-flag" src="http://p1.music.126.net/SU6A6Wn6QMe1XK6ji3m-hQ==/18970973626241990.jpg?param=140y140"/>
<a title="【Future Bass】入耳即爱上的心动旋律" href="/playlist?id=2313695055" class="msk"></a>
<div class="bottom">
<a class="icon-play f-fr" title="播放" href="javascript:;"
data-res-type="13"
data-res-id="2313695055"
data-res-action="play"></a>
<span class="icon-headset"></span>
<span class="nb">185万</span>
</div>
</div>
<p class="dec">
<a title="【Future Bass】入耳即爱上的心动旋律" href="/playlist?id=2313695055" class="tit f-thide s-fc0">【Future Bass】入耳即爱上的心动旋律</a>
</p>
<p><span class="s-fc4">by</span> <a title="原点FM" href="/user/home?id=247176530" class="nm nm-icn f-thide s-fc3">原点FM</a> <sup class="u-icn u-icn-84 "></sup>
</p>
</li>
<li>
<div class="u-cover u-cover-1">
<img class="j-flag" src="http://p1.music.126.net/f4rq2vrd2AQ1i8KDazRHhQ==/109951163421407852.jpg?param=140y140"/>
<a title="失落少年孤独心俱乐部" href="/playlist?id=2323596120" class="msk"></a>
<div class="bottom">
<a class="icon-play f-fr" title="播放" href="javascript:;"
data-res-type="13"
data-res-id="2323596120"
data-res-action="play"></a>
<span class="icon-headset"></span>
<span class="nb">398万</span>
</div>
</div>
<p class="dec">
<a title="失落少年孤独心俱乐部" href="/playlist?id=2323596120" class="tit f-thide s-fc0">失落少年孤独心俱乐部</a>
</p>
<p><span class="s-fc4">by</span> <a title="AirRadio空气赫兹" href="/user/home?id=289477415" class="nm nm-icn f-thide s-fc3">AirRadio空气赫兹</a> </p>
</li>
<li>
<div class="u-cover u-cover-1">
<img class="j-flag" src="http://p1.music.126.net/2LIFpjhtGk0l67uB7ZCQug==/109951163402375543.jpg?param=140y140"/>
<a title="&quot; 不思进取 思你 &quot;" href="/playlist?id=2310363081" class="msk"></a>
<div class="bottom">
<a class="icon-play f-fr" title="播放" href="javascript:;"
data-res-type="13"
data-res-id="2310363081"
data-res-action="play"></a>
<span class="icon-headset"></span>
<span class="nb">117万</span>
</div>
</div>
<p class="dec">
<a title="&quot; 不思进取 思你 &quot;" href="/playlist?id=2310363081" class="tit f-thide s-fc0">&quot; 不思进取 思你 &quot;</a>
</p>
<p><span class="s-fc4">by</span> <a title="迟到情书" href="/user/home?id=330932370" class="nm nm-icn f-thide s-fc3">迟到情书</a> <sup class="u-icn u-icn-84 "></sup>
</p>
</li>
<li>
<div class="u-cover u-cover-1">
<img class="j-flag" src="http://p1.music.126.net/YVgW0O5SijOq0m8C90PavQ==/18894007812317570.jpg?param=140y140"/>
<a title="“我爱你”的100种表达方式" href="/playlist?id=2314313405" class="msk"></a>
<div class="bottom">
<a class="icon-play f-fr" title="播放" href="javascript:;"
data-res-type="13"
data-res-id="2314313405"
data-res-action="play"></a>
<span class="icon-headset"></span>
<span class="nb">475万</span>
</div>
</div>
<p class="dec">
<a title="“我爱你”的100种表达方式" href="/playlist?id=2314313405" class="tit f-thide s-fc0">“我爱你”的100种表达方式</a>
</p>
<p><span class="s-fc4">by</span> <a title="雾与晨" href="/user/home?id=103780233" class="nm nm-icn f-thide s-fc3">雾与晨</a> <sup class="u-icn u-icn-1 "></sup>
</p>
</li>
<li>
<div class="u-cover u-cover-1">
<img class="j-flag" src="http://p1.music.126.net/pFLnEUj4kmGYuNMkJfCQPg==/19025949207652805.jpg?param=140y140"/>
<a title="风月无憾 | 你是我有关青春 最美的句读" href="/playlist?id=2324361508" class="msk"></a>
<div class="bottom">
<a class="icon-play f-fr" title="播放" href="javascript:;"
data-res-type="13"
data-res-id="2324361508"
data-res-action="play"></a>
<span class="icon-headset"></span>
<span class="nb">426万</span>
</div>
</div>
<p class="dec">
<a title="风月无憾 | 你是我有关青春 最美的句读" href="/playlist?id=2324361508" class="tit f-thide s-fc0">风月无憾 | 你是我有关青春 最美的句读</a>
</p>
<p><span class="s-fc4">by</span> <a title="外太空来的Mercy" href="/user/home?id=308097990" class="nm nm-icn f-thide s-fc3">外太空来的Mercy</a> <sup class="u-icn u-icn-84 "></sup>
</p>
</li>
<li>
<div class="u-cover u-cover-1">
<img class="j-flag" src="http://p1.music.126.net/JIZizulncSqco9Zy_t7hfQ==/18599338697654717.jpg?param=140y140"/>
<a title="如何用手机铃声惊艳四座？ 日语篇" href="/playlist?id=2326098492" class="msk"></a>
<div class="bottom">
<a class="icon-play f-fr" title="播放" href="javascript:;"
data-res-type="13"
data-res-id="2326098492"
data-res-action="play"></a>
<span class="icon-headset"></span>
<span class="nb">54296</span>
</div>
</div>
<p class="dec">
<a title="如何用手机铃声惊艳四座？ 日语篇" href="/playlist?id=2326098492" class="tit f-thide s-fc0">如何用手机铃声惊艳四座？ 日语篇</a>
</p>
<p><span class="s-fc4">by</span> <a title="白川京" href="/user/home?id=253413447" class="nm nm-icn f-thide s-fc3">白川京</a> <sup class="u-icn u-icn-84 "></sup>
</p>
</li>
<li>
<div class="u-cover u-cover-1">
<img class="j-flag" src="http://p1.music.126.net/m-JMB7vGgWjdhCWw14rDTg==/109951163418230653.jpg?param=140y140"/>
<a title="「纯音」嘘，我的悲伤才刚刚睡着" href="/playlist?id=2319189362" class="msk"></a>
<div class="bottom">
<a class="icon-play f-fr" title="播放" href="javascript:;"
data-res-type="13"
data-res-id="2319189362"
data-res-action="play"></a>
<span class="icon-headset"></span>
<span class="nb">26万</span>
</div>
</div>
<p class="dec">
<a title="「纯音」嘘，我的悲伤才刚刚睡着" href="/playlist?id=2319189362" class="tit f-thide s-fc0">「纯音」嘘，我的悲伤才刚刚睡着</a>
</p>
<p><span class="s-fc4">by</span> <a title="米契比" href="/user/home?id=98598280" class="nm nm-icn f-thide s-fc3">米契比</a> <sup class="u-icn u-icn-84 "></sup>
</p>
</li>
<li>
<div class="u-cover u-cover-1">
<img class="j-flag" src="http://p1.music.126.net/pgoRKjNPJ1GBIiw7Jil3bg==/19118308184394153.jpg?param=140y140"/>
<a title="Kawaii Bass丨汽水糖果柠檬软萌萝莉⚡️" href="/playlist?id=2320041657" class="msk"></a>
<div class="bottom">
<a class="icon-play f-fr" title="播放" href="javascript:;"
data-res-type="13"
data-res-id="2320041657"
data-res-action="play"></a>
<span class="icon-headset"></span>
<span class="nb">46万</span>
</div>
</div>
<p class="dec">
<a title="Kawaii Bass丨汽水糖果柠檬软萌萝莉⚡️" href="/playlist?id=2320041657" class="tit f-thide s-fc0">Kawaii Bass丨汽水糖果柠檬软萌萝莉⚡️</a>
</p>
<p><span class="s-fc4">by</span> <a title="音凛酱" href="/user/home?id=1520598158" class="nm nm-icn f-thide s-fc3">音凛酱</a> </p>
</li>
<li>
<div class="u-cover u-cover-1">
<img class="j-flag" src="http://p1.music.126.net/9-Z4602diPPyrHClzOIGfQ==/109951163390558933.jpg?param=140y140"/>
<a title="百部动画女声，百首抒情旋律" href="/playlist?id=2300523945" class="msk"></a>
<div class="bottom">
<a class="icon-play f-fr" title="播放" href="javascript:;"
data-res-type="13"
data-res-id="2300523945"
data-res-action="play"></a>
<span class="icon-headset"></span>
<span class="nb">26万</span>
</div>
</div>
<p class="dec">
<a title="百部动画女声，百首抒情旋律" href="/playlist?id=2300523945" class="tit f-thide s-fc0">百部动画女声，百首抒情旋律</a>
</p>
<p><span class="s-fc4">by</span> <a title="花嫁赫萝" href="/user/home?id=83659385" class="nm nm-icn f-thide s-fc3">花嫁赫萝</a> <sup class="u-icn u-icn-84 "></sup>
</p>
</li>
<li>
<div class="u-cover u-cover-1">
<img class="j-flag" src="http://p1.music.126.net/bpORc06fhgPkVEz8-JlSaQ==/109951163411318290.jpg?param=140y140"/>
<a title="2018音乐录影带大奖VMA提名名单" href="/playlist?id=2318893959" class="msk"></a>
<div class="bottom">
<a class="icon-play f-fr" title="播放" href="javascript:;"
data-res-type="13"
data-res-id="2318893959"
data-res-action="play"></a>
<span class="icon-headset"></span>
<span class="nb">119万</span>
</div>
</div>
<p class="dec">
<a title="2018音乐录影带大奖VMA提名名单" href="/playlist?id=2318893959" class="tit f-thide s-fc0">2018音乐录影带大奖VMA提名名单</a>
</p>
<p><span class="s-fc4">by</span> <a title="献给莉莉的玫瑰" href="/user/home?id=1430992951" class="nm nm-icn f-thide s-fc3">献给莉莉的玫瑰</a> </p>
</li>
<li>
<div class="u-cover u-cover-1">
<img class="j-flag" src="http://p1.music.126.net/sN91dYsevh-5ZhCRTysHsQ==/109951163410086537.jpg?param=140y140"/>
<a title="迈阿密电音节【ULTRA】" href="/playlist?id=2317891031" class="msk"></a>
<div class="bottom">
<a class="icon-play f-fr" title="播放" href="javascript:;"
data-res-type="13"
data-res-id="2317891031"
data-res-action="play"></a>
<span class="icon-headset"></span>
<span class="nb">20万</span>
</div>
</div>
<p class="dec">
<a title="迈阿密电音节【ULTRA】" href="/playlist?id=2317891031" class="tit f-thide s-fc0">迈阿密电音节【ULTRA】</a>
</p>
<p><span class="s-fc4">by</span> <a title="云音乐VIP" href="/user/home?id=1452176465" class="nm nm-icn f-thide s-fc3">云音乐VIP</a> <sup class="u-icn u-icn-1 "></sup>
</p>
</li>
<li>
<div class="u-cover u-cover-1">
<img class="j-flag" src="http://p1.music.126.net/PpLn-9opxvNP5048ZvKM-g==/19172184254145825.jpg?param=140y140"/>
<a title="橘味歌单｜那些画面感很强的奇妙小歌" href="/playlist?id=2324997645" class="msk"></a>
<div class="bottom">
<a class="icon-play f-fr" title="播放" href="javascript:;"
data-res-type="13"
data-res-id="2324997645"
data-res-action="play"></a>
<span class="icon-headset"></span>
<span class="nb">117万</span>
</div>
</div>
<p class="dec">
<a title="橘味歌单｜那些画面感很强的奇妙小歌" href="/playlist?id=2324997645" class="tit f-thide s-fc0">橘味歌单｜那些画面感很强的奇妙小歌</a>
</p>
<p><span class="s-fc4">by</span> <a title="猫头罐与六便士" href="/user/home?id=446020942" class="nm nm-icn f-thide s-fc3">猫头罐与六便士</a> </p>
</li>
<li>
<div class="u-cover u-cover-1">
<img class="j-flag" src="http://p1.music.126.net/nMRjEaAJ6kf4t5n-E-NWPA==/109951163403259562.jpg?param=140y140"/>
<a title="DJ Snake Radio" href="/playlist?id=2311539185" class="msk"></a>
<div class="bottom">
<a class="icon-play f-fr" title="播放" href="javascript:;"
data-res-type="13"
data-res-id="2311539185"
data-res-action="play"></a>
<span class="icon-headset"></span>
<span class="nb">120万</span>
</div>
</div>
<p class="dec">
<a title="DJ Snake Radio" href="/playlist?id=2311539185" class="tit f-thide s-fc0">DJ Snake Radio</a>
</p>
<p><span class="s-fc4">by</span> <a title="DJSnake" href="/user/home?id=1363615889" class="nm nm-icn f-thide s-fc3">DJSnake</a> <sup class="u-icn u-icn-1 "></sup>
</p>
</li>
<li>
<div class="u-cover u-cover-1">
<img class="j-flag" src="http://p1.music.126.net/9YnkhrSNIq9rA7tpsTRO2A==/109951163418100580.jpg?param=140y140"/>
<a title="「故事碎片」想念在耳边凝成絮语" href="/playlist?id=2325108330" class="msk"></a>
<div class="bottom">
<a class="icon-play f-fr" title="播放" href="javascript:;"
data-res-type="13"
data-res-id="2325108330"
data-res-action="play"></a>
<span class="icon-headset"></span>
<span class="nb">128万</span>
</div>
</div>
<p class="dec">
<a title="「故事碎片」想念在耳边凝成絮语" href="/playlist?id=2325108330" class="tit f-thide s-fc0">「故事碎片」想念在耳边凝成絮语</a>
</p>
<p><span class="s-fc4">by</span> <a title="献给莉莉的玫瑰" href="/user/home?id=1430992951" class="nm nm-icn f-thide s-fc3">献给莉莉的玫瑰</a> </p>
</li>
<li>
<div class="u-cover u-cover-1">
<img class="j-flag" src="http://p1.music.126.net/P1IXTC2djtA89w7SDaTMyQ==/109951163391859286.jpg?param=140y140"/>
<a title="这些歌名连起来，是我暗恋你多年的秘密" href="/playlist?id=2301753292" class="msk"></a>
<div class="bottom">
<a class="icon-play f-fr" title="播放" href="javascript:;"
data-res-type="13"
data-res-id="2301753292"
data-res-action="play"></a>
<span class="icon-headset"></span>
<span class="nb">912万</span>
</div>
</div>
<p class="dec">
<a title="这些歌名连起来，是我暗恋你多年的秘密" href="/playlist?id=2301753292" class="tit f-thide s-fc0">这些歌名连起来，是我暗恋你多年的秘密</a>
</p>
<p><span class="s-fc4">by</span> <a title="朩朩青尘" href="/user/home?id=7394345" class="nm nm-icn f-thide s-fc3">朩朩青尘</a> <sup class="u-icn u-icn-1 "></sup>
</p>
</li>
<li>
<div class="u-cover u-cover-1">
<img class="j-flag" src="http://p1.music.126.net/nyKX7yZGyVRADTbehV0h7A==/18603736744128350.jpg?param=140y140"/>
<a title="听了几个故事，正好讲给你玩" href="/playlist?id=2298138241" class="msk"></a>
<div class="bottom">
<a class="icon-play f-fr" title="播放" href="javascript:;"
data-res-type="13"
data-res-id="2298138241"
data-res-action="play"></a>
<span class="icon-headset"></span>
<span class="nb">396万</span>
</div>
</div>
<p class="dec">
<a title="听了几个故事，正好讲给你玩" href="/playlist?id=2298138241" class="tit f-thide s-fc0">听了几个故事，正好讲给你玩</a>
</p>
<p><span class="s-fc4">by</span> <a title="佯佯得意" href="/user/home?id=411402173" class="nm nm-icn f-thide s-fc3">佯佯得意</a> <sup class="u-icn u-icn-84 "></sup>
</p>
</li>
<li>
<div class="u-cover u-cover-1">
<img class="j-flag" src="http://p1.music.126.net/_nXa5riy7WvZp4yujs4dvg==/109951163409503314.jpg?param=140y140"/>
<a title="一种生活一种态度，在平凡中寻找快乐" href="/playlist?id=2317277851" class="msk"></a>
<div class="bottom">
<a class="icon-play f-fr" title="播放" href="javascript:;"
data-res-type="13"
data-res-id="2317277851"
data-res-action="play"></a>
<span class="icon-headset"></span>
<span class="nb">242万</span>
</div>
</div>
<p class="dec">
<a title="一种生活一种态度，在平凡中寻找快乐" href="/playlist?id=2317277851" class="tit f-thide s-fc0">一种生活一种态度，在平凡中寻找快乐</a>
</p>
<p><span class="s-fc4">by</span> <a title="情思天鹅" href="/user/home?id=108952364" class="nm nm-icn f-thide s-fc3">情思天鹅</a> <sup class="u-icn u-icn-84 "></sup>
</p>
</li>
</ul>
<div id="m-pl-pager"> <div class="u-page">
<a href="javascript:void(0)" class="zbtn zprv js-disabled">上一页</a>
<a href="javascript:void(0)" class="zpgi js-selected">1</a>
<a href="/discover/playlist/?order=hot&cat=%E5%85%A8%E9%83%A8&limit=35&offset=35" class="zpgi">2</a>
<a href="/discover/playlist/?order=hot&cat=%E5%85%A8%E9%83%A8&limit=35&offset=70" class="zpgi">3</a>
<a href="/discover/playlist/?order=hot&cat=%E5%85%A8%E9%83%A8&limit=35&offset=105" class="zpgi">4</a>
<a href="/discover/playlist/?order=hot&cat=%E5%85%A8%E9%83%A8&limit=35&offset=140" class="zpgi">5</a>
<a href="/discover/playlist/?order=hot&cat=%E5%85%A8%E9%83%A8&limit=35&offset=175" class="zpgi">6</a>
<a href="/discover/playlist/?order=hot&cat=%E5%85%A8%E9%83%A8&limit=35&offset=210" class="zpgi">7</a>
<a href="/discover/playlist/?order=hot&cat=%E5%85%A8%E9%83%A8&limit=35&offset=245" class="zpgi">8</a>
<span class="zdot">...</span>
<a href="/discover/playlist/?order=hot&cat=%E5%85%A8%E9%83%A8&limit=35&offset=1225" class="zpgi">36</a>
<a href="/discover/playlist/?order=hot&cat=%E5%85%A8%E9%83%A8&limit=35&offset=35" class="zbtn znxt">下一页</a>
</div>
</div>
</div>
</div>
<div class="g-ft ">
<div class="m-ft">
<div class="wrap f-cb">
<div class="copy">
<p>
<a href="//music.163.com/about" target="_blank" class="s-fc4">关于网易</a><span class="line">|</span>
<a href="//help.163.com/" target="_blank" class="s-fc4">客户服务</a><span class="line">|</span>
<a href="//music.163.com/html/web2/service.html" target="_blank" class="s-fc4">服务条款</a><span class="line">|</span>
<a href="//sitemap.163.com/" target="_blank" class="s-fc4">网站导航</a><span class="line">|</span>
<a id="g_feedback" href="#" class="s-fc4" onclick="nm.x.feedback();return false;" hidefocus="true">意见反馈</a>
</p>
<p class="s-fc3">
<span class="sep">网易公司版权所有©1997-2018</span>杭州乐读科技有限公司运营：<a href="http://p1.music.126.net/MkOOdJqWZdBx05Ias2W3UA==/109951163298654917.png" target="_blank" class="s-fc3">浙网文[2018]3506-263号</a>
</p>
<p class="s-fc3">
<span class="sep">违法和不良信息举报电话：0571-89853516</span>
举报邮箱：<a href="mailto:cloudmusicservice@163.com">cloudmusicservice@163.com</a>
</p>
</div>
<ul class="enter f-fr">
<li>
<a class="logo logo-musician f-tid" href="//music.163.com/recruit" target="_blank">独立音乐人</a>
</li>
<li>
<a class="logo logo-topic f-tid" href="//music.163.com/topic/recruit" target="_blank">音乐专栏</a>
</li>
<li>
<a class="logo logo-midea f-tid" href="//music.163.com/topic/selfmedia" target="_blank">自媒体</a>
</li>
<li>
<a class="logo logo-reward f-tid" href="//music.163.com/web/reward" target="_blank">赞赏</a>
</li>
<li>
<a class="logo logo-cash f-tid" href="//music.163.com/topic/cashencourage" target="_blank">视频奖励</a>
</li>
</ul>
</div>
</div>
</div>
<a title="回到顶部" class="m-back" href="#" id="g_backtop" hidefocus="true" style="display:none;">回到顶部</a>
<div id="template-box" style="display:none;"> <textarea name="ntp" id="m-wgt-selector" style="display:none;"><div class="u-slt f-pr"><span class="curr f-thide"></span><i class="btn"></i><ul></ul></div>
</textarea>
<textarea name="ntp" id="m-wgt-create" style="display:none;"><div class="lyct m-crgd f-cb f-tc">
<p>歌单名：<input type="text" class="u-txt j-flag"></p>
<div class="u-err f-vhide j-flag"><i class="u-icn u-icn-25"></i>错误提示</div>
<p class="tip s-fc4">可通过“收藏”将音乐添加到新歌单中</p>
<div class="btn">
<a href="javascript:;" class="u-btn2 u-btn2-2 u-btn2-w2 j-flag" hidefocus="true"><i>新 建</i></a>
<a href="javascript:;" class="u-btn2 u-btn2-1 u-btn2-w2 j-flag" hidefocus="true"><i>取 消</i></a>
</div>
</div>
</textarea>
<textarea name="ntp" id="m-wgt-comment" style="display:none;"><div class="u-title u-title-1">
<h3><span class="f-ff2">评论</span></h3><span class="sub s-fc3">共<span class="j-flag">0</span>条评论</span>
</div>
<div class="m-cmmt">
<div class="iptarea">
<div class="head"><img src="http://p4.music.126.net/uqQodzTr_3iwKixkltEOnw==/109951163413709114.jpg?param=50y50"></div>
<div class="j-flag"></div>
</div>
<div class="cmmts j-flag"></div>
<div class="j-flag"></div>
</div>
</textarea>
<textarea name="ntp" id="m-wgt-comment2" style="display:none;"><div class="m-dynamic">
<div class="dbox dbox-cmt">
<span class="darr"><i class="bd">◆</i><i class="bg">◆</i></span>
<div class="m-cmmt m-cmmt-s">
<div class="iptarea j-flag">
</div>
<div class="cmmts">
<div class="j-flag"></div>
<div class="dmore dmore-cmt f-cb">
<div class="dhas s-fc3">后面还有<span class="j-flag">0</span>条评论，<a data-type="viewmore" class="s-fc3 f-ff1" href="javascript:void(0)">查看更多&gt;</a></div>
<a data-type="cc" class="dtoggle" href="javascript:void(0)">收起<i data-type="cc" class="u-icn u-icn-61"></i></a>
</div>
</div>
</div>
</div>
</div>
</textarea>
<textarea name="ntp" id="m-wgt-comment3" style="display:none;"><div class="dcmt">
<p><span class="f-fw1">评论</span> (<span class="j-flag"></span>)</p>
<div class="m-cmmt m-cmmt-s">
<div class="iptarea j-flag">
</div>
<div class="cmmts j-flag">
</div>
<div class="j-flag">
</div>
</div>
</div>
</textarea>
<textarea name="jst" id="m-wgt-comment-item" style="display:none;"> {list beg..end as y}
{var x=xlist[y]}
{if !!x}
<div id="\${x.commentId|seed}" class="itm" data-id="\${x.commentId}">
<div class="head">
<a href="/user/home?id=\${x.user.userId}"><img src="\${x.user.avatarUrl}?param=50y50"></a>
</div>
<div class="cntwrap">
<div class="">
<div class="cnt f-brk">
<a href="/user/home?id=\${x.user.userId}" class="s-fc7">\${escape(x.user.nickname)}</a>
\${getAuthIcon(x.user)}
{if !!x.beRepliedUser}
&nbsp;回复&nbsp;<a href="/user/home?id=\${x.beRepliedUser.userId}" class="s-fc7">\${escape(x.beRepliedUser.nickname)}</a>
\${getAuthIcon(x.beRepliedUser)}
{/if}
：\${getRichText(escape(x.content),'s-fc7')}
{if !!x.expressionUrl}
<div class="u-expression"><img src="\${x.expressionUrl}?param=70y70"></img></div>
{/if}
</div>
</div>
{if x.beReplied&&x.beReplied.length}
{var replied = x.beReplied[0]}
<div class="que f-brk f-pr s-fc3">
<span class="darr"><i class="bd">◆</i><i class="bg">◆</i></span>
{if (replied && replied.status!=-5) && (replied.content || replied.expressionUrl)}
<a class="s-fc7" href="/user/home?id=\${replied.user.userId}">\${replied.user.nickname}\${getAuthIcon(replied.user)}</a>：\${getRichText(escape(replied.content),'s-fc7')}
{if !!replied.expressionUrl}
<div class="u-expression"><img src="\${replied.expressionUrl}?param=70y70"></img></div>
{/if}
{else}
该评论已删除
{/if}
</div>
{/if}
<div class="rp">
<div class="time s-fc4">\${timeformat(x.time)}</div>
{if x.topCommentId}<span class="top">音乐人置顶</span>{/if}
{if canTop()&&GUser&&GUser.userId&&(GUser.userId==x.user.userId)}
<span class="dlt">{if x.topCommentId}<a href="javascript:void(0)" class="s-fc3" data-id="\${x.commentId}" data-tid="\${x.topCommentId}" data-type="canceltop">解除置顶</a>{else}<a href="javascript:void(0)" class="s-fc3" data-id="\${x.commentId}" data-type="gotop">置顶评论</a>{/if}<span class="sep">|</span></span>
{/if}
{if GUser&&GUser.userId&&(GUser.userId==x.user.userId||GUser.userId==resUserId)}
<span class="dlt"><a href="javascript:void(0)" class="s-fc3" data-id="\${x.commentId}" {if x.topCommentId}data-tid="\${x.topCommentId}" {/if}data-type="delete">删除</a><span class="sep">|</span></span>
{/if}
{if GAllowRejectComment}
{if hot||!x.isRemoveHotComment}
<span class="dlt"><a href="javascript:void(0)" class="s-fc3" data-id="\${x.commentId}" data-type="reject">移除精彩评论</a><span class="sep">|</span></span>
{else}
<span class="s-fc3">已移除精彩评论</span><span class="sep">|</span>
{/if}
{/if}
{if !x.topCommentId}<a data-id="\${x.commentId}" data-type="{if !x.liked}like{else}unlike{/if}" href="javascript:void(0)"><i class="zan u-icn2 u-icn2-{if x.liked}13{else}12{/if}"></i>{if x.likedCount} (\${getPlayCount(x.likedCount)}){/if}</a>
<span class="sep">|</span>{/if}
<a href="javascript:void(0)" class="s-fc3" data-id="\${x.commentId}" data-type="reply">回复</a>
</div>
</div>
</div>
{/if}
{/list}
</textarea>
<textarea name="jst" id="m-wgt-comment-item-2" style="display:none;"> {list beg..end as y}
{var x=xlist[y]}
<div class="itm" data-id="\${x.commentId}">
<div class="head">
<a href="/user/home?id=\${x.user.userId}"><img src="\${x.user.avatarUrl}?param=50y50"></a>
</div>
<div class="cntwrap">
<div class="cnt2 f-brk">
<a href="/user/home?id=\${x.user.userId}" class="s-fc7">\${escape(x.user.nickname)}</a>
\${getAuthIcon(x.user)}
{if !!x.beRepliedUser}
&nbsp;回复&nbsp;<a href="/user/home?id=\${x.beRepliedUser.userId}" class="s-fc7">\${escape(x.beRepliedUser.nickname)}</a>
\${getAuthIcon(x.beRepliedUser)}
{/if}
：\${getRichText(escape(x.content),'s-fc7')}
{if !!x.expressionUrl}
<div class="u-expression"><img src="\${x.expressionUrl}?param=70y70"></img></div>
{/if}
</div>
{if x.beReplied&&x.beReplied.length}
{var replied = x.beReplied[0]}
<div class="que f-brk f-pr s-fc3">
<span class="darr"><i class="bd">◆</i><i class="bg">◆</i></span>
{if replied&&replied.content}
<a class="s-fc7" href="/user/home?id=\${replied.user.userId}">\${replied.user.nickname}\${getAuthIcon(replied.user)}</a>：\${getRichText(escape(replied.content),'s-fc7')}
{else}
该评论已删除
{/if}
</div>
{/if}
<div class="rp">
<div class="time s-fc4">\${timeformat(x.time)}</div>
{if GUser&&GUser.userId&&(GUser.userId==x.user.userId||GUser.userId==resUserId)}
<span class="dlt">
<a href="javascript:void(0)" class="s-fc3" data-id="\${x.commentId}" data-type="delete">删除</a><span class="sep">|</span>
</span>
{/if}
<a data-id="\${x.commentId}" data-type="{if !x.liked}like{else}unlike{/if}" href="javascript:void(0)"><i class="zan u-icn2 u-icn2-{if x.liked}13{else}12{/if}"></i>{if x.likedCount} (\${getPlayCount(x.likedCount)}){/if}</a>
<span class="sep">|</span>
<a href="javascript:void(0)" class="s-fc3" data-id="\${x.commentId}" data-type="reply">回复</a>
</div>
</div>
</div>
{/list}
</textarea>
<textarea name="jst" id="m-wgt-input-1" style="display:none;"> <div class="m-cmmtipt f-cb f-pr">
<div class="u-txtwrap holder-parent f-pr">
<textarea class="u-txt area j-flag" data-type="0" placeholder="\${placeholder}"><&#47;textarea>
</div>
<div class="btns f-cb f-pr">
<i class="icn u-icn u-icn-36 j-flag"></i><i class="icn u-icn u-icn-41 j-flag"></i>
<a href="javascript:void(0)" class="btn u-btn u-btn-1 j-flag">评论</a>
<span class="zs s-fc4 j-flag">110/120</span>
</div>
<div class="corr u-arr"><em class="arrline">◆</em><span class="arrclr">◆</span></div>
</div>
</textarea>
<textarea name="jst" id="m-wgt-input-2" style="display:none;"> <div class="rept m-quk m-quk-1 f-pr">
<div class="iner">
<div class="corr u-arr u-arr-1"><em class="arrline">◆</em><span class="arrclr">◆</span></div>
<div class="m-cmmtipt m-cmmtipt-1 f-cb f-pr">
<div class="u-txtwrap holder-parent f-pr j-wrap">
<textarea class="u-txt area j-flag" placeholder="\${placeholder}"><&#47;textarea>
</div>
<div class="btns f-cb f-pr">
<i class="icn u-icn u-icn-36 j-flag"></i><i class="icn u-icn u-icn-41 j-flag"></i>
<a href="javascript:void(0)" class="btn u-btn u-btn-1 j-flag">回复</a>
<span class="zs s-fc4 j-flag">110/120</span>
</div>
</div>
</div>
</div>
</textarea>
<textarea name="jst" id="m-wgt-input-3" style="display:none;"> <div class="m-cmmtipt f-cb f-pr">
<div class="u-txtwrap holder-parent f-pr">
<textarea class="u-txt area j-flag" placeholder="\${placeholder}"><&#47;textarea>
</div>
<div class="btns f-cb f-pr">
<i class="icn u-icn u-icn-36 j-flag"></i><i class="icn u-icn u-icn-41 j-flag"></i>
<a class="btn u-btn u-btn-1 j-flag" href="javascript:void(0)">回复</a>
<span class="zs s-fc4 j-flag">110/120</span>
</div>
</div>
</textarea>
<textarea name="jst" id="m-wgt-input-4" style="display:none;"> <div class="m-cmmtipt f-cb f-pr">
<div class="u-txtwrap f-pr">
<textarea class="u-txt area j-flag"><&#47;textarea>
</div>
<div class="btns f-cb f-pr">
<i class="icn u-icn u-icn-36 j-flag"></i><i class="icn u-icn u-icn-41 j-flag" style="display:none;"></i>
<a class="f-fr u-btn u-btn-1 j-flag" href="javascript:void(0)">发送</a><span class="zs s-fc4 j-flag">110/120</span>
</div>
</div>
</textarea>
<textarea name="jst" id="m-wgt-input-5" style="display:none;"> <div class="m-cmmtipt f-cb f-pr">
<div class="u-txtwrap holder-parent f-pr">
<textarea class="u-txt area j-flag" placeholder="\${placeholder}"><&#47;textarea>
</div>
<div class="btns f-cb f-pr">
<i class="icn u-icn u-icn-36 j-flag"></i><i class="icn u-icn u-icn-41 j-flag"></i>
<a class="btn u-btn u-btn-1 j-flag" href="javascript:void(0)">评论</a>
<span class="zs s-fc4 j-flag">110/120</span>
</div>
</div>
</textarea>
<textarea name="jst" id="m-wgt-input-6" style="display:none;"> <div class="m-cmmtipt f-cb f-pr">
<div class="u-txtwrap holder-parent f-pr">
<textarea class="u-txt area j-flag" placeholder="\${placeholder}"><&#47;textarea>
</div>
<div class="btns f-cb f-pr">
<i class="icn u-icn u-icn-36 j-flag"></i><i class="icn u-icn u-icn-41 j-flag"></i>
<a class="btn u-btn u-btn-1 j-flag" href="javascript:void(0)">发送</a>
<span class="zs s-fc4 j-flag">110/120</span>
</div>
</div>
</textarea>
<textarea name="ntp" id="m-wgt-subscribe" style="display:none;"><div class="lyct lyct-1 m-favgd f-cb">
<div class="tit j-flag"><i class="u-icn u-icn-33"></i>新歌单</div>
<div class="j-flag">
<div class="u-load s-fc4"><i class="icn"></i> 加载中...</div>
</div>
</div>
</textarea>
<textarea name="jst" id="m-wgt-subscribe-item" style="display:none;"><ul>
{list beg..end as y}
{var x=xlist[y]}
<li data-id="\${x.id}" class="xtag {if x.trackCount+size>10000}dis{/if}">
<div class="item f-cb">
<div class="left">
<a href="javascript:void(0)" class="avatar" target="_blank">
<img alt="" src="\${x.coverImgUrl}?param=40y40">
{if x.highQuality}<i class="u-jp u-icn2 u-icn2-jp5"></i>{/if}
</a>
</div>
<p class="name f-thide"><a class="s-fc0" href="javascript:void(0)" target="_blank">\${escape(cutStr(x.name,40))}</a></p>
<p class="s-fc3">\${x.trackCount}首</p>
{if x.trackCount+size>10000}<p class="limit">歌单已满</p>{/if}
</div>
</li>
{/list}
</ul>
</textarea>
<textarea name="ntp" id="m-wgt-forward" style="display:none;"><div class="lyct lyct-1 f-cb">
<div class="m-lyshare">
<div class="u-txtwrap f-pr">
<label style="display: block;" class="j-flag">说点什么</label>
<textarea class="u-txt area j-flag" text = ><&#47;textarea>
</div>
<div class="oper f-cb j-flag">
<div class="face f-fl f-pr">
<i class="u-icn u-icn-36 f-fl j-flag"></i>
<i class="u-icn u-icn-41 j-flag"></i>
</div>
<span class="zs f-fr s-fc3 j-flag">140</span>
</div>
<div class="btnwrap">
<a class="u-btn2 u-btn2-2 u-btn2-w2 j-flag" hidefocus="true" href="#"><i>转发</i></a>
<a class="u-btn2 u-btn2-1 u-btn2-w2 j-flag" hidefocus="true" href="#"><i>取消</i></a>
</div>
<div class="j-flag u-err"><i class="u-icn u-icn-25"></i><span></span></div>
</div>
</div>
</textarea>
<textarea name="ntp" id="m-import-ok" style="display:none;"><div class="lyct f-cb f-tc">
<p class="f-fs3 f-ff2"><i class="u-icn u-icn-76"></i>&nbsp;&nbsp;歌曲同步完成</p>
<div class="lybtn">
<a href="javascript:;" class="u-btn2 u-btn2-2 j-flag" hidefocus="true"><i>查看我的音乐</i></a>
</div>
</div>
</textarea>
<textarea name="jst" id="m-wgt-atlist" style="display:none;"> <div class="u-atlist">
{if suggests.length == 0}
<p>轻敲空格完成输入</p>
{else}
<p>选择最近@的人或直接输入</p>
{/if}
<div class="lst">
{list suggests as suggest}
<a href="javascript:;" data-index=\${suggest_index} class="f-thide j-sgt">\${suggest.nickname}</a>
{/list}
</div>
</div>
</textarea>
<textarea name="jst" id="m-wgt-receiverInput" style="display:none;"> <div class="ct f-pr">
<div class="u-txtwrap f-pr">
<div class="u-txt txtwrap j-flag">
{if receiver}
<div class="blk s-fc3 j-receiver">\${receiver.nickname}<a href="#" class="cls" title="删除">&times;</a></div>
{/if}
<span class="holder-parent j-flag" style="float:left">
<input type="text" class="txt j-flag" />
<label class="holder j-flag">选择或输入好友昵称</label>
</span>
</div>
</div>
<ul class="full j-flag" style="_height:182px;display:none">
{list users as user}
<li class="j-item" data-userId=\${user.userId} data-username=\${user.nickname} data-index=\${user_index}><a href="#"><img src=\${user.avatarUrl}>\${user.nickname}</a></li>
{/list}
</ul>
<div class="j-flag" style="position:absolute;left: -1000px;width:auto;"></div>
</div>
</textarea>
<textarea name="jst" id="m-wgt-receiverList" style="display:none;"> {list users as user}
<li class="j-item" data-userId=\${user.userId} data-username=\${user.nickname} data-index=\${user_index}><a href="#"><img src=\${user.avatarUrl}>\${user.nickname}</a></li>
{/list}
</textarea>
<textarea name="ntp" id="m-wgt-sharewin" style="display:none;"><div class="lyct lyct-1 f-cb">
<div class="m-lyshare">
<ul class="m-tabs1 j-flag">
<li><a href="#"><em>分享给大家</em></a></li>
<li><a href="#"><em>私信分享</em></a></li>
</ul>
<div class="u-err j-flag" style="display:none">最多选择10位好友</div>
<div class="j-flag"></div>
<div class="j-slogan"></div>
<div class="u-txtwrap f-pr">
<textarea class="u-txt area j-flag" placeholder="说点什么吧" data-action="txt"><&#47;textarea>
<div class="info f-pr j-flag" data-action="search"></div>
</div>
<div class="oper f-cb">
<div class="face f-fl f-pr">
<i class="u-icn u-icn-36 f-fl j-flag" data-action="emot"></i>
<i class="u-icn u-icn-41 f-fl j-flag" data-action="at"></i>
<i class="u-icn u-icn-97 j-flag f-pr" data-action="upload" data-default></i>
</div>
<span class="f-fr s-fc4 j-flag">140/140</span>
</div>
<div class="f-cb j-flag"></div>
<div class="f-cb">
<div class="btnwrap f-fl">
<a class="u-btn2 u-btn2-2 u-btn2-w2 j-flag" hidefocus="true" href="javascript:;" data-action="share"><i>分享</i></a>
<a class="u-btn2 u-btn2-1 u-btn2-w2 j-flag" hidefocus="true" href="javascript:;" data-action="close"><i>取消</i></a>
</div>
<div class="f-cb j-flag f-fr">
<div class="share f-fr">
<span class="f-fl s-fc3">同时分享到：</span>
<ul class="u-logo u-logo-s f-cb">
<li><a class="u-slg u-slg-sn j-t" data-action="sns" data-type="2" hidefocus="true" href="//music.163.com/api/sns/authorize?snsType=2&clientType=web2&callbackType=Binding&forcelogin=true" title="新浪微博"></a></li>
<li><a class="u-slg u-slg-db j-t" data-action="sns" data-type="3" hidefocus="true" href="//music.163.com/api/sns/authorize?snsType=3&clientType=web2&callbackType=Binding&forcelogin=true" title="豆瓣网"></a></li>
</ul>
</div>
</div>
</div>
<div class="u-err j-flag"><i class="u-icn u-icn-25"></i><span></span></div>
</div>
</div>
</textarea>
<textarea name="jst" id="m-search-suggest" style="display:none;">{macro listArtists(artists)}
{list artists as art}
\${art.name|mark}&nbsp;
{/list}
{/macro}
<div class="m-schlist">
<p class="note s-fc3"><a class="s-fc3 xtag" href="/search/#/?s=\${keyword}&type=1002">搜“\${keyword|cutStr}” 相关用户</a> &gt;</p>
<div class="rap">
{list result.order as index}
{var lst=result[index]}
{if !!lst&&!!lst.length}
<div class="itm f-cb">
{if index=="songs"}
<h3 class="hd"><i class="icn u-icn u-icn-26"></i><em class="f-fl">单曲</em></h3>
<ul class="{if index_index%2!=0}odd{/if} f-cb">
{list lst as song}
<li><a class="s-fc0 f-thide xtag" href="/song?id=\${song.id}">\${song.name|mark}-\${listArtists(song.artists)}</a></li>
{/list}
</ul>
{elseif index=="artists"}
<h3 class="hd"><i class="icn u-icn u-icn-27"></i><em class="f-fl">歌手</em></h3>
<ul class="{if index_index%2!=0}odd{/if} f-cb">
{list lst as artist}
<li><a class="s-fc0 f-thide xtag" href="/artist?id=\${artist.id}">\${artist.name|mark}</a></li>
{/list}
</ul>
{elseif index=="albums"}
<h3 class="hd"><i class="icn u-icn u-icn-28"></i><em class="f-fl">专辑</em></h3>
<ul class="{if index_index%2!=0}odd{/if} f-cb">
{list lst as album}
<li><a class="s-fc0 f-thide xtag" href="/album?id=\${album.id}">\${album.name|mark}{if album.artist}-\${album.artist.name|mark}{/if}</a></li>
{/list}
</ul>
{elseif index=="playlists"}
<h3 class="hd"><i class="icn u-icn u-icn-29"></i><em class="f-fl">歌单</em></h3>
<ul class="{if index_index%2!=0}odd{/if} f-cb">
{list lst as playlist}
<li><a class="s-fc0 f-thide xtag" href="/playlist?id=\${playlist.id}">\${playlist.name|mark}</a></li>
{/list}
</ul>
{elseif index=="mvs"}
<h3 class="hd"><i class="icn u-icn u-icn-96"></i><em class="f-fl">视频</em></h3>
<ul class="{if index_index%2!=0}odd{/if} f-cb">
{list lst as mv}
<li><a class="s-fc0 f-thide xtag" href="/mv?id=\${mv.id}">MV:\${mv.name|mark}{if mv.artistName}-\${mv.artistName|mark}{/if}</a></li>
{/list}
</ul>
{/if}
</div>
{/if}
{/list}
</div>
</div>
</textarea>
<textarea name="jst" id="m-xwgt-share-infobar" style="display:none;"><i class="highlight"></i><div class="text f-fl f-fs1"><p class="f-thide">\${info|escape}</p></div>
{if canChange}<i class="f-fr icn u-icn2 u-icn2-arr"></i>{/if}
</textarea>
<textarea name="jst" id="m-xwgt-share-videobar" style="display:none;"><div class="text">
<div class="cvr f-fl f-pr" style="background-image:url(\${picUrl}?imageView&thumbnail=107x60),url(\${picUrl}?imageView&thumbnail=107y60&blur=30x15)">
</div>
<h3 class="f-thide f-fs1">\${title}</h3>
<i class="f-fr icn u-icn2 u-icn2-arr"></i>
</div>
</textarea>
<textarea name="ntp" id="m-xwgt-share-upload" style="display:none;"> <div class="f-pr choose f-cb">
<ul class="pics f-pr f-cb j-flag"><li class="f-pr add j-flag u-icn2 u-icn2-addimg" title="添加新图片"></li></ul>
<div class="f-pa tip s-fc6 j-flag"></div>
</div>
</textarea>
<textarea name="jst" id="m-xwgt-share-upload-preview" style="display:none;"> <li class="pic f-pr{if fail} z-fail{/if}">
{if !fail}
<i class="f-img icn"></i>
{else}
<div class="mask f-blk f-pa"></div><div class="f-blk f-pa error">\${fail}</div>
{/if}
<span class="del f-pa u-icn2 u-icn2-delimg" title="删除"></span>
</li>
</textarea>
<textarea name="jst" id="m-xwgt-share-upload-preview-img" style="display:none;">{if !fail}
<img class="f-img" src="\${url}?imageView&thumbnail=80y80" draggable=false>
{else}
<div class="mask f-blk f-pa"></div><div class="f-blk f-pa error">\${fail}</div>
{/if}
</textarea>
<textarea name="ntp" id="ntp-alert" style="display:none;"><div class="lyct f-cb f-tc">
<p class="f-fs1">
<i class="u-icn u-icn-89 j-flag"></i>
<span class="f-fw1">&nbsp;&nbsp;&nbsp;<span class="j-flag"></span></span>
</p>
<p class="mesg j-flag">&nbsp;</p>
<div class="lybtn">
<a href="javascript:;" class="u-btn2 u-btn2-2 u-btn2-w2 j-flag" hidefocus="true"><i>知道了</i></a>
</div>
</div>
</textarea>
<textarea name="ntp" id="m-layer-commwin" style="display:none;"><div class="lyct f-tc">
<p class="j-t"><i class="u-icn u-icn-90"></i></p>
<p class="j-t msg1"></p>
</div>
<div class="j-t lsbtn f-tc">
<a href="javascript:;" class="u-btn2 u-btn2-2 u-btn2-w2" hidefocus="true"><i>上传节目</i></a>
</div>
</textarea>
<textarea name="ntp" id="m-layer-delwin" style="display:none;"><div class="lyct lyct-1 f-cb">
<div class="n-log2 n-log2-4">
<p class="js-tip u-tip-2"></p>
<div class="lybtn f-tc">
<a href="javascript:;" class="u-btn2 u-btn2-2" hidefocus="true" data-action="ok"><i>删除</i></a>
<a href="javascript:;" class="u-btn2 u-btn2-1" hidefocus="true" data-action="cancel"><i>取消</i></a>
</div>
</div>
</div>
</textarea>
<textarea name="jst" id="m-layer-commwin-btn" style="display:none;">{list buttons as item}
<a hidefocus="true" class="u-btn2 \${item.klass} {if item.style}\${item.style}{else}u-btn2-w2{/if}" href="#" {if !!item.action}data-action="\${item.action}"{/if}><i>\${item.text}</i></a>
{/list}
</textarea>
<textarea name="ntp" id="m-layer-outershare" style="display:none;"><div class="lyct lyct-1">
<ul class="n-outshr f-cb">
<li>
<a href="#" data-action="wxfrd" class="logo wxfrd"></a>
<a href="#" data-action="wxfrd" class="wd">微信</a>
</li>
<!--
<li>
<a href="#" data-action="wxevt" class="logo wxevt"></a>
<a href="#" data-action="wxevt" class="wd">微信朋友圈</a>
</li>
-->
<li>
<a href="#" data-action="yxfrd" class="logo yxfrd"></a>
<a href="#" data-action="yxfrd" class="wd">易信</a>
</li>
<!--
<li>
<a href="#" data-action="yxevt" class="logo yxevt"></a>
<a href="#" data-action="yxevt" class="wd">易信朋友圈</a>
</li>
-->
<li>
<a href="#" data-action="qzone" class="logo qzone"></a>
<a href="#" data-action="qzone" class="wd">QQ空间</a>
</li>
<li>
<a href="#" data-action="lofte" class="logo lofte"></a>
<a href="#" data-action="lofte" class="wd">LOFTER</a>
</li>
</ul>
</div>
</textarea>
<textarea name="ntp" id="m-layer-tip" style="display:none;"><div class="lyct f-cb f-tc">
<div class="f-fs1 j-flag">message</div>
<div class="lybtn">
<a hidefocus="true" class="u-btn2 u-btn2-2 u-btn2-w2 j-flag" href="javascript:;"><i>知道了</i></a>
</div>
</div>
</textarea>
<textarea name="ntp" id="m-outshare-layer" style="display:none;"><div class="lyct lyct-1 f-cb">
<ul class="m-shareto f-cb j-flag">
<li class="fst" data-action="sn" data-type="2">
<a href="#" class="logo logo-sn"></a>
<a href="#" class="wd s-fc3">新浪微博</a>
</li>
<li data-action="tx" data-type="6" style="display:none;">
<a href="#" class="logo logo-tc"></a>
<a href="#" class="wd s-fc3">腾讯微博</a>
</li>
<li data-action="db" data-type="3">
<a href="#" class="logo logo-db"></a>
<a href="#" class="wd s-fc3">豆瓣</a>
</li>
</ul>
</div>
</div>
</textarea>
<textarea name="ntp" id="m-sharesingle-layer" style="display:none;"><div class="lyct lyct-1 f-cb">
<div class="m-lyshare">
<div class="u-txtwrap f-pr">
<textarea data-action="txt" class="u-txt area j-flag"><&#47;textarea>
</div>
<div class="oper f-cb">
<div class="face f-fl f-pr j-flag">
<i data-action="emt" class="u-icn u-icn-36 f-fl"></i>
</div>
<span class="zs f-fr s-fc3 j-flag">140</span>
</div>
<div class="btnwrap">
<a data-action="ok" class="u-btn2 u-btn2-2 u-btn2-w2 j-flag" hidefocus="true" href="#"><i>分享</i></a>
<a data-action="cc" class="u-btn2 u-btn2-1 u-btn2-w2" hidefocus="true" href="#"><i>取消</i></a>
</div>
<div class="u-err f-hide j-flag"><i class="u-icn u-icn-25"></i></div>
</div>
</div>
</textarea>
<textarea name="jst" id="m-popup-info" style="display:none;"><div class="lyct f-tc">
<div class="f-cb m-tipinfo">
<i class="u-icn2 u-icn2-11 f-fl"></i>
<div class="f-fr f-pr f-fs1 tip">\${tip}</div>
</div>
</div>
<div class="lsbtn f-tc">
<a data-action="ok" href="javascript:void(0)" class="u-btn2 u-btn2-2 u-btn2-2-h {if oktext.length<=2}u-btn2-w2{/if}" hidefocus="true"><i>\${oktext}</i></a>
<a data-action="cc" href="javascript:void(0)" hidefocus="true" class="u-btn2 u-btn2-1 u-btn2-1-h {if cctext.length<=2}u-btn2-w2{/if}"><i>\${cctext}</i></a>
</div>
</textarea>
<textarea name="jst" id="m-popup-song-buy" style="display:none;"><div class="lyct m-songpay f-tc">
<div class="f-cb m-tipinfo">
<i class="u-icn2 u-icn2-11 f-fl"></i>
<div class="f-fr f-pr f-fs1 tip">\${tip}</div>
</div>
<div class="f-pr f-tc">
<a data-action="ok" href="javascript:void(0)" class="u-btn2 u-btn2-2 {if oktext.length<=2}u-btn2-w2{/if}" hidefocus="true"><i>\${oktext}</i></a>
{if showSongText}<a data-action="song" class="song s-fc4" href="javascript:void(0)">\${songTxt}</a>{/if}
</div>
</div>
</textarea>
<textarea name="jst" id="m-popup-alert" style="display:none;"><div class="lyct f-tc">
<p><i class="\${icon}"></i></p>
<p class="msg1"><span class="f-fs1 s-fc1">\${tip}</span></p>
</div>
<div class="lsbtn f-tc">
{if typeof(oktext) != 'undefined'}<a data-action="ok" href="javascript:void(0)" class="u-btn2 u-btn2-2 u-btn2-2-h {if oktext.length<=2}u-btn2-w2{/if}" hidefocus="true"><i>\${oktext}</i></a>{/if}
{if typeof(cctext) != 'undefined'}<a data-action="cc" href="javascript:void(0)" class="u-btn2 u-btn2-1 u-btn2-1-h {if cctext.length<=2}u-btn2-w2{/if}" hidefocus="true"><i>\${cctext}</i></a>{/if}
</div>
</textarea>
<textarea name="txt" id="m-donate-tip" style="display:none;"><p>该资源为公益歌曲<p>
<p>捐赠任意金额（2~4999元）即可无限畅听下载</p>
</textarea>
<textarea name="ntp" id="m-simple-share-layer" style="display:none;"> <div class="lyct lyct-1">
<ul class="n-outshr f-cb">
<li data-type="xlwb">
<a href="javascript:;" class="logo xlwb"></a>
<a href="javascript:;" class="wd">新浪微博</a>
</li>
<li data-type="wx">
<a href="javascript:;" class="logo wxfrd"></a>
<a href="javascript:;" class="wd">微信</a>
</li>
<li data-type="yx">
<a href="javascript:;" class="logo yxfrd"></a>
<a href="javascript:;" class="wd">易信好友</a>
</li>
<li data-type="qzone">
<a href="javascript:;" class="logo qzone"></a>
<a href="javascript:;" class="wd">QQ空间</a>
</li>
<li data-type="lofter" style="display:none;">
<a href="javascript:;" class="logo lofte"></a>
<a href="javascript:;" class="wd">LOFTER</a>
</li>
<li data-type="db" style="display:none;">
<a href="javascript:;" class="logo db"></a>
<a href="javascript:;" class="wd">豆瓣</a>
</li>
</ul>
</div>
</textarea>
<textarea name="txt" id="m-report-point" style="display:none;"><div class="zcnt">
<div class="lyct f-cb f-tc">
<p class="f-fs2">悬赏1积分让大家来帮你补歌词，是否继续？</p>
<p style="padding-top: 10px;">若30天内歌词未补充，积分将退还给您</p>
<div class="lybtn">
<a href="javascript:;" data-action="ok" class="u-btn2 u-btn2-2 u-btn2-w2" hidefocus="true"><i>继续求</i></a>
<a href="javascript:;" data-action="cc" class="u-btn2 u-btn2-1 u-btn2-w2" hidefocus="true"><i>取消</i></a>
</div>
</div>
</div>
</textarea>
<textarea name="txt" id="txt-mobilestatus" style="display:none;"><div class="box f-cb">
<div data-action="invalid" class="item z-first f-fl">
<div class="icon"></div>
<p>原手机号已停用</p>
<p class="s-fc3">(使用其他方式验证)</p>
</div>
<div data-action="valid" class="item f-fr">
<div class="icon"></div>
<p>原手机号仍能使用</p>
<p class="s-fc3">(使用手机验证码验证)</p>
</div>
</div>
</textarea>
<textarea name="ntp" id="m-question" style="display:none;"><div class="m-question">
<div>请填写以下安全问题的答案</div>
<div class="qa j-flag f-cb">
<label class="f-fl">问题：</label>
</div>
<div class="qa f-cb">
<label class="f-fl">回答：</label>
<input type="text" class="u-txt txt f-fl j-flag">
</div>
<div class="u-err f-hide j-flag"><i class="u-icn u-icn-25"></i>帐号或密码错误</div>
<div class="btnwrap">
<a data-action="back" class="u-btn2 u-btn2-1 u-btn2-w2" hidefocus="true" href="javascript:void(0)"><i>上一步</i></a>
<a data-action="next" class="u-btn2 u-btn2-2 u-btn2-w2" hidefocus="true" href="javascript:void(0)"><i>下一步</i></a>
</div>
</div>
</textarea>
<textarea name="ntp" id="g-select" style="display:none;"><div class="u-slt f-ib">
<span class="curr f-thide">－请选择－</span>
<i class="btn"></i>
<ul class="f-hide">
</ul>
</div>
</textarea>
<textarea name="ntp" id="ntp-linuxlinks" style="display:none;"><div class="lyct lyct-1">
<div class="dc f-cb">
<ul class="links">
<li class="link f-cb">
<a href="" class="right" target="_blank" hidefocus="true" title="Linux版下载">deepin15（64位）</a>
<a href="" class="right" target="_blank" hidefocus="true" title="Linux版下载">ubuntu16.04（64位）</a>
</li>
</ul>
</div>
</div>
</textarea>
<textarea name="ntp" id="ntp-pcRedirect" style="display:none;"><div class="lyct lyct-1">
<div class="pcdld f-cb">
<img src="../../../style/web2/img/down/uwpWindown.png" alt="网易云音乐-UWP版">
<p class="txt">您的系统为Windows 10，推荐下载UWP版</p>
<div class="choose">
<a class="u-btn2 u-btn2-2" data-res-action="bilog" data-log-action="downloadapp" data-log-json='{"type":"pc","source":"downloadapp"}' href="https://www.microsoft.com/store/apps/9nblggh6g0jf" onclick="g_stat('uwp',true,event);_gaq.push(['_trackEvent','download','uwp','download']);" hidefocus="true" title="UWP版下载" target="_blank"><i>下载UWP版本</i></a>
<a class="link" data-res-action="bilog" data-log-action="downloadapp" data-log-json='{"type":"pc","source":"downloadapp"}' href="https://music.163.com/api/pc/download/latest" onclick="g_stat('pc',true,event);_gaq.push(['_trackEvent','download','pc','download']);" hidefocus="true" title="PC版下载" target="_blank"><i>继续下载PC版本</i></a>
</div>
</div>
</div>
</textarea>
<textarea name="jst" id="g-select-item" style="display:none;">{list options as o}
<li class="f-thide" data-index="\${o_index}"><a href="javascript:;">\${o|filter}</a></li>
{/list}
</textarea>
<textarea name="ntp" id="m-download-layer" style="display:none;"><h3 class="f-tc">使用云音乐客户端</h3>
<h4 class="f-tc s-fc3">即可无限下载高品质音乐</h4>
<div class="f-cb wrap">
<div class="left">
<div data-action="download" data-src="https://music.163.com/api/osx/download/latest" class="btn btn-mac"><i></i>Mac版<span class="ver j-flag">V1.9.1</span></div>
<div data-action="download" data-src="https://music.163.com/api/pc/download/latest" class="btn f-hide"><i></i>PC版<span class="ver j-flag">V1.9.1</span></div>
<div data-action="orpheus" class="btn btn-installed j-flag">已安装PC版</div>
</div>
<div class="right">
<div class="qtcode"></div>
<div class="s-fc3 f-tc">扫描下载手机版</div>
</div>
</div>
</textarea>
<textarea name="ntp" id="m-programtips-layer" style="display:none;"><div class="f-tc wrap ">
<p class="f-fs1 s-fc1 wrap-p">该节目为付费内容，扫描下方二维码，使用最新的安卓或iPhone版本购买后即可畅享</p>
<div class="f-tc wrap-d">
<span class="qtcode j-flag"></span>
</div>
</div>
</textarea>
<textarea name="jst" id="com-artists-title" style="display:none;">{var title=""}
{if artists && artists.length}
{list artists as x}
{if x}
{var title = title + x.name}
{if x_index < x_length - 1}
{var title = title + " / "}
{/if}
{/if}
{/list}
{/if}
\${escape(title)}
</textarea>
<textarea name="jst" id="com-mv-artists" style="display:none;">{if artists && artists.length}
<span class="\${boxClazz}" title="\${comJST('com-artists-title', artists)}">
{list artists as x}
{if !!x}
{if !!x.id}
<a href="/artist?id=\${x.id}" class="\${clazz}">\${mark(escape(x.name))}</a>
{else}
<span class="\${clazz}">\${mark(escape(x.name))}</span>
{/if}
{if x_index < x_length - 1}&nbsp;/&nbsp;{/if}
{/if}
{/list}
</span>
{/if}
</textarea>
<textarea name="jst" id="com-album-artists" style="display:none;">\${comJST('com-mv-artists', artists, clazz, mark, boxClazz)}
</textarea>
<textarea name="jst" id="com-user-type" style="display:none;">{if x.userType==4}\${before}<sup class="\${clazz2} u-icn2 u-icn2-music2 \${clazz}"></sup>\${after}{elseif x.authStatus==1}\${before}<sup class="u-icn u-icn-1 \${clazz}"></sup>\${after}{elseif (x.expertTags && x.expertTags.length>0) || !isEmptyObject(x.experts)}\${before}<sup class="u-icn u-icn-84 \${clazz}"></sup>\${after}{/if}
</textarea>
<textarea name="ntp" id="ntp-portrait" style="display:none;"><div class="m-emts z-show">
<div class="j-flag emtwrap f-cb"></div>
<div class="page">
<a href="#" hidefocus="true" class="j-flag u-btn u-btn-prv"></a><em class="j-flag s-fc3">1/2</em><a href="#" hidefocus="true" class="j-flag u-btn u-btn-nxt"></a>
</div>
</div>
</textarea>
<textarea name="jst" id="jst-portrait" style="display:none;">{list plist as item}
<span title="\${item.key}" class="emtitm"><img data-text="\${item.key}" data-url="\${item.key|purl}" class="f-alpha" src="\${item.key|purl}"></span>
{/list}
</textarea>
<textarea name="ntp" id="m-wgt-song-box" style="display:none;"><div class="j-flag"></div>
<div class="j-flag"></div>
</textarea>
<textarea name="jst" id="m-wgt-song-list" style="display:none;"><table class="m-table {if type=='rank'}m-table-rank{/if}">
<thead>
<tr>
<th class="first {if type=='rank'}wrk{else}w1{/if}"><div class="wp">&nbsp;</div></th>
<th><div class="wp af0"></div></th>
<th class="w2"><div class="wp af1"></div></th>
<th class="w3"><div class="wp af2"></div></th>
<th class="w4"><div class="wp af3"></div></th>
</tr>
</thead>
<tbody>
{list beg..end as y}
{var x=xlist[y]}
<tr id="\${x.id|seed}" class="{if y%2==0}even{/if} {if disable(x)}js-dis{/if}">
<td class="left">
<div class="hd {if type=='rank'}rank{/if}">
<span data-res-id="\${x.id}" data-res-type="18" data-res-action="play" {if from}data-res-from="\${from.fid}" data-res-data="\${from.fdata}"{/if} class="ply {if isPlaying(x)}ply-z-slt{/if}">&nbsp;</span>
<span class="num">\${y+1}</span>
{if type=='rank'}
<div class="rk rk-1">
{if x.lastRank>=0}
{if y-x.lastRank>0}
<span class="ico u-icn u-icn-74 s-fc10">\${y-x.lastRank}</span>
{elseif y-x.lastRank==0}
<span class="ico u-icn u-icn-72 s-fc4">0</span>
{else}
<span class="ico u-icn u-icn-73 s-fc9">\${x.lastRank-y}</span>
{/if}
{else}
<span class="u-icn u-icn-75"></span>
{/if}
</div>
{/if}
</div>
</td>
<td class="">
<div class="f-cb">
<div class="tt">
<div class="ttc">
<span class="txt">
{var alia=songAlia(x)}
<a href="/song?id=\${x.id}"><b title="\${x.name|escape}{if alia} - (\${alia|escape}){/if}">\${soil(x.name)}</b></a>{if alia}<span title="\${alia|escape}" class="s-fc8"> - (\${soil(alia)})</span>{/if}
{if x.mvid>0}
<span data-res-id="\${x.id}" data-res-action="mv" title="播放mv" class="mv">MV</span>
{/if}
</span>
</div>
</div>
</div>
</td>
<td class=" s-fc3">
<span class="u-dur {if canDel}candel{/if}">\${dur2time(x.duration/1000)}{if x.ftype==2}<i title="歌曲来自第三方网站" class="migu u-icn2 u-icn2-14"></i>{/if}</span>
<div class="opt hshow">
<a class="u-icn u-icn-81 icn-add" href="javascript:;" title="添加到播放列表" hidefocus="true"
data-res-type="18"
data-res-id="\${x.id}"
data-res-action="addto"
{if from}data-res-from="\${from.fid}" data-res-data="\${from.fdata}"{/if}></a>
<span data-res-id="\${x.id}" data-res-type="18" data-res-action="fav" class="icn icn-fav" title="收藏"></span>
<span data-res-id="\${x.id}" data-res-type="18" data-res-action="share" data-res-name="\${x.name}" data-res-author="{list x.artists as art}\${art.name}{if art_index<x.artists.length-1}/{/if}{/list}" {if x.album}data-res-pic="\${x.album.picUrl}"{/if} class="icn icn-share" title="分享">分享</span>
<span data-res-id="\${x.id}" data-res-type="18" data-res-action="download" class="icn icn-dl" title="下载"></span>
{if canDel}
<span data-res-id="\${x.id}" data-res-type="18" data-res-action="delete" class="icn icn-del" title="删除">删除</span>
{/if}
</div>
</td>
<td class="">
<div class="text" title="{list x.artists as art}\${art.name}{if art_index<x.artists.length-1}/{/if}{/list}">
\${getArtistName(x.artists, '', '', false, false, true)}
</div>
</td>
{if type=='dayRcmd'}
<td class="hascls">
<div class="f-pr">
<div class="text">{if x.album}<a href="/album?id=\${x.album.id}" title="\${x.album.name}">\${x.album.name}</a>{/if}</div>
<a href="javascript:;" data-res-action="dislike" data-res-id="\${x.id}" data-res-alg="\${x.alg}" class="cls u-icn u-icn-80 f-tid icn-dislike" title="不感兴趣">不感兴趣</a>
</div>
</td>
{else}
<td class="">
<div class="text">
{if x.album}
<a href="/album?id=\${x.album.id}" title="\${x.album.name|escape}">\${soil(x.album.name)}</a>
{/if}
</div>
</td>
{/if}
</tr>
{/list}
</tbody>
</table>
</textarea>
<textarea name="jst" id="m-wgt-album-list" style="display:none;"><table class="m-table {if type=='rank'}m-table-rank{/if}">
<thead>
<tr>
<th class="first {if type=='rank'}wrk{else}w1{/if}"><div class="wp">&nbsp;</div></th>
<th><div class="wp">歌曲标题</div></th>
<th class="w2-1"><div class="wp">时长</div></th>
<th class="w4"><div class="wp">歌手</div></th>
</tr>
</thead>
<tbody>
{list beg..end as y}
{var x=xlist[y]}
<tr id="\${x.id|seed}" class="{if y%2==0}even{/if} {if disable(x)}js-dis{/if}">
<td class="left">
<div class="hd {if type=='rank'}rank{/if}">
<span data-res-id="\${x.id}" data-res-type="18" data-res-action="play" {if from}data-res-from="\${from.fid}" data-res-data="\${from.fdata}"{/if} class="ply {if isPlaying(x)}ply-z-slt{/if}">&nbsp;</span>
<span class="num">\${y+1}</span>
{if type=='rank'}
<div class="rk rk-1">
{if x.lastRank>=0}
{if y-x.lastRank>0}
<span class="ico u-icn u-icn-74 s-fc10">\${y-x.lastRank}</span>
{elseif y-x.lastRank==0}
<span class="ico u-icn u-icn-72 s-fc4">0</span>
{else}
<span class="ico u-icn u-icn-73 s-fc9">\${x.lastRank-y}</span>
{/if}
{else}
<span class="u-icn u-icn-75"></span>
{/if}
</div>
{/if}
</div>
</td>
<td class="">
<div class="f-cb">
<div class="tt">
<div class="ttc">
<span class="txt">
{var alia=songAlia(x)}
<a href="/song?id=\${x.id}"><b title="\${x.name|escape}{if alia} - (\${alia|escape}){/if}">\${soil(x.name)}</b></a>{if alia}<span title="\${alia|escape}" class="s-fc8"> - (\${soil(alia)})</span>{/if}
{if x.mvid>0}
<span data-res-id="\${x.id}" data-res-action="mv" title="播放mv" class="mv">MV</span>
{/if}
</span>
</div>
</div>
</div>
</td>
<td class=" s-fc3">
<span class="u-dur {if canDel}candel{/if}">\${dur2time(x.duration/1000)}{if x.ftype==2}<i title="歌曲来自第三方网站" class="migu u-icn2 u-icn2-14"></i>{/if}</span>
<div class="opt hshow">
<a class="u-icn u-icn-81 icn-add" href="javascript:;" title="添加到播放列表" hidefocus="true"
data-res-type="18"
data-res-id="\${x.id}"
data-res-action="addto"
{if from}data-res-from="\${from.fid}" data-res-data="\${from.fdata}"{/if}></a>
<span data-res-id="\${x.id}" data-res-type="18" data-res-action="fav" class="icn icn-fav" title="收藏"></span>
<span data-res-id="\${x.id}" data-res-type="18" data-res-action="share" data-res-name="\${x.name}" data-res-author="{list x.artists as art}\${art.name}{if art_index<x.artists.length-1}/{/if}{/list}" {if x.album}data-res-pic="\${x.album.picUrl}"{/if} class="icn icn-share" title="分享">分享</span>
<span data-res-id="\${x.id}" data-res-type="18" data-res-action="download" class="icn icn-dl" title="下载"></span>
{if canDel}
<span data-res-id="\${x.id}" data-res-type="18" data-res-action="delete" class="icn icn-del" title="删除">删除</span>
{/if}
</div>
</td>
<td class="">
<div class="text" title="{list x.artists as art}\${art.name}{if art_index<x.artists.length-1}/{/if}{/list}">
\${getArtistName(x.artists, '', '/', false, true, true)}
</div>
</td>
</tr>
{/list}
</tbody>
</table>
</textarea>
<textarea name="jst" id="m-wgt-song-top50-list" style="display:none;"><table class="m-table m-table-1 m-table-4">
<tbody>
{list beg..end as y}
{var x=xlist[y]}
<tr id="\${x.id|seed}" class="{if y%2==0}even{/if} {if disable(x)}js-dis{/if}">
<td class="w1">
<div class="hd">
<span data-res-id="\${x.id}" data-res-type="18" data-res-action="play" {if from}data-res-from="\${from.fid}" data-res-data="\${from.fdata}"{/if} class="ply {if isPlaying(x)}ply-z-slt{/if}">&nbsp;</span>
<span class="num">\${y+1}</span>
</div>
</td>
<td class="">
<div class="f-cb">
<div class="tt">
<div class="ttc">
<span class="txt">
{var alia=songAlia(x)}
<a href="/song?id=\${x.id}"><b title="\${x.name|escape}{if alia} - (\${alia|escape}){/if}">\${soil(x.name)}</b></a>{if alia}<span title="\${alia|escape}" class="s-fc8"> - (\${soil(alia)})</span>{/if}
{if x.mvid>0}
<span data-res-id="\${x.id}" data-res-action="mv" title="播放mv" class="mv">MV</span>
{/if}
</span>
</div>
</div>
</div>
</td>
<td class="w2-1 s-fc3">
<span class="u-dur {if canDel}candel{/if}">\${dur2time(x.duration/1000)}{if x.ftype==2}<i title="歌曲来自第三方网站" class="migu u-icn2 u-icn2-14"></i>{/if}</span>
<div class="opt hshow">
<a class="u-icn u-icn-81 icn-add" href="javascript:;" title="添加到播放列表" hidefocus="true"
data-res-type="18"
data-res-id="\${x.id}"
data-res-action="addto"
{if from}data-res-from="\${from.fid}" data-res-data="\${from.fdata}"{/if}></a>
<span data-res-id="\${x.id}" data-res-type="18" data-res-action="fav" class="icn icn-fav" title="收藏"></span>
<span data-res-id="\${x.id}" data-res-type="18" data-res-action="share" data-res-name="\${x.name}" data-res-author="{list x.artists as art}\${art.name}{if art_index<x.artists.length-1}/{/if}{/list}" {if x.album}data-res-pic="\${x.album.picUrl}"{/if} class="icn icn-share" title="分享">分享</span>
<span data-res-id="\${x.id}" data-res-type="18" data-res-action="download" class="icn icn-dl" title="下载"></span>
{if canDel}
<span data-res-id="\${x.id}" data-res-type="18" data-res-action="delete" class="icn icn-del" title="删除">删除</span>
{/if}
</div>
</td>
<td class="w4">
<div class="text">
{if x.album}
{var transName = x.album.tns && x.album.tns.length > 0 ? x.album.tns[0] : ''}
<a href="/album?id=\${x.album.id}" title="\${x.album.name|escape}{if transName} - (\${transName|escape}){/if}">\${soil(x.album.name)}</a>
{if transName}
<span title="\${transName|escape}" class="s-fc8"> - (\${transName|escape})</span>
{/if}
{/if}
</div>
</td>
</tr>
{/list}
</tbody>
</table>
</textarea>
<textarea name="jst" id="m-wgt-song-rank-list" style="display:none;"><table class="m-table m-table-rank">
<thead>
<tr>
<th class="first w1"></th>
<th><div class="wp">标题</div></th>
<th class="w2-1"><div class="wp">时长</div></th>
<th class="w3"><div class="wp">歌手</div></th>
</tr>
</thead>
<tbody>
{list beg..end as y}
{var x=xlist[y]}
<tr id="\${x.id|seed}" class="{if y%2==0}even{/if} {if disable(x)}js-dis{/if}">
{if y<3}
<td>
<div class="hd">
<span class="num">\${y+1}</span>
<div class="rk ">
{if x.lastRank>=0}
{if y-x.lastRank>0}
<span class="ico u-icn u-icn-74 s-fc10">\${y-x.lastRank}</span>
{elseif y-x.lastRank==0}
<span class="ico u-icn u-icn-72 s-fc4">0</span>
{else}
<span class="ico u-icn u-icn-73 s-fc9">\${x.lastRank-y}</span>
{/if}
{else}
<span class="u-icn u-icn-75"></span>
{/if}
</div>
</div>
</td>
<td class="rank">
<div class="f-cb">
<div class="tt">
<a href="/song?id=\${x.id}">{if x.album}<img class="rpic" src="\${x.album.picUrl}?param=50y50&quality=100">{/if}</a>
<span data-res-id="\${x.id}" data-res-type="18" data-res-action="play" {if from}data-res-from="\${from.fid}" data-res-data="\${from.fdata}"{/if} class="ply {if isPlaying(x)}ply-z-slt{/if}">&nbsp;</span>
<div class="ttc">
<span class="txt">
{var alia=songAlia(x)}
<a href="/song?id=\${x.id}"><b title="\${x.name|escape}{if alia} - (\${alia|escape}){/if}">\${soil(x.name)}</b></a>{if alia}<span title="\${alia|escape}" class="s-fc8"> - (\${soil(alia)})</span>{/if}
{if x.mvid>0}
<span data-res-id="\${x.id}" data-res-action="mv" title="播放mv" class="mv">MV</span>
{/if}
</span>
</div>
</div>
</div>
</td>
{else}
<td>
<div class="hd">
<span class="num">\${y+1}</span>
<div class="rk ">
{if x.lastRank>=0}
{if y-x.lastRank>0}
<span class="ico u-icn u-icn-74 s-fc10">\${y-x.lastRank}</span>
{elseif y-x.lastRank==0}
<span class="ico u-icn u-icn-72 s-fc4">0</span>
{else}
<span class="ico u-icn u-icn-73 s-fc9">\${x.lastRank-y}</span>
{/if}
{else}
<span class="u-icn u-icn-75"></span>
{/if}
</div>
</div>
</td>
<td class="">
<div class="f-cb">
<div class="tt">
<span data-res-id="\${x.id}" data-res-type="18" data-res-action="play" {if from}data-res-from="\${from.fid}" data-res-data="\${from.fdata}"{/if} class="ply {if isPlaying(x)}ply-z-slt{/if}">&nbsp;</span>
<div class="ttc">
<span class="txt">
{var alia=songAlia(x)}
<a href="/song?id=\${x.id}"><b title="\${x.name|escape}{if alia} - (\${alia|escape}){/if}">\${soil(x.name)}</b></a>{if alia}<span title="\${alia|escape}" class="s-fc8"> - (\${soil(alia)})</span>{/if}
{if x.mvid>0}
<span data-res-id="\${x.id}" data-res-action="mv" title="播放mv" class="mv">MV</span>
{/if}
</span>
</div>
</div>
</div>
</td>
{/if}
<td class=" s-fc3">
<span class="u-dur {if canDel}candel{/if}">\${dur2time(x.duration/1000)}{if x.ftype==2}<i title="歌曲来自第三方网站" class="migu u-icn2 u-icn2-14"></i>{/if}</span>
<div class="opt hshow">
<a class="u-icn u-icn-81 icn-add" href="javascript:;" title="添加到播放列表" hidefocus="true"
data-res-type="18"
data-res-id="\${x.id}"
data-res-action="addto"
{if from}data-res-from="\${from.fid}" data-res-data="\${from.fdata}"{/if}></a>
<span data-res-id="\${x.id}" data-res-type="18" data-res-action="fav" class="icn icn-fav" title="收藏"></span>
<span data-res-id="\${x.id}" data-res-type="18" data-res-action="share" data-res-name="\${x.name}" data-res-author="{list x.artists as art}\${art.name}{if art_index<x.artists.length-1}/{/if}{/list}" {if x.album}data-res-pic="\${x.album.picUrl}"{/if} class="icn icn-share" title="分享">分享</span>
<span data-res-id="\${x.id}" data-res-type="18" data-res-action="download" class="icn icn-dl" title="下载"></span>
{if canDel}
<span data-res-id="\${x.id}" data-res-type="18" data-res-action="delete" class="icn icn-del" title="删除">删除</span>
{/if}
</div>
</td>
<td class="">
<div class="text" title="{list x.artists as art}\${art.name}{if art_index<x.artists.length-1}/{/if}{/list}">
\${getArtistName(x.artists, '', '', false, false, true)}
</div>
</td>
</tr>
{/list}
</tbody>
</table>
</textarea>
<textarea name="jst" id="m-wgt-song-pgm-list" style="display:none;"><table class="m-table m-table-prog">
<tbody id="song-list">
{list beg..end as y}
{var x=xlist[y]}
<tr id="\${x.id|seed}" class="{if y%2!=0}even{/if} {if disable(x)}js-dis{/if}">
<td class="first col1">
<div class="hd">
<span data-res-id="\${x.id}" data-res-type="18" data-res-action="play" {if from}data-res-from="\${from.fid}" data-res-data="\${from.fdata}"{/if} class="ply {if isPlaying(x)}ply-z-slt{/if}">&nbsp;</span>
<span class="num">\${y+1}</span>
</div>
</td>
<td class="col2">
<div class="f-cb">
<div class="tt">
<div class="ttc">
<span class="txt">
{var alia=songAlia(x)}
<a href="/song?id=\${x.id}"><b title="\${x.name|escape}{if alia} - (\${alia|escape}){/if}">\${soil(x.name)}</b></a>{if alia}<span title="\${alia|escape}" class="s-fc8"> - (\${soil(alia)})</span>{/if}
{if x.mvid>0}
<span data-res-id="\${x.id}" data-res-action="mv" title="播放mv" class="mv">MV</span>
{/if}
</span>
</div>
</div>
</div>
</td>
<td class="col3 s-fc3">
<span class="u-dur {if canDel}candel{/if}">\${dur2time(x.duration/1000)}{if x.ftype==2}<i title="歌曲来自第三方网站" class="migu u-icn2 u-icn2-14"></i>{/if}</span>
<div class="opt hshow">
<a class="u-icn u-icn-81 icn-add" href="javascript:;" title="添加到播放列表" hidefocus="true"
data-res-type="18"
data-res-id="\${x.id}"
data-res-action="addto"
{if from}data-res-from="\${from.fid}" data-res-data="\${from.fdata}"{/if}></a>
<span data-res-id="\${x.id}" data-res-type="18" data-res-action="fav" class="icn icn-fav" title="收藏"></span>
<span data-res-id="\${x.id}" data-res-type="18" data-res-action="share" data-res-name="\${x.name}" data-res-author="{list x.artists as art}\${art.name}{if art_index<x.artists.length-1}/{/if}{/list}" {if x.album}data-res-pic="\${x.album.picUrl}"{/if} class="icn icn-share" title="分享">分享</span>
<span data-res-id="\${x.id}" data-res-type="18" data-res-action="download" class="icn icn-dl" title="下载"></span>
{if canDel}
<span data-res-id="\${x.id}" data-res-type="18" data-res-action="delete" class="icn icn-del" title="删除">删除</span>
{/if}
</div>
</td>
<td class="col4">
<div class="text" title="{list x.artists as art}\${art.name}{if art_index<x.artists.length-1}/{/if}{/list}">
\${getArtistName(x.artists, '', '', false, false, true)}
</div>
</td>
<td class="col5">
<div class="text">
{if x.album}
<a href="/album?id=\${x.album.id}" title="\${x.album.name|escape}">\${soil(x.album.name)}</a>
{/if}
</div>
</td>
</tr>
{/list}
</tbody>
</table>
</textarea>
<textarea name="jst" id="m-wgt-song-listen" style="display:none;"> <ul>
{list beg..end as y}
{var x=xlist[y]}
{if extData&&extData.limit&&y>=extData.limit}
{break}
{/if}
{var from=getFrom()}
<li id="\${x.id|seed}" {if y%2 !=0 }class='even'{/if}>
<div class="hd ">
<span data-res-id="\${x.id}" data-res-type="18" data-res-action="play" {if from}data-res-from="\${from.fid}" data-res-data="\${from.fdata}"{/if} class="ply {if isPlaying(x)}ply-z-slt{/if}">&nbsp;</span>
<span class="num">\${y+1}.</span>
</div>
<div class="song">
<div class="tt">
<div class="ttc">
<span class="txt"><a href="/song?id=\${x.id}"><b title="\${x.name}">\${x.name}</b></a>
<span class='ar s-fc8'> <em>-</em>
\${getArtistName(x.artists, 's-fc8')}
</span>
</span>
</div>
</div>
<div class="opt">
<a class="u-icn u-icn-81 icn-add" href="javascript:;" title="添加到播放列表" hidefocus="true" data-res-type="18" data-res-id="\${x.id}" data-res-action="addto" {if from}data-res-from="\${from.fid}" data-res-data="\${from.fdata}"{/if}></a>
<span data-res-id="\${x.id}" data-res-type="18" data-res-action="subscribe" class="icn icn-fav" title="收藏"></span>
<span data-res-id="\${x.id}" data-res-type="18" data-res-action="share" data-res-name="\${x.name}" data-res-author="{list x.artists as art}\${art.name}{if art_index<x.artists.length-1}/{/if}{/list}" class="icn icn-share" title="分享">分享</span>
<span data-res-id="\${x.id}" data-res-type="18" data-res-action="download" class="icn icn-dl" title="下载">下载</span>
</div>
</div>
<div class="tops">
<span class="bg" style='width:\${x.score*100/x.max}%;'></span>
{if extData.showCount&&x.playCount}<span class="times f-ff2">\${x.playCount}次</span>{/if}
</div>
</li>
{/list}
</ul>
{if extData&&extData.limit&&xlist.length>extData.limit}
<div class="more">
<a href="/user/songs/rank?id=\${hostId}" >查看更多&gt;</a>
</div>
{/if}
</textarea>
<textarea name="jst" id="m-wgt-purchased-song-list" style="display:none;"> {list beg..end as y}
{var x=xlist[y]}
<tr id="\${x.id|seed}" class="{if y%2==1}even{/if} {if disable(x)}js-dis{/if}">
<td class="left">
<div class="hd {if type=='rank'}rank{/if}">
<span data-res-id="\${x.id}" data-res-type="18" data-res-action="play" {if from}data-res-from="\${from.fid}" data-res-data="\${from.fdata}"{/if} class="ply {if isPlaying(x)}ply-z-slt{/if}">&nbsp;</span>
<span class="num">\${y+1}</span>
{if type=='rank'}
<div class="rk rk-1">
{if x.lastRank>=0}
{if y-x.lastRank>0}
<span class="ico u-icn u-icn-74 s-fc10">\${y-x.lastRank}</span>
{elseif y-x.lastRank==0}
<span class="ico u-icn u-icn-72 s-fc4">0</span>
{else}
<span class="ico u-icn u-icn-73 s-fc9">\${x.lastRank-y}</span>
{/if}
{else}
<span class="u-icn u-icn-75"></span>
{/if}
</div>
{/if}
</div>
</td>
<td class="u-hasopt">
<div class="f-cb">
<div class="tt">
<div class="ttc">
<span class="txt">
{var alia=songAlia(x)}
<a href="/song?id=\${x.id}"><b title="\${x.name|escape}{if alia} - (\${alia|escape}){/if}">\${soil(x.name)}</b></a>{if alia}<span title="\${alia|escape}" class="s-fc8"> - (\${soil(alia)})</span>{/if}
{if x.mvid>0}
<span data-res-id="\${x.id}" data-res-action="mv" title="播放mv" class="mv">MV</span>
{/if}
</span>
</div>
</div>
<div class="opt hshow">
<a class="u-icn u-icn-81 icn-add" href="javascript:;" title="添加到播放列表" hidefocus="true"
data-res-type="18"
data-res-id="\${x.id}"
data-res-action="addto"
{if from}data-res-from="\${from.fid}" data-res-data="\${from.fdata}"{/if}></a>
<span data-res-id="\${x.id}" data-res-type="18" data-res-action="fav" class="icn icn-fav" title="收藏"></span>
<span data-res-id="\${x.id}" data-res-type="18" data-res-action="share" data-res-name="\${x.name}" data-res-author="{list x.artists as art}\${art.name}{if art_index<x.artists.length-1}/{/if}{/list}" {if x.album}data-res-pic="\${x.album.picUrl}"{/if} class="icn icn-share" title="分享">分享</span>
<span data-res-id="\${x.id}" data-res-type="18" data-res-action="download" class="icn icn-dl" title="下载"></span>
{if canDel}
<span data-res-id="\${x.id}" data-res-type="18" data-res-action="delete" class="icn icn-del" title="删除">删除</span>
{/if}
</div>
</div>
</td>
<td class="">
<div class="text" title="{list x.artists as art}\${art.name}{if art_index<x.artists.length-1}/{/if}{/list}">
\${getArtistName(x.artists, '', '', false, false, true)}
</div>
</td>
<td class="">
<div class="text">
{if x.album}
<a href="/album?id=\${x.album.id}" title="\${x.album.name|escape}">\${soil(x.album.name)}</a>
{/if}
</div>
</td>
<td class="s-fc3">\${formatTime(x.paidTime)}</td>
</tr>
{/list}
</textarea>
<textarea name="ntp" id="m-msg-private-send" style="display:none;"><div class="lyct lyct-1 f-cb">
<div class="m-lyshare m-plshare">
<div class="u-err j-flag" style="display: none;">最多选择10位好友</div>
<div class="item item-1 f-cb">
<label>发 给：</label>
<div class="ct f-pr j-flag">
</div>
</div>
<div class="item f-cb">
<label>内 容：</label>
<div class="ct j-flag">
</div>
</div>
</div>
</div>
</textarea>
</div>
<script src="//s3.music.126.net/web/s/core.js?5539de95b51f251999079b35d1260395" type="text/javascript"></script><script src="//s3.music.126.net/web/s/pt_discover_playlist.js?d79aa1f5db4113190152ad55f3f02d0d" type="text/javascript"></script>
</body>
</html>
`

module.exports = html;