define(['jquery'],function($){
  function TimerButton(){
    var cfg={
        container:'body',
        num:6,
        title:'同意',
        onClick:null
    },
    num,
    timer;
    var $btn=$('<input type="button" class="timer-button"  disabled>')
  
    this.show=function(conf){
   //1.DOM draw
    $(cfg.container).append($btn);
    $.extend(cfg,conf);
    num=cfg.num;
    $btn.val(cfg.title+'('+ cfg.num +'s)');

    timer = setInterval(function(){
    num--;
    if(num===0){
      clearInterval(timer);
      $btn.val(cfg.title);
     $btn.removeAttr('disabled');
    }else{
      $btn.val(cfg.title+'('+num+'s)')
    }
  },1000);

    //2.event bind
    $btn.click(cfg.onClick)
  }   
 }
return TimerButton;
});



