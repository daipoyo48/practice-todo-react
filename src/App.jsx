import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div>
        <input type="text" placeholder="TODOを入力" />
        <button>登録</button>
      </div>
      <div>
        <h2>未完了タスク</h2>
        <ul>
          <li>
            <span>あああ</span>
            <button>完了</button>
            <button>削除</button>
          </li>
        </ul>
      </div>
      <div>
        <h2>完了タスク</h2>
        <ul>
          <li>
            <span>いいい</span>
            <button>戻す</button>
          </li>
        </ul>
      </div>
    </>
  );
}