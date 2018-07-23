import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = ({ filters, onUpdateFilter, currentFilter, fruit }) => {
  return (
    <div className="fruit-basket">
      <Filter
        filters={filters}
        handleChange={onUpdateFilter}
      />
      <FilteredFruitList
        filter={currentFilter}
        fruit={fruit}
      />
    </div>
  );
}

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: function() {}
}

export default FruitBasket;
