const myDiv = document.createElement('div');
myDiv.className = 'buttons';
myDiv.style.background = 'coral';
myDiv.style.textAlign = 'center'

let i = 0;

['Button', 'Button', 'Button'].map(buttonName => {
    let button = document.createElement('button');
    button.className = 'btn btn-success';
    button.innerText = `${buttonName} ${i}` ;
    button.style.margin = '5px'
    myDiv.appendChild(button);
})
