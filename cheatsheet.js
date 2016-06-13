// remove elements from page
Array.prototype.forEach.call(document.querySelectorAll('.className'), function (element) { element.parentNode.removeChild(element); });

// get duration of transition
[].forEach.call(document.querySelectorAll('.elements'), function (element) {
    console.log(Number(window.getComputedStyle(element).getPropertyValue('transition').split(/\s/)[1].replace(/sm?/g, '')));
});

console.log(Number(window.getComputedStyle(document.querySelector('.element')).getPropertyValue('transition').split(/\s/)[1].replace(/sm?/g, '')));
