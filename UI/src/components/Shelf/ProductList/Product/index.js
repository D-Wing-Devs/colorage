import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Thumb from '../../../Thumb';

const Product = ({ product }) => {
  product.quantity = 1;

  return (
    <div
      className="shelf-item"
    >
      <Thumb
        classes="shelf-item__thumb"
        src={product.imageUrl}
        alt={product.title}
      />
      <p className="shelf-item__title" >{product.title}</p>
      <div className="shelf-item__price" >
        <div className="val">
          <small>{product.currencyFormat}</small>
          <b>{product.price}</b>
        </div>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        Major Colors : <div style={{backgroundColor: product.colorHex, width: '20px', height: '20px', borderRadius: '10px'}} />
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired
};

export default connect(
  null, {}
)(Product);
