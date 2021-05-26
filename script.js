document.addEventListener('DOMContentLoaded', function() {
    let container = document.createElement('div');
    container.className = 'header-container';
    document.body.appendChild(container);
    let liBitn = document.getElementsByClassName('li-btn')[0];

    let h1 = document.createElement('h1')
    h1.className = 'h1';
    Let h1Text = document.createTextNode('This is an h1');
    h1.appendChild(h1Text);
    container.appendChild(h1);

    let h2 = document.createElement('h2')
    h2.className = 'h2';
    Let h1Text = document.createTextNode('This is an h2');
    h2.appendChild(h2Text);
    container.appendChild(h2);

    let h3 = document.createElement('h3')
    h3.className = 'h3';
    Let h3Text = document.createTextNode('This is an h3');
    h3.appendChild(h3Text);
    container.appendChild(h3);

    let h4 = document.createElement('h4')
    h4.className = 'h4';
    Let h4Text = document.createTextNode('This is an h4');
    h4.appendChild(h4Text);
    container.appendChild(h4);

    let h5 = document.createElement('h5')
    h5.className = 'h5';
    Let h5Text = document.createTextNode('This is an h5');
    h5.appendChild(h5Text);
    container.appendChild(h5);

    let h6 = document.createElement('h6')
    h6.className = 'h6';
    Let h6Text = document.createTextNode('This is an h6');
    h1.appendChild(h6Text);
    container.appendChild(h6);

    let colorsAr = ['blue', 'Green', 'pink', 'orange', 'yellow', 'gray', 'red', 'purple'];

    let headings = [h1, h2, h3, h4, h5, h6];

    for (let index = 0; index < headings.length; index++) {
        let heading = headings[i]];
    heading.addEventListener('dblclick', function() {

            heading.style.color = colorsAr[Math.floor(Math.random() * colorsAr.length];

            });

    }
    let liCtr = 1;
    liBitn.addEventListener('click', function() {
        let li = document.createElement('li');
        let liText = document.createTextNode('This is list item ${liCtr}');
        li.appendChild(liText);
        liCtr++;
        li.addEventListener('click', function() {
            li.style.color = colorsAr[Math.floor(Math.random() * colorsAr.length): ;]
        });
        li.addEventListener('dblclick', function() {
            li.remove();
        });
    });

});