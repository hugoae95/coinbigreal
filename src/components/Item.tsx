import React from 'react';
import { useParams } from "react-router-dom";

import ItemDetail  from './ItemDetail';

const Item = () => {

    const params = useParams();

    return (
        <div>
            <ItemDetail params={params} />
        </div>
    );
}

export default Item;