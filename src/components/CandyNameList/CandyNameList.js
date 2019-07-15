import React, {Component} from 'react'

export default class CandyNameList extends Component {
    render() {
        return (
            <section className="candyNames">
                {
                    this.props.candyNames.map( candyName =>
                        <div key={candyName.id}>
                        {candyName.name}
                        </div>
                    )
                }
            </section>
        )
    }
}