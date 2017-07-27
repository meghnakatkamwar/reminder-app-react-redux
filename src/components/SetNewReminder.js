import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form-v6';
import {Link} from 'react-router-dom'
import {createReminder} from '../actions'
import {connect} from 'react-redux';
import Moment from 'moment';
import bootstrapDaterangepicker from 'bootstrap-daterangepicker';
import bootstrap from 'bootstrap';
import 'react-bootstrap';
import 'jquery';

import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/bootstrap-daterangepicker/daterangepicker.css';
import DatetimeRangePicker from '../../node_modules/react-bootstrap-datetimerangepicker/lib/index';

import {findDOMNode} from 'react-router-dom';


class SetNewReminder extends Component {

    constructor(props) {
        super(props);
        this.state = {indicator: 'false'};
    }

    handleChangeCheckbox() {
        if (this.state.indicator == 'false') {
            this.setState({
                indicator: 'true'
            })
        }

        else {
            this.setState({
                indicator: 'false'
            })
        }
        console.log(this.state.indicator);


    }

    renderFrequencyDropdown() {
        if (this.state.indicator == 'true') {
            return (
                <div>
                    <label>Set Frequency</label>
                    <Field name="frequency-dropdown"
                           component="select"
                    >
                        <option />
                        <option value="Hourly">Hourly</option>
                        <option value="Daily">Daily</option>
                        <option value="Yearly">Yearly</option>
                    </Field>
                </div>
            )
        }
    }

    renderDateTime(props) {
        console.log(props);
        return (
            <DatetimeRangePicker timePicker
                                 singleDatePicker
                                 startDate={props.value}
                                 onEvent={(event, picker)=> props.onChange(picker.startDate)}
                                 onApply={this.handleApply}>
                <input type="text"/>
            </DatetimeRangePicker>
        )
    }


    onSubmit(values) {
        console.log('submitting form')
        this.props.createReminder(values);
        // this.props.createPost(values,()=>{
        //     this.props.history.push('/')
        // });
    }


    render() {
        const {handleSubmit}=this.props

        return (
            <div>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <div className="form-group">

                        <label>Reminder about</label>

                        <Field name="title"
                               label="title"
                               component="input"
                               type="text"
                               className="form-control"/>

                    </div>

                    <div className="form-group">
                        <label>Date and Time</label>

                        <Field name="time"
                               label="time"
                               component={this.renderDateTime}
                               className="form-control">

                        </Field>
                    </div>

                    <div className="form-group">
                        <span>
                            <label>Repeat</label>
                        </span>
                        <span>
                            <Field name="repeat"
                                   label="Repeat"
                                   component="input"
                                   type="checkbox"
                                   className="form-control"
                                   id="repeat-checkbox"
                                   onClick={this.handleChangeCheckbox.bind(this)}
                            />
                        </span>

                    </div>


                    <div>

                        {this.renderFrequencyDropdown()}

                    </div>

                    <div>
                        <span className="spacing">
                        <button className="btn btn-primary">Submit</button>
                        </span>
                        <span>
                        <Link className="btn btn-primary" to="/">Back to Homepage</Link>
                         </span>
                    </div>


                </form>
            </div>
        )

    }
}


export default reduxForm({
    form: 'setNewReminderForm'
})
(
    connect(null, {createReminder})(SetNewReminder)
);