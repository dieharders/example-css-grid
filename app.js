// Banner stuff
function goGitHub() {
    window.open('https://github.com/dieharders/example-css-grid', '_blank');
}

// Grid container
var e = document.getElementById('example1');

function doGridGap(btn) {
    var toggle = btn.dataset.toggle;

    if (toggle == 'false' || toggle == null) {
        e.style.gridGap = '4px';
        btn.dataset.toggle = 'true';
    } else {
        e.style.gridGap = 'initial';
        btn.dataset.toggle = 'false';
    }
}

function doJustify(btn) {
    var toggle = btn.dataset.toggle;

    if (toggle == 'false' || toggle == null) {
        e.style.justifyContent = 'end';
        btn.dataset.toggle = 'true';
    } else {
        e.style.justifyContent = 'initial';
        btn.dataset.toggle = 'false';
    }
}

function doJustifySelf(btn) {
    var toggle = btn.dataset.toggle;
    var item = e.children[0];
    
    if (toggle == 'false' || toggle == null) {
        item.style.justifySelf = 'start';
        btn.dataset.toggle = 'true';
    } else {
        item.style.justifySelf = 'initial';
        btn.dataset.toggle = 'false';
    }
}

function resetAll() {
    // Remove styling from grid container
    e.removeAttribute('style');
    // Remove styling from each grid item
    for (let index = 0; index < e.children.length; index++) {
        e.children[index].removeAttribute('style');
    }
    // Remove all button attributes
    var ch = document.getElementsByClassName('plate');
    for (let index = 0; index < ch.length; index++) {
        ch[index].removeAttribute('data-toggle');
    }
}