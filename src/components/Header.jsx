import logo from "../assets/investment-calculator-logo.png";
export default function Header() {
  return (
    <section id="header">
      <img src={logo} alt="" />
      <h1>React Investment Calculator</h1>
    </section>
  );
}
