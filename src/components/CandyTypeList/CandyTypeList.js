import React, {Component} from 'react'

export default class CandyTypeList extends Component {
    render() {
        return (
            <section className="candyTypes">
                {
                    this.props.candyTypes.map( candyType =>
                        <div key={candyType.id}>
                        {candyType.name}
                        </div>
                    )
                }
            </section>
        )
    }
}