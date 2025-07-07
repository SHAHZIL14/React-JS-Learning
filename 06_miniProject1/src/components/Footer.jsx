import { useEffect } from "react";
import "./Footer.css";

function Footer(props) {
  useEffect(()=>{
    const boxArray = Array.from(document.getElementsByClassName("box"));
    boxArray.forEach((currentBox) => {
      currentBox.style.backgroundColor = currentBox.dataset.color;
      currentBox.addEventListener('click',function(event){
      props.setBgColor(event.target.dataset.color);
      })
    });
  },[])
  return (
    <>
      <div style={styles.footer} className="footer">
        <div style={styles.box} data-color="#DC143C" className="box">
          crimson
        </div>
        <div style={styles.box} data-color="#008080" className="box">
          teal
        </div>
        <div style={styles.box} data-color="#FFD700" className="box">
          gold
        </div>
        <div style={styles.box} data-color="#4169E1" className="box">
          royal blue
        </div>
        <div style={styles.box} data-color="#E6E6FA" className="box">
          lavender
        </div>
        <div style={styles.box} data-color="#808080" className="box">
          charcoal
        </div>
        <div style={styles.box} data-color="#008000" className="box">
          emrald green
        </div>
        <div style={styles.box} data-color="#FF7F50" className="box">
          coral
        </div>
        <div style={styles.box} data-color="#BC8F8F	" className="box">
          rose gold
        </div>
        <div style={styles.box} data-color="#87CEEB" className="box">
          sky blue
        </div>
      </div>
    </>
  );
}
const styles = {
  footer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "10%",
    width: "80%",
    position: "absolute",
    bottom: "10%",
    left: "10%",
    gap: "1%",
    padding: "1%",
    borderRadius: "10px",
  },
  box: {
    height: "40%",
    width: "10%",
    borderRadius: "10px",
    color: "black",
    textAlign: "center",
  },
};
export default Footer;
