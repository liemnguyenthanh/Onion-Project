import { Table } from 'antd'
import React from 'react'

export const TableBuy = ({dataSource}) => {

    const columns = [
        {
            title: "STT",
            width: "5%",
            //render: (text, record, index) => postsPerPage * (activePage - 1) + (index + 1)
        },
        {
            title: "Chủ Vườn",
            width: "15%",
            ellipsis: true,
            render: (text) => <span>{text.staff_username}</span>,
        },
        {
            title: 'SĐT',
            width: "15%",
            render: (text) => <span>{text.staff_username}</span>,
        },
        {
            title: 'Trạng thái',
            width: "10%",
            render: (text) => {
                if (text.online_flag) {
                    return <div style={{color: '#28a745'}}> Online</div>
                } else {
                    return <div style={{color: '#eb0029'}}> Offline</div>
                }
            }
        },
        {
            title: "Tuỳ chỉnh",
            width: "10%",
            ellipsis: true,
            render: (text) => (
                <div className="d-flex" style={{alignItems: "center"}}>
                    <i
                        className="fas fa-pen ml-3 mr-3"
                        style={{cursor: "pointer"}}
                       // onClick={() => onEdit(text)}
                    />
                    <i
                        className="fas fa-trash-alt"
                        style={{cursor: "pointer"}}
                        //onClick={() => onDelete(text.staff_id)}
                    />
                </div>
            ),
        },
    ];
    return (
        <Table
        columns={columns}
        dataSource={dataSource}
        //pagination={false}
        rowKey="staff_id"
    />
    )
}
