const Wrapper = (props) => {
  if (props.isAuth === true) {
    return <div>{props.children}</div>;
  } else {
    return <div>Нет доступа</div>;
  }
};

export default Wrapper;