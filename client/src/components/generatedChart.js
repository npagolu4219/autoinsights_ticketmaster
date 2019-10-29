import React, { Component } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { connect } from 'react-redux';
import { getFields } from '../actions/fieldActions';
import PropTypes from 'prop-types';


const options = {
    title: {
      text: 'My stock chart'
    },
      
    series: [{
      type:"bar",
      data: [[Date.UTC(2013,5,2),0.7695],
  [Date.UTC(2013,5,3),0.7648],
  ...
  [Date.UTC(2013,5,24),0.7623],]
    }]
  }

  class GenerateChart extends Component{
    componentDidMount(){
      this.props.getFields();
    }
        render(){
          const { fields } = this.props.field;
            return(
                <HighchartsReact
                    highcharts={Highcharts}
                    constructorType={'stockChart'}
                    options={options}
                />
            )
        }
  }

  GenerateChart.propTypes = {
    getFields:PropTypes.func.isRequired,
    field : PropTypes.object.isRequired
  }
  
  const mapStateToProps = (state) => ({
    field:state.field
  })

  export default connect(mapStateToProps, { getFields })(GenerateChart);