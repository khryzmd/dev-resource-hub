// Select all buttons within the #categories element
const buttons = document.querySelectorAll("#categories button");

// Loop through each button and attach the event listener
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    try {
      // Use the clicked button's value to determine which card to show
      //   console.log(e.target.value);
      if (e.target.value === "front-end") {
        document
          .querySelector(".selected-category-none")
          .classList.add("d-none");
        document.querySelector(".front-end-card").classList.remove("d-none");
        document.querySelector(".back-end-card").classList.add("d-none");
        document.querySelector(".full-stack-card").classList.add("d-none");
      } else if (e.target.value === "back-end") {
        document
          .querySelector(".selected-category-none")
          .classList.add("d-none");
        document.querySelector(".front-end-card").classList.add("d-none");
        document.querySelector(".back-end-card").classList.remove("d-none");
        document.querySelector(".full-stack-card").classList.add("d-none");
      } else if (e.target.value === "full-stack") {
        document
          .querySelector(".selected-category-none")
          .classList.add("d-none");
        document.querySelector(".front-end-card").classList.add("d-none");
        document.querySelector(".back-end-card").classList.add("d-none");
        document.querySelector(".full-stack-card").classList.remove("d-none");
      }
    } catch (error) {
      console.error(error);
    }
  });
});
