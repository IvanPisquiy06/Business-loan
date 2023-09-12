import './thank-you.css'
import Offers from '../offers/offers'

function ThankYou(){
    return<div>
        <h2>Thank you for providing your information!</h2>
        <p className='thanks'>We will be in contact soon. Also, check the following offers, they may interest you!</p>
        <Offers />
    </div>
}

export default ThankYou