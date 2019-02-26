var menu_btn = document.querySelector('.navigation');

function toggle(){
	if(menu_btn.className === 'navigation'){
		menu_btn.className += ' view';
	}
	else{
		menu_btn.className = 'navigation';
	};

};

