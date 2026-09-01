fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    const categoryResults = document.querySelector("#category-results");

    console.log(categoryResults);

    data.forEach((item) => {
      const newListItem = document.createElement("li");
      const newDiv = document.createElement("div");
      const newIcon = document.createElement("img");
      const newCategory = document.createElement("p");
      const newScore = document.createElement("p");
      const scoreValue = document.createElement("strong");

      newListItem.className = `category-score-row ${item.color}-transparent`;
      newDiv.className = "category";

      newIcon.className = "category-icons";
      newIcon.alt = "";
      newIcon.src = item.icon;

      newCategory.className = `category-name ${item.color}`;
      newCategory.textContent = item.category;

      scoreValue.textContent = item.score;
      newScore.className = "category-score-value";

      newScore.appendChild(scoreValue);
      newScore.append(" / 100");

      newDiv.appendChild(newIcon);
      newDiv.appendChild(newCategory);

      newListItem.appendChild(newDiv);
      newListItem.appendChild(newScore);

      categoryResults.appendChild(newListItem);
    });
  });
