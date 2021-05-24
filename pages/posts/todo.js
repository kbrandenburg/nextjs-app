import Layout from '../../components/layout_nohead'
import Link from 'next/link'
import Head from 'next/head'

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>TODO list</title>
            </Head>
            <h1>TODO list</h1>
            <div><ol>
	    <li>Use env to hold database connection so we can secure it before deploying to production</li>
	    <li>Setup github hook for replit magic</li>
	    <li>Authentication</li>
	    <li>Pagination</li>
	    <li>WYSIWYG editor that writes to mongodb</li>
	    <li>Fix stupid systemd</li>
	    </ol>
	    </div>
        </Layout>
    )
}
