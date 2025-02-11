const GrandChildComponent = (props) => {
  console.log(props);
  console.log("From GrandChildComponent -", props.d.products);
  return (
    <>
      <h3> I am Grand child Component</h3>
      <h4>
        Link :
        <a href={props.d.data} target="_blank">
          Click Here
        </a>
      </h4>
    </>
  );
};

export default GrandChildComponent;
