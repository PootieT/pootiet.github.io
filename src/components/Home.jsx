import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image } from 'react-bootstrap';
import './Home.css'

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Jumbotron>
          <Row className="show-grid text-center"> 
            <Col xs={6} sm={6}>
              <Image src="assets/research-profile-2.jpg" circle fluid className="space-profile" />
            </Col>   
            <Col xs={6} sm={6} style={{textAlign:"left"}}>
              <h1>Zilu Tang (Peter)</h1>
              <h5>/tzee-lu, tongue (Peter)/</h5>
              <p>PhD Student, Boston Univeristy</p>
              <p>Language model reasoning; Interpretability; Multi-linguality; Generalization;</p>
              <a href="https://scholar.google.com/citations?user=E9g28XEAAAAJ"><Image src="assets/socials/google_scholar.png" circle fluid className="socials-icon"/></a>
              <a href="https://www.linkedin.com/in/peter-tang-83802495/"><Image src="assets/socials/linkedin.png" circle fluid className="socials-icon"/></a>
              <a href="https://github.com/PootieT"><Image src="assets/socials/github.png" circle fluid className="socials-icon"/></a>
              <a href="https://twitter.com/Zilu_Tang_Peter"><Image src="assets/socials/twitter.png" circle fluid className="socials-icon"/></a>
              <a href="mailto: zilu.p.tang@gmail.com"><Image src="assets/socials/gmail.png" circle fluid className="socials-icon"/></a>
              <a href="https://www.instagram.com/tangpihai/"><Image src="assets/socials/instagram.png" circle fluid className="socials-icon"/></a>
            </Col>
            <Col xs={6} sm={6}>
            </Col>
          </Row>
          <Row className="show-grid text-center"> 
            <Col xs={12} sm={12} style={{textAlign:"left", paddingTop:"1em"}}>
              <p>Hello there!</p>
              <p>I am a PhD student at Boston University advised by Derry Wijaya (Expected graduation 05/2028). I am interested in understanding langauge models and leverage such insights to improve
                generalizations across tasks or languages. One of the mediums I am particularly fascinated by is natural langauge explanation (NLE) as a tool for interpretability
                and generalization. Most of my prior works leverage NLEs in some way to improve model performance, from code generation, personalized alignment, to llm-as-judge/
                reward model. Recently I have been looking more into how models implment basic pre-requisite skills of reasoning (i.e. Entity Tracking). A current problem that 
                keeps me up at night is how to leverage mechanistic interpretability to improve model generated NLE to be faithful to their internal decision makings. 
                Previously, I was a research engineer at IBM Research. I did my Masters at BU, and I have interned at MIT-IBM Watson AI Lab and Apple. 
                More on my research interest <Link to="/research" className="obvious-link"><b>here</b></Link></p>
              
              <p>In my spare time, I try to keep up with my gardening hobbies. You will find a lot of them in an individual <b>spaces</b>. If you 
              have similar interest in any of them, or want to build something cool based on them, I am all ears.</p>
              <p>
                More bio <Link to="/about" className="obvious-link"><b>here</b></Link>, 
                and contact me <Link to="/connect" className="obvious-link"><b>here</b></Link>. 
                See resume <a href="https://drive.google.com/file/d/1qXdeSlgQT8ogbOCrzhneyW6Pc5wEnY48/view?usp=sharing"><b> here </b></a>
                and CV <a href="https://drive.google.com/file/d/1UDaT3NQo9Iq-bbpb0iCy6smcvswjW5Qz/view?usp=share_link"><b> here</b></a>
              </p>
            </Col>
          </Row>
        </Jumbotron>
        <hr/>
        <Jumbotron>
          <h1>News (last updated 09/2025)</h1>
          <ul>Our work <a href="https://openreview.net/forum?id=eXaXdKp6Iy"><i>"Is Active Persona Inference Necessary for Aligning Small Models to Personal Preferences?"</i></a> got accepted at PALS Workshop EMNLP 2025! (09/2025).</ul>
          <ul>Our contribution to <a href="https://sigtyp.github.io/st2025-mrl.html">MRL shared task EMNLP 2025</a> got accepted! Lookout for multilingual physical reasoning dataset "Global PIQA" soon on Arxiv! (09/2025).</ul>
          <ul>Our work <a href="https://arxiv.org/abs/2505.13388"><i>"R3: Robust Rubric-Agnostic Reward Model"</i></a> got accepted at LLM Evaluation Workshop NeurIPS 2025! (09/2025). Arxiv and follow-ups coming soon!</ul>
          <ul>Presented <i>"Mechanistic Understanding of Entity Tracking With Multiple Operations"</i> at New England Mechanistic Interpretability (NEMI) Workshop! (08/2025).</ul>
          <ul>Our internship work with Apple <a href="https://arxiv.org/abs/2501.17295"><i>"Mitigating Hallucinated Translations in Large Language Models with Hallucination-focused Preference Optimization"</i></a> got accepted at NAACL 2025! (01/2025).</ul>
          <ul>Started my internship with Apple Machine Translation Team under Qin Gao (05/2024).</ul>
          <ul>Presented <i>"Explain-then-translate: An Analysis on Improving Program Translation with Self-generated Explanations"</i> at EMNLP 2023! (12/2023).</ul>
          <ul>Starting my PhD in the fall at Boston University! (09/2023)</ul>
          <ul>Started my internship with MIT-IBM Watson AI Lab under Jie Chen and Yoon Kim (05/2022).</ul>
          <ul>Our work "Effects of #Coronavirus Content Moderation on Misinformation and Anti-Asian Hate on Instagram" got accepted in New Media & Society! (07/2023)</ul><ul/>
          <ul>Our work on <i>"AugCSE: Contrastive Sentence Embedding with Diverse Augmentation"</i> got accepted in AACL 2022! (09/2022). It is subsequently presented at Boston University AI-Research Seminar (09/2022) and Boston University CISE Graduate Student Workshop (01/2023)</ul>
          <ul>Fresh preprint <a href="https://arxiv.org/abs/2209.03554"><i>"Knowledge-based Template Translation in Low-Resource Setting"</i></a> out <a href="https://sites.google.com/view/cogsci2021-bc-meetup/schedule/informal-presentations?authuser=0">
            on Arxiv!</a> (09/2022)</ul>
          <ul>Started my Masters' Degree at Boston University with <a href="https://www.bu.edu/provost/awards-publications/award-opportunities/lu-lingzi-scholarship/">Lu Lingzi full-ride scholarship</a> + stipend! (09/2021)</ul>
          <ul>I presented <a href="https://arxiv.org/abs/2008.11649"><i>"Discrete Word Embedding"</i></a> at <a href="https://sites.google.com/view/cogsci2021-bc-meetup/schedule/informal-presentations?authuser=0">
            CogSci 2021 Boston-Cambridge Meetup</a> (07/28/2021). Nice to present in person again!</ul>
          <ul>I won 2nd place and best posing award at Granite State Open natural bodybuilding show. (10/23/2020)</ul>
          <ul>I presented <a href="https://icaps20subpages.icaps-conference.org/wp-content/uploads/2020/10/KEPS-2020_paper_9.pdf"> <i>"Discrete Word Embedding"</i> </a>
          at <a href="https://icaps20subpages.icaps-conference.org/workshops/keps/">
            KEPS Workshop (ICAPS 2020)</a> (10/22/2020)</ul>
          <ul>Our group paper "TraceHub" won Best Demo at AAAI 2020 (2/12/2020)</ul>
        </Jumbotron>
        <hr/>
        <Jumbotron style={{paddingBottom:"0em"}}>
        <h1>Spaces</h1>
        </Jumbotron>
        <Row className="show-grid text-center">    
          <Col xs={6} sm={3} className="space-wrapper">
            <Link to="/fitness">  
              <Image src="assets/fitness-icon.png" circle fluid className="space-profile" />
              <h3>Fitness</h3>
            </Link>
          </Col>
          <Col xs={6} sm={3} className="space-wrapper">
            <Link to="/research">  
              <Image src="assets/research-icon.png" circle fluid className="space-profile" />
             <h3>Research</h3>
            </Link>
          </Col>
          <Col xs={6} sm={3} className="space-wrapper">
            <Link to="/tech">  
              <Image src="assets/tech-icon.png" circle fluid className="space-profile" />
              <h3>Tech</h3>
            </Link>
          </Col>
          <Col xs={6} sm={3} className="space-wrapper">
            <Link to="/food">  
              <Image src="assets/food-icon.png" circle fluid className="space-profile" />
              <h3>Food</h3>
            </Link>
          </Col>
          <Col xs={6} sm={3} className="space-wrapper">
            <Link to="/modeling">  
              <Image src="assets/modeling-icon.png" circle fluid className="space-profile" />
              <h3>Modeling</h3>
            </Link>
          </Col>
        </Row>
      </Container>
    )
  }
}