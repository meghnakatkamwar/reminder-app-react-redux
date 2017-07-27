export const ON_CREATE_REMINDER = 'ON_CREATE_REMINDER';
export const FETCH_REMINDER_LIST = 'FETCH_REMINDER_LIST';


export function createReminder(values) {
    values.id = new Date().getTime();
    localStorage.setItem(values.id, JSON.stringify(values));

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while (i--) {
        values.push(JSON.parse(localStorage.getItem(keys[i])));
    }
    console.log(localStorage);
    return {
        type: ON_CREATE_REMINDER,
        payload: values
    }
}


export function fetchReminderList() {
    console.log('reached fetch reminder list action creator');

    var values = [],
        keys = Object.keys(localStorage)
        var i = keys.length;
    console.log('keys are',keys);

    while (i--) {
        values.push(JSON.parse(localStorage.getItem(keys[i])));
    }
    console.log('values array is:', values);

    return {
        type: FETCH_REMINDER_LIST,
        payload: values
    }

}