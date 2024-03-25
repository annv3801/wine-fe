import TopNavbar from "./Components/TopNavbar";
import Carousel from "./Components/Carousel";
import Footer from "./Components/Footer";
const slides = [
    '/icon/banner2.jpg',
    '/icon/banner-ruou-ngoai2IPHL.jpg',
    '/icon/banner-ruou-ngoaiMDGVL.jpg'
]

export default function App() {
  return (
      <div>
          <TopNavbar></TopNavbar>
          <Carousel autoSlide={true}>
              {[...slides.map((s) => (
                  <img src={s} height="100%" />
              ))]}
          </Carousel>
          <div className="bg-[#e9e9e9] py-6 md:py-10 px-4 md:px-0">
              <div className="container mx-auto bg-white rounded-3xl px-10 py-8 custom-font">
                  <h1 className="text-center text-blue-400 border-b-2 pb-5 mb-5">Tại sao lại chọn chúng tôi</h1>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </div>
          </div>
          <Footer></Footer>
      </div>
  )
}