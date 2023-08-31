"use client"  
import { useRouter } from 'next/navigation'
import styles from '../styles/blog.sumary.module.css'
const BlogSumary = () => {
    const router = useRouter()
    const onBlogClick =() =>{
        router.push("/blog-details/a")
        console.log("clicked")
    }
    return (
        <div className={styles.header}>
            <div onClick={onBlogClick}>
                <h3>Micro-Service Architecture</h3>
                <h5>Blog By : Phan Vinh Phuc</h5>
                <h5>Posted At : 08/20/2023</h5>
                <p>While updating our blog on zeit.co we wanted to come up with a way to get a better editing experience than we previously had using MDX. Our solution to getting this great editing experience was to use Notion of course. Read on to see how we reverse engineered Notion's private API to build a blazing fast blog leveraging Next.js and ZEIT!</p>
            </div>
        </div>
        
    )
  }
  
export default BlogSumary