// pages/404.js

import Layout from '../components/layout'
// if we do this import it makes fs module unimportable!
//import { getAllPostIds, getPostData } from '../lib/posts'
import Head from 'next/head'
import Date from '../components/date'
import utilStyles from '../styles/utils.module.css'

export async function getStaticProps({  }) {
  const postData = []
  return {
    props: {
      postData
    }
  }
}


export default function Custom404( { postData }) {
  return (
    <Layout>
      <Head>
        404 - Page not found
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.id}</h1>
        <div className={utilStyles.lightText}>
          Oops, this page does not exist. 
        </div>
      </article>
    </Layout>
  )

//todo displaly random cat picture for 404
// Create an image in HTML with the ID "catimg"
{/*document.getElementById("catimg").style.display = "none";
function getcat() {
    let rURL = "http://aws.random.cat/meow";
    let r = new XMLHttpRequest();
    r.open("GET", rURL);

    r.responseType = "json";
    r.send();

    r.onload = function() {
        let jsonObj = r.response;
        let img = document.getElementById("catimg");
        img.src = jsonObj["file"];
        img.style.display = "inline-block";
    }
}
getcat();*/}



}

