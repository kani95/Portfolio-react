import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import coverImg from '../assets/images/banner.jpg'

export default class Portrait extends Component {
  render() {
    return (
      <div>
            <Container id='container-portrait' fluid>
                <Image rounded fluid src={ coverImg } alt='Cover' />
            </Container>
      </div>
    )
  }
}
