"use strict";

for(const i of document.querySelectorAll('img.lazyload')){
	i.src = i.getAttribute('data-src');
}
