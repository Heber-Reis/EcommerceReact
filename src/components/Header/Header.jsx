import styles from "./style.module.css";

const menuItems = [
  {Item: "Collections", link: "#"},
  {Item: "Men", link: "#"},
  {Item: "Women", link: "#"},
  {Item: "About", link: "#"},
  {Item: "Contact", link: "#"},
]

function Header ({avatar}) {
  return(
    <div className={styles.Content}>
      <div className={styles.Logo}>
        <a href="/"><img src="/images/logo.svg"/></a>
      </div>
      <div className={styles.NavBar}>
        <div className={styles.Menu}>
          {
            menuItems.map((item) => 
              <a className={styles.Link} key={`item-menu${menuItems.indexOf(item)}`} 
                 href={item.link}>{item.Item}</a>)
          }
        </div>
        <div className={styles.clientContent}>
          <a href="#"><img src="/images/icon-cart.svg"/></a>
          <img src={`/images/${avatar}`} width="40px"/>
        </div>
      </div>

    </div>
  )
}

export default Header;