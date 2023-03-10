// create elements

const myDiv = document.createElement('div');
myDiv.className = 'buttons';
myDiv.style.background = 'coral';
myDiv.style.textAlign = 'center';

let i = (Math.random() * (1000 - 1) + 1).toFixed();

const friends = document.createElement('div');
friends.className = 'friends';
friends.style.background = '#9fd3c7';
friends.style.textAlign = 'center';
friends.style.height = '50px';
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
    myButtonEvent.target.style.background = '#00bbf0';
    myButtonEvent.target.style.color = '#f95959';
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
    event.target.style.background = `blue`;
    let newDiv = document.createElement('div');
    newDiv.className = 'dynamic';
    newDiv.style.background = colors[
        document.getElementsByClassName('dynamic').length % 3
        ];
    newDiv.innerText = 'This is my dynamic div';
    document.getElementsByTagName('body')[0].appendChild(newDiv);
};




