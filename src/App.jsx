import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Programs from './pages/Programs'
import Impact from './pages/Impact'
import GetInvolved from './pages/GetInvolved'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  )
}
