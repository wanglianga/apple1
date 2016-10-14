$(function(){
    //顶部导航显示
    var flag=true;
    var ch=$(window).height();
    $(".smallBox:first").click(function(){
        if(flag){
            $(".smallone").css("transform","translate(0,4px) rotate(45deg)")
            $(".smalltwo").css("transform","translate(0,-4px) rotate(-45deg)")
            $(".menu").css({
                height:ch-48,
                visibility:"visible",
                background:"rgba(0,0,0,0.8)"
            });
            $(".menu a").each(function(index,obj){
                $(obj).css("transition","all 0.4s ease "+index*0.2+"s");
            }).css({
                opacity:1,
                transform:"rotateY(0deg) scale(1,1)"
            })
            flag=false;
        }else{
            $(".smallone").css("transform","translate(0,0) rotate(0deg)")
            $(".smalltwo").css("transform","translate(0,0) rotate(0deg)")
            $(".menu").css({
                height:0,
                visibility:"hidden"
            });
            $(".menu a").each(function(index,obj){
                $(obj).css("transition","none");
            }).css({
                opacity:0,
                transform:"rotateY(60deg) scale(1,0.3)"
            });
            flag=true;
        }
    })


    //banner轮播
    var now=0;
    var next=0;
    $(".bannerBox").css("left","100%").eq(0).css("left",0);
    var t=setInterval(function(){
        next++;
        if(next==$(".bannerBox").length){
            next=0;
        }
        $(".bannerBox").eq(now).animate({left:"-100%"});
        $(".bannerBox").eq(next).css("left","100%");
        $(".bannerBox").eq(next).animate({left:0});
        $(".bannerList ul li a").css({"width":"8px","height":"8px","background":"#666666","border":"none"}).eq(now).css({"width":"9px","height":"9px","border":"1px solid #197ece","background":"#fff"});
        now=next;
    },2000)
    //左右箭头点击事件
    $(".banner").hover(function(){
        $(".bannerBtn").css("opacity",1)
        clearInterval(t);
        },function(){
        $(".bannerBtn").css("opacity",0)
        t=setInterval(function(){
            next++;
            if(next==$(".bannerBox").length){
                next=0;
            }
            $(".bannerBox").eq(now).animate({left:"-100%"});
            $(".bannerBox").eq(next).css("left","100%");
            $(".bannerBox").eq(next).animate({left:0});
            $(".bannerList ul li a").css({"width":"8px","height":"8px","background":"#666666","border":"none"}).eq(now).css({"width":"9px","height":"9px","border":"1px solid #197ece","background":"#fff"});
            now=next;
        },2000)
    })
    $(".bnrBtnLeft").click(function(){
        next++;
        if(next==$(".bannerBox").length){
            next=0;
        }
        $(".bannerBox").eq(now).animate({left:"-100%"});
        $(".bannerBox").eq(next).css("left","100%");
        $(".bannerBox").eq(next).animate({left:0});
        $(".bannerList ul li a").css({"width":"8px","height":"8px","background":"#666666","border":"none"}).eq(now).css({"width":"9px","height":"9px","border":"1px solid #197ece","background":"#fff"});
        now=next;
    })
    $(".bnrBtnRight").click(function(){
        next++;
        if(next==$(".bannerBox").length){
            next=0;
        }
        $(".bannerBox").eq(now).animate({left:"100%"});
        $(".bannerBox").eq(next).css("left","-100%");
        $(".bannerBox").eq(next).animate({left:0});
        $(".bannerList ul li a").css({"width":"8px","height":"8px","background":"#666666","border":"none"}).eq(now).css({"width":"9px","height":"9px","border":"1px solid #197ece","background":"#fff"});
        now=next;
    })
    //足部导航
    var flag1=true;   
    $(".btn").click(function(){
        var index=$(this).index(".btn");
        if (flag1) { 
            $(this).css("transform","rotate(45deg)");
            $(".lii").eq(index).css("border","none");
            $(".ftList1").eq(index).css("display","block");
            console.log($("#ftList").length)
            flag1=false;
        }
        else{
             $(this).css("transform","rotate(0deg)");
             $(".lii").eq(index).css("border-bottom"," 1px solid #e3e3e3");
             $(".ftList1").eq(index).css("display","none");
             flag1=true;
        }
       
    })
});