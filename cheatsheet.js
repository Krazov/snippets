// remove elements from page
Array.prototype.forEach.call(document.querySelectorAll('.className'), function (element) { element.parentNode.removeChild(element); });

// get duration of transition
[].forEach.call(document.querySelectorAll('.elements'), function (element) {
    console.log(parseFloat(window.getComputedStyle(element).getPropertyValue('transition').split(/\s/)[1], 10));
});

console.log(parseFloat(window.getComputedStyle(document.querySelector('.element')).getPropertyValue('transition').split(/\s/)[1], 10));
