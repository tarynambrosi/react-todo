import './About.css'
import image from '../../assets/images/taryn2024.jpg'

export default function About() {
  return (
    <section className="about">
      <article className="title p-5">
        <h1 className="text-center">
          About the Dev
        </h1>
      </article>
      <div className="container">
        <div className="row">
          <div className="mt-5 col-lg-6">
            <img src={image} alt="Taryn Ambrosi, Web Developer" className='pic'/>
          </div>
          <div className="aboutText mt-5 col-lg-6">
            <h3>Hello!</h3>
            <p>
              Thanks for visiting my ToDo app! I created this with ReactJS and it communicates with a SQL database via an ASP.NET Core 6 Web API. This is my very first project using React and it's lots of fun! 
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}