// create elements

const myDiv = document.createElement('div');
myDiv.className = 'buttons';
myDiv.style.background = 'coral';
myDiv.style.textAlign = 'center';

let i = (Math.random() * (1000 - 1) + 1).toFixed();

const friends = document.createElement('div');
friends.className = 'friends';
friends.innerText = `Кількість друзів: ${i}`


const buttonsNames = ['Додати в друзі', 'Написати повідомлення', 'Запропонувати роботу']

buttonsNames.map(buttonName => {
    let button = document.createElement('button');
    button.className = 'btn btn-success';
    button.innerText = `${buttonName}`;
    button.style.margin = '5px';
    button.style.borderRadius = '5px';
    myDiv.appendChild(button);
})

document.getElementsByTagName('body')[0].appendChild(myDiv);
myDiv.after(friends);

// events

const btn = document.getElementsByTagName('button')[0];

btn.onclick = (event) => {
    event.target.innerText = `Очікується підтвердження`;
    friends.innerText = `Кількість друзів: ${++i}`;
};

// btn.onclick = (event) => {
//     event.target.innerText = `Button ${++i}`;
// };

btn.addEventListener('click', (myButtonEvent) => {
    myButtonEvent.target.style.background = '#ecf2f9';
    myButtonEvent.target.style.color = '#00204a';
    myButtonEvent.target.disabled = true;
});

// btn.addEventListener('mousemove', (myButtonEvent) => {
//     console.log('mouse move');
// });

// btn.addEventListener('mouseover', (myButtonEvent) => {
//     console.log('mouse over');
// });

// add new elements

let colors = ['red', 'green', 'blue'];

const btn2 = document.getElementsByTagName('button')[1];

btn2.onclick = (event) => {
    
    let currentBackground = btn2.style.background;
         
    event.target.style.background = currentBackground !== 'blue' ? 'blue' : '#198754'; 
    // event.target.style.background = `blue`;

    // let newDiv = document.createElement('div');
    // newDiv.className = 'dynamic';
    // newDiv.style.background = colors[
    //     document.getElementsByClassName('dynamic').length % 3
    //     ];
    // newDiv.innerText = 'This is my dynamic div';
    // document.getElementsByTagName('body')[0].appendChild(newDiv);
};

// const btn3 = document.getElementsByTagName('button')[2];

// btn3.onclick = (myButtonEvent) => {
    
//     myButtonEvent.target.btn.style.visibility = hidden;
    
// };

// btn3.addEventListener('click', (event) => {
//     event.target.btn.style.visibility = hidden;
// });