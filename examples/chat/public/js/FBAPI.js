//FB API
var facebookLogin = document.getElementById("facebooklogin");
var page = document.getElementById("page");
var nicknameButton = document.getElementById("nicknamebutton");
var publishButton = document.getElementById("publish-button");
var everything = document.getElementById("everything");

facebookLogin.addEventListener("click", function(evt) {
	evt.preventDefault();

	FB.login(function(response) {
		if (response.authResponse) {
			//console.log('Welcome! Fetching your information...');

			FB.api('/me', function(response) {
				//console.log('Good to see you, ' + response.name + '.');
				var userId = response.id;
				console.log(response);

				FB.api(
			    "/me/friends",
			    function (response) {
			      	if (response && !response.error) {
				        /* handle the result */
				        console.log(response);
				        var friendList = response.data;
				        setUsername(userId, friendList);

				       	//start
 					// 	page.classList.remove('is-hidden');
						// page.classList.add('is-visible');
						// nicknameButton.classList.remove('is-visible');
						// nicknameButton.classList.add('is-hidden');

						nicknameButton.classList.remove('is-visible');
            			nicknameButton.classList.add('is-hidden');
						facebookLogin.classList.remove('is-hidden');
						facebookLogin.classList.add('is-visible');
						

			      	}
			    });
			});

		} else {
			console.log('User cancelled login or did not fully authorize.');
		}

	}, {scope:"user_friends"});
 });




