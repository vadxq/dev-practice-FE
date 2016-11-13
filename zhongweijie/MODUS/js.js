var prev = document.getElementById('prev');
var next = document.getElementById('next');
var imgChange = document.getElementById('pic_1');
var imgArr = ['pngs/img1.jpg','pngs/img2.jpg','pngs/img3.jpg','pngs/img4.jpg'];
var n=0;
var t;
function imgTab(){
	imgChange.src = imgArr[n];
	n++;
	t=setTimeout("imgTab()",3000)
	if (n==imgArr.length)
		n=0;
}
imgTab();
next.onclick = function(){
	n++;
if(n == imgArr.length){
n = 0;
}
imgTab();
}
prev.onclick = function(){
　　n--;
if(n == -1){
　　n = imgArr.length-1;
}
imgTab();
}
// 图片轮播（不自动）
var ul = document.getElementById('page');
var page = ul.getElementsByTagName('a');
var left = document.getElementById('left');
var right = document.getElementById('right');
var num=1;
function pageTab1(){

	page[num].style.backgroundColor ="#76c7c0";
	if (num!=1)
		page[num-1].style.backgroundColor = "#808080";
}
pageTab1();
function pageTab2(){
	page[num].style.backgroundColor ="#76c7c0";
	if(num!=1)
	page[num+1].style.backgroundColor ="#808080";
}
pageTab2();
left.onclick = function(){
	num--;
	if(num==0){
		num=1;
		alert('已结是第一页了');
	}
	pageTab2();
}
right.onclick = function(){
	num++;
	if(num == page.length-1){
		alert('已经是最后一页了');
		num=page.length-2;
	}
	pageTab1();
}
var content = document.getElementById('content')
function pageclick(){

	for(i=1;i<page.length-1;i++){
		page[i].onclick=function () {
			this.style.backgroundColor="#76c7c0";
		}}
}
pageclick();

var home = document.getElementById('home');
var Blog = document.getElementById('blog');

home.onclick = function(){
	document.getElementById('title').innerHTML = 'HOME';
}
Blog.onclick = function(){
	document.getElementById('title').innerHTML = 'BLOG';
}