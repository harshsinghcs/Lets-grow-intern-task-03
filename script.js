const enrollmentForm = document.getElementById("enrollmentForm");
const displayInfo = document.getElementById("displayInfo");
const displayName = document.getElementById("displayName");
const displayEmail = document.getElementById("displayEmail");
const displayGithub = document.getElementById("displayGithub");
const displaySkills = document.getElementById("displaySkills");
const displayPhoto = document.getElementById("displayPhoto");

enrollmentForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const github = document.getElementById("github").value;
  const skills = document.getElementById("skills").value;
  const photo = URL.createObjectURL(document.getElementById("photo").files[0]);

  displayName.textContent = name;
  displayEmail.textContent = email;
  displayGithub.textContent = github;
  displaySkills.textContent = skills;
  displayPhoto.src = photo;

  displayInfo.classList.remove("hidden");
});

document.getElementById("clearButton").addEventListener("click", function () {
  enrollmentForm.reset();
  displayInfo.classList.add("hidden");
  displayPhoto.src = "";
});
