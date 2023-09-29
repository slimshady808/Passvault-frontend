import React from 'react'
import { Header } from '../components/Header'
import { Navbar } from '../components/Navbar'
import { ListPassword } from '../components/ListPassword'

export const HomePage = () => {
  return (
    <>
    <Navbar/>
      <Header/>
      <ListPassword/>
    </>
  )
}
