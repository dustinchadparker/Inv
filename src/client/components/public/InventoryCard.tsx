import * as React from 'react';

import { Link } from 'react-router-dom';

export interface InventoryCardProps {
    inventory: { id: string, item: string, cost: string }
}

const inventoryCard: React.SFC<InventoryCardProps> = (props) => {
    const { id, item, cost } = props.inventory;
    return (
        <div className="row col-md-12 my-1">
                    <label className="col-sm">{item}</label>
                    <label className="col-sm" >${cost}</label> 
                    <input className="col-sm" type="text"></input>
    
                
        </div>
    );
}

export default inventoryCard;