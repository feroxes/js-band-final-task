import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import BaseInput from '../ui/BaseInput';
import BaseSelect from '../ui/BaseSelect';

import { setFilter } from '../../actions/books';
import priceFilter from './priceFilter';

function Menu({ filters, onSetFilter }) {
  function handleChanges(e) {
    const { name, value } = e.target;
    onSetFilter({ name, value });
  }

  function makeOptionList() {
    return priceFilter.map(item => item.name);
  }

  return (
    <div className="d-flex w-50 justify-content-start">
      <div className="w-50 mr-3">
        <BaseInput
          value={filters.search}
          name="search"
          handleChanges={handleChanges}
          id="search"
          placeholder="Search by book name"
        />
      </div>
      <div className="w-50">
        <BaseSelect
          value={filters.price}
          optionList={makeOptionList()}
          name="price"
          handleChanges={handleChanges}
        />
      </div>
    </div>
  );
}

Menu.propTypes = {
  filters: PropTypes.instanceOf(Object).isRequired,
  onSetFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filters: state.books.filters,
});

const mapDispatchToProps = dispatch => ({
  onSetFilter: data => dispatch(setFilter(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
