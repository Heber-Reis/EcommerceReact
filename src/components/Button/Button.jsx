import styles from "./style.module.css";


function Button ({children, icon, onClick}) {
  return(
    <button className={styles.Button}
            onClick={onClick}
    >
      { (icon !== undefined) &&
        <div className={styles.Icon}>{icon}</div>
      }
      {children}
    </button>
  )
}

export default Button;