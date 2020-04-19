(function(){
    var sizeView = {},
        $container,
        $sizeView,
        nWidth;

    sizeView.init = function(container){
        $container = container;
        $sizeView = $('<div class="mvc-sizeview"></div>');
        $container.append($sizeView);

        nWidth = $sizeView.innerWidth();//显示区的宽度
        this.resize();
        //开始的时候 宽高是0
        $sizeView.css({'width':'0px','height':'0px'})
    }

    sizeView.resize = function(){
        var nPos = ($container.innerHeight()-nWidth)/2;
        $sizeView.css({'top':nPos+'px'})
    }

    sizeView.onSizeChange = function(msg){
        var len = nWidth*msg/255,
            nTop = ($container.innerHeight()-len)/2;

        $('.mvc-sizeview').css({
            'width': len + 'px', 
            'height': len + 'px',
            'top': nTop + 'px'
        })
    }
    window.sizeView = sizeView
}())
