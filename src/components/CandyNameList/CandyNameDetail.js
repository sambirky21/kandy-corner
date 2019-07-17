import React, { Component } from "react"

export default class Candy extends Component {
    state = {
        saveDisabled: false
    }

    render () {
        return (
            <section>
                <div key={ this.props.candyName.id }>
                    <div>
                        <h4>
                            { this.props.candyName.name }
                        </h4>
                        <button onClick={
                                () => {
                                    this.setState(
                                        { saveDisabled: true },
                                        () => this.props.deleteCandy(this.props.candyName.id)
                                    )
                                }
                            }
                            disabled={ this.state.saveDisabled }
                            >Delete</button>
                    </div>
                </div>
            </section>
        )
    }
}