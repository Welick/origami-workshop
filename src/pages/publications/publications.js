import React from 'react';
// import './App.css';
import styles from './publications.module.css'
import PageWrapper from '../../components/page-wrapper'
import Title from '../../components/title'
import Origamis from '../../components/origamis'

const Publications = () => {
  return (
    <PageWrapper>
      <Title title={"Publications"} />
      <Origamis />
    </PageWrapper>
  )
}

export default Publications