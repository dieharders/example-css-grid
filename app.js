// Banner stuff
function goGitHub() {
    window.open('https://github.com/dieharders/example-css-grid', '_blank');
}

// Grid container reference
var e = document.getElementById('example1');

// 'Try it' buttons
function doGridGap(btn) {
    var toggle = btn.dataset.toggle;

    if (toggle == 'false' || toggle == null) {
        e.classList.add('gridGap');
        btn.dataset.toggle = 'true';
    } else {
        e.classList.remove('gridGap');
        btn.dataset.toggle = 'false';
    }
}

function doJustify(btn) {
    var toggle = btn.dataset.toggle;

    if (toggle == 'false' || toggle == null) {
        e.classList.add('justifyContent');
        btn.dataset.toggle = 'true';
    } else {
        e.classList.remove('justifyContent');
        btn.dataset.toggle = 'false';
    }
}

function doJustifySelf(btn) {
    var toggle = btn.dataset.toggle;
    var item = e.children[0];

    if (toggle == 'false' || toggle == null) {
        //item.style.justifySelf = 'start';
        item.classList.add('justifySelf');
        btn.dataset.toggle = 'true';
    } else {
        //item.style.justifySelf = 'initial';
        item.classList.remove('justifySelf');
        btn.dataset.toggle = 'false';
    }
}

function resetAll() {
    // Remove styling from grid container
    e.classList.remove('gridGap');
    e.classList.remove('justifyContent');
    // Remove styling from each grid item
    for (let index = 0; index < e.children.length; index++) {
        let child = e.children[index];
        child.classList.remove('justifySelf');
    }
    // Remove all button attributes
    var ch = document.getElementsByClassName('plate');
    for (let index = 0; index < ch.length; index++) {
        ch[index].removeAttribute('data-toggle');
    }
}