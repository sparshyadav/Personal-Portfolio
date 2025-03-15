import Education from '../components/Education/Education'
import Navbar from '../components/Navbar/Navbar'
import Overview from '../components/Overview/Overview'
import PhotoContainer from '../components/PhotoContainer/PhotoContainer'
import Summary from '../components/Summary/Summary'
import Work from '../components/Work/Work'
import Skills from '../components/Skills/Skills'
import Projects from '../components/Projects/Projects'
import Footer from '../components/Footer/Footer'

function PortfolioPage() {
    return (
        <div>
            <>
                <Navbar />
                <PhotoContainer />
                <Summary />
                <Overview />
                <Work />
                <Education />
                <Skills />
                <Projects />
                <Footer />
            </>
        </div>
    )
}

export default PortfolioPage
