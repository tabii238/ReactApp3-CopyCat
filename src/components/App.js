import React from 'react';
import { styles } from '../styles';
import PropTypes from 'prop-types';

const images = {
  copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};

//component needs access to the copying state as well as the toggleTape method that now only exists in CopyCatContainer.  
//since the state isn't stored anywhere in the presentational comp., it needs to be passed down as props from the container comp: so instead of using this.state to access it, use this.props instead:
export class CopyCat extends React.Component {
  render() {
    const {copying, toggleTape, value, handleChange, name} = this.props;
    
    return (
      <div style={styles.divStyles}>
        <h1 style={{ marginBottom: '80' }}>Copy Cat {name || "Tom"}</h1>
        <input 
          type='text'
          value={value}
          onChange={handleChange}
          />
        <img 
          alt='cat'
          src={copying ? images.copycat : images.quietcat}
          style={styles.imgStyles}
          onClick={toggleTape}
        />
        <p>{copying && value}</p>
      </div>
    );
  };
}
//step 11: giving copycat component class a propTypes property. 1. import proptypes on line 3, 2. declare a propTypes as a static property on copycat: in the object, write one propType for each prop that copycat is expecting
CopyCat.propTypes = {
  copying: PropTypes.bool.isRequired,
  toggleTape: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string
}
