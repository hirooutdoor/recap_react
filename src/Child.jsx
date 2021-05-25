const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

export const Child = (props) => {
  const { display } = props;

  return (
    <>
      {display ? (
        <div style={style}>
          <p>Hello world!</p>
        </div>
      ) : null}
    </>
  );
};
