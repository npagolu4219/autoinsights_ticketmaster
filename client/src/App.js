import React, { Component } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavbar from './components/appNavbar';
import template from "./components/template";
import Selection from "./components/Selection";
import Dashboard from "./components/Dashboard.js";
import dataProcessing, {
  eventsData,
  hydroElectricData,
  renewableEnergyData,
  biomassData
} from "./components/dataProcessing";

class App extends Component {
  state = template;

  copyDataSeries = (obj = {}) => {
    this.setState({
      ...obj,

      charts: [
        { serie: eventsData, title: "Events Data",type:"bar" },
        { serie: hydroElectricData, title: "Sales",type:"line" },
        { serie: renewableEnergyData, title: "Marketing",type:"pie" },
        { serie: biomassData, title: "Promotions",type:"area" }
      ]
    });
  };
  componentDidMount() {
    dataProcessing(this.state.yearFrom, this.state.yearTo, this.state.msg);
    this.copyDataSeries();
  }

  handleSubmit = e => {
    let msg = dataProcessing(this.state.yearFrom, this.state.yearTo);
    this.copyDataSeries({ msg: msg });
    e.preventDefault();
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.yearFrom !== this.state.yearFrom) {
      this.handleChangeSelect();
    }
    if (prevState.yearTo !== this.state.yearTo) {
      this.handleChangeSelect();
    }
  }
  handleChangeSelect() {
    let msg = dataProcessing(this.state.yearFrom, this.state.yearTo);
    this.copyDataSeries({ msg: msg });
  }

  handleChangeYear = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <>
      <AppNavbar />
        <div className="container">
          <h2 className="text-center mt-5">
           Insights
          </h2>
        </div>
        <div className="container  mb-5 pb-3">
          <div
            className={
              "text-center mb-0 pt-3 bold " +
              (this.state.msg !== "Select the range" ? "text-danger" : "")
            }
          >
            <strong>{this.state.msg}</strong>
          </div>
          <Selection
            yearFrom={this.state.yearFrom}
            yearTo={this.state.yearTo}
            onChangeYear={this.handleChangeYear}
            onSubmit={this.handleSubmit}
          />
          <Dashboard
            userConfig={this.state.userConfig}
            charts={this.state.charts}
          />
        </div>
      </>
    );
  }
}

export default App;
