export const constants = {
    CALCULATE_RESULT: 'CALCULATE_RESULT',
    RESET_CHART: 'RESET_CHART'
};

export const actions = {
    calculateResult: (payload) => ({
        type: constants.CALCULATE_RESULT,
        payload
    }),
    resetChart: () => ({
        type: constants.RESET_CHART
    })
};