import createNode from "./createNode.js";

export default function (where, data) {
  let fragment = document.createDocumentFragment();

  data.forEach((user) => {
    let newNode = createNode(user);

    fragment.append(newNode);
  });

  where.innerHTML = "";
  where.append(fragment);
}
