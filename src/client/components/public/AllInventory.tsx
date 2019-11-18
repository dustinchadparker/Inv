import * as React from "react";
import InventoryCard from "./InventoryCard";

export interface IAllInventoryProps { }

export interface IAllInventoryState {
  inventory: { id: string; item: string; cost: string }[];
  cart: { id: string, value: string }[];

  item: string;
  cost: string;
}

class IAllInventory extends React.Component<IAllInventoryProps, IAllInventoryState> {
  constructor(props: IAllInventoryProps) {
    super(props);
    this.state = { cart: [], inventory: [], item: null, cost: null };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    try {
      let r = await fetch("/api/inventory");
      let data = await r.json();
      let inventory = Object.keys(data).map(key => {
        return {
          id: key,
          item: data[key].item,
          cost: data[key].cost
        };
      });
      this.setState({ inventory });
    } catch (e) {
      console.log(e);
    }
  }

  async handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    let info = {
      item: this.state.item,
      cost: this.state.cost
    };
    console.log(JSON.stringify(this.state));
    e.preventDefault();
    try {
      await fetch("/api/inventory", {
        method: "POST",
        headers: {
          "cost-type": "application/json"
        },
        body: JSON.stringify(info)
      });
    } catch (e) {
      console.log(e);
    }
    this.getData();
  }

  getData = () => {

    return (

      <div className="row my-3">
        <div className="row col-md-12">
          <h4 className="col-sm">Item:</h4>
          <h4 className="col-sm" >Cost:</h4>
          <h4 className="col-sm" >Quantity:</h4>


        </div>
        {this.state.inventory.map(inventory => {
          return <div className="row col-md-12 my-1">
            <label className="col-sm">{inventory.item}</label>
            <label className="col-sm" >${inventory.cost}</label>
            <input className="col-sm" type="text" />


          </div>
        })}
      </div>
    );

  }

  render() {
    return (
      <section>
        <h2>MY SIMPLE STORE</h2>


        {this.getData()}
        <form
          onSubmit={this.handleSubmit}
          className="d-flex flex-row-reverse form-group p-1 my-4 shadow-lg bg-white border border-primary rounded"
        >
          <button className="btn btn-primary btn-lg shadow m-0">
            Add to Cart
              </button>
        </form>
      </section>
    );
  }
}

export default IAllInventory;
