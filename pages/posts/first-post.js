import Layout from '../../components/layout'
import Link from 'next/link'
import Head from 'next/head'

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>Rocket League</h1>
            <p>This is my first experiment using the next.js framework.</p>
            <p>I am platinum ranked in rocket league, back when I played 8 hours a day I was approaching diamond 3.</p>
            <p>Not super stoked about EPIC games acquiring psyonix.</p>
        </Layout>
    )
}