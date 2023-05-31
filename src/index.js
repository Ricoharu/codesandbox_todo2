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

  //button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親タグ（div）を未完了リストから削除
    finish(completeButton.parentNode);
    //完了要素に追加する要素
    const addTarget = completeButton.parentNode;
    //TODE内容テキストを取得
    const text = addTarget.firstElementChild.innerText;
    //div以下は初期化
    addTarget.textContent = null;

    //
  });

  //button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    finish(deleteButton.parentNode);
  });

  //完了したTODOから完了または削除する関数
  const finish = (target) => {
    document.querySelector("#incomplete-list").removeChild(target);
  };

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了のリストに追加
  document.querySelector("#incomplete-list").appendChild(div);

  //完了のリストに追加
};

document.querySelector("#add-button").addEventListener("click", () => {
  onClickAdd();
});
