import About from "@/components/About"
import Blog from "@/components/Blog"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import Message from "@/components/Message"
import Service from "@/components/Service"
import Slideshow from "@/components/Slideshow"
import Vacancy from "@/components/Vacancy"
import Branch from "@/components/Branch"
import ScrollToTopButton from "@/components/ScrollToTopButton"
import ScrollToBottomButton from "@/components/ScrollToBottomButton"


const images = [
  '/v6.jpg',
  '/v8.jpg',
  '/v9.jpg',
  // Add more image paths as needed
];

export default function Home() {
  return (
    <main>
      <ScrollToBottomButton />
      <ScrollToTopButton />
      <div>
      <Slideshow images={images} interval={2000}  />
      
      </div>
      <Hero />
      <About />
      <Service />
      <Blog />
      <Vacancy />
      <Branch />
      <Contact />
      <p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.6416670579474!2d38.7649231741184!3d9.005081389364753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85b039c25bc1%3A0x941677a8f60160fe!2sDembel%20City%20Center!5e0!3m2!1sen!2set!4v1701196626070!5m2!1sen!2set"  height={450} className="w-full" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
      {/* <Message /> */}
      <Footer />
     
    </main>
  )
}
