import Layout from '../../components/layout_nohead'
import Link from 'next/link'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'

export default function FirstPost() {
    return (
        <Layout>
            <h2 className={utilStyles.headingLg}>Documentation</h2>
            <h4 className={utilStyles.lightText}>
                Collection of documentation
            </h4>
            <ul>
              <li>
                <Link href="https://www.tutorialspoint.com/nodejs/nodejs_response_object.htm">
                  <a>Good writeup on the response object</a>
                </Link>
                <Link href="http://bluebirdjs.com/docs/api/promise.promisify.html">
                  <a>Promisify, an alternative to callbacks</a>
                </Link>
              
              </li>
            </ul>
        </Layout>
    )
}