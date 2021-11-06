export default (storeGoods) => `
<ul>
${storeGoods
  .map(
    (storeGood) =>
      `<li><span class="${
        storeGood.stocked ? "text-indigo-700" : "text-red-600"
      }">${storeGood.name}</span> ${storeGood.price}</li>`
  )
  .join("")}
</ul>
`;
