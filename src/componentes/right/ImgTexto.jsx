import ImgT1 from "../../imagenes/img1.jpg"
import ImgT2 from "../../imagenes/img2.jpg"
import ImgT3 from "../../imagenes/img3.jpg"
import ImgT4 from "../../imagenes/img4.jpg"

const ImgTexto = () => {
  return (
   <section className="rectangulo">
        <section>
            <img src={ImgT1}/>
            <p>Lorem ipsum dolor sit amet</p>
        </section>
        <section>
            <img src={ImgT2}/>
            <p>Lorem ipsum dolor sit amet</p> 
        </section>
        <section>
            <img src={ImgT3}/>
            <p>Lorem ipsum dolor sit amet</p> 
        </section>
        <section>
            <img src={ImgT4}/>
            <p>Lorem ipsum dolor sit amet</p> 
        </section>
    </section>
  )
}

export default ImgTexto