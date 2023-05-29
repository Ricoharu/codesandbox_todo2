import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し初期化する
  const inputText = document.querySelector("#add-text").value;
  document.querySelector("#add-text").value = "";
  //div生成
  const div = document.createElement("div");
  div.className = "list-row";
  console.log(div);
};

document.querySelector("#add-button").addEventListener("click", () => {
  onClickAdd();
});
