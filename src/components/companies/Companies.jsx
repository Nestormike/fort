import React from 'react';
import './Companies.css'
import {connect} from "react-redux";
import {ExpandCompany, setCurrentCompany} from "../../actions/companyAction";
import Group from "../groups/Group";

class Companies extends React.Component {
    render () {
        return (<div className='container'>
            <div className='list'>
                <ul>
                    {this.props.companies.map((company, id) => {
                            const getGroups = function (groups) {
                                let result = groups;
                                for (const group of groups) {
                                    if (group.isExpanded) {
                                        result = result.concat(getGroups(group.childGroups));
                                    }
                                }
                                return result;
                            }

                            const groups = getGroups(company.groups);

                            return (
                                <li
                                    key={company.id}
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        this.props.expandCompany(company)
                                        this.props.setCurrentCompany(company)
                                    }}
                                    className='list_company'
                                >
                                    <div className='company'>{company.name}</div>
                                    {company.isExpanded ? (
                                        groups.map(group =>
                                            <Group key={group.id} group={group}/>)
                                    ) : null}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>)
    }
}

const mapStateToProps = store => {
    return {
        companies: store.companies.companies,
        groups: store.groups.groups
    }
}

const mapDispatchToProps = (dispatch) => ({
    expandCompany: company => dispatch(ExpandCompany(company)),
    setCurrentCompany: company => dispatch(setCurrentCompany(company))
})

export default connect(mapStateToProps, mapDispatchToProps)(Companies)