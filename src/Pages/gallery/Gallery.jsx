import './gallery.css'
import Header from '../../components/Header'
import HeaderImage from "../../images/header_bg_3.jpg"






const Gallery = () => {
  const galleryLength = 15;
  const images = [];
  for(let i=1 ; i<= galleryLength ; i++){
    images.push(require(`../../images/gallery${i}.jpg`))
  }

  return (
    <div>
      <Header title="Our Gallery" image={HeaderImage}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore quas quaerat atque est assumenda eius. Molestias obcaecati tempore nam exercitationem architecto rerum cupiditate error. Aliquam quae numquam fuga laborum quam?
      </Header>
      <section className="gallery">
        <div className="container gallery__container">
          {
            images.map((image,index)=>{
              return (
                <article>
                  <img src={image} alt={`Gallery Image ${index+1}`}/>
                </article>
              )
            })
          }
        </div>
      </section>
    </div>
  )
}

export default Gallery
