document.addEventListener("DOMContentLoaded", () => {
  const inputName = document.getElementById("input-field");
  const inputButton = document.getElementById("input-button");
  const totalQuesDisplay = document.getElementById("total-ques");
  const easyQuesDisplay = document.getElementById("easy-ques");
  const mediumQuesDisplay = document.getElementById("medium-ques");
  const hardQuesDisplay = document.getElementById("hard-ques");

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
    const URL = `https://alfa-leetcode-api.onrender.com/${name}`;
    const response = await fetch(URL);

    console.log(response);

    if (!response.ok) {
      throw new Error("Username Not found");
    }
    const data = await response.json();
    return data;
  }

  function DisplayData(data) {
    console.log(data);
  }

  function showError() {
    console.log("Error : ");
  }
});
