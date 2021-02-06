// kill sticky popups
// (function()%7B(function%20()%20%7Bvar%20i%2C%20elements%20%3D%20document.querySelectorAll('body%20*')%3Bfor%20(i%20%3D%200%3B%20i%20%3C%20elements.length%3B%20i%2B%2B)%20%7Bif%20(getComputedStyle(elements%5Bi%5D).position%20%3D%3D%3D%20'fixed')%20%7Belements%5Bi%5D.parentNode.removeChild(elements%5Bi%5D)%3B%7D%7D%7D)()%7D)()

// // allow scrolling
// (function()%7B(function%20()%20%7Bvar%20i,%20elements%20=%20document.querySelectorAll('body%20*');for%20(i%20=%200;%20i%20%3C%20elements.length;%20i++)%20%7Bif%20(getComputedStyle(elements%5Bi%5D).position%20===%20'fixed')%20%7Belements%5Bi%5D.parentNode.removeChild(elements%5Bi%5D);%7D%7D%7D)();document.querySelector('body').style.setProperty('overflow','auto','important');%20document.querySelector('html').style.setProperty('overflow','auto','important');%7D)()

// ** what the above encoded functions do **
// const killSticky = function () {
//     (function () {
//       var i,
//         elements = document.querySelectorAll("body *");
//       for (i = 0; i < elements.length; i++) {
//         if (getComputedStyle(elements[i]).position === "fixed") {
//           elements[i].parentNode.removeChild(elements[i]);
//         }
//       }
//     })();
//   };

const allowScroll = function () {
	(function () {
		var i,
			elements = document.querySelectorAll("body *");
		for (i = 0; i < elements.length; i++) {
			if (getComputedStyle(elements[i]).position === "fixed") {
				elements[i].parentNode.removeChild(elements[i]);
			}
		}
	})();
	document
		.querySelector("body")
		.style.setProperty("overflow", "auto", "important");
	document
		.querySelector("html")
		.style.setProperty("overflow", "auto", "important");
};
