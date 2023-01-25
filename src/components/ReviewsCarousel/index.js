import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  showNext = () => {
    const {reviewsList} = this.props
    const lastIndex = reviewsList.length - 1

    this.setState(prevState =>
      prevState.index < lastIndex ? {index: prevState.index + 1} : null,
    )
  }

  showPrev = () => {
    this.setState(prevState =>
      prevState.index > 0 ? {index: prevState.index - 1} : null,
    )
  }

  render() {
    const {index} = this.state
    const {reviewsList} = this.props
    const reviewObj = reviewsList[index]

    return (
      <div className="bg-container">
        <div className="review-body">
          <h1 className="main-heading">Reviews</h1>
          <img
            src={reviewObj.imgUrl}
            alt={reviewObj.username}
            className="profile-image"
          />
          <div className="nav-container">
            <img
              onClick={this.showPrev}
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
            <p className="profile-name">{reviewObj.username}</p>
            <img
              onClick={this.showNext}
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </div>
          <p className="company-name">{reviewObj.companyName}</p>
          <p className="review-text">{reviewObj.description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
