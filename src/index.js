import Form from "./components/Form";
import List from "./components/List";
import api from "./services/api.service";

const root = document.querySelector("#root");

// console.log(api.index());

api.index().then((storeGoods) => {
  root.innerHTML = `
    <main class="container mx-auto flex flex-col items-center">
      ${Form}
      ${List(storeGoods)}
    </main>
  `;

  document.querySelector("#search").addEventListener("keyup", (e) => {
    console.log(
      storeGoods.filter((storeGood) =>
        storeGood.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  });
});
