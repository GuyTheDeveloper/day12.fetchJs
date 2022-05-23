import createNode from "./createNode.js";

(async () => {
  let userId = window.location.search.split("=")[1];

  const singleData = await fetch("https://reqres.in/api/users/" + userId);

  if (singleData.ok) {
    let data = (await singleData.json()).data;
    let userNode = createNode(data, false);

    document.querySelector(".container").append(userNode);
  }
})();
