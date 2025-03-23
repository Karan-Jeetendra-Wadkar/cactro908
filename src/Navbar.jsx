import "./Navbar.css"

const Navbar = () => {
  return (
<div className="navcss">
<nav className="navBar">
    <div className="links">
    <div className="fontBold"><img src="https://logos-world.net/wp-content/uploads/2020/10/Slack-Logo-2019-present.jpg" alt="Logo" /></div>
      <a href="#" >Product</a>
      <a href="#">Enterprice</a>
      <a href="#">Resources</a>
      <a href="#">Pricing</a>
    
    </div>
    <div className="rightNav">
      <img className="bellImg" src="https://www.freeiconspng.com/uploads/search-icon-png-21.png" alt="icon"/>
      <button className="btn1">SignIn</button>
      <button className="btn2">TALK TO SALES</button>
      <button className="btn3">TRY FOR FREE</button>
      
    </div>
  </nav>
  <div className="line">
     elit. Adipisci rem ipsum quisquam provident temporibus pariatur dicta facere consequatur quasi iste? Nisi id quam asperiores architecto cum placeat iusto et ducimus!
  </div>
</div>
  )
}

export default Navbar
