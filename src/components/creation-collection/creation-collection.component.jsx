import React from 'react';
import collectionData from './creation-collection.data';
import Item from '../collection-item/collection-item.component';
import './creation-collection.styles.scss';

class CreationCollection extends React.Component {
    constructor() {
        super();

        this.state = {
            collection: collectionData
        };
    }


    render() {
        return (
            <div className='collection'>
                <div className='collection-header'>
                    <h2 className='collection-title'>our creations</h2>
                    <button className='btn'>See all</button>
                </div>
                <div className='collection-gallery'>
                {
                    this.state.collection.collection.map(({id, ...otherItem}) => <Item key={id} {...otherItem} />)
                }
                </div>
            </div>
        );
    }
}


export default CreationCollection;