const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch("http://localhost:3310/api/users")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    })
    .then((res) => {
      console.log("res :>> ", res);
    })
    .catch((error) => {
      console.error("Error fetching data: ", error);
    });
});
