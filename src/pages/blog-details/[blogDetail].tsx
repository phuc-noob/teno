import { useState } from "react";
import BlogTitle from "../../components/blog-details/blogTitle";
import { useRouter, useSearchParams } from "next/navigation";

type BlogData = {
    content : String,
    typeOfContent : String
};

const BlogDetail = ()=>{
    const searchParam = useSearchParams()
    const search = searchParam?.get("blogDetail")
    return (
        <>
            <BlogTitle titleName={search!}></BlogTitle>
            <h1>Micro-Service Architecture : {search}</h1>
        </>
    )
}

export default BlogDetail