import { Table } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteBuy } from '../../actions/buyAction';
import { ROLE_LIST, TYPE_BUY } from '../form/FormCreateBuy';

export const TableBuy = ({dataSource , setIsModalCreate ,setDetailBuy}) => {
    const dispatch = useDispatch()
    const onEdit = (item) =>{
        setIsModalCreate(true)
        setDetailBuy(item)
    }
    const onDelete = (id)=> {
        dispatch(deleteBuy(id))   
    }
    const columns = [
        {
            title: "STT",
            width: "5%",
            render: (text, record, index) => index + 1
        },
        {
            title: "Chủ Vườn",
            width: "10%",
            ellipsis: true,
            render: (text) => <Link to={'/buy-detail/'+text._id }>
                    <span className="text-decoration-underline"> {text.full_name}</span>
                </Link>,
        },
        {
            title: 'SĐT',
            width: "10%",
            render: (text) => <span>{text.phone_number}</span>,
        },
        {
            title: 'Ghi chú',
            width: "10%",
            render: (text) => <span>{text.note}</span>,
        },
        {
            title: 'Diện tích',
            width: "10%",
            render: (text) => <span>{text.area}</span>,
        },
        {
            title: 'Tiền cọc',
            width: "10%",
            render: (text) => <span>{text.deposit}</span>,
        },
        {
            title: 'Hình thức',
            width: "10%",
            render: (text) => {
               const type = TYPE_BUY.find(item =>item.id == text.type_buy)
               return <span>{type?.title}</span>;
            }
        },
        {
            title: 'Trạng thái',
            width: "10%",
            render: (text) => {
               const type = ROLE_LIST.find(item =>item.id == text.type_buy)
               return <span>{type?.title}</span>;
            }
        },
        {
            title: "Tuỳ chỉnh",
            width: "10%",
            ellipsis: true,
            render: (text) => (
                <div className="d-flex" style={{alignItems: "center"}}>
                    <i
                        className="fas fa-pen me-3"
                        style={{cursor: "pointer"}}
                        onClick={() => onEdit(text)}
                    />
                    <i
                        className="fas fa-trash-alt"
                        style={{cursor: "pointer"}}
                        onClick={() => onDelete(text._id)}
                    />
                </div>
            ),
        },
    ];
    return (
        <Table
        columns={columns}
        bordered
        dataSource={dataSource}
        //pagination={false}
        rowKey="phone_number"
    />
    )
}
