import { fromJS } from 'immutable';
// import { getUUID } from './common/helpers/helpers';

const data = fromJS({
    questions: [
        {
            uuid: 'q1',
            qText: 'When was the last time India won the Cricket World Cup ?',
            options: [
                {
                    uuid: 'o11',
                    opText: '1983'
                },
                {
                    uuid: 'o12',
                    opText: '2003'
                },
                {
                    uuid: 'o13',
                    opText: '2011',
                    correct: true
                },
                {
                    uuid: 'o14',
                    opText: '2015'
                }
            ]
        },
        {
            uuid: 'q2',
            qText: 'What is the highest individual score by a batsman in Test Cricket ?',
            options: [
                {
                    uuid: 'o21',
                    opText: '375'
                },
                {
                    uuid: 'o22',
                    opText: '400',
                    correct: true
                },
                {
                    uuid: 'o23',
                    opText: '419'
                },
                {
                    uuid: 'o24',
                    opText: '264'
                }
            ]
        },
        {
            uuid: 'q3',
            qText: 'Who has won the most number of Cricket World Cups ?',
            options: [
                {
                    uuid: 'o31',
                    opText: 'India'
                },
                {
                    uuid: 'o32',
                    opText: 'England'
                },
                {
                    uuid: 'o33',
                    opText: 'Australia',
                    correct: true
                },
                {
                    uuid: 'o34',
                    opText: 'South Africa'
                }
            ]
        },
        {
            uuid: 'q4',
            qText: 'How many International centuries does Sachin Tendulkar has under his name ?',
            options: [
                {
                    uuid: 'o41',
                    opText: '49'
                },
                {
                    uuid: 'o42',
                    opText: '100',
                    correct: true
                },
                {
                    uuid: 'o43',
                    opText: '51'
                },
                {
                    uuid: 'o44',
                    opText: '97'
                }
            ]
        }
    ]
});

export default data;