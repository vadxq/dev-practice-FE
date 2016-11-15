var prev = document.getElementById('prev');
var next = document.getElementById('next');
var imgChange = document.getElementById('pic_1');
var imgArr = ['pngs/img1.jpg','pngs/img2.jpg','pngs/img3.jpg','pngs/img4.jpg'];
var n=0;
imgChange.src = imgArr[n];
var t;
function imgTab(){
	imgChange.src = imgArr[n];
	n++;
	if (n==imgArr.length)
		n=0;
	// console.log(n)
	// t=setTimeout("imgTab()",3000)
}
window.setInterval("imgTab()",3000)
// imgTab();
next.onclick = function(){
	// n++;
// if(n == imgArr.length){
// n = 0;
// }
imgTab();
// console.log(n)
}
prev.onclick = function(){
　　n--;
if(n == -1){
　　n = imgArr.length-1;
}
imgTab();
// console.log(n)
}
// 图片轮播（不自动）
var ul = document.getElementById('page');
var page = ul.getElementsByTagName('a');
var left = document.getElementById('left');
var right = document.getElementById('right');
var no=1;
function pageTab1(num){
	page[num].style.backgroundColor ="#76c7c0";
	// if (num!=1)
	for (var i = page.length - 2; i >= 1; i--) {
		if (i!=no) {
			page[i].style.backgroundColor="#808080"
			// page[i].style.hover.background="##e2534b"
		}

	}
		// page[!num].style.backgroundColor = "#808080";
		console.log('ddd')
}
pageTab1(1)
left.onclick = function(){
	no--;
	if(no==0){
		no=1;
		alert('已结是第一页了');
	}
	pageTab1(no);
}
right.onclick = function(){
	no++;
	if(no == page.length-1){
		alert('已经是最后一页了');
		no=page.length-2;
	}
	pageTab1(no);
}
var content = document.getElementById('content')
// function pageclick(){
// 		var i
// 	// for(i=1;i<page.length-1;i++){13037233075
// 		page[i].onclick=function () {
// 			// this.style.backgroundColor="#76c7c0";
// 			no = i
// 			pageTab1(i)
// 			console.log(i)
// 			// console.log(num)
// 		}
// 	// }
// }
// pageclick();

var home = document.getElementById('home');
var Blog = document.getElementById('blog');

home.onclick = function(){
	document.getElementById('title').innerHTML = 'HOME';
}
Blog.onclick = function(){
	document.getElementById('title').innerHTML = 'BLOG';
}