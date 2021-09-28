import Link from 'next/link'

export default function Test() {
    return (
        <div className="container">
            <h1>Test</h1>
            <Link href="/playground/getinitialProps">
                <a style={{
                    padding: "10px 20px",
                    backgroundColor: "lightblue",
                    cursor: "pointer",
                    borderRadius: 10
                }}>
                    GetInitialProps
                </a>
            </Link>
        </div>
    )
}