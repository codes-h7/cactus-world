let add = document.querySelector("#add");
let stranger = document.querySelector("h5");
let remove = 0
add.addEventListener("click", function () {
if(remove == 0){
    stranger.textContent = "friend";
    stranger.style.color = "green";
    remove = 1;
    add.innerHTML="Remove"
}
else{
      add.innerHTML="Add Friend"
    stranger.textContent = "stranger";
      stranger.style.color = "Red";
    remove=0;
}
});
// let remove = document.querySelector("#remove");
// remove.addEventListener("click", function () {
//   stranger.textContent = "stranger";
//   stranger.style.color = "Red";
// });
