import React from 'react';
import ReactDOM from 'react-dom';
import { CopyCat } from '../components/App';

const images = {
  copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};

//this component is supposed to be the opposite of CopyCat and holds the logic for how things work. The only thing its render() method should return is an instance of CopyCat (on line 30):
export class CopyCatContainer extends React.Component {
    constructor(props) {
    super(props);
//step 8: adding input to the state, setting its initial value to an empty string. 
    this.state = { 
      copying: true,
      input: ''
    };

    this.toggleTape = this.toggleTape.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
//set's state of copying to be the opposite of whatever it was (if true, toggle to false):
  toggleTape() {
    this.setState({copying: !this.state.copying})
  }
//event handler that updates the state with input's value whenever it changes (bound in the constructor method on line 21):
  handleChange(e) {
    this.setState({input: e.target.value})
  }

  render() {
    const copying = this.state.copying;
    const toggleTape = this.toggleTape;
    const value = this.state.input;
    const handleChange = this.handleChange;
   
    return (
      <CopyCat
        copying={copying}
        toggleTape={toggleTape}
        value={value}
        handleChange={handleChange}
        name={''}
      />
    );
  };
}

ReactDOM.render(<CopyCatContainer />, document.getElementById('app'));