// Grid container
var e = document.getElementById('example1');

function doGridGap(btn) {
    var toggle = btn.getAttribute('toggle');
    if (toggle == undefined || toggle == 'false') {
        e.style.gridGap = '4px';
        btn.setAttribute('toggle', 'true');
    } else {
        e.style.gridGap = 'initial';
        btn.setAttribute('toggle', 'false');
    }
}

function doJustify(btn) {
    var toggle = btn.getAttribute('toggle');
    if (toggle == undefined || toggle == 'false') {
        e.style.justifyContent = 'end';
        btn.setAttribute('toggle', 'true');
    } else {
        e.style.justifyContent = 'initial';
        btn.setAttribute('toggle', 'false');
    }
}

function doJustifySelf(btn) {
    var toggle = btn.getAttribute('toggle');
    var item = e.children[0];
    
    if (toggle == undefined || toggle == 'false') {
        item.style.justifySelf = 'start';
        btn.setAttribute('toggle', 'true');
    } else {
        item.style.justifySelf = 'initial';
        btn.setAttribute('toggle', 'false');
    }
}

function resetAll() {
    // Remove styling from grid container
    e.removeAttribute('style');
    // Remove styling from each grid item
    for (let index = 0; index < e.children.length; index++) {
        e.children[index].removeAttribute('style');
    }
}