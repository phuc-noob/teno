import Header from "../components/headerApp"
import styles from '../styles/header.module.css'
import BlogSumary from "../components/blogSumary"
export default function Home() {
  return (
    <div>
      <Header></Header>
      <h1 className={styles.header}>TENO PROJECT</h1>
      <BlogSumary></BlogSumary>
      <BlogSumary></BlogSumary>
      <BlogSumary></BlogSumary>
      <BlogSumary></BlogSumary>
    </div>
  )
}
