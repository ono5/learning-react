import React from 'react';

import SHOP_DATE from './shop.data';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATE
        }
    }

    render() {
        const {collections} = this.state
        return  (<div className='shop-page'>
            {
                collections.map(({id, ...otherColletionProps}) => (
                    <CollectionPreview key={id} {...otherColletionProps} />
                ))
            }
        </div>)
    }
}

export default ShopPage;