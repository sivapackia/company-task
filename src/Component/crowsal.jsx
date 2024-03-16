import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GiKidneys } from "react-icons/gi";
import { FaRupeeSign } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { FaSkullCrossbones } from "react-icons/fa6";
import { GiHeartOrgan } from "react-icons/gi";
import { FaVirusCovid } from "react-icons/fa6";
const Crowsel=()=>{
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return(
        <>
            <div className="slider-container">
      <Slider {...settings}>
        <div>
          <div  style={{margin:"20px 20px",padding:"20px",backgroundColor:"white",boxShadow:"0px 0px 5px gray",textAlign:"center"}}>
            <i style={{fontSize:"60px",color:"#21936a"}}><GiKidneys /></i>
            <h3 style={{fontSize:'20px',fontWeight:800,margin:"5px 0px"}}>Kidney <br></br>Transplant</h3>
            <p style={{margin:"0px",fontWeight:800,color:"gray"}}>Maximum Rasied<br></br><i><FaRupeeSign /></i>46 Laks</p>
          </div>
        </div>
        <div>
        <div style={{margin:"20px 20px",padding:"20px",backgroundColor:"white",boxShadow:"0px 0px 5px gray",textAlign:"center"}}>
            <i style={{fontSize:"60px",color:"#21936a"}}><FaUserDoctor /></i>
            <h3 style={{fontSize:'20px',fontWeight:800,margin:"5px 0px"}}>Canser <br></br>crowdfunding</h3>
            <p style={{margin:"0px",fontWeight:800,color:"gray"}}>Maximum Rasied<br></br><i><FaRupeeSign /></i>98 Laks</p>
          </div>
        </div>
        <div>
        <div style={{margin:"20px 20px",padding:"20px",backgroundColor:"white",boxShadow:"0px 0px 5px gray",textAlign:"center"}}>
            <i style={{fontSize:"60px",color:"#21936a"}}><FaSkullCrossbones /></i>
            <h3 style={{fontSize:'20px',fontWeight:800,margin:"5px 0px"}}>Bone Marrow <br></br>Transplant</h3>
            <p style={{margin:"0px",fontWeight:800,color:"gray"}}>Maximum Rasied<br></br><i><FaRupeeSign /></i>61 Laks</p>
          </div>
        </div>
        <div>
        <div style={{margin:"20px 20px",padding:"20px",backgroundColor:"white",boxShadow:"0px 0px 5px gray",textAlign:"center"}}>
            <i style={{fontSize:"60px",color:"#21936a"}}><GiHeartOrgan /></i>
            <h3 style={{fontSize:'20px',fontWeight:800,margin:"5px 0px"}}>Heart <br></br>Transplant</h3>
            <p style={{margin:"0px",fontWeight:800,color:"gray"}}>Maximum Rasied<br></br><i><FaRupeeSign /></i>89 Laks</p>
          </div>
        </div>
        <div>
        <div  style={{margin:"20px 20px",padding:"20px",backgroundColor:"white",boxShadow:"0px 0px 5px gray",textAlign:"center"}}>
            <i style={{fontSize:"60px",color:"#21936a"}}><FaVirusCovid /></i>
            <h3 style={{fontSize:'20px',fontWeight:800,margin:"5px  0px"}}>Covid-19 <br></br>Support</h3>
            <p style={{margin:"0px",fontWeight:800,color:"gray"}}>Maximum Rasied<br></br><i><FaRupeeSign /></i>46 Laks</p>
          </div>
        </div>
      </Slider>
    </div>

        </>
    )
}
export default Crowsel