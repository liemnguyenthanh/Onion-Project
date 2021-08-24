import React, {useEffect, useState} from "react";
import {Form, Input, Select} from "antd";
import {useDispatch} from "react-redux";
import { createBuy, createBuyDetail, editBuy } from "../../actions/buyAction";
import TextArea from "antd/lib/input/TextArea";
import BagComponent from "../bag/bag";
import { nanoid } from 'nanoid';
import {useParams} from 'react-router-dom'
const FormCreateDriver = (props) => {
    const {handleCancel, detailBuy ,formCreate} = props;
    const [totalBag, setTotalBag] = useState([ ])
    const dispatch = useDispatch();
    const { id  : owner} = useParams()
    useEffect(() => {
        if (detailBuy) {
            formCreate.setFieldsValue({
                full_name: detailBuy.full_name || null,
                status: detailBuy.status|| null,
                price: detailBuy.price|| null,
                note: detailBuy.note|| null,
            })
        } else {
            formCreate.setFieldsValue({
                full_name: null,
                status: null,
                price:  null,
                note: null,
            })
        }
    }, [detailBuy]);

    const onSubmit = () => {
        formCreate.submit();
    };

    const createSubmit = (info) => {
        dispatch(createBuyDetail(info));
    };
    const editSubmit = (info) => {
       dispatch(editBuy(detailBuy._id,info));
       handleCancel()
    };
    const handleFinishFormCreate = (info) => {
        info.owner = owner
        info.price = parseFloat(info.price)
        info.bags = totalBag
        console.log({info});
        if (detailBuy) {
            editSubmit(info);
        } else {
            createSubmit(info);
        }
        formCreate.resetFields();
    };
    return (
        <div className="card">
            <Form
                form={formCreate}
                onFinish={handleFinishFormCreate}
                name="formCreate"
            >
                <div className="row">
                    <div className="col-12">
                        <div>Chủ xe :</div>
                        <Form.Item
                                name="driver"
                            >
                            <Input size="large"/>
                        </Form.Item>
                    </div>
                    <div className="col-6">
                        <div>Trạng thái :</div>
                        <Form.Item 
                            name="status"
                            >
                            <Select
                                size="large"

                            >
                                {ROLE_LIST.map((item) => (
                                    <Select.Option key={item.id} value={item.id}>
                                        {item.title}
                                    </Select.Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </div>

                    <div className="col-6">
                        <div>Tiền xe:</div>
                        <Form.Item
                                name="price"
                            >
                            <Input size="large"/>
                        </Form.Item>
                    </div>
                    <div className="col-12 mb-2">Số Khung :</div>
                    <div className="col-4 d-flex">
                        <div className="pe-2">Lớn</div>
                        <Form.Item
                                name="box_l"
                            >
                            <Input size="large" style ={{ width : '50px'}}/>
                        </Form.Item>
                    </div>
                    <div className="col-4 d-flex">
                        <div className="pe-2">Trung</div>
                        <Form.Item
                                name="box_m"
                            >
                            <Input size="large"  style ={{ width : '50px'}}/>
                        </Form.Item>
                    </div>
                    <div className="col-4 d-flex">
                        <div className="pe-2">Bi</div>
                        <Form.Item
                                name="box_s"
                            >
                            <Input size="large" style ={{ width : '50px'}}/>
                        </Form.Item>
                    </div>
                    <div className="col-12">
                        Bao :
                    </div>
                    <BagComponent 
                        totalBag={totalBag}
                        setTotalBag={setTotalBag}    
                            />
                    <div className="col-12">
                        <div>Ghi chú :</div>
                        <Form.Item
                                name="note"
                            >
                            <TextArea size="large"/>
                        </Form.Item>
                    </div>
                    
                    <div className="col-12">
                        <div className="d-flex mt-3 justify-content-center">
                            <button
                                type="button"
                                className="btn btn-danger me-2"
                                onClick={onSubmit}
                            >
                                Lưu
                            </button>
                            <button
                                type="button"
                                className="btn btn-outline-primary"
                                onClick={handleCancel}
                            >
                                Huỷ
                            </button>
                        </div>
                    </div>
                </div>
            
            </Form>
        </div>
    );
};
export default FormCreateDriver;

export const ROLE_LIST = [
    {
        id : 1 , 
        title : 'Đã mua'
    },
    {
        id : 2 , 
        title : 'Đã trả hết'
    }
]
