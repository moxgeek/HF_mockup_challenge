import React, {Component} from 'react';
import './card.css';
import photo from '../../images/featured_wallpaper.jpg';

class Card extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const style = {
      backgroundImage: `url(${photo})`
    };
    return (
      <div className="hf-card">
        {/* images  */}
        <div style={style} className="hf-card__image card__image--fence">

        </div>

        <div className="hf-card__content">
          {/* Restaurant  */}
            <div className="hf-card__content-top">
              <h1 className="hf-card__name">Asiate</h1>
              <span className="vb hf-icon"><i data-feather="star"/></span>
              <span className="vb">5</span>
            </div>

          {/*Restaurant likes*/}
          <div className="hf-card__content-bottom"><small>400k likes</small></div>
        </div>
      </div>
    )
  }
}

export default Card;