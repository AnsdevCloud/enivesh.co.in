import styled from "styled-components";
// import Button from "../components/items/ulip/Button";
import HeadingBox from "../components/items/HeadingBox";
import Irdai from "../components/items/Irdai";
import CardBox from "../components/elements/CardBox";
import OurParter from "../components/elements/OurParter";
import { useDispatch } from "react-redux";
import { hadleModelForm } from "../reduxapp/features/userdata/userSlice";
import ExploreCard from "../components/items/ExploreCard";
import ExploreData from '../jsondata/homepage/explore.json'
import Testimonial from "../components/items/Testimonial";
import partner from '../jsondata/homepage/partners.json';
import { useEffect } from "react";
import fb from "../Firebase/FireConfig";
import { Box, Button, Card, CardActionArea, CardContent, Grid, Paper, Stack, Typography } from "@mui/material";
import { FaAutoprefixer, FaCar, FaHeart, FaHome, FaLifeRing, FaMotorcycle } from "react-icons/fa";
import { IoIosAirplane } from "react-icons/io";
const HomePage = ({ haddleToggleModel }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const titletag = " “Securing __Futures__, Shielding __Families__.”"
  const dispatch = useDispatch();
  const processDescription = (description) => {
    // Apply bold style
    description = description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // Apply extra style
    description = description.replace(/__(.*?)__/g, '<span style="font-weight: 600; color:#ff5c00;">$1</span>');
    // Return processed description as JSX
    return <div className="tag" dangerouslySetInnerHTML={{ __html: description }} />;
  };

  const getgaf = async () => {
    const docRef = fb.firestore().collection("sumassured").doc("BQ1V9NqDyXAKL7WwmSfD")
    docRef.get().then(async (doc) => {
      if (doc.exists) {
        let dsr = {
          ...doc.data(), id: doc.id
        }

        const frd = async () => {
          var updateTimestamp = await dsr?.planre?.update({
            reference: docRef
          });
          console.log(updateTimestamp);
        }
        // console.log(dsr, docRef);
        if (dsr) {
          frd();
          // console.log(ds);
          dsr?.planre?.get().then((doc) => {
            console.log(doc.data());
          }).catch((error) => {
            console.log("No such document!");

          })
        }
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }).catch((error) => {
      console.log("Error getting document:", error);
    });
  }
  getgaf();

  return (
    <Wrapper>
      <BGWrapepr>
        <Content>
          <TitleHeading>
            <h1>INSURANCE है </h1>
            <h1 className="pot">तो PROTECTION है</h1>
            {processDescription(titletag)}
            <Paper elevation={0} sx={{ background: "#fbf3e8", width: "100%" }}>
              <Stack m={1} p={1} flexDirection={"row"} gap={1}>
                <Card elevation={0} sx={{ width: 100 }} >
                  <CardActionArea color="primary">
                    <CardContent  >
                      <Stack alignItems={"center"}>
                        <FaCar fontSize={40} color="#ff5c00" />
                        <Typography variant="caption" textAlign={"center"} component={"p"} color="primary">Car</Typography>
                      </Stack>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card elevation={0} sx={{ width: 100 }} >
                  <CardActionArea color="primary">
                    <CardContent  >
                      <Stack alignItems={"center"}>
                        <FaMotorcycle fontSize={40} color="#ff5c00" />
                        <Typography variant="caption" textAlign={"center"} component={"p"} color="primary">Moter</Typography>
                      </Stack>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card elevation={0} sx={{ width: 100 }} >
                  <CardActionArea color="primary">
                    <CardContent  >
                      <Stack alignItems={"center"}>
                        <FaHeart fontSize={40} color="#ff5c00" />
                        <Typography variant="caption" textAlign={"center"} component={"p"} color="primary">Health</Typography>
                      </Stack>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card elevation={0} sx={{ width: 100 }} >
                  <CardActionArea color="primary">
                    <CardContent  >
                      <Stack alignItems={"center"}>
                        <IoIosAirplane fontSize={40} color="#ff5c00" />
                        <Typography variant="caption" textAlign={"center"} component={"p"} color="primary">Traval</Typography>
                      </Stack>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card elevation={0} sx={{ width: 100 }} >
                  <CardActionArea color="primary">
                    <CardContent  >
                      <Stack alignItems={"center"}>
                        <FaHome fontSize={40} color="#ff5c00" />
                        <Typography variant="caption" textAlign={"center"} component={"p"} color="primary">Home</Typography>
                      </Stack>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Stack>
              <Stack flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"}>
                {/* <Button variant="outlined">View Plan</Button> */}
              </Stack>
            </Paper>

            {/* <Button radius={"4px"} lpP={"10px 20px"} Color={"#fff"} bgColor={"#ff5c00"} funcs={() => dispatch(hadleModelForm(true))} Width={"50%"} m={"50px 0"} lpWidth={"50%"} title={"Contact Now"} /> */}
          </TitleHeading>
        </Content>

        <ImgBox>
          <AbsuluteImg>
            <img src="/images/homepage/SabseLife.jpg" alt="" />
          </AbsuluteImg>
          <img src="/images/homepage/herosection.png" alt="" />
        </ImgBox>
      </BGWrapepr>
      <HeadingBox colorText={"LICENSED"} defaultText={"BY IRDAI"} />
      <Irdai />
      <CardBox />
      <OurParter data={partner} />
      <HeadingBox colorText={"Life Insurance Solutions "} defaultText={"Tailored to Every Stage of Life"} />
      <Container>
        <Grid container spacing={1}>

          {
            ExploreData && ExploreData.map((item, index) => {
              return <Grid key={index} item xs={12} sm={6} md={3}>
                <ExploreCard data={item} Width={"auto"} />
              </Grid>

            })
          }
        </Grid>
      </Container>
      <HeadingBox colorText={"Client "} defaultText={"Testimonial"} />
      <Testimonial />
    </Wrapper>
  )
}

export default HomePage

const Wrapper = styled.div`
position: relative;
width: 100%;
height:fit-content;

  
`;

const BGWrapepr = styled.div`
position: relative;
  width: 90%;
  margin: 20px auto;
  height: fit-content;
  display: flex;
  flex-wrap: wrap-reverse;
box-shadow: 0px 0px 9px -7px #1a1a1a;
border-radius: 10px;
overflow: hidden;
  background-color: #FFF;
  &::after{
    content: '';
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 60%;
    height: 100%;
    background-color: #fea6732e;
    border-radius:0 20% 0 0;
    z-index: 0;

  }
@media (min-width: 1024px) {
  height: 85vh;
    &::after{
        display:block;
    }
}
`; const AbsuluteImg = styled.div`
position: relative;
top: 26px;
left: 57px;
margin: 0 auto;
width: 90px;
img{
  width: 100%;
  height: 100%;
}
  @media (min-width: 425px) {
    top: 32px;
    left: 66px;
  

  }
    @media (min-width: 768px) {
    top: 37px;
    left: 114px;
    width: 180px;
  

  }
  @media (min-width: 1024px) {
    top: 37px;
    left: 150px;
    width: 235px;

  }
`;
const Content = styled.div`
margin-top: 60px;
width: 100%;
z-index: 1;




@media (min-width: 1024px) {
  min-width: 400px;
  width: 40%;
/* margin-left: 20px; */
  
}

`;
const TitleHeading = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin: 0px 0;
gap: 5px;

h1{
    font-weight: 700;
    font-size: 4vmax;
    &:first-child{
        color: #ff5c00;
    }
   
     @media (min-width: 1024px) {
     font-size: 4vmax;
    }
}
.tag{
    font-weight: 600;
    font-size: 1.3vmax;
    color: #444;
}
  .pot{
        color: #0074d9;
    } 
.dis{
    margin-top: 6vmax;
    padding: 0 50px;
    font-size: .9vmax;
    text-align: left;
    color:#777;
    font-weight: 500;

}
  @media (min-width: 1024px) {
  margin: 50px 0;

}

  
`;
const ImgBox = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: transparent;
  z-index: 1;
  img{
    width: 100%;
    height: 100%;
  }
 @media (min-width: 768px) {

   img{
    width: 65%;
    height: 100%;
  }}
  @media (min-width: 1024px) {
  width: 50%;
  height: 100%;
   img{
    width: 100%;
    height: 90%;
  }


}
  @media (min-width: 1440px) {
  width: 60%;
  height: 100%;
   img{
    width: 75%;
    height: 100%;
  }


}
`;
const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
padding: 20px;
flex-wrap: wrap;
  
`;