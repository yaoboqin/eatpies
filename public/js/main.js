// Initialize app
var myApp = new Framework7();

// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Framework7.$;

// Add view
var mainView = myApp.addView('.view-main', {
  // Because we want to use dynamic navbar, we need to enable it for this view:
  dynamicNavbar: true
});

var testWidth = function(){
	var _wHeight = document.documentElement.clientHeight;
	var _wWidth = document.documentElement.clientWidth;
    var b = _wHeight/_wWidth,
        sw = _wWidth*b/1.5,
        ml = (_wWidth-sw)/2;
    if(b<=1.5){
        $(".views").css({"width":sw,"margin-left":ml});
        //$("#signup input").css({"width":"10%"});
    }
     
    $('.views').css({
        'height' : _wHeight-65 + 'px'
    });
}
//testWidth();