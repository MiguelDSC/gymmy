const Navbar = () => {
  return (
    <div style={styles.bar}>
      <button style={styles.button}>Home</button>
      <button style={styles.button}>Return</button>
      <button style={styles.button}>Login</button>
    </div>
  );
};

const styles = {
  bar: {
    marginTop: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50px",
    backgroundColor: "#f0f0f0",
    borderBottom: "1px solid #ccc",
  },
  button: {
    marginRight: "10px",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#007bff",
    color: "#fff",
    cursor: "pointer",
    fontSize: "16px",
    textDecoration: "none",
  },
};

export default Navbar;
