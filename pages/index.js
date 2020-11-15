import React from "react"
import Head from 'next/head'
import Layout from "../components/Layout/";
import Section from "../components/Section/index";
export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Section>

        </Section>
      </Layout>
    </React.Fragment>
  )
}
