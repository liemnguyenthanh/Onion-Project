import {Form,Modal} from "antd";
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { getListBuy } from '../actions/buyAction'
import FormCreateDriver from "./form/FormCreateDriver";
import { TableBuy } from './table/TableBuy'
import { TableBuyDetail } from "./table/TableBuyDetail";

export const BuyOnionDetail = () => {
    const [isModalCreate, setIsModalCreate] = useState(false)
    const [detailBuy, setDetailBuy] = useState(null)
    const [tableData, setTableData] = useState(null)
    const dispatch = useDispatch()
    const { listBuy ,success } = useSelector(state => state.buy)
    const [formCreate] = Form.useForm();
    
    useEffect(() => {
        dispatch(getListBuy())
    }, [])

    useEffect(() => {
        if(success){
          setTableData(listBuy)
        }
    }, [listBuy,])

    const handleCancelCreate = () =>{   
        setIsModalCreate(false)
        setDetailBuy(null)
    }
    
    return (
        <div className="card mb-2 pb-2">
            <div className="d-flex justify-content-between mb-2">
                <div>
                    <span className="title-card">Vườn : <span class="link-danger">Thanh Liêm</span></span>
                </div>
                <div className="align-items-center">
                    <button
                        type="button"
                        className="btn btn-danger me-2"
                        style={{minWidth: "110px"}}
                        onClick={()=>setIsModalCreate(true)}
                    >
                        <i className="fas fa-user-plus btn-icon me-2"></i>Thêm
                    </button>
                    <Link
                        className="btn btn-outline-primary  " 
                        style={{minWidth: "110px"}}
                        to='/buy'
                    >
                        <i className="fas fa-angle-left me-2    "></i> 
                        Trở lại
                    </Link>
                </div>
            </div>
            <TableBuyDetail
                // dataSource={tableData}
                // setIsModalCreate={setIsModalCreate}
                // setDetailBuy={setDetailBuy}
                // detailBuy={detailBuy}
            />
           
            <Modal  title="Tạo Chuyến Xe" 
                    onCancel={handleCancelCreate} 
                    visible={isModalCreate} footer={null}>
                <FormCreateDriver
                    formCreate={formCreate}
                    handleCancel={handleCancelCreate}
                    detailBuy={detailBuy}
                    setDetailBuy={setDetailBuy}
                />
            </Modal>
           
        </div>
    )
}
