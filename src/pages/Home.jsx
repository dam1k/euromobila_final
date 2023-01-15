import React from 'react'
import Header from '../components/Header/Header';
import Info from '../components/Info/Info';
import Categories from '../components/Categories/Categories';
import { setDocumentTitle } from '../utils/setDocumentTitle';

const Home = () => {
  setDocumentTitle('Euromobila')
  return (
    <>
    <Header/>
    <Info/>
    <Categories/>
    </>
  )
}

export default Home