import render from "./render.js";

let list = document.getElementById(".users");
async function main() {
  let firstFetch = await fetch("https://reqres.in/api/users");
  let fetchMain = await firstFetch;
  if (fetchMain.ok) {
    let data = (await fetchMain.json()).data;
    render(users, data);
  }
}

main();
