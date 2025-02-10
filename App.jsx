import React,{ useState } from "react"; 

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleEqual = () => {
    try{
      setInput(eval(input).toString());
    }
    catch{
      setInput("Error");
    }
  };

  return(
    <div style={styles.calculator}>
      <div style={styles.display}>
        {input || '0'}   </div>
        <div style={styles.buttons}>
          {[1,2,3,4,5,6,7,8,9,0].map((num)=>(
            <button key={num}
            style={styles.button}
            onClick={()=>handleClick(num.toString())}
            >{num}</button>
          ))}

        {/* Operator Buttons */}
        {['+','-','*','/'].map((op)=>(
          <button key={op}
          style={styles.button}
          onClick={()=>handleClick(op)}>
            {op}
          </button>
        ))}

        {/* Functional Buttons */}
        <button style={styles.button} onClick={handleClear}>
          C
        </button>
        <button style={styles.button} onClick={handleEqual}>
          =
        </button>
        </div>

    </div>
  );
};


const styles = {
  calculator: {
    width: "300px",
    margin: "50px auto",
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "10px",
    background: "#f9f9f9",
    boxShadow: "0px 4px 8px rgba(221, 174, 174, 0.1)",
  },
  display: {
    background: "#222",
    color: "#fff",
    fontSize: "2rem",
    textAlign: "right",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "4px"
  },
  buttons: {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap:"10px",
  },
  button: {
    padding: "15px",
    fontSize: "1.2rem",
    cursor: "pointer",
    background: "#4caf50",
    color: "#frf",
    border: "none",
    borderRadius: '4px',
    transition: "background 0.2s ease",
  },
};

export default Calculator;
