let template = document.getElementById(`nav-menu-item`);

function AddNewMenuItem(text, href) {
	template.content.firstElementChild.firstElementChild.innerText = text;
	template.content.firstElementChild.firstElementChild.href = href || `index.html`;
	document.getElementsByClassName(`nav-menu`)[0].append(template.content.cloneNode(true));
}

if ( localStorage.getItem(`auth`) ) {
		AddNewMenuItem(`Log Out`, `index.html`);
		AddNewMenuItem(`link3`);
		AddNewMenuItem(`link2`);
		AddNewMenuItem(`link1`);

		document.querySelector(`.nav-menu li a`).addEventListener(`click`, () => localStorage.removeItem(`auth`));
	} else {
		AddNewMenuItem(`Sign In`, `signin.html`);	
		AddNewMenuItem(`Sign Up`, `signup.html`);
}