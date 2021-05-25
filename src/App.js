import { useState, useCallback } from "react";
import { Child } from "./Child";

export default function App() {
  const [text, setText] = useState("");
  const [display, setDisplay] = useState(false);

  const handleChange = (e) => setText(e.target.value);

  const handleClick = () => setDisplay(!display);
  //アロー関数で書いた関数は、毎回新しい関数を生成しているという判断をされる
  //中でやることは変わらないにもかかわらず、propsが変更していると受け取られる
  //ということは再びレンダリングが走ってしまう
  //解決方法はuseCallbackという機能
  //useCallbackの第２引数には、その中身が変わった時に生成する値を設定する
  const handleClose = useCallback(() => setDisplay(false), [setDisplay]);
  //このように、コンポーネントのmemo化と関数をその中身に渡していく場合は、useCallbackも組み合わせて使っていく必要がある

  return (
    <>
      <div className="App">
        <input value={text} onChange={handleChange} />
        <br />
        <br />
        <button onClick={handleClick}>Display</button>
        <Child display={display} handleClose={handleClose} />
      </div>
    </>
  );
}
