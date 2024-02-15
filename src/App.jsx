import styles from './App.module.css'
import { About } from './components/About/About'
import { Contact } from './components/Contact/Contact'
import { Experience } from './components/Experience/Experience'
import { Hero } from './components/Hero/Hero'
import { Navbar } from './components/Navbar/Navbar'
import { Projects } from './components/Projects/Projects'
import {Certificates} from './components/Certificates/Certificates'
import { Routes, Route } from 'react-router-dom'


function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<><Hero/>,<About/>,<Experience/>,<Contact/></>} />
        <Route path='/#about' element={<About/>} />
        <Route path='/#experience' element={<Experience/>} />
        <Route path='/projects' element={<><Projects/>,<Contact/></>} />
        <Route path='#contact' element={<Contact/>} />
        <Route path='/certificates' element={<><Certificates/>,<Contact/></>} />
        
      </Routes>
      {/* <Hero/>
      <About />
      <Experience />
      <Projects />
      <Contact /> */}
    </div>
  )
}

export default App
