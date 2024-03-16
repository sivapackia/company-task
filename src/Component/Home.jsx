import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import "./Component.scss"
import { Container } from "@mui/material";
import { GiMorbidHumour } from "react-icons/gi";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { AiFillThunderbolt } from "react-icons/ai";
import Crowsel from "./crowsal"
import { FaFacebook } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";


const Home=()=>{
    return(
        <>
        {/* Navbar */}
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:"white"}}>
        <Toolbar>
            <Box>
                <Typography component="img" src="https://d2aq6dqxahe4ka.cloudfront.net/themes/front/page/images/icons/impactguru.png">
                </Typography>
            </Box>
        </Toolbar>
      </AppBar>
    </Box>
    {/* section 1 */}
    <Box sx={{width:{md:"100%"}}} id="Section-1">
        <Box maxWidth="xl">
        <Box className="bg-img" sx={{width:{md:"100%",position:"relative",height:{md:"600px",sm:"700px",xs:"750px"}}}}>
            <Box sx={{position:"absolute",top:{md:"100px",xs:"100px"},left:"50px"}}>
           <Box sx={{borderBottom:"2px solid #4b4b4b",display:"inline-block",padding:"15px"}}>
            <Typography component="h4" variant="h4" sx={{fontSize:"40px",fontWeight:"600",fontFamily:"sans-serif",color:"#4b4b4b"}}>
             <span style={{color:"#21936a "}}>Need Funds</span> For Your<br></br>
             Medical Treatment?
            </Typography>
            <Typography component="p" sx={{fontSize:"25px",color:"#4b4b4b"}}>
            Don't worry you've come to the right platform.
            </Typography>
           </Box>
           <Box sx={{padding:"15px"}}>
           <Typography component="p" sx={{fontSize:"25px",color:"#4b4b4b"}}>
           With <span style={{fontSize:"35px",color:"#21936a"}}>0%*</span> platform fee, you can raise funds too!
            </Typography>
            <Typography sx={{padding:"15px",backgroundColor:"#21936a",display:"inline-block",color:'white',fontWeight:"700",borderRadius:"25px",marginTop:"20px",fontSize:{xs:"15px",sm:"20px",md:"1.25rem"}}} component="h6" variant="h6">
                Start A Free Fundrasier
            </Typography>
           </Box>
           </Box>
        </Box>
        </Box>
    </Box>
    {/* Section-2 */}
    <Box sx={{width:{md:"100%"}}}>
        <Container sx={{backgroundColor:"#ffe15f",padding:"10px"}}>
            <Box sx={{display:"flex",alignItems:"center",justifyContent:{md:"space-around",xs:"center"},flexWrap:"wrap"}}>
                <Typography sx={{display:"flex",justifyContent:{md:"center",xs:"start"},width:{md:"33%",xs:"100%",sm:"33%"}}}>
                    <Typography component="i" sx={{fontSize:"45px",margin:"10px",verticalAlign:"middle"}}>
                    <GiMorbidHumour />
                    </Typography>
                    <Box>
                    <Typography sx={{fontSize:"25px",fontWeight:"800"}}>
                        30 Lac +
                    </Typography>
                    <Typography sx={{fontWeight:"600",fontSize:"15px"}}>
                      Generous Donors
                    </Typography>
                    </Box>
                </Typography>
                <Typography sx={{display:"flex",justifyContent:{md:"center",xs:"start"},alignContent:"center",width:{md:"33%",xs:"100%",sm:"33%"}}}>
                    <Typography component="i" sx={{fontSize:"45px",margin:"10px",verticalAlign:"middle"}}>
                    <BsFillArrowUpRightCircleFill />
                    </Typography>
                    <Box>
                    <Typography sx={{fontSize:"25px",fontWeight:"800"}}>
                        2 Lac+
                    </Typography>
                    <Typography sx={{fontWeight:"600",fontSize:"15px"}}>
                    Fundraisers Created Successfully
                    </Typography>
                    </Box>
                </Typography>
                <Typography sx={{display:"flex",justifyContent:{md:"center",xs:"start"},width:{md:"33%",xs:"100%",sm:"33%"}}}>
                    <Typography component="i" sx={{fontSize:"45px",margin:"10px",verticalAlign:"middle"}}>
                    <AiFillThunderbolt />
                    </Typography>
                    <Box>
                    <Typography sx={{fontSize:"25px",fontWeight:"800"}}>
                        30 Lac +
                    </Typography>
                    <Typography sx={{fontWeight:"600",fontSize:"15px"}}>
                      Generous Donors
                    </Typography>
                    </Box>
                </Typography>
            </Box>
        </Container>
    </Box>
    {/* section-3 */}
    <Box sx={{width:{md:"100%",marginTop:"20px"}}}>
        <Container>
            <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap"}}>
                <Box sx={{width:{md:"60%",sm:"100%",xs:"100%"}}}>
                    <Typography component="h3" sx={{fontWeight:"800",color:"#6c6c6c",fontSize:{md:"45px",sm:"35px",xs:"20px"}}}>
                    You can Choose<br></br>
                    Medical Fundraising with<br></br> ImpactGuru if
                    </Typography>
                    <Typography component="ul">
                        <li style={{fontSize:"15px",fontWeight:"800",color:"#6c6c6c",padding:"10px"}}>You need funds urgently</li>
                        <li style={{fontSize:"15px",fontWeight:"800",color:"#6c6c6c",padding:"10px"}}>You have limited savings</li>
                        <li style={{fontSize:"15px",fontWeight:"800",color:"#6c6c6c",padding:"10px"}}>Medical Loans and Insurance are not enough</li>
                    </Typography>
                    <Typography component="p" sx={{fontSize:"15px",fontWeight:"800",color:"#6c6c6c"}}>
                    Get financial help for medical treatment by raising fundswith the support of donors and well-wishers online.
                    </Typography>
                    <Typography component="p" sx={{border:"1px solid #21936a",fontWeight:800,display:"inline-block",padding:"10px",color:"#21936a",boxShadow:"0px 0px 5px #21936a",marginTop:"20px",width:"200px",textAlign:"center"}}>
                            GET CALLBACK
                    </Typography>
                </Box>
                <Box sx={{width:{md:"40%",sm:"100%",xs:"100%"}}}>
                    <Typography component="img" src="https://d2aq6dqxahe4ka.cloudfront.net/themes/neumorphism/images/medical-crowdfunding/webp/trial-croped.webp" width="100%">
                    </Typography>
                </Box>
            </Box>
        </Container>
    </Box>
    {/* section-4 */}
    <Box>
        <Container>
            <Box>
                <Box>
                <Box sx={{textAlign:"center"}}>
                    <Typography component="h6" variant="h6" sx={{fontWeight:800,marginBottom:"25px"}}>
                    Raise Funds For Medical Treatment On ImpactGuru
                    </Typography>
                    <Typography component="p" sx={{fontWeight:800,color:"gray"}}>
                    Get emergency financial help to pay hospital bills and medication bills with online fundraising:
                    </Typography>
                </Box>
                </Box>
            </Box>
        </Container>
    </Box>
    {/* section-5 */}
    <Box style={{marginTop:"20px"}}>
        <Container>
            <Box>
             <Crowsel/>
            </Box>
        </Container>
    </Box>
    {/* section-6 */}
    <Box sx={{marginTop:"30px"}}>
        <Container>
            <Box>
                <Box>
                    <Typography sx={{fontWeight:"800",textAlign:"center"}} component="h2" variant="">
                    Your fundraising journey is successful! We wish you a speedy recovery!
                    </Typography>
                </Box>
                <Box sx={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"20px"}}>
                    <Typography sx={{backgroundColor:"#21936a",color:"white",fontWeight:"800",display:"inline-block",padding:"10px 15px",margin:"0px 20px",boxShadow:"0px 0px 5px #21936a"}}>
                        START A FREE FUNDRISER
                    </Typography>
                    <Typography sx={{backgroundColor:"white",color:"#21936a",fontWeight:"800",display:"inline-block",padding:"10px 15px",border:"2px solid #21936a"}}>
                        GET A CALLBACK
                    </Typography>
                </Box>
            </Box>
        </Container>
    </Box>
    {/* footer */}
    <Box id="Footer" sx={{width:{md:"100%"},height:{md:"550px",xs:"750px",sm:"600px"}}}>
        <Container>
            <Box>
                <Typography sx={{marginBottom:"30px"}}>
                </Typography>
            <Box component="div" sx={{backgroundColor:"#fff0f087",padding:"20px",display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}>
                <Box sx={{width:{md:"50%",xs:"100%",sm:"100%"}}}>
                    <Typography sx={{color:"white",fontWeight:800,fontSize:"30px"}}>
                    Join The Impact Community
                    </Typography>
                    <Box sx={{marginTop:"20px",position:"relative"}}>
                    <Typography component="input" placeholder="Enter The Email" type="email" sx={{border:"none",padding:"10px 15px",borderRadius:"5px",width:"50%"}}>
                    </Typography>
                    <Typography component="button" sx={{color:"#21936a",padding:"10px 15px",border:"none",position:"absolute",top:"0px",left:{md:"250px",xs:"170px",sm:"290px"}}}>
                     Subscribe  
                    </Typography>
                    <Typography sx={{fontWeight:800,color:"white",marginTop:"10px"}}>
                        Please Enter The Email
                    </Typography>
                    </Box>
                </Box>
                <Box sx={{width:{md:"50%",xs:"90%",sm:"100%"}}}>
                <Typography sx={{color:"white",fontWeight:800,fontSize:"30px"}}>
                Follow us
                </Typography>
                <Typography sx={{display:"flex",alignItems:"center",justifyContent:"space-evenly",backgroundColor:"white",padding:"5px 15px",marginTop:"20px"}}>
                    <i style={{fontSize:"35px",color:"black",verticalAlign:"middle"}}><FaFacebook /></i>
                    <i style={{fontSize:"35px",color:"black",verticalAlign:"middle"}}><FaWhatsappSquare/></i>
                    <i style={{fontSize:"35px",color:"black",verticalAlign:"middle"}}><FaYoutube /></i>
                    <i style={{fontSize:"35px",color:"black",verticalAlign:"middle"}}><FaLinkedin /></i>
                </Typography>
                </Box>
                </Box>
                <Box sx={{backgroundColor:"#342c00",padding:"30px 20px",borderTopRightRadius:"60px",borderTopLeftRadius:"60px",marginTop:"20px"}}>
                    <Box>
                        <Typography component="img" src="https://d2aq6dqxahe4ka.cloudfront.net/themes/front/page/images/icons/impactguru-white-tm.png" width="30%">
                        </Typography>
                    </Box>
                    <Box sx={{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}>
                        <Box sx={{width:{md:"50%",xs:"100%",sm:"100"}}}>
                            <Typography component="p" sx={{color:"white",fontWeight:700}}>
                            Impactguru is an online technology platform connecting donors and donees. We do not provide any financial return in any form whatsoever, including but not limited to financial securities (debt or equity), interest, dividend, profit share, rewards in cash, to individuals who make payments on the Platform.
                            </Typography>
                        </Box>
                        <Box sx={{width:{md:"50%",xs:"100%",sm:"100"}}}>
                            <Typography component="p" sx={{color:"#af9100",fontWeight:800,paddingLeft:"10px"}}>
                            Terms of Use - Privacy Policy - Raise a Concern - Cookie Policy
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Container>
    </Box>
    </>
    )
}

export default Home