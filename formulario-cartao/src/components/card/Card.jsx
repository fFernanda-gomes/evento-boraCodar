import './Card.scss'
import bgCC from '/src/assets/bg-cc.png'
import logoVisa from '/src/assets/logo-visa.svg'
import iconAprox from '/src/assets/aprox.svg'

function Card() {
    return (
       <div className="cc">
        <div className="bg-cc">      
        </div>
        <div className="cc-logo">
            <img src={logoVisa} alt="" />
        </div>
       </div>
    )
}

export default Card