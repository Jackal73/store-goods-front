import api from "./services/api.service";
import Form from "./components/Form";
import List from "./components/List";

// console.log(api.index());
api.index().then((data) => {
  console.log(data);
});

const root = document.querySelector("#root");

root.innerHTML = `<p class="text-center">Hello World!</p>`;
