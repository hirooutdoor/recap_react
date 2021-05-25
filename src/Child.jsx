import {memo} from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};
//memoでpropsが変更しない限り再レンダリングしないようにする
//親のコンポーネントに合わせてレンダリングしたくない時に有効
//複数の要素から成り立っているコンポーネントや今後肥大化が予想されるコンポーネントに使える
export const Child = memo((props) => {
  const { display } = props;
  console.log("childがレンダリングされた！");

  return (
    <>
      {display ? (
        <div style={style}>
          <p>Hello world!</p>
        </div>
      ) : null}
    </>
  );
});
