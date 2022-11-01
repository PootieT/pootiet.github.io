import React, { Component } from 'react'
import { Jumbotron, Row, Col, Image } from 'react-bootstrap';
import Publication from './Publication'
import '../Spaces.css'

export default class ResearchSpace extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <Row className="justify-content-md-center">
            <Image src="assets/reserach-header.jpg" circle className="contained-image"/>
          </Row>
          <Row className="justify-content-md-center space-title">
            <h1>Research</h1>
          </Row>
          <Col md={ {span: 8, offset: 2 }}>
            <p>
              I am interested in a variety of topics.
              With a background in bioengineering, I come from the field 
              of synthetic biology, bioinformatics (microfluidic imaging), and brain machine
              interface. 
            </p>
            <p>
              Throughout my time as a research engineer at IBM Research and MIT-IBM Watson 
              AI lab, I found great importance in adapting existing technilogies for low-resource aplications. 
              Being in the US as an international student exposed to diverse cultures, I further recognize the 
              importance of sharing technilogical advancement through developing AI techniques for low-resource 
              settings.
            </p>  
            <p>
              With the rise of large language models (LLM), my current interest resides in how to take advantage of such 
              "unhumanly" (scale, and in terms of representation) model, to boostrap low-resource settings. For low
              resource machine translation for instance, is there a way to induce large language model trained with 
              internet-scale priror, to generate parallel corpus for languages it has not seen before? 
              My research interest is closely related to work in conditional / controlled generations, but 
              also with a twist of inducing compositional behavior in LLMs (through prompting techniques). As soon as we
              can show the sequence prediction power in LLM can be induce to generate over unseen token with symbolic
              rules, we can begin to solve many problems where there is not enough data or is infeasible for us to 
              finetune any model parameters.
            </p>
              In addition to using LLM as a generator, I am also interested in how to efficiently distill these knowledge
              into smaller, more efficient and performant models. LLM generations contain bias and irrelevant information, 
              so how do we take noise into consideration when training downstream models? Again, many rule-based, unsupervised,
              semi-supervised techniques here can be used to automatically filter / condition the model to not only learn
              from large prirors of LLM, but also be efficient, fair, and humanly-aligned when encoding information from
              "knowlegde of the internet".

            <Row className="justify-content-md-center">
              <h4>Publications</h4>  
            </Row>
              <Publication 
                  title="AugCSE: Contrastive Sentence Embedding with Diverse Augmentations" 
                  authors={["Z Tang", "Y Kocyigit", "D Wijaya"]}
                  conference="AACL-IJCNLP 2022 (Oral)"
                  codeLink="https://github.com/PootieT/AugCSE"
                  pdfLink="http://arxiv.org/abs/2210.13749"
                   />
              <Publication 
                  title="TraceHub-A Platform to Bridge the gap between State-of-the-Art Time-Series Analytics and Datasets" 
                  authors={["S Agarwal", "C Muise", "M Agarwal", "S Upadhyay", "Z Tang", "Z Zeng", "Y Khazaeni"]}
                  conference="AAAI 2020"
                  awards="Best Demo Awards"
                  pdfLink="https://aiide.org/ojs/index.php/AAAI/article/download/7087/6941"
                   />
              <Publication 
                  title="Discrete Word Embedding for Logical Natural Language Understanding" 
                  authors={["Z Tang", "M Asai"]}
                  conference="KEPS Workshop, ICAPS 2020"
                  pdfLink="https://icaps20subpages.icaps-conference.org/wp-content/uploads/2020/10/KEPS-2020_paper_9.pdf"
                  videoLink="https://www.youtube.com/watch?v=BCLQcEBJ5Bs"
                  webLink="https://arxiv.org/abs/2008.11649"
                  awards="" />

            <Row className="justify-content-md-center">
            <h4>In Review</h4>
            </Row>
              <Publication 
                  title="Knowledge Based Template Machine Translation In Low-Resource Setting" 
                  authors={["Z Tang", "D Wijaya"]}
                  conference="Arxiv"
                  pdfLink="https://arxiv.org/abs/2209.03554"
                  />
              <Publication 
                  title="Effects of #Coronavirus Content Moderation on Misinformation and Anti-Asian Hate on Instagram" 
                  authors={["T Hong", "M Lu", "Z Tang", "Y Wang", "J Wu", "D Wijaya"]}
                  conference=""
                  />

            <Row className="justify-content-md-center">
            <h4>Presentations & Posters</h4>  
            </Row>
              <Publication 
                    title="Neural Immersion: an Artistic Interface to Electroencephalogram" 
                    authors={["Z Tang", "J Cruz-Garza","E Todd", "A Kopteva", "J Contreras-Vidal"]}
                    conference="Rice Undergraduate Research Symposium (Poster) 2017"
                    awards="" />
              <Publication 
                    title="Detection of Pancreatic Ductal Adenocarcinoma by Evaluating the Biophysical Properties of Extracellular Vesicles in Human Peripheral Blood
                    Using Particle-Tracking Analysis" 
                    authors={["Z Tang", "F A San Lucas", "G Davis", "D Kim", "J Castillo", "P Gascoyne", "D Li", "H Alvarez", "A Maitra"]}
                    conference="Biomedical Engineering Society Annual Meeting (Poster) 2016"
                    awards="" />
              <Publication 
                    title="Photoacoustic Imaging of Gut Bacteria to Bypass Colonoscopy" 
                    authors={["R Bhardwaj", "K Burks", "J Chen", "K Chen", "J L Garcia", "J Lee", "Q Li", "M Lie", 
                    "J D Matthews", "E McCormick" , "P Suzuki", "C Tang", "S Vetsa", "Z Tang", "J Silberg", "B Beason"]}
                    conference="iGEM, Poster & Platform Presentation 2016"
                    awards="Silver Medalist (top 39%)"
                    webLink="http://2016.igem.org/Team:Rice" />
              <Publication 
                    title="Particle Analysis of Patient-Derived Exosomes for Pancreatic Cancer Detection" 
                    authors={["Z Tang", "G Davis", "J Castillo",  "D Kim", "F A San Lucas",  "T Kumar", "H Alvarez", "A Maitra"]}
                    conference="Rice Undergraduate Research Symposium (Poster) 2016"
                    awards="" />
              <Publication 
                    title="Potassium, Phosphate, and Nitrate Soil Biosensors" 
                    authors={[ "Z Tang", "et. al."]}
                    conference="iGEM, Poster & Platform Presentation 2015"
                    awards="Gold Medalist (top 29%), Nomiated for Best Environment Project (8/397) and Best New Basic Part (10/397)" 
                    webLink="http://2015.igem.org/Team:HKUST-Rice"/>
            <Row className="justify-content-md-center">

            <h4>Unpublished Work / Class Project</h4>
            </Row>
                <Publication 
                    title="Malawi News Classification with Domain-Adapted Multilingual Transformer" 
                    authors={["P Chandra", "Sherry Courington", "S Chennuri", "K Nichols", "L Seoane", "Z Tang"]}
                    pdfLink="https://raw.githubusercontent.com/PootieT/malawi_news_classification/main/Malawi%20News%20Classification.pdf"
                    codeLink="https://github.com/PootieT/malawi_news_classification"
                    />
                <Publication 
                    title="Multilingual Knowledge Graph Bias Analysis" 
                    authors={["Z Tang", "S Chennuri"]}
                    pdfLink="https://raw.githubusercontent.com/PootieT/multilingual-knowledge-graph-bias/main/multilingual_knowledge_graph_bias.pdf"
                    codeLink="https://github.com/PootieT/multilingual-knowledge-graph-bias"
                    />
                <Publication 
                    title="Emotion Detection in COVID Instagram Post" 
                    authors={["P Chandra", "S Chennuri", "K Nichols", "L Seoane", "Z Tang"]}
                    pdfLink="https://raw.githubusercontent.com/PootieT/covid_instagram_sentiment_public/master/emotion_detection_in_covid_instagram_post.pdf"
                    codeLink="https://github.com/PootieT/covid_instagram_sentiment_public"
                    />

            <Row className="justify-content-md-center">
            <h4>Patents</h4>  
            </Row>
              <Publication 
                    title="A method to generate multi-turn dialog data generation (pending)" 
                    authors={["Z Tang", "Z Zeng", "Y Rizk"]}
                    />
              <Publication 
                    title="Ontology based data visualization (pending)" 
                    authors={["Y Rizk", "Z Tang", "Y Khazaeni", "V Isahagian"]}
                    />
            
          </Col>
        </Jumbotron>     
      </div>
    )
  }
}