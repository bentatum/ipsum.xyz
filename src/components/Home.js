import React from 'react'
import { IpsumGenerator, Page } from 'components'

const Home = () =>
  <Page>
    <Page.Title>
        Ipsum.xyz
    </Page.Title>
    <Page.Subtitle>
        Lorem Ipsum, plain and simple.
    </Page.Subtitle>
    <Page.Content>
      <IpsumGenerator/>
    </Page.Content>
    <Page.Footer/>
  </Page>

export default Home
