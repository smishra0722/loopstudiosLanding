import React from 'react';
import {withRouter} from 'react-router-dom';
import './collection-item.styles.scss';

const Item = ({title, imageUrl, path, history, match}) => {
    return (
        <div className='item' style={{backgroundImage: `url(${imageUrl})`}} onClick={() => history.push(`${path}`)}>
            <div className='item-title'><h3 className='title'>{title.toUpperCase()}{console.log(match)}</h3></div>
        </div>
    );
}

export default withRouter(Item);