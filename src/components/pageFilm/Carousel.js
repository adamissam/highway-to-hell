import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from "mdbreact";
import './Carousel.css';
import  Axios from "axios";

class MultiCarouselPage extends React.Component {
    constructor(props){
        super(props);
        this.state={
            data: []
        }
    }
    componentDidMount(){
        Axios.get("https://hackathon-wild-hackoween.herokuapp.com/movies")
        .then(Response => {
            this.setState({data: Response.data})
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <MDBContainer className="cardImg">
              <MDBCarousel activeItem={1} length={3} slide={true} showControls={true} showIndicators={true} multiItem>
                <p className="scroller">Last movies</p>
                <MDBCarouselInner>
                  <MDBRow>
                    <MDBCarouselItem itemId="1">
                      <MDBCol md="4">
                        <MDBCard className="mb-2">
                          <MDBCardImage className="img-fluid" src="https://nsa40.casimages.com/img/2019/10/07/1910070355402418.jpg" />
                          <MDBCardBody>
                            <MDBCardTitle className="title">Hereditary</MDBCardTitle>
                            <MDBCardText>
                            </MDBCardText>
                            <MDBBtn color="light">More</MDBBtn>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                      <MDBCol md="4">
                        <MDBCard className="mb-2">
                          <MDBCardImage className="img-fluid" src="https://nsa40.casimages.com/img/2019/10/07/191007044131396219.jpg" />
                          <MDBCardBody>
                            <MDBCardTitle className="title">Blood_Island</MDBCardTitle>
                            <MDBCardText>
                            </MDBCardText>
                            <MDBBtn color="light">More</MDBBtn>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                      <MDBCol md="4">
                        <MDBCard className="mb-2">
                          <MDBCardImage className="img-fluid" src="https://nsa40.casimages.com/img/2019/10/07/191007040506771841.jpg" />
                          <MDBCardBody>
                            <MDBCardTitle className="title">Paranormal_Activity_2</MDBCardTitle>
                            <MDBCardText>
                            </MDBCardText>
                            <MDBBtn color="light">More</MDBBtn>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                      <MDBCol md="4">
                        <MDBCard className="mb-2">
                          <MDBCardImage className="img-fluid" src="https://nsa40.casimages.com/img/2019/10/07/191007035726264614.jpg" />
                          <MDBCardBody>
                            <MDBCardTitle className="title">Us</MDBCardTitle>
                            <MDBCardText>
                            </MDBCardText>
                            <MDBBtn color="light">More</MDBBtn>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                      <MDBCol md="4">
                        <MDBCard className="mb-2">
                          <MDBCardImage className="img-fluid" src="https://nsa40.casimages.com/img/2019/10/07/191007041123380836.jpg" />
                          <MDBCardBody>
                            <MDBCardTitle className="title">Saw</MDBCardTitle>
                            <MDBCardText>
                            </MDBCardText>
                            <MDBBtn color="light">More</MDBBtn>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                      <MDBCol md="4">
                        <MDBCard className="mb-2">
                          <MDBCardImage className="img-fluid" src="https://nsa40.casimages.com/img/2019/10/07/19100704112336450.jpg" />
                          <MDBCardBody>
                            <MDBCardTitle className="title">Saw_2</MDBCardTitle>
                            <MDBCardText>
                            </MDBCardText>
                            <MDBBtn color="light">More</MDBBtn>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="3">
                      <MDBCol md="4">
                        <MDBCard className="mb-2">
                          <MDBCardImage className="img-fluid" src="https://nsa40.casimages.com/img/2019/10/07/191007035914844273.jpg" />
                          <MDBCardBody>
                            <MDBCardTitle className="title">Scream_3</MDBCardTitle>
                            <MDBCardText>
                            </MDBCardText>
                            <MDBBtn color="light">More</MDBBtn>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                      <MDBCol md="4">
                        <MDBCard className="mb-2">
                          <MDBCardImage className="img-fluid" src="https://nsa40.casimages.com/img/2019/10/07/191007035954399300.jpg" />
                          <MDBCardBody>
                            <MDBCardTitle className="title">Scream_4</MDBCardTitle>
                            <MDBCardText>
                            </MDBCardText>
                            <MDBBtn color="light">More</MDBBtn>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                      <MDBCol md="4">
                        <MDBCard className="mb-2">
                          <MDBCardImage className="img-fluid" src="https://nsa40.casimages.com/img/2019/10/07/191007040324664897.jpg" />
                          <MDBCardBody>
                            <MDBCardTitle className="title">Insidious</MDBCardTitle>
                            <MDBCardText>
                            </MDBCardText>
                            <MDBBtn color="light">More</MDBBtn>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                    </MDBCarouselItem>
                  </MDBRow>
                </MDBCarouselInner>
              </MDBCarousel>
            </MDBContainer>
          );
    }
  }

export default MultiCarouselPage;