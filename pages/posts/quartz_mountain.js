import Layout from '../../components/layout_nohead'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

import { getAllPostIds, getPostData } from '../../lib/posts'

import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}



export default function quartz_mountain() {
  return (
    <Layout>
      <h1>Quartz Mountain Photos</h1>
      <div>
        <Link href="/images/mountaintop_pano.jpeg"><a>
        <Image
          priority
          src="/images/mountaintop_pano.jpeg"
          width="12594"
          height="3628"
          alt="mountaintop_pano"
        /></a></Link>
      </div>
    </Layout>
  )
}
