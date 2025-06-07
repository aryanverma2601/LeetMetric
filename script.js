document.addEventListener("DOMContentLoaded", () => {
  const inputName = document.getElementById("input-field");
  const inputButton = document.getElementById("input-button");
  const outputDisplay = document.getElementById("output-container");
  const UsernameDisplay = document.getElementById("username");
  const totalQuesDisplay = document.getElementById("total-ques");
  const easyQuesDisplay = document.getElementById("easy-ques");
  const mediumQuesDisplay = document.getElementById("medium-ques");
  const hardQuesDisplay = document.getElementById("hard-ques");
  const errorMessageDisplay = document.getElementById("error-message");

  inputButton.addEventListener("click", async () => {
    const name = inputName.value.trim();

    if (!name) return;

    console.log(name);

    try {
      const data = await fetchData(name);
      DisplayData(data);
    } catch (error) {
      showError();
    }

    inputName.value = "";
  });

  async function fetchData(name) {
    const URL = `https://leetcode-stats-api.herokuapp.com/${name}`;

    const response = await fetch(URL);

    const data = await response.json();
    if (data.status === "error") {
      throw new Error("Username Not Found");
    }

    return data;
  }

  function DisplayData(data) {
    console.log(data);
    outputDisplay.classList.remove("hidden");
    errorMessageDisplay.classList.add("hidden");

    UsernameDisplay.textContent = inputName.value.trim();

    totalQuesDisplay.textContent = data.totalSolved;
    easyQuesDisplay.textContent = data.easySolved;
    mediumQuesDisplay.textContent = data.mediumSolved;
    hardQuesDisplay.textContent = data.hardSolved;
  }

  function showError() {
    errorMessageDisplay.classList.remove("hidden");
    outputDisplay.classList.add("hidden");
  }
});
