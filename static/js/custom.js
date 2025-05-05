
const FADE_DUR = 500;
const DISPLAY_DUR = 3000;
let toastContain;

const discord = document.querySelector('header > div > div > a[href="//Vinegret43"]');

const headline = document.querySelector('.homepage-headline');

const options = /\{.*\}/.exec(headline.textContent)[0].slice(1,-1).split(",");
const text = options[Math.floor(Math.random() * options.length)];

headline.textContent = headline.textContent.replace(/\{.*\}/,text);
console.log(options);

// const text = options[Math.floor(Math.random() * options.length)];
// headline.textContent = headline.textContent.replace("\{\}", text);

discord.onclick = function() {
  navigator.clipboard.writeText('Vinegret43').then(function() {
    console.log('Async: Copying to clipboard was successful!');
  }, function(err) {
    console.error('Async: Could not copy text: ', err);
  });
  toast("ID copied to clipboard");
  return false;
};

function toast(message, extraClasses) {
  if (!toastContain) {
    toastContain = document.createElement("div");
    toastContain.classList.add("toastContain");
    document.body.appendChild(toastContain);
  }

  const EL = document.createElement("div");
  EL.classList.add("toast", extraClasses);
  EL.innerText = message;
  toastContain.prepend(EL);

  setTimeout(() => EL.classList.add("open"), 10); // delay so transitions apply
  setTimeout(() => EL.classList.remove("open"), DISPLAY_DUR);
  setTimeout(() => toastContain.removeChild(EL), DISPLAY_DUR + FADE_DUR);
}
