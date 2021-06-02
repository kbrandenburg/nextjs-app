import Layout from '../../components/layout'
import Link from 'next/link'
import Head from 'next/head'

export default function FirstPost() {
    return (
        <Layout>
            { console.log(process.env.TEST_VAR) }
            <h1>Rocket League</h1>
            <p>This is my first experiment using the next.js framework.</p>
            <p>I am platinum 1 ranked in rocket league. A little bit rusty, I took quite the break. Hoping to get back to Plat 3 at least soon.</p>
            <p>I am using the amazon luna controller, it is pretty nice. The xbox one controllers never last me more than a few months. Maybe I get too excited when I play.</p>
            <p>Not super stoked about EPIC games acquiring psyonix.</p>
        </Layout>
    )
}