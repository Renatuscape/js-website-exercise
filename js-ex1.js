const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the script content!";

const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");

container.appendChild(content);