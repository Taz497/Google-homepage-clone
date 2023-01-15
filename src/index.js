// DOM elements

let apps = document.getElementById("apps");
let apps_container = document.getElementById("apps_container");
let account = document.getElementById("account");
let account_container = document.getElementById("account_container");
let camera = document.getElementById("camera");
let camera_icon = document.getElementById("camera_icon");

// Show tooltip(s)

apps_container.addEventListener("mouseover", function show() {
  apps.style.visibility = "visible";
});

account_container.addEventListener("mouseover", function show() {
  account.style.visibility = "visible";
});

camera_icon.addEventListener("mouseover", function show() {
  camera.style.visibility = "visible";
});

// Hide tooltip(s)

account_container.addEventListener("mouseleave", function hide() {
  account.style.visibility = "hidden";
});

apps_container.addEventListener("mouseleave", function hide() {
  apps.style.visibility = "hidden";
});

camera_icon.addEventListener("mouseleave", function hide() {
  camera.style.visibility = "hidden";
});
