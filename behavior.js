document.addEventListener("DOMContentLoaded", function (event) {
	// Disqus
	var d = document,
		s = d.createElement("script");
	s.src = "https://naol.disqus.com/embed.js";
	s.setAttribute("data-timestamp", +new Date());
	(d.head || d.body).appendChild(s);

	// Image Scaller

	var images = $$("img.small");
	images.forEach((image) => {
		image.addEventListener("click", (event) => {
			if (event.target.className == "small") {
				event.target.className = "big";
				$(".cover").style.top = 0;
				showCover();
			} else {
				event.target.className = "small";
				hideCover();
			}
		});
	});

	$(".cover").addEventListener("click", (event) => {
		if (!menuOpened) {
			images.forEach((image) => {
				image.className = "small";
			});
		} else {
			closeMenu();
		}
		hideCover();
	});

	function showCover() {
		$(".cover").style.display = "block";
	}
	function hideCover() {
		$(".cover").style.display = "none";
	}

	// Mobile Menu
	var menuOpened = false;
	var menu = $(".desktop_menu");
	var menu_btn = $(".menu_btn");

	menu_btn.addEventListener("click", (event) => {
		menuOpened ? closeMenu() : openMenu();
	});

	function openMenu() {
		menu.style.right = "0";
		$(".cover").style.top = "81px";
		menu_btn.classList.add("active");
		document.body.style.overflow = "hidden";
		showCover();
		menuOpened = true;
	}

	function closeMenu() {
		menu.style.right = "-100%";
		menu_btn.classList.remove("active");
		document.body.style.overflow = "auto";
		hideCover();
		menuOpened = false;
	}
});

function $(selector) {
	return document.querySelector(selector);
}

function $$(selector) {
	return document.querySelectorAll(selector);
}
