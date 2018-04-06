
function adSetter(){
    alert(navigator.userAgent+"1st");
	alert("22"+/(android)/i.test(navigator.userAgent));
var admobid = {};
// select the right Ad Id according to platform
if( /(android)/i.test(navigator.userAgent) ) { 
    admobid = { // for Android
        banner: 'ca-app-pub-3670000423095472/3826999342',
        interstitial: 'ca-app-pub-3670000423095472/5303732548'
    };
} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
    admobid = { // for iOS
        banner: 'ca-app-pub-3670000423095472/3826999342',
        interstitial: 'ca-app-pub-6869992474017983/7563979554'
    };
} else {
    admobid = { // for Windows Phone
        banner: 'ca-app-pub-3670000423095472/3826999342',
        interstitial: 'ca-app-pub-3670000423095472/5303732548'
    };
}

if(AdMob) AdMob.createBanner( {
    adId:admobid.banner, 
    position:AdMob.AD_POSITION.BOTTOM_CENTER, 
    autoShow:true} );

   if(AdMob) AdMob.prepareInterstitial( {adId:admobid.interstitial, autoShow:false} ); 

}

function adAndroidSetter(){
    alert(navigator.userAgent);
	alert("11"+/(android)/i.test(navigator.userAgent));
var admobid = {};
// select the right Ad Id according to platform
if( /(android)/i.test(navigator.userAgent) ) { 
    admobid = { // for Android
        banner: 'ca-app-pub-3670000423095472/3826999342',
        interstitial: 'ca-app-pub-3670000423095472/5303732548'
    };
} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
    admobid = { // for iOS
        banner: 'ca-app-pub-3670000423095472/3826999342',
        interstitial: 'ca-app-pub-3670000423095472/5303732548'
    };
} else {
    admobid = { // for Windows Phone
        banner: 'ca-app-pub-3670000423095472/3826999342',
        interstitial: 'ca-app-pub-3670000423095472/5303732548'
    };
}

if(AdMob) AdMob.createBanner( {
    adId:admobid.banner, 
    position:AdMob.AD_POSITION.BOTTOM_CENTER, 
    autoShow:true} );

   if(AdMob) AdMob.prepareInterstitial( {adId:admobid.interstitial, autoShow:false} ); 

}

  function onDeviceReady(){
  alert("device ready");
      adSetter();
	  adAndroidSetter();
  }

function backCall(e){
// pormt when back button is pressed on home screen
  e.preventDefault();
  var action=confirm("Do you want to Exit");
  if(action){
      if(AdMob) AdMob.showInterstitial();
      navigator.app.exitApp();
  }
}


function domLoaded(){

 document.addEventListener("deviceready", onDeviceReady, false);
 document.addEventListener("backbutton", backCall, false);
}