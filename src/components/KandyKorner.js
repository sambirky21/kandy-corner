import React, {Component} from 'react'
import StoreList from './StoreList/StoreList'
import EmployeeList from './EmployeeList/EmployeeList'
import CandyTypeList from './CandyTypeList/CandyTypeList'

export default class KandyKorner extends Component {
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
        { id: 1, name: "Gummy Bears" },
        { id: 2, name: "Peanut M&M's" },
        { id: 3, name:"Blow Pop" },
        { id: 4, name: "Peeps" }
    ]

    state= {
        stores: this.storeArray,
        employees: this.employeeArray,
        candyTypes: this.candyTypeArray,
        candyNames: this.candyNameArray
    }

    render() {
        return(
            <article>
                <StoreList stores={this.state.stores} />
                <EmployeeList employees={this.state.employees}/>
                <CandyTypeList candyTypes={this.state.candyTypes} />
            </article>
        )
    }
}
