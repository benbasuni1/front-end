let quotes = [

`Don't worry about what anybody else is going to do.<br> The best way to predict the future is to invent it.`,
`No problem should ever have to be solved twice.`,
`Attitude is no substitute for competence.`,
`The real winner is the one who lives in today but able to see tomorrow.`,
`Fools ignore complexity. Pragmatists suffer it.<br> Some can avoid it. Geniuses remove it.`,
`Whatever you can do, or dream you can, begin it.<br> Boldness has genius, power, and magic in it.`,
`Courage is grace under pressure.`,
`Whenever you find yourself on the side of the majority,<br> it is time to pause and reflect.`,
`As new powers are unleashed, you are initiated into higher levels of seeing the world.`,
`Remember to keep the tension low, and the efficiency high`,
`Keep your head on ice, and your heart on fire.`,

];
let getRandom = (floor, ceiling) => Math.floor(Math.random() * (ceiling - floor + 1) + floor);
let getQuote = () => quotes[getRandom(0, quotes.length - 1)];

document.querySelector('#quote').innerHTML = getQuote();
