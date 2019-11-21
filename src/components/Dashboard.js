import React from 'react';
import { Card } from 'react-bootstrap';
import Chart from "react-google-charts";
import { AgGridReact } from '@ag-grid-community/react';
import { AllCommunityModules } from '@ag-grid-community/all-modules';
import { getTestCasePerData, getPAData, getTableData } from '../actions/DashboardActions';
import { connect } from 'react-redux';


class Dashboard extends React.PureComponent {
    constructor(props) {
        super(props);
       
    }
    componentDidMount() {
        this.props.getTestCasePerData()
        this.props.getPAData();
        this.props.getTableData();
    }
    render() {
        debugger
        return (
            <div >
                <h1 style={{ textAlign: 'center', padding: 20 }}>Test Automation Dashboard</h1>
                <div className="rowC">
                    <Card style={{ width: '100rem', marginLeft: 10 }}>
                        <h5 style={{ textAlign: 'center', padding: 5 }}>Test Case Pass Percentage</h5>
                        <Chart
                            chartType="Bar"
                            width="100%"
                            height="400px"
                            data={this.props.testCaseData}
                        />
                    </Card>
                    <Card style={{ width: '100rem', marginLeft: 10, marginRight: 10 }}>
                        <h5 style={{ textAlign: 'center', padding: 5 }}>Pass - Fail Test Case Count</h5>
                        <Chart
                            chartType="Bar"
                            width="100%"
                            height="400px"
                            data={this.props.PFTestCaseData}
                        />
                    </Card>
                </div>
                <div className="rowC" style={{ marginTop: 50 }}>
                    <div
                        className="ag-theme-balham"
                        style={{
                            height: '500px',
                            width: '50%',
                            marginLeft: 10,
                            marginRight: 10
                        }}
                    >
                        <AgGridReact
                            columnDefs={this.props.tableData.columnDefs}
                            rowData={this.props.tableData.rowData}
                            modules={AllCommunityModules}>
                        </AgGridReact>
                    </div>
                    <div
                        className="ag-theme-balham"
                        style={{
                            height: '500px',
                            width: '50%',
                            marginRight: 10
                        }}
                    >
                        <AgGridReact
                            columnDefs={this.props.tableData.columnDefs}
                            rowData={this.props.tableData.rowData}
                            modules={AllCommunityModules}>
                        </AgGridReact>
                    </div>
                </div>
            </div >

        )
    }
}
function mapStateToProps(dashboard) {
    //return { stacks: signIn.stacks };
    debugger;
    const { testCaseData, PFTestCaseData, tableData } = dashboard.dashboard;
    return { testCaseData, PFTestCaseData, tableData };
}
export default connect(
    mapStateToProps,
    { getTestCasePerData, getPAData,getTableData }
)(Dashboard)
