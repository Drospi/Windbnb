
import logo from "../img/logo.png"
export const Nav = (e) => {
  const handleClickA = () => {
    document.querySelector(".A").classList.remove("d-none");
    document.querySelector(".C").classList.add("d-none");
  };
  const handleClickC = () => {
    document.querySelector(".C").classList.remove("d-none");
    document.querySelector(".A").classList.add("d-none");
  };
  return (
    <nav>
        <img src={logo} alt="" />
        <div>
        <a className="a2" onClick={handleClickA} href="#openModal">{e.tit==''?'Whole':e.tit}, Finland</a>
        <a className="a2 g" onClick={handleClickC} href="#openModal">{e.titFug==''?'Add guests':e.titFug}</a>
        <a href="#openModal"><i className="material-symbols-outlined">search</i></a>
        </div>
    </nav>
  )
}
