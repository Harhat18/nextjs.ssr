const User = (props) => (
  <div>
    <h2>User detail</h2>
    <br />
    {props.url.query.name}
  </div>
);

export default User;
