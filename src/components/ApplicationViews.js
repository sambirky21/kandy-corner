import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import StoreList from './StoreList/StoreList'
import EmployeeList from './EmployeeList/EmployeeList'
import CandyNameList from './CandyNameList/CandyNameList'

export default class ApplicationViews extends Component {
    storeArray = [
        { id: 1, name: "Stacy's Candy" },
        { id: 2, name: "Sam's Candy" },
        { id: 3, name: "Podge's Candy" },
        { id: 4, name: "Addie's Candy" }
    ]

    employeeArray = [
        { id: 1, name: "Brian" },
        { id: 2, name: "Brock" },
        { id: 3, name: "Kayla" },
        { id: 4, name: "Rocko" }
    ]

    candyTypeArray = [
        { id: 1, name: "Chewy" },
        { id: 2, name: "Chocolate" },
        { id: 3, name: "Hard" },
        { id: 4, name: "Holiday" }
    ]

    candyNameArray = [
        { id: 1, name: "Gummy Bears", candyTypeId: 1 },
        { id: 2, name: "Peanut M&M's", candyTypeId: 2 },
        { id: 3, name:"Blow Pop", candyTypeId: 3},
        { id: 4, name: "Peeps", candyTypeId: 4 }
    ]

    state= {
        stores: this.storeArray,
        employees: this.employeeArray,
        candyTypes: this.candyTypeArray,
        candyNames: this.candyNameArray
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <StoreList stores={this.state.stores} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
                <Route path="/candyNames" render={(props) => {
                    return <CandyNameList
                    candyNames={this.state.candyNames}
                    candyTypes={this.state.candyTypes} />
                }} />
            </React.Fragment>
        )
    }
}