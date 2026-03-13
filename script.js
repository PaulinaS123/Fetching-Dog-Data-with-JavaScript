const API = "https://dogapi.dog/api/v2";

function fetchBreeds() {
  fetch(`${API}/breeds`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Request failed");
      }

      return response.json();
    })
    .then((data) => {
      const list = document.getElementById("breedList");
      list.innerHTML = "";

      data.data.forEach((breed) => {
        const li = document.createElement("li");

        li.textContent = breed.attributes.name;

        li.addEventListener("click", () => {
          fetchBreedDetails(breed.id);
        });

        list.appendChild(li);
      });
    })
    .catch((error) => console.error(error));
}

function fetchBreedDetails(id) {
  fetch(`${API}/breeds/${id}`)
    .then((res) => res.json())
    .then((data) => {
      const breed = data.data.attributes;

      document.getElementById("details").innerHTML = `
        <h3>${breed.name}</h3>
        <p>${breed.description}</p>
      `;
    })
    .catch((error) => console.error(error));
}

function fetchFacts() {
  fetch(`${API}/facts`)
    .then((res) => res.json())
    .then((data) => {
      const facts = document.getElementById("facts");
      facts.innerHTML = "";

      data.data.forEach((fact) => {
        const li = document.createElement("li");
        li.textContent = fact.attributes.body;

        facts.appendChild(li);
      });
    })
    .catch((error) => console.error(error));
}
