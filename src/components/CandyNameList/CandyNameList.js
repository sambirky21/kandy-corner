import React, {Component} from 'react'
import { Link } from 'react-router-dom'

export default class CandyNameList extends Component {
    render() {
        return (
            <section className="candyNames">
                {
                    this.props.candyNames.map( candyName =>
                        <div key={candyName.id}>
                        {candyName.name}
                        <br></br>of type<br></br>
                            {
                            this.props.candyTypes.find( candyType => candyType.id === candyName.candyTypeId
                                ).name
                            }
                            <Link className="nav-link" to={`/candyNames/${candyName.id}`}>Details</Link>
                            <button
                                    onClick={() => this.props.deleteCandy(candyName.id)}
                                    className="card-link">Delete</button>
                        </div>
                    )
                }
            </section>
        )
    }
}