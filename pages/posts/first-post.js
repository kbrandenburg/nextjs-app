import Layout from '../../components/layout'
import Link from 'next/link'
import Head from 'next/head'

export default function FirstPost() {
    return (
        <Layout>
            { console.log(process.env.TEST_VAR) }
            <h1>Rocket League</h1>
            <p>This is my first experiment using the next.js framework.</p>
            <p>I am diamond 2 ranked in rocket league. I was grandfathered in to being able to play on steam, 
              if you want to play the game today you have to download it on the epic games store.</p>
            <p>I am using the amazon luna controller, it is pretty nice. The xbox one controllers never seem to last me more 
              than a few months. I guess I play some intense games. The controller typically develops a drifting issue.</p>
            
        </Layout>
    )
}