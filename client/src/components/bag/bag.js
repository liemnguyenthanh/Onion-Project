import { Input, Select } from 'antd'
import React from 'react'

const BagComponent = () => {
    return (
        <div>
            <div className="row">
                <div className="col-4">
                    <Select
                        size="large"
                        defaultValue={1}

                    >
                        {BAG_LIST.map((item) => (
                            <Select.Option key={item.id} value={item.id}>
                                {item.title}
                            </Select.Option>
                        ))}
                    </Select>
                </div>
                <div className="col-4">
                    <Select
                        size="large"
                        defaultValue={2}

                    >
                        {BAG_KILO_LIST.map((item) => (
                            <Select.Option key={item.id} value={item.id}>
                                {item.title}
                            </Select.Option>
                        ))}
                    </Select>
                </div>
                <div className="col-4">
                    <Input
                       placeholder='Số bao' 
                     />
                </div>
            </div>
            <div className="col-4">

            </div>
        </div>
    )
}

export default BagComponent
const BAG_LIST =  [
    {
        id : 1 , 
        title : 'Lớn'
    },
    {
        id : 2 , 
        title : 'Trung'
    },
    {
        id : 3 , 
        title : 'bi'
    }
]
const BAG_KILO_LIST =  [
    {
        id : 1 , 
        title : 30
    },
    {
        id : 2 , 
        title : 20
    },
    {
        id : 3 , 
        title : 10
    }
]