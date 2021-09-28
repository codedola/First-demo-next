import React from 'react'
import {GetServerSideProps, InferGetServerSidePropsType } from "next"
import Link from 'next/link';
const BASE_URL = "http://api-meme-zendvn-01.herokuapp.com/api";

type typePost = {
    USERID: string,
    post_content: string
}
type typeProps = {
    posts: typePost[]
}

const GetServerSidePropsDemo: React.FC<InferGetServerSidePropsType<typeof getServerSideProps>> = (
    { posts }: typeProps
) => {
    console.log("data post = ", posts);
    return (
        <div>
            <h1>Demo getServerSideProps</h1>
             <Link href="/playground/getServerSideProps/test">
                <a style={{
                    padding: "10px 20px",
                    backgroundColor: "lightblue",
                    cursor: "pointer",
                    borderRadius: 10
                }}>
                    Test
                </a>
            </Link>
            <ul>
                {
                    posts.map(function (post: typePost, index: number) {
                        return (
                            <li key={index}>{ post.post_content} NhanDo</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps<typeProps> = async (context) => {
    // Fetch data from external API
    const response = await fetch(BASE_URL + "/post/getListPagination.php?pagesize=5&currPage=1");
    const data = await response.json();

    const posts: typePost[] = data.posts;

    const props = {
        posts
    }
    return { props }
}

export default GetServerSidePropsDemo;