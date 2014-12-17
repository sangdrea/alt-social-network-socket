//FB API
var facebookLogin = document.getElementById("facebook-login");
var page = document.getElementById("page");
var loginButton = document.getElementById("login-button");
var publishButton = document.getElementById("publish-button");


facebookLogin.addEventListener("click", function(evt) {
	evt.preventDefault();

	FB.login(function(response) {
		if (response.authResponse) {
			//console.log('Welcome! Fetching your information...');

			FB.api('/me', function(response) {
				//console.log('Good to see you, ' + response.name + '.');
				// var userId = response.id;
				console.log(response);
			});

				/* make the API call */
			FB.api(
			    "/me/friends",
			    function (response) {
			      if (response && !response.error) {
			        /* handle the result */
			        console.log(response);
			      }
			    }
			);

		} else {
			console.log('User cancelled login or did not fully authorize.');
		}

	}, {scope:"user_friends"});
 });
