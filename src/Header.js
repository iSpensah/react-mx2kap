import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = { favoritecolor: 'red' };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoritecolor: 'yellow' });
    }, 5000);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById('div1').innerHTML =
      'Before the update, the favorite was ' + prevState.favoritecolor;
  }

  componentDidUpdate() {
    document.getElementById('mydiv').innerHTML =
      'The updated favorite is ' + this.state.favoritecolor;
  }

  render() {
    return <h1>My Favorite Color is {this.state.favoritecolor}</h1>;
  }
}

export default Header;
