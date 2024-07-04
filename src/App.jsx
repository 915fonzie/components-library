import React from 'react'
import Badge from './Components/Badges/index'
import Banner from './Components/Banners/index'
import Card from './Components/Cards/index'
import Testimonial from './Components/Testimonials/index'
import Tooltip from './Components/ToolTip/index'
import cardIcon from './assets/warning.svg'
import profilePic from './assets/testimonialProfile.png'
import logo from './assets/Logo.svg'
import tooltipsIcon from './assets/archive.svg'
import './css/index.css'

function App() {

  return (
    <div className='app-container'>
      <div className='badge-container'>
        <Badge>Badge</Badge>
        <Badge color="gray">Badge</Badge>
        <Badge color="red">Badge</Badge>
        <Badge color="yellow">Badge</Badge>
        <Badge color="green">Badge</Badge>
        <Badge color="blue">Badge</Badge>
        <Badge color="indigo" pill>Badge</Badge>
        <Badge color="purple" pill>Badge</Badge>
        <Badge color="pink" pill>Badge</Badge>
      </div>
      <div className='banner-container'>
        <Banner status="success">
          <Banner.Title>Congratulations!</Banner.Title>
          <Banner.Description>lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner.Description>
        </Banner>
        <Banner status="warning">
          <Banner.Title>Attention</Banner.Title>
        </Banner>
        <Banner status="error">
          <Banner.Title>There is a problem with your application</Banner.Title>
          <Banner.Description>lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner.Description>
        </Banner>
        <Banner status="neutral">
          <Banner.Title>Update Available</Banner.Title>
          <Banner.Description>lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner.Description>
        </Banner>
        <Banner>
          <Banner.Title>Multiple Updates Available</Banner.Title>
        </Banner>
      </div>
      <div className='card-container'>
        <Card icon={cardIcon} iconColor="red">
          <Card.Title>This is a Warning</Card.Title>
          <Card.Description>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card.Description>
        </Card>
        <Card>
          <Card.Title>Easy Deployment</Card.Title>
          <Card.Description>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card.Description>
        </Card>
      </div>
      <div className='testimonial-container'>
        <Testimonial name="May Andersons" job="Workcation" position="CTO" logo={logo}>
          <Testimonial.Quote>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna mulla vitae laoreer augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.</Testimonial.Quote>
        </Testimonial>
        <Testimonial name="May Andersons" job="Workcation" position="CTO" img={profilePic} >
          <Testimonial.Quote>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna mulla vitae laoreer augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.</Testimonial.Quote>
        </Testimonial>
      </div>
      <div className='tooltip-container'>
        <Tooltip
          title="Archive notes"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenerur."
          icon={tooltipsIcon}
          black
        >
          {(handleClick) => {
            return (
              <button className="btn" onClick={handleClick}>Black Tooltip</button>
            )
          }}
        </Tooltip>
        <Tooltip
          title="Archive notes"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenerur."
          icon={tooltipsIcon}
          white
        >
          {(handleClick) => {
            return (
              <button className="btn" onClick={handleClick}>White Tooltip</button>
            )
          }}
        </Tooltip>
        <Tooltip
          title="Archive notes"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenerur."
          icon={tooltipsIcon}
          darkBlue
        >
          {(handleClick) => {
            return (
              <button className="btn" onClick={handleClick}>Dark Blue Tooltip</button>
            )
          }}
        </Tooltip>
        <Tooltip
          title="Archive notes"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenerur."
          icon={tooltipsIcon}
          lightBlue
        >
          {(handleClick) => {
            return (
              <button className="btn" onClick={handleClick}>light Blue Tooltip</button>
            )
          }}
        </Tooltip>
        <Tooltip
          title="Archive notes"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenerur."
          icon={tooltipsIcon}
          darkPink
        >
          {(handleClick) => {
            return (
              <button className="btn" onClick={handleClick}>Dark Pink Tooltip</button>
            )
          }}
        </Tooltip>
        <Tooltip
          title="Archive notes"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenerur."
          icon={tooltipsIcon}
          lightPink
        >
          {(handleClick) => {
            return (
              <button className="btn" onClick={handleClick}>Light Pink Tooltip</button>
            )
          }}
        </Tooltip>
        <Tooltip
          title="Archive notes"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenerur."
          icon={tooltipsIcon}
          darkGreen
        >
          {(handleClick) => {
            return (
              <button className="btn" onClick={handleClick}>Dark Green Tooltip</button>
            )
          }}
        </Tooltip>
        <Tooltip
          title="Archive notes"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenerur."
          icon={tooltipsIcon}
          lightGreen
        >
          {(handleClick) => {
            return (
              <button className="btn" onClick={handleClick}>Light Green Tooltip</button>
            )
          }}
        </Tooltip>
      </div>
    </div>
  )
}

export default App
