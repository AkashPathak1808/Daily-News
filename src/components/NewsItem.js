import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl, date, author, source } = this.props;
        return (
            <div>
                <div className="card mx-2">
                    <img style={{width: "100%", height: "250px"}} src={!imageUrl ? "https://previews.123rf.com/images/alhovik/alhovik1709/alhovik170900031/86481591-nouvelles-nouvelles-world-global-tv-news-design-de-banni%C3%A8re.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <span className="bg-light text-center">{source}</span>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className='text-muted'>By {!author ? 'Unknown' : author} On {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-dark btn-sm">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
