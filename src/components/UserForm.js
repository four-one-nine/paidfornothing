import React, { useState, Component } from 'react'
import './UserForm.css'

export default class UserForm extends Component {
    //Bringing in the props from the import
    constructor(props) {
        super();
        this.state = {
            earnedIncome : 0,
            incomeBase: 50000,
            active: false,
            incomeUnit: 'Per Year'
        }
    }

    //Runs when the component is mounted 
    componentDidMount() {
        //Starts a timer interval that runs countUp
        this.timerID = setInterval(
            () => this.countUp(),
            1000
          );
        
        console.log('Form Mounted') }

    //Dismounts at the end
    componentWillUnmount() {
        clearInterval(this.timerID);
      }

    //Updates the prop to the current value of earnedIncome
    changeIncome(e) {
        this.props.changeIncome(this.state.earnedIncome);
        console.log('Changed')
    }
    
    //Will increment the earnedIncome value accordingly and then update the prop using changeIncome
    countUp(){
         console.log('Tick, is active: ', this.state.active ? 'true' : 'false')
         if(this.state.active)
         {
            var base = this.state.incomeBase;

            //Determines a multiplier for whichever selection is made
            var divisor = 1;
            switch(this.state.incomeUnit) {
            case 'Per Year':
                divisor = 7448000;
                break;
            case 'Per Week':
                divisor = 144000;
                break;
            case 'Per Hour':
                divisor = 3600;
                break;
            default:
                divisor = 1;
            }
            var incremental = base/divisor;
            this.setState({earnedIncome: this.state.earnedIncome + incremental});
            this.changeIncome();
            console.log('Updated to ',this.state.earnedIncome)
         }
    }
    
  render() {
      return (
        <>
        <form className='form' id='myForm'>
            <div className="row fade-in-bottom ">
                {/*Base Income - for inactive*/}
                {!this.state.active && 
                <input type='text' name='dollars' placeholder='$50000' onChange={updateIncome.bind(this)}></input> }
                
                {/*Selector for Unit - for inactive*/}
                {!this.state.active && 
                <select defaultValue={this.state.incomeUnit} onChange={handleUnitChange.bind(this)}>
                    <option value="Per Hour">Per Hour</option>
                    <option value="Per Week">Per Week</option>
                    <option value="Per Year">Per Year</option>
                </select> }

                {/*Base income and selector for active state */}
                {this.state.active && <div className='earnings-callout fade-in'>
                    At a rate of $
                    {this.state.incomeBase} <> </>
                    {this.state.incomeUnit}
                </div>}
            </div>
            
            <div className='row'>
                {/*Start/Stop Button*/}
                <button type='start' onClick={startStop.bind(this)} className={this.state.active ? 'button-active fade-in-bottom' : 'button-inactive fade-in-bottom'}>
                {this.state.active ? 'Stop' : 'Start'}
                </button>

            </div>
            
        </form>
        </>)
  }
}

//Updates the base income for the user
function updateIncome(e) {
    var newIncome = parseFloat(e.target.value);
    if (!isNaN(newIncome)){
        this.setState({incomeBase : newIncome})
    }
    else
    {
        alert('Only enter numbers please');
        document.forms["myForm"].reset();
    }
}
 
function handleUnitChange(e) {
    this.setState({incomeUnit: e.target.value})
}
//Updates whether or not the counter should be active
function startStop(e) {
    e.preventDefault(); //Prevents the default submit function, which is to reload the page

    if (this.state.active == false) {
        this.setState({active: true})
        console.log('Started!');
    } else {
        this.setState({active: false})
        console.log('Stopped!');
    }
}
