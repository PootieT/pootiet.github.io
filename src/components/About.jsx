import React, { Component } from 'react'
import { Jumbotron, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css'

export default class About extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <Row className="justify-content-md-center">
            <Image src="assets/about-header.jpg" circle className="contained-image"/>
          </Row>
          
         <Col md={ {span: 8, offset: 2 }}>
         <Row className="justify-content-md-center">
          <h3>About me</h3>
         </Row>
          <Row className="justify-content-md-center" style={{textAlign:"left"}} >
              <p>
              I was made in Wenzhou, China. A small town of 7 million people.

              I came to the US when I was 14. Redding, California is not exactly where you 
              expect international students to end up, but I loved my host family.

              I moved to Evansville, Indiana for last two years of high school. I warmed
              benches for tennis and basketball teams.
              </p>
              <p>
              I went to Rice University for my B.S. in Bioengineering. With the dream 
              of "genetically engineer people so they smile more". I restarted iGEM 
              (international genetically engineered machine) at Rice with help of 
              Dr. Beth Beason. After my first CS class and bioinformatics research with
              Dr. Anirban Maitra (working with Dr. Anthony San Lucas), I realized my 
              nack for fast iterations and instantaneous feedback. In undergrad,
              I worked on a range of projects, from voice detection of caffein consumption,
              to DJ glove that mixes music in real time. I worked for academic resarch 
              labs, medical research centers, large corporations, and startups. You can find
              details of the projects in <Link to="/tech" className="obvious-link"><b>Tech Space</b></Link>.
              </p>
              <p>
              I worked as a research engineer at IBM Research Cambridge Lab. During my 
              time here, I have worked on industry grade chatbot systems (Watson Assistant), 
              Machine learning deployment and monitoring platform for fairness, drift and
              explanation (Watson Openscale), and many reserach products including a 
              multi-agent orchestrating platform (now Watson Orchestrate), and a automated 
              data pre-processing platform (TraceHub) which won best demo paper at AAAI 2020. 
              On my own time, I also collaborate with MIT-IBM Watson AI lab, building 
              neural-symbolic systems in application to natural language processing (NLP). 
              I was also interested in applying biologically plausible networks to NLP, such 
              as associative networks.
              </p>
              <p>
              I did my Masters' at BU and is now a PhD student advised by Derry Wijaya. I am fortunate to collaborate with folks
              at MIT-IBM Watson AI Lab (Jie Chen, Yoon Kim), I have done a wide range of work in low-resource NLP research.
              See my research statement and publications <Link to="/research" className="obvious-link"><b>here</b></Link>
              </p>

              I am very excited about many different things. I believe you can tell by
               my website now that I am almost certain to try things that I have not dabbled 
               in before (including building this website from scratch). If you are excited about the same thing as me, or think there are 
               things that I should definitely try, reach out!
          </Row>
         </Col>
        </Jumbotron>       
      </div>
      
    )
  }
}