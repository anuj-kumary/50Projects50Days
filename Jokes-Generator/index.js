const btn = document.getElementById("btn");
const jokes = document.getElementById("jokes");

btn.addEventListener("click", generateJokes);

async function generateJokes() {
  const getJokes = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });
  const joke = await getJokes.json();
  jokes.innerHTML = joke.joke;
}
