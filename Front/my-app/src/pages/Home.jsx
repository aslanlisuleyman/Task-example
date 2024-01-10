import React from 'react'
import Static from '../components/Static'
import Cards from '../components/Cards'
import {Helmet} from "react-helmet";
import Information from '../components/Information';
const Home = () => {
  return (
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Home-Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Information/>
        <Static/>
        <Cards/>
    </div>
  )
}

export default Home