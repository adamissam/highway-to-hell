import React, { useState,useEffect } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Button, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import  Axios from "axios";
import './Carousel.css'
import Trailer from './arrayTrailer'
import ReactPlayer from 'react-player'


const MultiCarouselPage = (props) => {
          const {
            buttonLabel,
            className
          } = props;


  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [dataApi, setDataApi] = useState([]);
  const [modal, setModal] = useState(false);
  const [titre, setTitre] = useState('');
  const [linki,setLinki] = useState('')
  
      
  useEffect(() => {
    
  const getApi = async () =>{
       const result =  await Axios("https://hackathon-wild-hackoween.herokuapp.com/movies")
        setDataApi(result.data.movies)
        }
       getApi()
      }, [])
  

      const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === dataApi.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
      }

      const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? dataApi.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
      }

      const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
      }

      const toggle = () => {
        setModal(!modal);
        
       };
      const saveTitre = (item) =>{
        setTitre(item.title)
        toggle()
      }
      const fetchLink = () =>{
        const link = Trailer.find(e => e.title.toLowerCase() === titre.replace(/_/g,' ').toLowerCase())
        return link && link.url
      }

  const slides = dataApi.splice(0,5).map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <img src={item.posterUrl} alt={item.title} className='image' onClick={() =>saveTitre(item)}  />
        
        <CarouselCaption className="text-primary" captionText={item.year} captionHeader={item.title}  />
        
      </CarouselItem>
    );
  });
console.log(titre)
  return (
    <div className='principalDiv'>
      <style>
        {
          `.custom-tag {
              max-width: 100%;
              height: 700px;
              background: white;
            }`
            
        }
      </style>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={dataApi} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>

      <Modal isOpen={modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
        toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{titre}</ModalHeader>
        <ModalBody>
        <ReactPlayer url={fetchLink()}playing />
      
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
      

    </div>
  );
}


export default MultiCarouselPage;