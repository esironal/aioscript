$(".cssAddBtn").click(function (){
    	$("#cssWrap").append('<input type="text" class="form-control cssField"  placeholder="Paste here">');
    });
     $(".jsAddBtn").click(function (){
    	$("#jsWrap").append('<input type="text" class="form-control jsField"  placeholder="Paste here">');
    });


     $(".okButton").click(function (){

     		var theScript = "<script type='text/javascript'>(function (){var cssArray = [";

     			
     		var len = $(".cssField").length;
     		$(".cssField").each(function (){
     				
     				theScript+= "'"+$(this).val()+"'";
     				var ind = $(this).index();
     				
     				if(ind < len - 1){
     					theScript+=",";
     				}
     				
     		});
     		theScript+="];var jsArray  = ["
     		var len2 = $(".jsField").length;
     		$(".jsField").each(function (){
     			theScript+= "'"+$(this).val()+"'";
     				var ind = $(this).index();
     				
     				if(ind < len2 - 1){
     					theScript+=",";
     				}
     		});
     		theScript+="];";
     		theScript+="function cssInjector(theLink){head=document.getElementsByTagName('head')[0];link  = document.createElement('link');link.rel  = 'stylesheet';link.type = 'text/css';link.href = theLink;head.appendChild(link);}function jsInjector(theLink){head  = document.getElementsByTagName('head')[0];link  = document.createElement('script');link.type = 'text/javascript';link.src = theLink;head.appendChild(link);}for(var i=0; i<cssArray.length; i++){cssInjector(cssArray[i]);}for(var j=0; j<jsArray.length; j++){jsInjector(jsArray[j]);}"
     		theScript+= "}());</script>"
			$(".result").val(theScript);
     });


     