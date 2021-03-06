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
	    <li><strike>Use env to hold database connection so we can secure it before deploying to production</strike></li>
	    <li><strike>Setup github hook for replit magic</strike></li>
	    <li>Authentication</li>
	    <li>Pagination</li>
	    <li>WYSIWYG editor that writes to mongodb</li>
	    <li><strike>Fix stupid systemd</strike></li>
	    </ol>
	    </div>
        </Layout>
    )
}
