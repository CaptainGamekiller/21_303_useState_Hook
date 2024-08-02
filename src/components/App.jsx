import React, { useState } from "react";

function App() {
  // 定義count狀態變量和設置count的函數 setCount，初始值為 0
  const [count, setCount] = useState(0);

  // 定義 increase 函數，用於增加 count 的值
  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }
  return (
    <div className="container">
      {/* 顯示當前的 count 值 */}
      <h1>{count}</h1>
      {/* 按鈕調用 increase 函數 */}
      <button onClick={increase}>+</button>
      {/* 按鈕調用 decrease 函數 */}
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
