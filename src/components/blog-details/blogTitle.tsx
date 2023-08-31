import { NextPage } from "next"
import { type } from "os"

interface Props {
    titleName: string;
  }

const BlogTitle: NextPage<Props> = (title)=>{
    const {titleName} = title
    return (
        <>
            <h1>{titleName}</h1>        
        </>
    )
}

export default BlogTitle