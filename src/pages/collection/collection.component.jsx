import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../Redux/shop/shop.selectors';

import './collection.styles.scss';

const CollectionPage = ({ match }) => (
    <div className='category'>
        <h2>Collection Page</h2>
    </div> 
);

const mapSateToProps = (state, ownProps) = ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
