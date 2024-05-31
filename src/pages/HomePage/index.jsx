import Header from '../../components/HeaderBar'
import Content from './Content'
import Footer from './Footer'
import './style.css'

export default () => {
      
      return (
            <section className='homepage'>
                  <Header>
                        <span style={{ margin: "0 25px" }}>
                              <strong>Estee Lauder </strong>AgileEngine</span>
                  </Header>
                  {/* search screen */}
                  <Content/>
                  <Footer/>
            </section>
      )
}