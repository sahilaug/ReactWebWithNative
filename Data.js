import { fromJS } from 'immutable';
import { getUUID } from './common/helpers/helpers';

const data = fromJS({
    questions: [
        {
            uuid: getUUID(),
            qText: 'When was the last time India won the Cricket World Cup ?',
            options: [
                {
                    uuid: getUUID(),
                    opText: '1983'
                },
                {
                    uuid: getUUID(),
                    opText: '2003'
                },
                {
                    uuid: getUUID(),
                    opText: '2011',
                    correct: true
                },
                {
                    uuid: getUUID(),
                    opText: '2015'
                }
            ]
        },
        {
            uuid: getUUID(),
            qText: 'What is the highest individual score by a batsman in Test Cricket ?',
            options: [
                {
                    uuid: getUUID(),
                    opText: '375'
                },
                {
                    uuid: getUUID(),
                    opText: '400',
                    correct: true
                },
                {
                    uuid: getUUID(),
                    opText: '419'
                },
                {
                    uuid: getUUID(),
                    opText: '264'
                }
            ]
        },
        {
            uuid: getUUID(),
            qText: 'Who has won the most number of Cricket World Cups ?',
            options: [
                {
                    uuid: getUUID(),
                    opText: 'India'
                },
                {
                    uuid: getUUID(),
                    opText: 'England'
                },
                {
                    uuid: getUUID(),
                    opText: 'Australia',
                    correct: true
                },
                {
                    uuid: getUUID(),
                    opText: 'South Africa'
                }
            ]
        },
        {
            uuid: getUUID(),
            qText: 'How many International centuries does Sachin Tendulkar has under his name ?',
            options: [
                {
                    uuid: getUUID(),
                    opText: '49'
                },
                {
                    uuid: getUUID(),
                    opText: '100',
                    correct: true
                },
                {
                    uuid: getUUID(),
                    opText: '51'
                },
                {
                    uuid: getUUID(),
                    opText: '97'
                }
            ]
        }
    ]
});

export default data;