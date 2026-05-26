import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <Navigation>
        Kawababa書庫
      </Navigation>
    </header>
  )
}
