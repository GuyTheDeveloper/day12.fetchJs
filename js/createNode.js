export default function (
  { id, email, first_name, last_name, avatar },
  visibleLink = true
) {
  let template = document.getElementById("template");
  let newTemplate = template.content.cloneNode(true);

  newTemplate.querySelector(".card").dataset.id = id;
  newTemplate.querySelector(
    ".fullname"
  ).textContent = `${first_name} ${last_name}`;
  newTemplate.querySelector(".email").textContent = email;
  newTemplate.querySelector(".image").src = avatar;
  if (visibleLink) {
    newTemplate.querySelector(".paginator").href = `/profile.html?user=${id}`;
  } else {
    newTemplate.querySelector(".paginator").style.display = "none";
  }
  return newTemplate;
}
