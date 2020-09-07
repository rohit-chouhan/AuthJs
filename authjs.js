
var authget = {
		accessToken: "",
		name:"",
		first_name:"",
		last_name:"",
		email:"",
		profile:""
}
	
window.name="";
 window.fbAsyncInit = function() {
        FB.init({
            appId      : window.apikey,
            xfbml      : true,
            version    : 'v2.8'
        });
    };

    (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));


var authjs = {
  set : function(x) {
   window.apikey=x;
  },
  login :  function (){
        FB.login(function(response){
			window.at=response.authResponse.accessToken;
			authget.accessToken=response.authResponse.accessToken;
			FB.api('/me', 'GET', {fields: 'first_name,last_name,name,id,email'}, function(response) {
			authget.name=response.name;
			authget.first_name=response.first_name;
			authget.last_name=response.last_name;
			authget.email=response.email;
			authget.profile="https://graph.facebook.com/"+response.id+"/picture?type=large";
			});
            if(response.status === 'connected'){
			  setTimeout(function(){ authjsinit(); }, 1500);
            } else if(response.status === 'not_authorized') {
            } else {
            }

        });
    },
	logout: function (){
        FB.logout(function(response) {
            document.location.reload();
        });
    },
	status: function(){
        FB.getLoginStatus(function(response){
            if(response.status === 'connected'){
                 console.log('Connected');
            } else if(response.status === 'not_authorized') {
                   console.log('Not Login');
            } else {
                  console.log('Not Login');
            }
        });
	}
};