import React, {useEffect, useState} from 'react'
import { NextPage, NextPageContext } from "next"
import Link from 'next/link';
const BASE_URL = "http://api-meme-zendvn-01.herokuapp.com/api";

type PostType = {
    USERID: string,
    post_content: string
}
type PropsType = {
    posts: PostType[]
}
const GetInitialPropsDemo: NextPage<PropsType> = ({posts}: PropsType) => {
    // const [listPost, setListPost] = useState([]);

    // useEffect(function () {
    //     fetch(BASE_URL + "/post/getListPagination.php?pagesize=5&currPage=1")
    //         .then(async (res) => {
    //             const data = await res.json();
    //             console.log(data);
    //             setListPost(data.posts)
    //         })
    // }, []);

    console.log("data post = ", posts)

    return (
        <div>
            <h1>Demo GetInitialProps</h1>
             <Link href="/playground/getinitialProps/test">
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
                    posts.map(function (post, index) {
                        return (
                            <li key={index}>{ post.post_content}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

GetInitialPropsDemo.getInitialProps = async (context: NextPageContext) => {
    console.log("Start Call APIs");
        const response = await fetch(BASE_URL + "/post/getListPagination.php?pagesize=5&currPage=1");
        const data = await response.json();
        if (data.status === 200) {
            return {
                posts: data.posts
            }
        } 
}

export default GetInitialPropsDemo
