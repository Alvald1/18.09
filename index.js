butt.onclick = function () {
  let val = document.getElementById("elem1").value;
  let json = JSON.parse(val);
  let keys = Object.keys(json.data[0]);
  console.log(keys);
  setTableNames(keys);
  setTableVal(json.data);
};
function setTableNames(keys) {
  let tab = document.getElementById("tb");
  for (let v in keys) {
    let tmp = document.createElement("td");
    let text = document.createTextNode(keys[v]);
    tmp.appendChild(text);
    tab.children[0].appendChild(tmp);
  }
}
function setTableVal(arr) {
  let tab = document.getElementById("tb");
  for (let i in arr) {
    let row = document.createElement("tr");
    for (let j in i) {
      let col = document.createElement("td");
      let text = document.createTextNode(i[j]);
      col.appendChild(text);
      row.appendChild(col);
    }
    tab.appendChild(row);
  }
}
