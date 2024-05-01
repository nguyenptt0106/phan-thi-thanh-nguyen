import styles from './Menu.module.scss';

const Menu = () => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <div className={styles.item}>
          <a href="/problem-1">Problem 1: Three ways to sum to n</a>
        </div>
        <div className={styles.item}>
          <a href="/problem-2">Problem 2: Fancy Form</a>
        </div>
        <div className={styles.item}>
          <a href="https://relieved-tiara-b7d.notion.site/Problem-3-Messy-React-6868403fa57448bea1716f986653e715" target="_blank">Problem
            3: Messy React</a>
        </div>
      </div>
    </div>
  )
}

export default Menu;
