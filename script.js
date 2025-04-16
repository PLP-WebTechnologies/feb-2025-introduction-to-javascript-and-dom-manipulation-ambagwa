const body = document.body;

body.style.backgroundColor = "lightgrey";
body.style.textAlign = "center";

const title = document.getElementById("title");

title.style.color = "darkgray";
title.style.fontSize = "3rem";
title.style.textDecoration = "underline";
title.style.textAlign = "center";

const subtitle = document.getElementById("sub-title");

subtitle.textContent = "Completed assignment for week 5";
subtitle.style.fontSize = "1.4rem";
subtitle.style.margin = "-15px 0 25px";

const container = document.getElementById("container");

const divButton = document.getElementById("div-button");
divButton.style.padding = "10px";
divButton.style.borderRadius = "5px";
divButton.style.backgroundColor = "aqua";
divButton.style.fontSize = "1.2rem";

divButton.addEventListener("mouseenter", () => {
  divButton.style.backgroundColor = "teal";
  divButton.style.color = "#fff";
  divButton.style.cursor = "pointer";
});

divButton.addEventListener("click", () => {
    container.style.backgroundColor = 'grey';
    container.style.padding = '15px';
    container.style.width = '80%';
    container.style.border = '2px solid aqua';
    container.style.margin = '10px auto';
    container.style.color = '#fff';

    const newText = document.createElement('p');
    newText.textContent = 'Button was clicked';
    container.append(newText);
});
