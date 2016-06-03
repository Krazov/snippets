// remove elements from page
Array.prototype.forEach.call(document.querySelectorAll('.className'), function (element) { element.parentNode.removeChild(element); });
