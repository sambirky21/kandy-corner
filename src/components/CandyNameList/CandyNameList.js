import React, {Component} from 'react'

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
                        </div>
                    )
                }
            </section>
        )
    }
}