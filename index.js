
const fname = document.getElementById('fname');
const email = document.getElementById('email');
const tel = document.getElementById('tel');
const message = document.getElementById('message');

const submit = document.getElementById('submit');

submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    let econtact_container = `
    <h1>Name: </h1>${fname.value}
    <br>
    <h1>Email: </h1>${email.value}
    <br>
    <h1>Telephone: </h1>${tel.value}
    <br>
    <h1>Message: </h1>${message.value}
    `;

    Email.send({
        SecureToken : "2b4051b5-3f4a-4d9a-bac7-d2beaffa2f3f", //add your token here
        To : 'puravaidadeesmalteria@gmail.com', 
        From : "puravaidadeesmalteria@gmail.com",
        Subject : "This is the subject",
        Body : econtact_container
    }).then(
      message => alert(message)
    );
});


/* Click outside to close the menu */

$(document).ready(function(){
	
	function isNavbarToggled(){
		return $('#navbarSupportedContent').hasClass('show');
	}

	function toggleNavbar(){
		const navbarEl = $('#navbarSupportedContent');
		if(isNavbarToggled()){
			navbarEl.removeClass('show')
		} else {
		   navbarEl.addClass('show')
		}
	}

	$(document).click(function() {
		if(isNavbarToggled()) toggleNavbar();
	});

})
