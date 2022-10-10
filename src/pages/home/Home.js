
import './home.css';

const Home = () => {
    return(
            <section className="hero-page">
                <div className='container-wrapper'>
                    <div className='container'>
                        <div className='homepage-title'>
                            <h1>WELCOME TO MY TEST WEBSITE</h1>
                        </div>
                        <div className='subtext'>
                            <p>Welcome to the website. If you're here, you're likely looking to find random words. Random Word Generator is the perfect tool to help you do this. While this tool isn't a word creator, it is a word generator that will generate random words for a variety of activities or uses.
                            </p>
                        </div>
                        <div className='explore-container'>
                            <button className='explore-btn'>explore</button>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Home;