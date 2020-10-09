import React from 'react';
import './Group.css'
import {ExpandGroup, setCurrentGroup} from "../../actions/groupAction";
import {connect} from "react-redux";
import {setCurrentObject} from "../../actions/objectAction";

class Group extends React.Component {
    render() {
        const group = this.props.group;
        const objects = group.children || []

        return(
            <ul style={{marginLeft: 50 * group.depth}}>
                <li key={group.id} className='list_company'>
                    <div className='group' onClick={(e) => {
                    e.stopPropagation()
                    this.props.expandGroup(group)
                    this.props.setCurrentGroup(group)
                    }}>
                        {group.name}
                    </div>
                    {objects.map(object => {
                        return (
                            <div key={object.id} className="object" onClick={(e) => {
                                e.stopPropagation()
                                this.props.setCurrentObject(object)
                            }}>
                                {object.name}
                            </div>
                        )
                    })}
                </li>
            </ul>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    setCurrentObject: object => dispatch(setCurrentObject(object)),
    setCurrentGroup: group => dispatch(setCurrentGroup(group)),
    expandGroup: group => dispatch(ExpandGroup(group))
})

export default connect(null, mapDispatchToProps)(Group)
