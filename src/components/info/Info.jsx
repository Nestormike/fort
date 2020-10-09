import React from 'react'
import {connect} from "react-redux";

class Info extends React.Component {
    render() {
        let infoObjects
        if (this.props.detalizationObject instanceof Object) {
            infoObjects = Object.entries(this.props.detalizationObject || {})
            }

        const elements = infoObjects.map((item,id) => {
            let currentItem

            if (
                !Array.isArray(item[1]) &&
                item[0] !== "isExpanded" &&
                item[0] !== "groups" &&
                item[0] !== "parentGroup" &&
                item[0] !== "company" &&
                item[0] !== "depth") {
                currentItem = Object.entries(item || {})
                currentItem.map(elem => {
                    return elem
                })
                return (
                    <li key={id}>
                        {`${item[0]}: ${item[1]}`}
                    </li>
                )
            }

        })

        return (
            <div>
                <h4>Информация: </h4>
                <ul>
                    {elements}
                </ul>
            </div>
        )
    }
}

export default connect((store) => ({
    detalizationObject: store.detalizationObject.detalization
}))(Info)
