$(function() {

	let menu = document.getElementById('top_line');

	window.addEventListener('scroll', function() {
		if(this.window.pageYOffset === 0){
			menu.className = "top__line"
		} else{
			menu.className = "top__line-shadow"
		}
	  });

	  let btn1 = document.getElementById('btn1')
	  let btn2 = document.getElementById('btn2')
	  let btn3 = document.getElementById('btn3')
	  let btn4 = document.getElementById('btn4')

	  let popup = document.getElementById('popup')
	  let popupCont = document.getElementById('popupCont')

	  btn1.onclick = function() {
		popup.className = "popup"
		popupCont.className = "popup-container"
	  };

	  btn2.onclick = function() {
		popup.className = "popup"
		popupCont.className = "popup-container"
	  };

	  btn3.onclick = function() {
		popup.className = "popup"
		popupCont.className = "popup-container"
	  };

	  btn4.onclick = function() {
		popup.className = "popup"
		popupCont.className = "popup-container"
	  };

	// //SVG Fallback
	// if(!Modernizr.svg) {
	// 	$("img[src*='svg']").attr("src", function() {
	// 		return $(this).attr("src").replace(".svg", ".png");
	// 	});
	// };

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});


class ItcAccordion {
	constructor(target, config) {
	  this._el = typeof target === 'string' ? document.querySelector(target) : target;
	  const defaultConfig = {
		alwaysOpen: true,
		duration: 350
	  };
	  this._config = Object.assign(defaultConfig, config);
	  this.addEventListener();
	}
	addEventListener() {
	  this._el.addEventListener('click', (e) => {
		const elHeader = e.target.closest('.accordion__header');
		if (!elHeader) {
		  return;
		}
		if (!this._config.alwaysOpen) {
		  const elOpenItem = this._el.querySelector('.accordion__item_show');
		  if (elOpenItem) {
			elOpenItem !== elHeader.parentElement ? this.toggle(elOpenItem) : null;
		  }
		}
		this.toggle(elHeader.parentElement);
	  });
	}
	show(el) {
	  const elBody = el.querySelector('.accordion__body');
	  if (elBody.classList.contains('collapsing') || el.classList.contains('accordion__item_show')) {
		return;
	  }
	  elBody.style.display = 'block';
	  const height = elBody.offsetHeight;
	  elBody.style.height = 0;
	  elBody.style.overflow = 'hidden';
	  elBody.style.transition = `height ${this._config.duration}ms ease`;
	  elBody.classList.add('collapsing');
	  el.classList.add('accordion__item_slidedown');
	  elBody.offsetHeight;
	  elBody.style.height = `${height}px`;
	  window.setTimeout(() => {
		elBody.classList.remove('collapsing');
		el.classList.remove('accordion__item_slidedown');
		elBody.classList.add('collapse');
		el.classList.add('accordion__item_show');
		elBody.style.display = '';
		elBody.style.height = '';
		elBody.style.transition = '';
		elBody.style.overflow = '';
	  }, this._config.duration);
	}
	hide(el) {
	  const elBody = el.querySelector('.accordion__body');
	  if (elBody.classList.contains('collapsing') || !el.classList.contains('accordion__item_show')) {
		return;
	  }
	  elBody.style.height = `${elBody.offsetHeight}px`;
	  elBody.offsetHeight;
	  elBody.style.display = 'block';
	  elBody.style.height = 0;
	  elBody.style.overflow = 'hidden';
	  elBody.style.transition = `height ${this._config.duration}ms ease`;
	  elBody.classList.remove('collapse');
	  el.classList.remove('accordion__item_show');
	  elBody.classList.add('collapsing');
	  window.setTimeout(() => {
		elBody.classList.remove('collapsing');
		elBody.classList.add('collapse');
		elBody.style.display = '';
		elBody.style.height = '';
		elBody.style.transition = '';
		elBody.style.overflow = '';
	  }, this._config.duration);
	}
	toggle(el) {
	  el.classList.contains('accordion__item_show') ? this.hide(el) : this.show(el);
	}
  }

