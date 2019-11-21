import { TEST_CASES_PERCENTAGE_DATA, PASS_FAIL_TEST_CASE_COUNT, TABLE_DATA } from '../actions/types';

const INITIAL_STATE = {
    testCaseData: [], PFTestCaseData: [], tableData: {},
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TEST_CASES_PERCENTAGE_DATA:
            return {
                ...state,
                testCaseData: action.payload
            }
        case PASS_FAIL_TEST_CASE_COUNT:
            return {
                ...state,
                PFTestCaseData: action.payload
            }
        case TABLE_DATA:
            return {
                ...state,
                tableData: action.payload
            }
        default:
            return state;
    }
}
