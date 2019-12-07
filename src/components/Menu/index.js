import React, { Component } from 'react';
import BaseInput from '../ui/BaseInput';
import BaseSelect from '../ui/BaseSelect';

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: '',
      sortBy: '',
    };
  }

  handleChanges = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { searchInput, sortBy } = this.state;
    return (
      <div className="d-flex w-50 justify-content-start">
        <div className="w-50 mr-3">
          <BaseInput
            value={searchInput}
            name="searchInput"
            handleChanges={this.handleChanges}
            id="searchInput"
            placeholder="Search by book name"
          />
        </div>
        <div className="w-50">
          <BaseSelect
            value={sortBy}
            optionList={['Price', '0 < price < 15', '15 < price < 30', 'price > 30']}
            name="sortBy"
            handleChanges={this.handleChanges}
          />
        </div>
      </div>
    );
  }
}

export default Menu;
