// Banner stuff
function goGitHub() {
    window.open('https://github.com/dieharders/example-css-grid', '_blank');
}

// Grid container reference
var g = document.getElementById('example1');

// 'Try it' buttons
function doGridGap(btn) {
    var toggle = btn.dataset.toggle;

    if (toggle == 'false' || toggle == null) {
        g.classList.add('gridGap');
        btn.dataset.toggle = 'true';
    } else {
        g.classList.remove('gridGap');
        btn.dataset.toggle = 'false';
    }
}

function doJustify(btn) {
    var toggle = btn.dataset.toggle;

    if (toggle == 'false' || toggle == null) {
        g.classList.add('justifyContent');
        btn.dataset.toggle = 'true';
    } else {
        g.classList.remove('justifyContent');
        btn.dataset.toggle = 'false';
    }
}

function doJustifySelf(btn) {
    var toggle = btn.dataset.toggle;
    var item = g.children[0];

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
    g.classList.remove('gridGap');
    g.classList.remove('justifyContent');
    // Remove styling from each grid item
    for (let index = 0; index < g.children.length; index++) {
        let child = g.children[index];
        child.classList.remove('justifySelf');
    }
    // Remove all button attributes
    var ch = document.getElementsByClassName('plate');
    for (let index = 0; index < ch.length; index++) {
        ch[index].removeAttribute('data-toggle');
    }
    // Reset code input divs
    grid.innerHTML = gridCssString;
    items.innerHTML = gridItemCss;
}

// LOGIC //
//
// Set grid container
var gridCssString =
`display: grid;
grid-template-columns: auto;
grid-template-rows: auto;
grid-gap: 0px;
grid-template-areas:
  "header header header header"
  "main empty empty sidebar"
  "main footer footer footer";`;
var grid = document.getElementById('gridCode');
//g.style.cssText = gridCssString;
grid.innerHTML = gridCssString;

// Set grid items
var randItemTemplate = `grid-area: footer;`;
var randItemColor = `background-color: #1eeea2;`;
var gridItemCss =
`border: 4px solid #808080;
`;
var items = document.getElementById('gridItemCode');
items.innerHTML = gridItemCss;
function applyCssToItems() {
    // Apply style to all grid items
    for (let index = 0; index < g.children.length; index++) {
        let child = g.children[index];
        let css = items.innerHTML;
        //let css = items.innerHTML.replace(/<div>/g, '');
        //css = css.replace(/<br>/g, '');
        //css = css.replace(/<\/div>/g, '');
        child.style.cssText = css;
    }
}

// Listen to changes to grid code input
grid.addEventListener("input", function() {
    let css = grid.innerHTML;
    //let css = grid.innerHTML.replace(/<div>/g, '');
    //css = css.replace(/<br>/g, '');
    //css = css.replace(/<\/div>/g, '');
    g.style.cssText = css;    
}, false);

// Listen to changes to grid item code input
items.addEventListener("input", function() {
    applyCssToItems();
}, false);