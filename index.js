document.addEventListener("DOMContentLoaded", function () {
  const dataUrl =
    "https://raw.githubusercontent.com/dicodingacademy/a565-webtools-labs/099-shared-files/proyek-awal/DATA.json";

  fetch(dataUrl)
    .then((response) => response.json())
    .then((data) => {
      if (!data.error) {
        renderDashboard(data.listStory);
      } else {
        console.error(data.message);
      }
    })
    .catch((error) => console.error("Error fetching data:", error));

  function renderDashboard(stories) {
    const contentContainer = document.querySelector(".content");

    if (stories && stories.length > 0) {
      const rowElement = document.createElement("div");
      rowElement.classList.add(
        "row",
        "row-cols-1",
        "row-cols-md-4",
        "g-4",
        "m-2"
      );

      stories.forEach((story) => {
        const colElement = document.createElement("div");
        colElement.classList.add("col");

        const cardElement = createCardElement(story);
        colElement.appendChild(cardElement);

        rowElement.appendChild(colElement);
      });

      contentContainer.appendChild(rowElement);
    } else {
      contentContainer.innerHTML = "<p>No stories available.</p>";
    }
  }

  function createCardElement(story) {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");

    const imageElement = document.createElement("img");
    imageElement.src = story.photoUrl;
    imageElement.alt = story.name;
    imageElement.classList.add("card-img-top");
    cardElement.appendChild(imageElement);

    const bodyElement = document.createElement("div");
    bodyElement.classList.add("card-body");

    const titleElement = document.createElement("h5");
    titleElement.classList.add("card-title");
    titleElement.textContent = story.name;
    bodyElement.appendChild(titleElement);

    const textElement = document.createElement("p");
    textElement.classList.add("card-text");
    textElement.textContent = story.description;
    bodyElement.appendChild(textElement);

    cardElement.appendChild(bodyElement);

    return cardElement;
  }
});
