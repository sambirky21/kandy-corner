import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import StoreList from './StoreList/StoreList'
import EmployeeList from './EmployeeList/EmployeeList'
import CandyNameList from './CandyNameList/CandyNameList'

export default class ApplicationViews extends Component {


    state= {
        stores: [],
        employees: [],
        candyTypes: [],
        candyNames: []
    }

    componentDidMount() {
        const newState = {}

        fetch("http://localhost:5002/stores")
            .then(r => r.json())
            .then(stores => newState.stores = stores)
            .then(() => fetch("http://localhost:5002/employees")
            .then(r => r.json()))
            .then(employees => newState.employees = employees)
            .then(() => fetch("http://localhost:5002/candyNames")
            .then(r => r.json()))
            .then(candyNames => newState.candyNames = candyNames)
            .then(() => fetch("http://localhost:5002/candyTypes")
            .then(r => r.json()))
            .then(candyTypes => newState.candyTypes = candyTypes)
            .then(() => this.setState(newState))
    }

    deleteCandy = id => {
        fetch(`http://localhost:5002/candyNames/${id}`, {
            method: "DELETE"})
            .then(r => r.json())
            .then(() => fetch("http://localhost:5002/candyNames"))
            .then(r => r.json())
            .then(candyNames => this.setState({
                candyNames: candyNames
            })
        )
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
                    deleteCandy={this.deleteCandy}
                    candyNames={this.state.candyNames}
                    candyTypes={this.state.candyTypes} />
                }} />
            </React.Fragment>
        )
    }
}