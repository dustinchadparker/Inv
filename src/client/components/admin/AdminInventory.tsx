import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export interface IAdminInventoryProps extends RouteComponentProps<{ id: string }> { }

export interface IAdminInventoryState {
    inventory: { item: string, cost: null }
}

class AdminInventory extends React.Component<IAdminInventoryProps, IAdminInventoryState> {
    constructor(props: IAdminInventoryProps) {
        super(props);
        this.state = {
            inventory: {
                item: null,
                cost: null
            }
        };

        this.handleDelete = this.handleDelete.bind(this);

    }

    async componentDidMount() {
        let id = this.props.match.params.id;
        try {
            let r = await fetch(`/api/inventory/${id}`);
            let inventory = await r.json();
            this.setState({ inventory });
        } catch (e) {
            console.log(e);
        }
    }

    async handleDelete() {
        let id = this.props.match.params.id;
        try {
            await fetch(`/api/inventory/${id}`, {
                method: "DELETE"
            });
            this.props.history.push('/');
        } catch(e) {
            console.log(e);
        }
    }

    render() {

        const { item, cost } = this.state.inventory;

        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="card my-2 border border-dark rounded shadow-lg">
                        <div className="card-body">
                            <h4 className="card-title">{item} chirped:</h4>
                            <p className="card-text">{cost}</p>
                            <div className="d-flex justify-cost-between align-items-center">
                                <button className="btn btn-info">Save Edit</button>
                                <button onClick={this.handleDelete} className="btn btn-danger">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminInventory;