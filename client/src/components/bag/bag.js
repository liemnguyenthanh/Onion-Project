import { Input, Select } from 'antd'
import React, { useState } from 'react'
import { nanoid } from 'nanoid';
const BagComponent = ({totalBag , setTotalBag}) => {
   
    const addNewBag = (e) => {
        const item = { id: nanoid() , type : 2 , kilo : 20 , total : 0}
        setTotalBag([...totalBag, item])
    }

    return (
        <div>
            <div className="btn btn-primary w-100 mb-3" onClick={() => addNewBag()}>Thêm bao</div>
            {
                totalBag.map((item, index) => <FormCreateBag key={index} item={item} totalBag={totalBag} setTotalBag={setTotalBag} />)
            }
        </div>
    )
}

const FormCreateBag = ({ item, setTotalBag, totalBag }) => {
    const [numberBag, setNumberBag] = useState(0)

    const changeType = (value) => {
        const index = totalBag.findIndex(bag => bag.id === item.id)
        totalBag[index].type = value
        setTotalBag(totalBag)
    }
    const changeKilo = value => {
        const index = totalBag.findIndex(bag => bag.id === item.id)
        totalBag[index].kilo = value
        setTotalBag(totalBag)
    }
    const changeSize = e => {
        const value = parseFloat(e.target.value)
        setNumberBag(value)
        const index = totalBag.findIndex(bag => bag.id === item.id)
        totalBag[index].total = value
        setTotalBag(totalBag)
    }
    const onDelete = () =>{
        const newList = totalBag.filter(bag => bag.id != item.id)
        setTotalBag(newList)
    }
    return <div className="row">
        <div className="col-3">
            <Select
                size="large"
                defaultValue={1}
                onChange={(e) => changeType(e)}
            >
                {BAG_LIST.map((item) => (
                    <Select.Option key={item.id} value={item.id}>
                        {item.title}
                    </Select.Option>
                ))}
            </Select>
        </div>
        <div className="col-3">
            <Select
                size="large"
                defaultValue={20}
                onChange={(e) => changeKilo(e)}
                style={{ width: '100px' }}
            >
                {BAG_KILO_LIST.map((item) => (
                    <Select.Option key={item.id} value={item.value}>
                        {item.title}
                    </Select.Option>
                ))}
            </Select>
        </div>
        <div className="col-4">
            <Input
                placeholder='Số bao'
                size='large'
                value={numberBag}
                onChange={e => changeSize(e)}
            />
        </div>
        <div className="col-2">
            <div className='btn btn-outline-warning' onClick={()=>onDelete()}>Xoá</div>
        </div>
    </div>
}
export default BagComponent
const BAG_LIST = [
    {
        id: 1,
        title: 'Lớn'
    },
    {
        id: 2,
        title: 'Trung'
    },
    {
        id: 3,
        title: 'bi'
    }
]
const BAG_KILO_LIST = [
    {
        id: 1,
        value: 30,
        title: '30kg'
    },
    {
        id: 2,
        value: 20,
        title: '20kg'
    },
    {
        id: 3,
        value: 10,
        title: '10kg'
    }
]