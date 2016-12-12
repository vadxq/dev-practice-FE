
//图片轮播
var prev = document.getElementById('prev');
var next = document.getElementById('next');
var imgChange = document.getElementById('pic_1');
var imgArr = ['pngs/img1.jpg','pngs/img2.jpg','pngs/img3.jpg','pngs/img4.jpg'];
var n=0;
var t;
imgChange.src = imgArr[n];
function imgTab_next(){
	imgChange.src = imgArr[n];
	n++;
	if (n==imgArr.length)
		n=0;
}
function imgTab_prev(){
	n--;
	imgChange.src=imgArr[n];
	if (n==-1)
		n=imgArr.length-1;
}
window.setInterval("imgTab_next()",3000)
next.onclick = function(){
imgTab_next();
}
prev.onclick = function(){
imgTab_prev();
}
// 图片轮播

// 分页
function fenye(){
	var ul=document.getElementById('page');
	var page=ul.getElementsByTagName('a');
	var pre=document.getElementById('left');
	var next=document.getElementById('right');
	var num=1;
	var n;
	var bgcolor=['','blue','red','green','#dd1f88','black'
	,'gray','#ff43e4','#76c7c0','#ff22a3']
	var content=document.getElementById('content');
	function pageTab(num){
		content.innerHTML = num;
		content.style.fontSize = num*10 + 'px';
		content.style.color = "white";
		content.style.background = bgcolor[num];
		content.style.height = 200 + 'px';
		content.style.width = 200 + 'px';
		content.style.border = 2 + 'px';
		content.style.fontWeight = "bold";
	}
	
	pre.onclick=function(){
		num--;
		if(num==0){
			num=1;
			alert('已经是第一页了！');
		}
		pageTab(num);
	}

	next.onclick=function(){
		num++;
		if(num==10){
			num=9;
			alert('已经是最后一页了！');
		}
		pageTab(num);
	}
};
fenye();


// 分页


var home = document.getElementById('home');
var Blog = document.getElementById('blog');

home.onclick = function(){
	document.getElementById('title').innerHTML = 'HOME';
}
Blog.onclick = function(){
	document.getElementById('title').innerHTML = 'BLOG';
}