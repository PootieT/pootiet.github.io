import React, { Component } from 'react'
import '../Spaces.css';
import '../../../index.css';

export default class Publication extends Component {
  render() {
    let pdfLink;
    if (this.props.pdfLink) {
      pdfLink = [<a href={this.props.pdfLink} style={{color: "var(--global-color-three)"}}> [pdf]</a>]
    } else {
      pdfLink = ""
    }

    let videoLink;
    if (this.props.videoLink) {
      videoLink = <a href={this.props.videoLink} style={{color: "var(--global-color-four)"}}> [video]</a>
    } else {
      videoLink = ""
    }

    let webLink;
    if (this.props.webLink) {
      webLink = <a href={this.props.webLink} style={{color: "var(--global-color-four)"}}> [web]</a>
    } else {
      webLink = ""
    }
    let codeLink;
    if (this.props.codeLink) {
      codeLink = <a href={this.props.codeLink} style={{color: "var(--global-color-five)"}}> [code]</a>
    } else {
      codeLink = ""
    }

    const getHighlightedText = (text, highlight) => {
      // Split on highlight term and include term into parts, ignore case
      const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
      return <span> { parts.map((part, i) => 
          <span key={i} style={part.toLowerCase() === highlight.toLowerCase() ? { fontWeight: 'bold' } : {} }>
              { part }
          </span>)
      } </span>;
    }

    return (
      <p>
        <i>{this.props.title}. </i>
        {getHighlightedText(this.props.authors.join(", "), "Z Tang")}.
        <i> {this.props.conference}. </i>  
        <b>{this.props.awards}</b>
        {pdfLink}{videoLink}{webLink}{codeLink}
      </p>
    )
  }
}