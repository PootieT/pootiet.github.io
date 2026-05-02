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
              AI lab, I worked on industrial conversational systems using classical planning, <a href="https://arxiv.org/abs/2008.11649"><b>classical planning for sentence generation</b></a>, and various <a href="https://ojs.aaai.org/index.php/AAAI/article/view/7087"><b>data science-y prototypes</b></a>.
            </p>  
            <p>
              Most currently, I've been fascinated by all the investigations into how language
              models (LMs) works. Though great at solving association tasks and can seem to generalize over
              unseen domain, these models do not work the same way humans do. My interest lies in understanding 
              to what degree do models agree with human in different tasks and what can the two systems learn from each other.
            </p>
            <p>
              Natural language explanations (NLEs) are interesting because they are how humans process and pass knowledge to each other.
              The causal structures provided by explanations allow efficient learning in humans and models. Humans benefit from 
              explaining to themselves, which helps recall and generalization. LMs also seem to benefit from self-generated NLEs such
              as the case of <a href="https://aclanthology.org/2023.findings-emnlp.119/"><b>code translation</b></a>. Good explanations
              also improve <a href="https://openreview.net/forum?id=eXaXdKp6Iy"><b>personalization generalization</b></a>, improve
              contextual faithfulness, and reduce bias. Other benefits of NLEs include improving data efficiency in training 
              <a href="https://arxiv.org/abs/2505.13388"><b> reward</b></a> <a href="https://arxiv.org/abs/2510.01146"><b>models</b></a>, and
              improving <a href="https://aclanthology.org/2025.findings-acl.966/"><b>toxicity detection</b></a> by reducing underspecification.
            </p>
            <p>
              Quality NLEs are important, but they are not so easy to improve. Recent findings on LM having 
              <a href="https://arxiv.org/abs/2601.01828"><b> introspective </b></a>
              capabilities, or being able to induce them through <a href="https://belindal.github.io/introspection/"><b>finetuning</b></a>, is 
              exciting because it opens up the possibility of improving NLE quality by improving model introspection. Genuine introspection
              is hard to study in humans because it's hard to do interventions and observe brain internals, but we have access to model
              internals (aka some sense of ground truth)! Hence studying introspection allow us to not only improve models but also potentially 
              learn something cool about human cognition!
            </p>
            <p>
              I am also interested in multilinguality in LMs, both in tasks that are language-agnostic 
              and those that should not be. My internship work with Apple in particular showed 
              that <a href="https://aclanthology.org/2025.naacl-long.175/"><b>translation hallucinations</b></a> in LM is a somewhat of a language-agnostic phenomenon
              that can be mitigated significantly by preference finetuning (perhaps the update is very localized and low-rank?). In general, mechanistic insights 
              can help us understand a lot about languages themselves, and perhaps build efficient compression of multilingual knowledge. 
              One little fun <a href="https://aclanthology.org/2024.tdle-1.4/"><b>study</b></a> we did in this direction was testing which of the languages unseen during 
              training can LMs translate the best?
              At the same time, language-specific tasks are also important because many require culturally/regionally-specific 
              knowledge that should be preserved in the age of AI. Datasets such as <a href="https://arxiv.org/abs/2510.24081"><b>Global PIQA</b></a>, 
              or <a href="https://aclanthology.org/2025.findings-acl.966/"><b>Indonesian tweet toxicity and polarization</b></a> data aim to address this issue.
              In this direction, I am excited to explore methods to close reasoning gaps in multilingual performances, and scientific insights of language representations
              in LMs.
            </p>
            <p>
              If you are interested in any of these topics, reach out and let's do some science together!
            </p>
            <Row className="justify-content-md-center">
              <h4>Publications</h4>  
            </Row>
              <Publication 
                  title="Do Language Models Track Entities Across State Changes?" 
                  authors={["Z Tang","Q Zhao","G Franco","D Wijaya","A Mueller","S Schuster","N Kim"]}
                  conference="ICML 2026"
                  pdfLink="https://openreview.net/forum?id=PyJ2YOk3sG"
                  codeLink="https://github.com/PootieT/entity-tracking-mi"
                   />
              <Publication 
                  title="mR3: Multilingual Rubric-Agnostic Reward Reasoning Models" 
                  authors={["D Anugraha","SY Hung","Z Tang","AES Lee","D Wijaya","DI Winata"]}
                  conference="ICLR 2026"
                  pdfLink="https://arxiv.org/abs/2510.01146"
                  codeLink="https://github.com/rubricreward/mr3"
                   />
              <Publication 
                  title="Is Active Persona Inference Necessary for Aligning Small Models to Personal Preferences?" 
                  authors={["Z Tang","AF Akyürek","E Akyürek","D Wijaya"]}
                  conference="EMNLP PALS Workshop 2025"
                  pdfLink="https://openreview.net/forum?id=eXaXdKp6Iy"
                  codeLink="https://github.com/PootieT/famous-persona"
                   />
              <Publication 
                  title="R3: Robust Rubric-Agnostic Reward Models" 
                  authors={["D Anugraha","Z Tang","LJ Miranda","H Zhao","MR Farhansyah","G Kuwanto","D Wijaya","DI Winata"]}
                  conference="NeurIPS LLM Evaluation Workshop 2025"
                  pdfLink="https://arxiv.org/abs/2505.13388"
                  codeLink="https://github.com/rubricreward/r3"
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