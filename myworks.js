var index = 0;
var slider_images = [
	{
		url: "https://res.cloudinary.com/dsgpxgwxs/image/upload/c_scale,h_357,q_70/v1621283640/Products/Screenshot_from_2021-05-17_20-08-17_dtzvpb.png",
		title: "Tic Tac Toe",
		using: ["html", "css", "svelte", "javascript"],
	},
	{
		url: "https://res.cloudinary.com/dsgpxgwxs/image/upload/c_scale,q_68,w_631/v1621282243/Products/Screenshot_from_2021-05-17_20-07-27_q1zdj4.png",
		title: "Redesign of ASTUs Website",
		using: ["html", "css", "react", "typescript"],
	},
	{
		url: "https://res.cloudinary.com/dsgpxgwxs/image/upload/v1621282230/Products/Screenshot_from_2021-05-17_20-10-04_wiaqo7.png",
		title: "Placement Viewer Bot",
		using: ["python - selenium", "nodejs"],
	},
	{
		url: "https://res.cloudinary.com/dsgpxgwxs/image/upload/v1621282226/Products/Screenshot_from_2021-05-17_19-57-59_hkfly3.png",
		title: "Amazing Ball - HTML5 Game",
		using: ["html", "css", "javascript"],
	},
	{
		url: "https://res.cloudinary.com/dsgpxgwxs/image/upload/v1621282229/Products/Screenshot_from_2021-04-30_10-31-52_cijf8r.png",
		title: "Matrix JS",
		using: ["javascript"],
	},
];

function slider_init() {
	var slider = $(".image-slider .container");
	for (var i = 0; i < slider_images.length; i++) {
		var img_container = document.createElement("div");
		img_container.className = "slide";
		var image = document.createElement("img");
		var title = document.createElement("h1");
		var techs = document.createElement("div");
		techs.className = "chips-container";
		for (var j = 0; j < slider_images[i]["using"].length; j++) {
			var chip = document.createElement("span");
			chip.className = "chip";
			chip.innerText = slider_images[i]["using"][j];
			techs.appendChild(chip);
		}
		image.src = slider_images[i]["url"];
		image.alt = slider_images[i]["title"];
		image.loading = "lazy";
		title.innerText = slider_images[i]["title"];

		img_container.appendChild(image);
		img_container.appendChild(title);
		img_container.appendChild(techs);

		slider.appendChild(img_container);
		$(".indicators").appendChild(document.createElement("span"));
	}
}

function slide() {
	var images = [...$$(".image-slider .container .slide")];
	var indicators = [...$$(".indicators span")];

	if (index >= slider_images.length) {
		index = 0;
		images[slider_images.length - 1].style.display = "none";
		indicators[slider_images.length - 1].className = "";
	}

	images[index].style.display = "block";
	indicators[index].className = "active";

	if (index > 0) {
		images[index - 1].style.display = "none";
		indicators[index - 1].className = "";
	}
	index++;
}

slider_init();
slide();
setInterval(slide, 5000);
