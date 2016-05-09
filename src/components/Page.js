import React, { PropTypes } from 'react'
import { Base, Heading, Text, Footer as RebassFooter } from 'rebass'
import { Flex } from 'reflexbox'

const sharedPropTypes = {
  children: PropTypes.node.isRequired
}

const Page = ({ children }) =>
  <Flex
    column
    justify='center'
  >
    <Base
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '100%'
      }}
    >
      {children}
    </Base>
  </Flex>

Page.propTypes = {
  ...sharedPropTypes
}

const Title = ({ children }) =>
  <Heading
    level={1}
    mb={2}
    mt={3}
    style={{ textAlign: 'center' }}
  >
    {children}
  </Heading>

Title.propTypes = {
  ...sharedPropTypes
}

Page.Title = Title

const Subtitle = ({ children }) =>
  <Text
    mb={3}
    style={{ textAlign: 'center' }}
  >
    {children}
  </Text>

Subtitle.propTypes = {
  ...sharedPropTypes
}

Page.Subtitle = Subtitle

const Content = ({ children }) =>
  <Base
    my={2}
    px={2}
  >
    {children}
  </Base>

Content.propTypes = {
  ...sharedPropTypes
}

Page.Content = Content

const Footer = () =>
  <RebassFooter mx={2}>
    <Text>Made by <a href='http://benjamintatum.com'>Benjamin Tatum</a>.</Text>
  </RebassFooter>

Page.Footer = Footer

export default Page
