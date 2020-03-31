import React from 'react';
import './top5.css';
import Loading from '../loading/loading.component';
import { Table, Row, Col } from 'react-bootstrap';

const renderRows = (data) => {
    return data.map((d) => {
        return (
            <tr key={d._id}>
                <td className="top5-table-link">
                    <a className="top5-table-link" target="_blank" rel="noopener noreferrer" href={process.env.REACT_APP_WEB_APP_HOST + d._id}>
                        {process.env.REACT_APP_WEB_APP_HOST + d._id}
                    </a>
                </td>
                <td>{d.count}</td>
            </tr>
        );
    });
}

const Top5 = (props) => {

    let {className, data} = props;           

    return (
        <div className={className + ' top5-main'}>
            <Row>
                <Col xl="12">
                    <h2 className="top5-title">Top 5</h2>
                    {data === null ? (
                        <Loading color="#605c5c" size="50px"/>
                    ) : ( null )}
                </Col>
            </Row>
            {data === null ? (
                null
            ) : data.length < 1 ? (
                <p className="top5-text">No data found</p>
            ) : (
                    <Row>
                        <Col xl="12">
                            <Table className="top5-table" responsive>
                                <tbody>
                                    {renderRows(data)}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                )
            }            
        </div>
    );
}

export default Top5;