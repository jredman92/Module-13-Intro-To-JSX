const SignUp = () => {
  const [year, setYear] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [check, setCheck] = React.useState("");
  const handle = () => {
    console.log("year:", year);
    console.log("name:", name);
    console.log("email:", email);
    console.log("password:", password);
    console.log("check:", check);
  };
  return (
    <>
      <select value={year} onChange={(e) => setYear(e.target.value)}>
        <option>Freshman</option>
        <option>Sophmore</option>
        <option>Junior</option>
        <option>Senior</option>
      </select>
      <div>Name</div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>Email</div>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div>Password</div>
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div>
        <input
          type="checkbox"
          value={check}
          onChange={(e) => setCheck(e.target.checked)}
        />
        Remember me
      </div>
      <button onClick={handle}>Submit</button>
    </>
  );
};

ReactDOM.render(<SignUp />, document.getElementById("root"));
