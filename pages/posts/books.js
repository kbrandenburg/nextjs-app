import Layout from '../../components/layout_nohead'
import Head from 'next/head'

export default function Books() {
  return (
    <Layout>
      <Head>
          <title>Books</title>
      </Head>
      <h1>Books</h1>
      <h2>Currently Reading</h2>
      <div>
        <p>The Last Man <i>Mary Shelley</i></p>
        <p>First published in 1826, I was interested in this book because it was an apocalyptic, dystopian science { }
          fiction novel. I have always had a fondness for such books, and coming out of the year 2020 they were even { }
          more interesting to me. </p>
        <p>I have only read the intro and started on chapter 1 at this point but I wanted to start this section of my { }
          website. I do have to say I am constantly having to look up words, makes me wonder if people were smarter in { }
          that era, in some ways at least. Or maybe it is overly burdensome to use big words? </p>
      </div>
      <br />
      <div>
        <p>The tower series <i>Stephen King</i></p>
        <p> I am on book 3 at this point. I took a break from reading because, well I'm not sure why, I figured I would { }
        resume reading it again soon. It is a lot of pages to digest, but it has been one heck of a ride so far. Stephen { }
        King is my favorite author. </p>
        <p>It was interesting to read book 1 of this series because King was very young when he { }
        wrote it and had not yet mastered his style (imho). He tried very hard to write prestigously, making it a bit { }
        cumbersome to read at points. But the story itself was quite captivating, but also very dark.</p>
      </div>
    </Layout>
  )
}
