// JavaScript Document
$(function(){
		function prevent(e){
			e.preventDefault();
			};
			var menuNavs ,openFlag = true,popMenus = $(".popMenus"),menuContent; 			
			$(".menuNavs li").on("click",function(){						
						var element =this;
						menuNavs.scrollToElement(element,500);
						menuContent.destroy();
						menuContent = new IScroll('.menuContents',{mouseWheel:true,preventDefault:false,useTransform:true});
				})	
						
			$(".showMenuBtn,.xmdq").on("click",function(){
									if($(this).hasClass("showMenu")){
											$(this).addClass("show");
										}
									popMenus.addClass("show");
									menuNavs = new IScroll('.menuNavs',{mouseWheel:true,preventDefault:false,useTransform:true});
									menuContent = new IScroll('.menuContents',{mouseWheel:true,preventDefault:false,useTransform:true});
									if(document.addEventListener){
										document.addEventListener('touchmove',prevent,false);	
										}
									else {
											document.attachEvent('ontouchmove',prevent);
										}
				});
			$(".closePopMenu").on("click",function(){
					if($(".showMenuBtn").hasClass("show")){
							$(".showMenuBtn").removeClass("show")
						}
					popMenus.removeClass("show");
					if(document.removeEventListener){
										document.removeEventListener('touchmove',prevent,false);	
										}
									else {
											document.detachEvent('ontouchmove',prevent);
										}	
				})	;
			$(window).on("load scroll",function(){
					var scrollT = $(window).scrollTop();
					popMenus.css({top:scrollT+'px'});
				})
	})
	
	
	
$(function(){	

   var tab_nav_li = $('.tab_nav li.selected');//ÇÐ»»ÑùÊ½
	tab_nav_li.click(function(){
		$(this).addClass('on')
				 .siblings().removeClass('on');
	var tab_nav_li_index = tab_nav_li.index(this);
	$('.tab_switch>.tabcon').eq(tab_nav_li_index).show()
					 .siblings().hide();
	}).hover(function(){
		$(this).addClass('');
	},function(){
		$(this).removeClass('');	
	});

})