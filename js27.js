// const myDiv = document.createElement('div');
// myDiv.className = 'buttons';
// myDiv.style.background = 'coral';
// myDiv.style.textAlign = 'center'

// let i = 0;

// ['Button', 'Button', 'Button'].map(buttonName => {
//     let button = document.createElement('button');
//     button.className = 'btn btn-success';
//     button.innerText = `${buttonName} ${i}` ;
//     button.style.margin = '5px'
//     myDiv.appendChild(button);
// })


const myDiv = document.createElement('div');
myDiv.className = 'buttons';
myDiv.style.background = 'coral';
myDiv.style.textAlign = 'center'

let i = 0;

['Button', 'Button', 'Button'].map(buttonName => {
    let button = document.createElement('button');
    button.className = 'btn btn-success';
    button.innerText = ${buttonName} ${i} ;
    button.style.margin = '5px'
    myDiv.appendChild(button);
})

document.getElementsByTagName('body')[0].appendChild(myDiv);

// events

const btn = document.getElementsByTagName('button')[0];


btn.onclick = (event) => {
    event.target.innerText = Button ${++i};
};

btn.addEventListener('click', (myButtonEvent) => {
    myButtonEvent.target.style.background = 'black';
    myButtonEvent.target.disabled = true;
});

btn.addEventListener('mousemove', (myButtonEvent) => {
    console.log('mouse move');
});

btn.addEventListener('mouseover', (myButtonEvent) => {
    console.log('mouse over');
});

// add new elements

let colors = ['red', 'green', 'blue'];

const btn2 = document.getElementsByTagName('button')[1];

btn2.onclick = (event) => {
    let newDiv = document.createElement('div');
    newDiv.className = 'dynamic';
    newDiv.style.background = colors[
        document.getElementsByClassName('dynamic').length % 3
        ];
    newDiv.innerText = 'This is my dynamic div';
    document.getElementsByTagName('body')[0].appendChild(newDiv);
};


// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
//     <script type="text/javascript" src="document.js" defer></script>
//     <title>Lesson 27</title>
// </head>
// <body>
// </body>
// </html>


