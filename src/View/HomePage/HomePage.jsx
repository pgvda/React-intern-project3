import {React} from 'react'

import './HomePage.scss';

import Cards from '../../Components/Layout/Cards/Cards';



const HomePage = () => {
    return(
        <div className='home_page_card_list'>
        <div className='text-center home_main_div'>
            <h2>Our Exclusive Courses</h2>
            <button>View More</button>
        </div>
        <div className='text-center card_list'>
            <Cards/>
        </div>
        </div>
    )
}

export default HomePage;