import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import StoreList from './StoreList/StoreList'
import EmployeeList from './EmployeeList/EmployeeList'
import CandyNameList from './CandyNameList/CandyNameList'
import CandyNameDetail from './CandyNameList/CandyNameDetail'
import { withRouter } from 'react-router'
import apiManager from '../apiManager'

class ApplicationViews extends Component {


    state= {
        stores: [],
        employees: [],
        candyTypes: [],
        candyNames: []
    }

    componentDidMount() {
        const newState = {}
        apiManager.getAll("stores").then(stores => newState.stores = stores)
        apiManager.getAll("employees").then(employees => newState.employees = employees)
        apiManager.getAll("candyNames").then(candyNames => newState.candyNames = candyNames)
        apiManager.getAll("candyTypes").then(candyTypes => newState.candyTypes = candyTypes)
        .then(() => this.setState(newState))
    }

    deleteCandy = id => {
        return apiManager.deleteAndList("candyNames", id)
            .then(candyNames => {
                this.props.history.push("/candyNames")
                this.setState({
            candyNames: candyNames
            })
            }
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
                <Route exact path="/candyNames" render={(props) => {
                    return <CandyNameList
                    deleteCandy={this.deleteCandy}
                    candyNames={this.state.candyNames}
                    candyTypes={this.state.candyTypes} />
                }} />
                <Route path="/candyNames/:candyNameId(\d+)" render = {(props) => {
                    let candyName = this.state.candyNames.find( candyName =>
                        candyName.id === parseInt(props.match.params.candyNameId)
                        )
                    if (!candyName) {
                        candyName = {id:404, name:"404", breed: "Candy not found"}
                    }
                    return <CandyNameDetail candyName = { candyName }
                                            deleteCandy = { this.deleteCandy } />
                }} />
            </React.Fragment>
        )
    }
}

export default withRouter(ApplicationViews)