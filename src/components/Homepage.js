import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import _ from 'lodash';

import {fetchReminderList} from '../actions';
import ReminderList from '../reducers/Reducer_Reminder_List';


class Homepage extends Component {
    constructor(props) {
        super(props);
        this.props.fetchReminderList();
    }


    renderReminderList() {
        var {reminderList}=this.props;
        // reminderList = reminderList || [];
        console.log('reminder list is:', reminderList)

        if (reminderList) {
            return reminderList.map((reminderItem, index) => {
                return (
                    <div key={index}>
                        {reminderItem.title}
                    </div>
                )
            })
        }

        else return <div>Fetching data.....</div>




    }

    render() {
        return (
            <div>

                <Link className="btn btn-primary" to="/setNewReminder">Set New Reminder</Link>
                <div>
                    {
                        this.renderReminderList()
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {

    return {
        reminderList: state.reminderList
    };
}

export default connect(mapStateToProps, {fetchReminderList})(Homepage);