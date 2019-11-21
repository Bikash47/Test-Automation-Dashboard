
import { AuthService } from "../shared/apiManager/services/authService";
import { TEST_CASES_PERCENTAGE_DATA, PASS_FAIL_TEST_CASE_COUNT, TABLE_DATA } from "./types";


export const getTestCasePerData = ownProps => {
    return dispatch => {

        dispatch({
            type: TEST_CASES_PERCENTAGE_DATA,
            payload: getStaticTestCaseData()
        })
        // Through this process we call the api
        // AuthService.dashboard(user).then(
        //   response => {


        //   }

        // );
    };
};
export const getPAData = ownProps => {
    return dispatch => {

        dispatch({
            type: PASS_FAIL_TEST_CASE_COUNT,
            payload: getStaticTestCaseData()
        })
        // Through this process we call the api
        // AuthService.dashboard(user).then(
        //   response => {


        //   }

        // );
    };
};

export const getTableData = ownProps => {
    return dispatch => {

        dispatch({
            type: TABLE_DATA,
            payload: getStaticTableData()
        })
        // Through this process we call the api
        // AuthService.dashboard(user).then(
        //   response => {


        //   }

        // );
    };
};
function getStaticTestCaseData() {
    return [
        ["Year", "Visitations", { role: "style" }],
        ["Execution-6", 60, "color: gray"],
        ["Execution-5", 75, "color: #76A7FA"],
        ["Execution-4", 40, "color: blue"],
        ["Execution-3", 40, "color: gray"],
        ["Execution-2", 92, "color: #76A7FA"],
    ];
}
function getStaticTableData() {
    return {
        columnDefs: [{
            headerName: "Execution", field: "Execution"
        }, {
            headerName: "Name", field: "Name"
        }, {
            headerName: "Total TCs", field: "totaltcs"
        }, {
            headerName: "Pass TCs", field: "passtcs"
        }, {
            headerName: "Fail TCs", field: "failtcs"
        }],
        rowData: [{
            Execution: "Execution-6", Name: "feature-1", totaltcs: 9, passtcs: 5, failtcs: 2
        }, {
            Execution: "Execution-5", Name: "feature-2", totaltcs: 8, passtcs: 6, failtcs: 5
        }, {
            Execution: "Execution-4", Name: "feature-3", totaltcs: 7, passtcs: 7, failtcs: 1
        }, {
            Execution: "Execution-3", Name: "feature-4", totaltcs: 8, passtcs: 8, failtcs: 1
        }, {
            Execution: "Execution-2", Name: "feature-5", totaltcs: 9, passtcs: 9, failtcs: 1
        }, {
            Execution: "Execution-1", Name: "feature-6", totaltcs: 10, passtcs: 10, failtcs: 1
        }]
    };
}