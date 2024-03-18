import React from "react";
import './master.css'
//import { useParams } from 'react-router
function BannerImage() {
    return (
        <div>
            <img className="banner" src={process.env.PUBLIC_URL + '/images/Codito.JPG'} alt="BannerImage" />
        </div>
    )
}

export default BannerImage;