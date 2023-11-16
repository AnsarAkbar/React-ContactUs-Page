import style from "./Navigation.module.css";
const Navigation = () => {
  return (
    <div className={`${style.header} container`}>
      <img
        src="/images/logo.png"
        alt=""
        className="logo"
        style={{ height: "50px", width: "50px" }}
      />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Home</li>
        <li>Home</li>
      </ul>
    </div>
  );
};
export default Navigation;
