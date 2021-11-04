export default (storeGoods) => `
<ul>
${storeGoods
  .map(
    (storeGood) =>
      `<li><span class="${storeGood.stocked ? "text-black" : "text-red-500"}">${
        storeGood.name
      }</span> ${storeGood.price}</li>`
  )
  .join("")}
</ul>
`;
