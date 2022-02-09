import styles from "./style.module.css"

const menuItems = [
  {Item: "Collections", link: "#"},
  {Item: "Men", link: "#"},
  {Item: "Women", link: "#"},
  {Item: "About", link: "#"},
  {Item: "Contact", link: "#"},
]

function Menu () {
  return(
    <div className={styles.Menu}>
      {
        menuItems.map((item) =>
          <a className={styles.MenuIcons}
            key={`item-menu${menuItems.indexOf(item)}`}
            href={item.link}>{item.Item}
          </a>
        )
      }
    </div>
  )
}

export default Menu;