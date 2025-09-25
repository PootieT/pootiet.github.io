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
              interface. As a research engineer at IBM Research and MIT-IBM Watson 
              AI lab, I found great importance in adapting existing technologies for low-resource aplications,
              while working with private datasets, conversational technologies, and planning/automations.
            </p>  
            <p>
              Most currently, I've been fascinated by all the investigations into how large langauge
              models (LLMs) works. Though great at solving association tasks and can seem to generalize over
              unseen domain, these models do not work the same way humans do. My interest lies in understanding 
              to what degree do models agree with human forms of symbolic learning? How do the two domain differ?
              And what the two systems can learn from each other? 
            </p>
            <p>
              To understand such behavior, I am working with more synthetic data (entity tracking) currently to see how 
              model might be implementing some basic pre-requisits of reasoning skills. Better understanding of
              pre-hoc explanations (CoT) allows me to move onto post-hoc explanations, which is where we can pose
              a lot of interesting questions about faithfulness, whether model have meta-cognition, whether super-
              human capabilities are possible with LM's parallel and introspective capabilities.
            </p>

            <Row className="justify-content-md-center">
              <h4>Publications</h4>  
            </Row>
              <Publication 
                  title="Is Active Persona Inference Necessary for Aligning Small Models to Personal Preferences?" 
                  authors={["Z Tang","AF Akyürek","E Akyürek","D Wijaya"]}
                  conference="EMNLP PALS Workshop 2025"
                  pdfLink="https://openreview.net/forum?id=eXaXdKp6Iy"
                   />
              <Publication 
                  title="R3: Robust Rubric-Agnostic Reward Models" 
                  authors={["D Anugraha","Z Tang","LJ Miranda","H Zhao","MR Farhansyah","G Kuwanto","D Wijaya","DI Winata"]}
                  conference="NeurIPS LLM Evaluation Workshop 2025"
                  pdfLink="https://arxiv.org/abs/2505.13388"
                   />
              <Publication 
                  title="Mitigating hallucinated translations in large language models with hallucination-focused preference optimization" 
                  authors={["Z Tang","R Chatterjee","S Garg"]}
                  conference="NAACL 2025"
                  pdfLink="https://aclanthology.org/2025.naacl-long.175/"
                   />
              <Publication 
                  title="What Linguistic Features and Languages are Important in LLM Translation?" 
                  authors={["R Diandaru","L Susanto","Z Tang","A Purwarianti","D Wijaya"]}
                  conference="LREC 2024"
                  pdfLink="https://arxiv.org/abs/2402.13917"
                   />
              <Publication 
                  title="Explain-then-Translate: an Analysis on Improving Program Translation with Self-Generated Explanation" 
                  authors={["Z Tang", "M Agarwal", "A Shypula", "B Wang", "D Wijaya", "J Chen", "Y Kim"]}
                  conference="EMNLP 2023"
                  codeLink="https://github.com/PootieT/explain-then-translate"
                  pdfLink="https://arxiv.org/abs/2311.07070"
                   />
              <Publication 
                  title="Effects of #Coronavirus Content Moderation on Misinformation and Anti-Asian Hate on Instagram" 
                  authors={["T Hong", "Z Tang", "M Lu", "Y Wang", "J Wu", "D Wijaya"]}
                  conference="New Media & Society 2023"
                  pdfLink="https://journals.sagepub.com/doi/full/10.1177/14614448231187529/"
                  />
              <Publication 
                  title="AugCSE: Contrastive Sentence Embedding with Diverse Augmentations" 
                  authors={["Z Tang", "Y Kocyigit", "D Wijaya"]}
                  conference="AACL-IJCNLP 2022 (Oral)"
                  codeLink="https://github.com/PootieT/AugCSE"
                  pdfLink="https://aclanthology.org/2022.aacl-main.30/"
                   />
              <Publication 
                  title="Knowledge Based Template Machine Translation In Low-Resource Setting" 
                  authors={["Z Tang", "D Wijaya"]}
                  conference="Arxiv 2022"
                  pdfLink="https://arxiv.org/abs/2209.03554"
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

            {/* <Row className="justify-content-md-center">
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
                  /> */}

            <Row className="justify-content-md-center">
            <h4>Presentations & Posters</h4>  
            </Row>
              <Publication 
                    title="Mechanistic Understanding of Entity Tracking With Multiple Operations" 
                    authors={["Z Tang", "Q Zhao", "G Franco","A Poulis", "A Mueller", "D Wijaya","S Schuster", "N Kim"]}
                    conference="New England Mechanistic Interpretability Workshop (Poster) 2025"
                    awards="" />
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
                    title="Efficient Data Filtering for Finetuning Language Model" 
                    authors={["Y Kocyigit", "Z Tang"]}
                    pdfLink="https://github.com/PootieT/efficient-filter-lm-training/blob/main/Efficient%20Filtering%20Methods%20for%20Finetuning%20Language%20Model.pdf"
                    codeLink="https://github.com/PootieT/efficient-filter-lm-training"
                    />
                <Publication 
                    title="Metropolis-Hasting Sentence Sampling: A Mixup in Natural Language" 
                    authors={["Z Tang"]}
                    pdfLink="https://github.com/PootieT/Metropolis-Hasting-Sentence-Sampling/blob/main/Metropolis_Hasting_Based_Sentence_Interpolation__a_Mixup_in_Natural_Language.pdf"
                    codeLink="https://github.com/PootieT/Metropolis-Hasting-Sentence-Sampling"
                    />
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
                    title="A Method to Generate Low-Resource Programming Language Data (pending)" 
                    authors={["Z Tang","M Agarwal", "A Shypula", "B Wang", "J Chen", "Y Kim"]}
                    />
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