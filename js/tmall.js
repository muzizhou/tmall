/**
 * Created by Administrator on 2016/8/4.
 */

$(window).resize(function(){
    if($(window).width()<1225){
        $(".nav").css({width:1071})
        $(".nav-right").css({width:840})
        $(".nav-right a:gt(7)").css({display:"none"})
    }else{
        $(".nav").css({width:1225})
        $(".nav-right").css({width:1000})
        $(".nav-right a:gt(7)").css({display:"block"})
    }
})
$(window).resize()


//轮播
// 注意赋值
var wheelImgs=$(".wheelImg")
var btns=$(".btnBox li")
var num=0
var t=setInterval(move,3000)
$(".wheel").hover(function(){
	clearInterval(t)
},function(){
	t=setInterval(move,3000)
})
btns.click(function(){
	var index=btns.index(this)
	btns.css({background:"#333"})
	$(this).css({background:"#fff"})
	wheelImgs.css({opacity:0})
	wheelImgs.eq(index).css({opacity:1})
	num=index
    if(num==0){
	$(".wheelbox").css("background","#F5b9C5")	
	}else if(num==1){
	$(".wheelbox").css("background","#E8E8E8")	
	}else if(num==2){
    $(".wheelbox").css("background","#FFB5B6")
	}else if(num==3){
	$(".wheelbox").css("background","#E8E8E8")	
	}else if(num==4){
	$(".wheelbox").css("background","#EC7b97")		
	}else if(num==5){
	$(".wheelbox").css("background","#2ac8ed")
	}
})

function move(){
  num++
	if(num>wheelImgs.length-1){
		num=0
	}
	//操作图片
	wheelImgs.animate({opacity:0})
	// wheelImgs.fadeOut(400)
	wheelImgs.eq(num).finish()
	wheelImgs.eq(num).animate({opacity:1})
	//操作按钮
	btns.css({background:"#333"})
	btns.eq(num).css({background:"#fff"})
	//操作最外层的容器
	if(num==0){
	$(".wheelbox").css("background","#F5b9C5")	
	}else if(num==1){
	$(".wheelbox").css("background","#E8E8E8")	
	}else if(num==2){
    $(".wheelbox").css("background","#FFB5B6")
	}else if(num==3){
	$(".wheelbox").css("background","#E8E8E8")	
	}else if(num==4){
	$(".wheelbox").css("background","#EC7b97")		
	}else if(num==5){
	$(".wheelbox").css("background","#2ac8ed")
	}	
}



var $type=$(".category li");
var $kind=$(".kind");
var $info=$(".info");

// 2.定义一个空数组，用于存放左侧选项卡中字体不同颜色的id名
var colorArr=["kind1","kind2","kind3","kind4","kind5","kind6","kind7","kind8","kind9","kind10","kind11","kind12","kind13","kind14","kind15","kind16"];

$type.mouseover(function(){
	var index=$type.index(this);
	$kind.attr({id:""}).css({
		fontWeight:"normal"
	}).eq(index).attr({id:colorArr[index]}).css({
		fontWeight:"bold"
	})


	$info.css({display:"none"}).eq(index).css({
		display:"block"
	})
})























//var wheelImg =$(".wheel-img")
//var btns=$(".btn-box li")
//var num=0
//var t=setInterval(function move(){
//    function(){
//        num++
//        if(num>btns.length-1){
//            num=0
//        }
//        //操作图片
//        wheelImg.animate({opacity:0})
//          wheelimg.fadeOut(400)
//        wheelImg.eq(num).finish();//队列有影响，要清除队列
//        wheelImg.eq(num).animate({opacity:1})
//          wheelimg.fadeIn(400)
//        //操作按钮
//        btn.css("background","#fff")
//        btn.eq(num).css("background","yellow")
//        if(num==0){
//            //最外层容器
//            $(".r").css("background","red")
//        }else if(num==1){
//
//        }else  if(num==2)
//    }
//},2000)
////停止或者开始
//    $(".wheel").hover(function(){
//        clearInterval(t)
//    },function(){
//        t=setInterval(move,2000)
//    })//获取容器
//
//btn.click()