function $(obj,content){
	// content = content?content:document;
	// alert(content);
	var first = obj.charAt(0);
	if(first == "."){
		//className
		var classname= obj.substr(1);
		return getClass(classname,content);
	}else if(first == "#"){
		//Id
		var id= obj.substr(1);
		alert(id);
		return document.getElementById(id);
	}else if(/^[a-z][a-z1-6]{0,8}$/.test(obj)){
		//TagName
		return content.getElementsByTagName(obj);
	}
}

function getClass(classname,range){
	// alert("getClass");
	//初始化  在排序的时候用过
	var range = range?range:document;
	if(document.getElementsByClass){
		return range.getElementsByClass();
	}else{
		var all = range.getElementsByTagName("*");
		var arr = [];
		for(var i=0;i<all.length;i++){
			var str = all[i].className;
			if(check(str,classname)){
				arr.push(all[i]);
			}
		}
		return arr;
	}
}

function check(str,classname){
	var arr = str.split(" ");
	for(var i=0;i<arr.length;i++){
		if(arr[i] == classname){
			return true;
		}
		
	}
	return false;
}

/*
	获取样式的兼容性
	思路与上面的getContent()一样
*/
function getStyle(obj,arrt){
	if(obj.currentStyle){
		//ie6~8
		// alert(1+"ie");
		return obj.currentStyle[arrt];
	}else{
		//w3c
		// alert(2+"w3c");
		return getComputedStyle(obj,null)[arrt];
	}
}

window.onload = function(){
	//我的宝贝
	var mytaoa = $(".mytao")[0];
	var mytaobao = $(".mytaobao")[0];
	// console.log(mytaobao);
	mytaoa.onmouseover = function(){
		mytaobao.style.display="block";
	}
	mytaoa.onmouseout = function(){
		mytaobao.style.display="none";
	}
	//我的收藏
	var myshou = $(".myshou")[0];
	var shoucang = $(".shoucang")[0];

	myshou.onmouseover = function(){
		shoucang.style.display="block";
	}
	myshou.onmouseout = function(){
		shoucang.style.display="none";
	}
	//手机版
	var shoujiji = $(".shoujiji")[0];
	var shouji = $(".shouji")[0];
	shoujiji.onmouseover = function(){
		shouji.style.display="block";
	}
	shoujiji.onmouseout = function(){
		shouji.style.display="none";
	}
	//商家支持
	var shangjiajia = $(".shangjiajia")[0];
	var shangjia = $(".shangjia")[0];
	shangjiajia.onmouseover = function(){
		shangjia.style.display="block";
	}
	shangjiajia.onmouseout = function(){
		shangjia.style.display="none";
	}
	//网站导航
	var wangzhan = $(".wangzhan")[0];
	var daohang = $(".daohang")[0];
	wangzhan.onmouseover = function(){
		daohang.style.display="block";
	}
	wangzhan.onmouseout = function(){
		daohang.style.display="none";
	}

	//天猫耳朵

	chuxian(".supermarket",0);
	chuxian(".supermarket",1);
	chuxian(".member",0);
	chuxian(".member",1);
	chuxian(".member",2);
	chuxian(".member",3);
	chuxian(".member",4);
	chuxian(".member",5);
	chuxian(".member",6);
	chuxian(".member",7);
		var supermarket = $(".supermarket")[0];
		console.log(supermarket);
		var erduo = $(".erduo",supermarket)[0];
		console.log(erduo);

	function chuxian(fu,num){
		var supermarket = $(fu)[num];
		var erduo = $(".erduo",supermarket)[0];
		console.log(erduo);
		supermarket.onmouseover = function(){
		// erduo.style.top="-15px";
			animate(erduo,{top:-12,opacity:1});
			}
		// console.log(supermarket);
		supermarket.onmouseout = function(){
		// erduo.style.top="0";
			animate(erduo,{top:0,opacity:0});

		}
	}
	


	var banner = $(".bannerimg")[0];
	var banneri = $(".banner")[0];
	var as = $("a",banner);
	var ul = $(".ul")[0];
	var list = $("li",ul);

	// console.log(banneri);
	as[0].style.zIndex=10;
	var index = 0;
	var t = setInterval(moveR,2000);

	function moveR(){	
		index++;
		if(index == as.length){
			index = 0;
		}
		for(var i=0;i<as.length;i++){
			// as[i].style.zIndex = 5;
			animate(as[i],{opacity:0});
			list[i].className = "";//初始化
		}
		if(index == 2){
			// alert(1);
			animate(banneri,{background:"#B41735"});
		}else{
			animate(banneri,{background:"#E8E8E8"});
		}
		list[index].className="hot";
		// as[index].style.zIndex=10;
		// animate();
		animate(as[index],{opacity:1},function(){
			flag = true;
		});

	}
	banner.onmouseover = function(){
		clearInterval(t);
	}
	banner.onmouseout = function(){
		t = setInterval(moveR,2000);

	}





	//轮播的选项卡,点击小点

	for(var i=0;i<list.length;i++){
		//自定义一个index属性，将i值放入
		list[i].index = i;

		list[i].onclick = function(){
		//当前的图片和点击图片是同一张时，什么也不做
		if(index == this.index){
			return;
		}
		//初始化
		for(var j=0;j<as.length;j++){
			// as[j].style.zIndex = 5;
			animate(as[j],{opacity:0});
			animate(banneri,{background:"#E8E8E8"});
			list[j].className = "";//初始化
		}
		if(this.index == 2){
			// alert(1);
			animate(banneri,{background:"#B41735"});
		}else{
			animate(banneri,{background:"#E8E8E8"});
		}
			list[this.index].className = "hot";
			// as[this.index].style.zIndex = 10;
			animate(as[this.index],{opacity:1});
			//把当前图片的下标 给 实时监控的index
			index = this.index;
		}

	}






	var fenlei = $(".fenlei")[0];
	var lis = $("li",fenlei);

	var detail = $(".detail");
	// console.log(fenlei.length);


	for(var i=0;i<lis.length;i++){
		lis[i].index = i;
		lis[i].onmouseover = function(){
			detail[this.index].style.display = "block";	
		}
		lis[i].onmouseout = function(){
			detail[this.index].style.display = "none";	
		}
		
	}

	var mid11 = $(".mid11")[0];
	var waikuang = $(".waikuang");
	var mid99 = $(".mid99");
	// console.log(mid99);
	for(var i=0;i<waikuang.length;i++){
		waikuang[i].index = i;
		waikuang[i].onmouseover = function(){
			animate(mid99[this.index],{opacity:0.7});
			mid99[this.index].style.display = "block";
		
		}
		waikuang[i].onmouseout = function(){
			animate(mid99[this.index],{opacity:0});
			mid99[this.index].style.display = "none";
		}
	}
	

	//潮流前线
	var png = $(".png");
	// console.log(png);
	for(var i=0;i<png.length;i++){
		png[i].index = i;

		png[i].onmouseover = function(){
			// animate(png[this.index],{width:150,height:150});
			png[this.index].style.width = "150px";
			png[this.index].style.height = "150px";
		}
		png[i].onmouseout = function(){
			png[this.index].style.width = "140px";
			png[this.index].style.height = "140px";
			// animate(png[this.index],{width:140,height:140});
		}
	}




	//图片向左移动
	
	

	tupianyidong(".qinzi_mid",0);
	tupianyidong(".qinzi_mid",1);
	tupianyidong(".qinzi_mid",2);
	tupianyidong(".qinzi_mid",3);
	tupianyidong(".qinzi_mid",4);
	tupianyidong(".qinzi_mid",5);
	tupianyidong(".qinzi_right",0);
	tupianyidong(".qinzi_right",1);
	tupianyidong(".qinzi_right",2);
	tupianyidong(".qinzi_right",3);
	tupianyidong(".qinzi_right",4);
	tupianyidong(".qinzi_right",5);

	function tupianyidong(area1,num){
		var area = $(area1)[num];
		
		var img = $("img",area);
		// console.log(img);
			// console.log(img);
			for(var i=0;i<img.length;i++){

				// console.log(img[0]);
				img[i].index = i;
				// img[i].setAttribute("index",i);
				// console.log(img[this.index]);
				img[i].onmouseover = function(){
					animate(img[this.index],{right:10},Tween.Linear);
				}
				img[i].onmouseout = function(){
					animate(img[this.index],{right:0},Tween.Linear);
				}
			}
		

		
	}


	var qinzi = $(".qinzi");
	var heights = document.documentElement.clientHeight;
	var arr = [];
	for(var i=0;i<qinzi.length;i++){
		arr.push(qinzi[i].offsetTop);
	}
	// var flag = true;
	var zuobian = $(".zuobian")[0];
	var list1 = $(".diyi");
	console.log(list1);
	for(var i=0;i<list1.length;i++){
		list1[i].index = i;
		// list1[i].onclick = function(){
			// flag = false;
			// console.log(i);
			// var obj = document.body?document.body:document.documentElement;
			// animate(obj,{scrollTop:arr[this.index]},function(){
			// 	// flag = true;
			// });
		// }
		list1[i].onmouseover = function(){
			list1[this.index].onclick = function(){
			// flag = false;
			// console.log(this.index);
			var obj = document.body?document.body:document.documentElement;
			animate(obj,{scrollTop:arr[this.index]});
			}
				if(this.index==0){
					list1[0].style.background="#F7A945";
				}
				if(this.index==1){
					list1[1].style.background="#19C8A9";
				}
				if(this.index==2){
					list1[2].style.background="#F15453";
				}
				if(this.index==3){
					list1[3].style.background="#64C333";
				}
				if(this.index==4){
					list1[4].style.background="#0AA6E8";
				}
				if(this.index==5){
					list1[5].style.background="#EA5F8D";
				}
				if(this.index==6){
					list1[6].style.background=" #DD2727";
				}
				if(this.index==7){
					list1[7].style.background=" #DD2727";
				}
				list1[this.index].onmouseout = function(){
			if(this.index == i){
				return;
			}
			list1[this.index].style.background = "#626262";
		}

		}
		
		
	}

	// for(var i=0;i<list1.length;i++){
	// 	list1[i].index = i;

	// 	list1[i].onmouseover = function(){
	// 		if(i==0){
	// 				list1[0].style.background="#F7A945";
	// 			}
	// 			if(i==1){
	// 				list1[1].style.background="#19C8A9";
	// 			}
	// 			if(i==2){
	// 				list1[2].style.background="#F15453";
	// 			}
	// 			if(i==3){
	// 				list1[3].style.background="#64C333";
	// 			}
	// 			if(i==4){
	// 				list1[4].style.background="#0AA6E8";
	// 			}
	// 			if(i==5){
	// 				list1[5].style.background="#EA5F8D";
	// 			}
	// 			if(i==6){
	// 				list1[6].style.background=" #DD2727";
	// 			}
	// 			if(i==7){
	// 				list1[7].style.background=" #DD2727";
	// 			}
	// 	}
	// 	list1[i].onmouseout = function(){
	// 		list1[this.index].style.background="#626262";
	// 	}

	// }
	//按需加载
	// console.log(qinzi[0].offsetTop);
	var guanggao1 = $(".guanggao1")[0];
	var guanggao2 = $(".guanggao2");
	var arr1 = [];
	var flag1 = true;
	for(var i=0;i<guanggao2.length;i++){
		arr1.push(guanggao2[i].offsetTop);
	}
	var search = $(".search")[0];

	window.onscroll = function(){
		var obj = document.body.scrollTop?document.body:document.documentElement;
		var index = obj.scrollTop;
		for(var i=0;i<qinzi.length;i++){
			if(index+heights>arr[i]+200){
				var imgs = $("img",qinzi[i]);
				for(var j=0;j<imgs.length;j++){
					imgs[j].src = imgs[j].getAttribute("imgpath");
				}
			}
		}

		if(index+heights>guanggao1.offsetTop+150){
			var imgg = $("img",guanggao1)[0];
			imgg.src = imgg.getAttribute("imgpath");
		}

		for(var i=0;i<guanggao2.length;i++){
			if(index+heights>arr1[i]+150){
				var imgg2 = $("img",guanggao2[i]);
				for(var j=0;j<imgg2.length;j++){
					imgg2[j].src = imgg2[j].getAttribute("imgpath");
				}
			}
		}

		if(index>=arr[0]-200){
			if(flag1){
				flag1 = false;
				animate(search,{top:0});
				animate(zuobian,{left:1})
			}
		}else{
			if(!flag1){
				flag1 = true;
				animate(search,{top:-50});
				animate(zuobian,{left:-36});

			}
		}

		for(var i=0;i<qinzi.length;i++){
			if(index+heights>=arr[i]+200){
				for(var j=0;j<list1.length;j++){
					list1[j].style.background = "#626262";
				}
				if(i==0){
					list1[0].style.background="#F7A945";
				}
				if(i==1){
					list1[1].style.background="#19C8A9";
				}
				if(i==2){
					list1[2].style.background="#F15453";
				}
				if(i==3){
					list1[3].style.background="#64C333";
				}
				if(i==4){
					list1[4].style.background="#0AA6E8";
				}
				if(i==5){
					list1[5].style.background="#EA5F8D";
				}
				if(i==6){
					list1[6].style.background=" #DD2727";
				}
				if(i==7){
					list1[7].style.background=" #DD2727";
				}

				
			}
		}


	}


} 