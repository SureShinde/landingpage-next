import React from "react"
import Head from 'next/head'
import Layout from "../components/Layout/";
import Section from "../components/Section/index";
import Button from "../components/Button/index";

const theme = {
  main : "$magenta"
}

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Section>
            <Button text="hello world"/>
        </Section>
      </Layout>
    </React.Fragment>
  )
}
