import React from "react";
import 'features/QnA/style/QnATable.css';

const QnATable = props => {
    const { headersName, children } = props;

    return(
        <table className = "QnA-table">
            <thead>
                <tr>
                    {
                        headersName.map && ((item, index) => {
                            return(
                                <td className="QnA-table-header-column" key={index}>
                                    {item}
                                </td>
                            )
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>
    )
}

export default QnATable;