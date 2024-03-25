import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Main = () => {
  return (
    <>
      <Header />
      <div className="container">
        <h3 className="mt-5 pt-5 text-center" style={{ height: '600px' }}>Muse</h3>
      </div>
      <Footer />
    </>
  )
}

export default Main
