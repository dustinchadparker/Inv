import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export interface IAddInventoryProps extends RouteComponentProps { }

export interface IAddInventoryState {
    item: string;
    cost: string;
}

class AddInventory extends React.Component<IAddInventoryProps, IAddInventoryState> {
    constructor(props: IAddInventoryProps) {
        super(props);
        this.state = {
            item: null,
            cost: null
        };

        this.handleSubmit = this.handleSubmit.bind(this);

    }

    async handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await fetch('/api/inventory', {
                method: 'POST',
                headers: {
                    "cost-type": "application/json"
                },
                body: JSON.stringify(this.state)
            })
            this.props.history.replace('/');
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <form onSubmit={this.handleSubmit} className="form-group p-3 my-4 shadow-lg bg-white border border-primary rounded">
                        <label>Item:</label>
                        <input
                            type="text"
                            className="form-control p-1 my-2"
                            value={this.state.item}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ item: e.target.value })} />
                        <label>Cost:</label>
                        <input
                            type="text"
                            className="form-control p-1 my-2"
                            value={this.state.cost}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ cost: e.target.value })} />
                        <button className="btn btn-primary btn-lg shadow mt-2">Post!</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddInventory;