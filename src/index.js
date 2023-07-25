import _ from 'lodash';
import './style.css';
import menu1 from './assets/menu1.svg';
import menu2 from './assets/menu2.svg';
import menu3 from './assets/menu3.svg';
import menu4 from './assets/menu4.svg';

const btns = ['home','menu', 'contact'];
const container = document.querySelector('#container ');
const text = _.capitalize('animeverse') + " " + _.capitalize('cafe');
const h1 = `<h1 class="heading">${text}</h1>`;
container.innerHTML = h1;

const section = document.createElement('div');
section.classList.add('section');
container.appendChild(section);
//button container
const btnContainer = document.createElement('div');
btnContainer.classList.add('btn-container');
section.appendChild(btnContainer);

btns.forEach(btn =>{
    btnContainer.innerHTML += `<button class="btn ${btn}">${btn}</button>`;
});

const content = document.createElement('div');
content.classList.add('content');
section.appendChild(content);

//Home content start
const textContent = document.createElement('div');
textContent.classList.add('text-content');
content.appendChild(textContent);

const paragraphs = ['Welcome to "<b>Animeverse Cafe</b>" - Where Imagination Comes to Life!',
'Step into a realm where the boundary between reality and anime fades away. Experience a culinary adventure unlike any other as we bring your favorite anime worlds to life at "Animeverse Cafe." Embrace the enchanting ambiance of Japanese animation and savor delightful treats that pay homage to iconic characters and iconic moments.',
'<b>Indulge in Anime Gastronomy:</b> Delight your taste buds with a menu crafted with love and creativity inspired by the vast anime universe. From "Naruto Ramen" to "Sailor Mooncakes", our dishes are not just food but edible artistry that reflects the essence of beloved anime series.',
'<b>Events that Celebrate Anime:</b> Join us for themed events and interactive activities that embrace the anime culture. From cosplay contests to trivia nights, we provide a space for anime enthusiasts to come together, bond, and share their passion for the fascinating world of Japanese animation.',
'<b>A Haven for Fans:</b> "Animeverse Cafe" isn\'t just a cafe; it\'s a haven for fans to gather, connect, and celebrate their mutual adoration for anime. Whether you\'re a solo adventurer or arriving with your anime-loving squad, our friendly staff is here to welcome you with open arms and cater to your every desire.',
'<b>Come and Create Memories:</b> Animeverse Cafe is more than just a place to eat; it\'s a place to create memories that will stay with you forever. Share laughter, joy, and camaraderie with fellow anime enthusiasts while surrounded by the magical allure of your favorite shows.',
'Are you ready to embark on an unforgettable journey into the captivating world of anime? Join us at "Animeverse Cafe," where every moment is a celebration of the artistry, creativity, and camaraderie that anime brings to our lives.'
];

paragraphs.forEach(paragraph =>{
    textContent.innerHTML += `<p class="para">${paragraph}</p>&nbsp;`;
});
//home content end

//menu content start
const cards = [
    {
        name: "Cafe Latte",
        description:"Indulge in the velvety embrace of our signature Cafe Latte, where the richness of espresso dances harmoniously with the creamy allure of steamed milk, creating a heavenly sip of comfort and bliss.",
        price : 10,
        image: menu1,
    },
    {
        name: "Nutty Macadamia",
        description:"Satisfy your cravings with the velvety smoothness of Nutty Macadamia, a tantalizing fusion of sweet and savory that leaves your palate enchanted and craving for more.",
        price : 20,
        image: menu2,
    },
    {
        name: "Osaka Mochacinno",
        description:"Discover the perfect harmony of flavors as you take a sip of our Osaka Mochacinno, where the aromatic coffee notes intertwine with the chewy mochi goodness, leaving you with a delightful taste of Japan in every cup.",
        price : 30,
        image: menu3,
    },
    {
        name: "Mt. Fuji",
        description:"Savor the majesty of Mt. Fuji in every cup, as our carefully selected coffee beans bring forth a harmonious balance of flavors that mirror the grandeur of this legendary mountain.",
        price : 40,
        image: menu4,
    },
];

const menuContainer = document.createElement('div');
menuContainer.classList.add('menu-container');
content.appendChild(menuContainer);

const menuItems = document.createElement('ul');
menuItems.classList.add('menu-items');
menuContainer.appendChild(menuItems);

cards.forEach(card => {

    const li = document.createElement('li');
    li.classList.add('menu-item');
    
    const imageCard = document.createElement('img');
    imageCard.src = card.image;
    imageCard.classList.add('menu-img');
    li.appendChild(imageCard);

    const textCard = document.createElement('div');
    textCard.innerHTML = `<h3>${card.name}</h3><p>${card.description}</p><p><b>Price:</b> \$${card.price}</p>`;
    li.appendChild(textCard);

    menuItems.appendChild(li);
});
//menu content end

//contact content start
const formElements = [
    {
        value: 'name',
        placeholder: 'your&nbsp;name',
        type: 'text',
    },
    {
        value: 'email',
        placeholder: 'example@gmail.com',
        type: 'email',
    },
    {
        value: 'phone',
        placeholder: 'xxx-xxx-xxxx',
        type: 'tel',
    },
];

const form = document.createElement('form');
form.classList.add('review-form');
content.appendChild(form);

formElements.forEach(input => {
    const formDiv = document.createElement('div');
    formDiv.classList.add('form-element');
    formDiv.innerHTML = `<label for=${input.value}>${input.value}:</label><input type=${input.type} id=${input.value} name=${input.value} placeholder=${input.placeholder}><br/>`;
    form.appendChild(formDiv); 
});

const formDiv = document.createElement('div');
formDiv.classList.add('form-element');

const messageLabel = `<label for='message'>message:</label>`;
const message = document.createElement('textarea');
message.setAttribute('id','message');
message.setAttribute('placeholder','write a review...');

formDiv.innerHTML = messageLabel;
formDiv.appendChild(message);

form.appendChild(formDiv);

const submitBtn = document.createElement('input');
submitBtn.setAttribute('id', 'submit');
submitBtn.setAttribute('type','submit');
submitBtn.value = 'submit';

form.appendChild(submitBtn);
//loading the page and events

window.addEventListener('load',(e)=>{
    btnContainer.firstChild.classList.add('active');
    menuContainer.style.display = 'none';
    form.style.display = 'none';
});


btnContainer.addEventListener('click', (e) =>{
    const curBtns = document.querySelectorAll('.btn');
    if(!e.target.classList.contains('active')){
        for(let btn of curBtns){
            btn.classList.remove('active');
        }
        e.target.classList.add('active');
        if(e.target.classList.contains('menu')){
            menuContainer.style.display = 'block';
            form.style.display = 'none';
            textContent.style.display = 'none';
            
        }
        if(e.target.classList.contains('home')){
            menuContainer.style.display = 'none';
            form.style.display = 'none';
            textContent.style.display = 'block';
            
        }
        if(e.target.classList.contains('contact')){
            menuContainer.style.display = 'none';
            form.style.display = 'block';
            textContent.style.display = 'none';
            
        }
    }  
});

submitBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    const elements = document.querySelectorAll('input, textarea');
    let flag = 0;
    for(let el of elements){
        if(el.id !== 'sumbit' && el.value === "") flag = 1;
    }
    if(flag == 1)
        alert('You should fill the form completely');
    else{
        alert('You have filled the form successfully');
        location.reload();
    }
});