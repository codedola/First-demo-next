import React from 'react'
import Head from "next/head"
import { useRouter } from 'next/router';
import Link from "next/link"
export default function AdminUser() {
    const router = useRouter();
    const { uid } = router.query;

    function handleChangePage() {
        router.push("/login")
    }

    return (
        <>
            <Head>
                <title>User Detail</title>
            </Head>
            <h1>AdminUserID: {uid}</h1>
            <Link href="/login">
                <a style={{ padding: 10, backgroundColor: "lightblue", display: "inline-block"}}>
                    Go to login by next/link
                </a>
            </Link>
            <br />
            <button onClick={handleChangePage} style={{padding: 10, marginTop: 10}}>Go To Homepage</button>
        </>
    )
}
