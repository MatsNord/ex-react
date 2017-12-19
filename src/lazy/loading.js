const Loading = props => {
  if (props.error) {
    return <div>Error!</div>;
  } else {
    return <div>Loading...</div>;
  }
};
