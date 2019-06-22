// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
// ---------------------------------------------------------------------------------------------------------------------------
// CUSTOMALERT 1.0.0
(function($) {
  $.fn.customAlert = function(options) {
    //OPTIONS
    var settings = $.extend({
      alertClass: '',
      maskClass: '',
      text: 'Text',
      title: 'Title',
      header: true,
      icon: false,
      width:'400px',
      fontfamily: 'helvetica',
      fontsize: '14px',
      backgroundTitle: '#cccccc',
      colorTitle: '#333333',
      maskColor: '#000000',
      maskOpacity: '0.6',
      btnConfirm: false,
      btnConfirmText: 'Accept',
      btnConfirmFunction: function(){},
      btnCancel: false,
      btnCanceltext: 'Cancel',
      btnCancelFunction: function(){},
      onOpenFunction: function(){},
      onCloseFunction: function(){},
      onCreateFunction: function(){},
      animationInDuration: '0.2s',
      animationOutDuration:'0.2s'
    }, options );
    
    //VARIABLES
    var app = $("body");
    var html = "";
    
    //WIDTH & FONT SIZE
    if (isNaN(settings.width) == false){
      settings.width = settings.width + "px";
    }
    if (isNaN(settings.fontsize) == false){
      settings.fontsize = settings.fontsize + "px";
    }
    
    //ON CREATE FUNCTION
    settings.onCreateFunction(); 
    
    //HTML -----------------------------------
      //MASK
      html = "<div id='CA_mask' class='"+settings.maskClass+"' style='position:fixed; width:100%; height:100%; top:0; bottom:0; right:0; left:0; z-index:100000000; background-color:"+settings.maskColor+"; opacity:"+settings.maskOpacity+";'></div>"+"\n";
      
      //ALERT
      html += " <div id='CA_alert' class='"+settings.alertClass+"' style='position:fixed; width:"+settings.width+"; max-width:calc(100% - 40px); min-height:200px; z-index:100000001; background:#ffffff; border:1px solid #444444; border-radius:4px; box-shadow: 0px 5px 10px rgba(0,0,0,0.4); font-family:"+settings.fontfamily+"; font-size: "+settings.fontsize+"; color:#333333; overflow: hidden; margin-bottom:35px;'>"+"\n";
      
      //TITLE & CLOSE & ICON
      if (settings.header == true){
        html += "   <div class='CA_close' style='position:absolute; right:0px; top:0; width:40px; height:40px; line-height:40px; text-align:center; font-size:16px; font-weight:bold; cursor:pointer; color:"+settings.colorTitle+";'>X</div>"+"\n";
        if (settings.icon == false){
          html += "   <h4 class='CA_title' style='background:"+settings.backgroundTitle+"; color:"+settings.colorTitle+"; margin:0; height: 40px; line-height:40px; padding:0 15px;'>"+settings.title+"</h4>"+"\n";  
        }else{
          html += "   <h4 class='CA_title' style='background:"+settings.backgroundTitle+"; color:"+settings.colorTitle+"; margin:0; height: 40px; line-height:40px; padding:0 15px 0 40px;'>"+settings.title+"</h4>"+"\n";
          html += "   <div class='CA_icon' style='position:absolute; top:2px; left:2px; width:36px; height:36px; line-height:36px; text-align:center; font-size:20px; color:"+settings.colorTitle+";'>"+settings.icon+"</div>"+"\n";
        }
      }
    
      //BTN CONFIRM & BTN CANCEL
      if(settings.btnCancel == true || settings.btnConfirm == true){
        //TEXT
        html += "   <div class='CA_text' style='margin:15px 15px 60px;'>"+settings.text+"</div>"+"\n";
        
        html += "   <div class='CA_btn_container' style='position:absolute; bottom:0; left:0; width:100%; height:40px; font-size:0;'>"+"\n";
        if(settings.btnCancel == true){
          html += "     <div class='CA_btn CA_cancel' style='font-size:14px; position:absolute; bottom:0; width:50%; height:40px; line-height:40px; text-align:center; cursor:pointer; border-top:1px solid #cccccc; background:#e9e9e9; border-right:1px solid #cccccc;'>"+settings.btnCanceltext+"</div>"+"\n";
        }
        if(settings.btnConfirm == true){
          html += "     <div class='CA_btn CA_confirm' style='font-size:14px; position:absolute; bottom:0; width:50%; height:40px; line-height:40px; text-align:center; cursor:pointer; border-top:1px solid #cccccc; background:#e9e9e9; border-left:1px solid #cccccc; right:0;'>"+settings.btnConfirmText+"</div>"+"\n";
        }
        html += "   </div>"+"\n";
      }else{
        //TEXT
        html += "   <div class='CA_text' style='margin:15px;'>"+settings.text+"</div>"+"\n";
      }
    
      html += " </div>"+"\n";
    //HTML -----------------------------------
    
    //ON START FUNCTION
    function onStart(){
      //ON OPEN FUNCTION
      settings.onOpenFunction();
      
      //RENDER CUSTOMALERT
      app.append(html);
      
      //ANIMATION IN
      if(settings.animationInDuration != '0' && settings.animationInDuration != '0s'){
        $("#CA_mask, #CA_alert").css("transition",settings.animationInDuration);
        $("#CA_alert").css("opacity","0").css("top","10%");
        $("#CA_mask").css("opacity","0");
        setTimeout(function(){ 
          $("#CA_alert").css("opacity","1").css("top","15%");
          $("#CA_mask").css("opacity",settings.maskOpacity);
        }, 100);  
      }
            
      //CENTER
      var windowWidth; 
      var alertWidth; 

      function CA_center(){
        windowWidth = $(window).width();
        alertWidth = $("#CA_alert").width();
        $("#CA_alert").css("left",((windowWidth/2) - (alertWidth/2)) +"px");
      }
      CA_center();

      //HEIGHT
      var windowHeight; 
      var alertHeight; 

      function CA_height(){
        windowHeight = $(window).height();
        alertHeight = $("#CA_alert").height();
        var position = $("#CA_alert").position();

        if ((alertHeight + position.top) >= (windowHeight - 40)){
          $("#CA_alert").css("position","absolute");
        }else{
          $("#CA_alert").css("position","fixed");
        }
      }
      CA_height();

      //WINDOW RESIZE	
      $(window).resize(function() {
        CA_center();
        CA_height();
      });	
      
      //Function BTN cancel
      $(".CA_cancel").bind( "click", function(){
        settings.btnCancelFunction();
        CloseAlert();
      });

      //Function BTN Confirm
      $(".CA_confirm").bind( "click", function(){
        settings.btnConfirmFunction();
        CloseAlert();
      });
      
      //CLOSE ALERT & ON CLOSE FUNCTION
      $(".CA_close, #CA_mask").bind( "click", function(){
        CloseAlert();
      });
    }
    
    //START CUSTOMALERTS
    onStart();
    
    //Function Close Alert
    function CloseAlert(){
      settings.onCloseFunction();
      
      //ANIMATION OUT
      if(settings.animationOutDuration != '0' && settings.animationOutDuration != '0s'){
        $("#CA_mask, #CA_alert").css("transition",settings.animationOutDuration);      
        setTimeout(function(){ 
          $("#CA_alert").css("opacity","0").css("top","10%");
          $("#CA_mask").css("opacity","0");
          setTimeout(function(){ 
            $("#CA_mask, #CA_alert").remove();
          }, 100);
        }, 100);         
      }else{
        $("#CA_mask, #CA_alert").remove();
      }     
    }
    
    //METHODS
    return {
        open: function(){
          onStart();
        },
        close: function() {
          CloseAlert();
        }
    }
  }
}( jQuery ));




/* *********************************************************************************************************** */
/*var html ="<h3>Form</h3><p>lorem ipsum dolor sit amet</p><p>Name: <input type='text' id='name'/></p><a href='#'>link</a><p>lorem ipsum dolor sit amet</p><p>lorem ipsum dolor sit amet</p><p>lorem ipsum dolor sit amet</p>";

var customAlert;

$(".tmp").click(function(){
  customAlert = $().customAlert({
    alertClass:'Custom',
    maskClass: 'Custom_mask',
    text: "Lorem<br>Ipsum<br>Dolor sit amet",
    header: true,
    title: "customAlert",
    icon: '<i class="fa fa-bell" aria-hidden="true"></i>',
    width:'420',
    fontfamily: 'helvetica',
    fontsize: '14',
    backgroundTitle: "#5a8ff2",
    colorTitle: "#333333",
    maskColor: 'blue',
    maskOpacity: '0.3',
    btnConfirm: true,
    btnConfirmText: 'Confirm',
    btnCancel: true,
    btnCanceltext: 'Cancel',
    btnConfirmFunction: function(){
      $(".actions").append("<li>Click in Confirm</li>");
    },
    btnCancelFunction: function(){
      $(".actions").append("<li>Click in Cancel</li>");
    },
    onOpenFunction: function(){
      $(".actions").append("<li>Alert Open</li>");
    },
    onCloseFunction: function(){
      $(".actions").append("<li>Alert Close</li>");
    },
    onCreateFunction: function(){
      $(".actions").append("<li>Alert Created</li>");
    },
    animationInDuration: '0.3s',
    animationOutDuration: '0.3s'
  });
});*/
/* *********************************************************************************************************** */
// ---------------------------------------------------------------------------------------------------------------------------
// CLICKCLASS 1.2.0
(function($) {
  $.fn.clickClass = function(options) {
    //VARS & DEFAULT VALUE
    var settings = $.extend({
      class: 'clickClass',
      container: '',
      onlyOneSelected: false,
      onClick:function(){},
      onActivate:function(){},
      onDeactivate:function(){}
    }, options );
    
    var i = 0;
    if(settings.container == ''){
      i = 1;
    }
    
    var number = Math.floor((Math.random() * 10000) + 1);

    $(this).each(function(){
      var that = $(this);

      if (settings.onlyOneSelected == true){
        $(this).attr("data-menuId",number);
      }
      
      $(this).on("touch click", function(e){
        e.preventDefault();        
        if(i == 1){
          settings.container = that;
        } 
        
        settings.onClick();
        
        if (settings.container.hasClass(settings.class)){
          settings.container.removeClass(settings.class);
          settings.onDeactivate();
        }else{
          if (settings.onlyOneSelected == true){
            $("[data-menuId="+number+"]").removeClass(settings.class);
          }
          settings.container.addClass(settings.class);
          settings.onActivate();
        }
           
      });
    });
  };
}( jQuery ));
// ---------------------------------------------------------------------------------------------------------------------------
//FORMVALIDATOR 1.0.0
(function($) {
  $.fn.formValidator = function(options) {
    
    //OPTIONS
    var settings = $.extend({     
    }, options );
    
    //METHODS
    return {
        required: function(value){
          if (value != '' && value.length > 0) return true;
	        return false;
        },
        isNumeric: function(value) {
          if (!isNaN(value)) return true;
	        return false;
        },
        isCharacter: function(value) {
          if (isNaN(value)) return true;
	        return false;
        },
        noSpaceOnly: function(value){
          var noSpace = false;
          for(var i = 0; i < value.length; i++){
            if(value.charAt(i) != ' ') return true;
          }
          return false;
        },
        validDni: function(value) {
          var validChars = 'TRWAGMYFPDXBNJZSQVHLCKET';
          var nifRexp = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;
          var nieRexp = /^[XYZ]{1}[0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;
          if ( value == '') return false;
          var str = value.toString().toUpperCase();
          if (!nifRexp.test(str) && !nieRexp.test(str)) return false;
          var nie = str.replace(/^[X]/, '0').replace(/^[Y]/, '1').replace(/^[Z]/, '2');
          var letter = str.substr(-1);
          var charIndex = parseInt(nie.substr(0, 8)) % 23;
          if (validChars.charAt(charIndex) === letter) return true;
          return false;
        },
        validEmail: function(value) {
          var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
          if(value.match(regex)) return true;
          return false;
        },
        validTlf: function(value) {
          if((value.substr(0,1) == 8 || value.substr(0,1) == 9) && value.length == 9 && !isNaN(value)) return true;
          return false;
        },
        validMobile: function(value) {
          if((value.substr(0,1) == 6 || value.substr(0,1) == 7) && value.length == 9 && !isNaN(value)) return true;
          return false;
        },
        validPostalCode: function(value) {
          var regex = /^([1-9]{2}|[0-9][1-9]|[1-9][0-9])[0-9]{3}$/;
          if(value.match(regex)) return true;
          return false;
        },
        validDate: function(value) {
          var DateRexp1 = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
          var DateRexp2 = /^\d{1,2}\-\d{1,2}\-\d{4}$/;
          if(value.match(DateRexp1) || value.match(DateRexp2)) return true;
          return false;
        }      
    }
  }
}( jQuery ));
// ---------------------------------------------------------------------------------------------------------------------------








// ---------------------------------------------------------------------------------------------------------------------------






// ---------------------------------------------------------------------------------------------------------------------------

