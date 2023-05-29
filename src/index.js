import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し初期化する
  const inputText = document.querySelector("#add-text").value;
  document.querySelector("#add-text").value = "";

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;

  //divタグの子要素に各要素を設定
  div.appendChild(li);

  //未完了のリストに追加
  document.querySelector("#incomplete-list").appendChild(div);
};

document.querySelector("#add-button").addEventListener("click", () => {
  onClickAdd();
});
