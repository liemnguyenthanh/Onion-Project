import { Table } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListBuy } from '../actions/buy'
import { TableBuy } from './table/TableBuy'

export const BuyOnion = () => {
    const dispatch = useDispatch()
    const { listBuy } = useSelector(state => state.buy)
    useEffect(() => {
        dispatch(getListBuy())
    }, [])
    return (
        <div className="card mb-2 pb-2">
            <div className="d-flex justify-content-between mb-2">
                <div>
                    <span className="title-card"> Quản lí Thu Hành</span>
                </div>
                <div className="align-items-center">
                    <button
                        type="button"
                        className="btn btn-danger"
                        data-toggle="modal"
                        data-target="#modalAdd"
                        style={{minWidth: "110px"}}
                        //onClick={showModal}
                    >
                        <i className="fas fa-user-plus btn-icon"></i>Thêm
                    </button>
                </div>
            </div>
            {/* <Modal title={translate('addStaff')}  onCancel={handleCancel} visible={isModalVisible} footer={null}>
                <AddMemberBranch
                    detailBranch={detailBranch}
                    handleCancel={handleCancel}
                    handleOk={handleOk}
                />
            </Modal>
            <Modal title={translate('createStaff')} onCancel={handleCancelCreate} visible={isModalCreate} footer={null}>
                <CreateMemberBranch
                    detailMember={null}
                    detailBranch={detailBranch}
                    handleCancel={handleCancelCreate}
                    handleOk={handleOkCreate}
                />
            </Modal>

            <Modal title={translate('editStaff')}
                    visible={isModalEdit}
                    onCancel = {onCancelEdit}
                    footer={null}>
                <CreateMemberBranch
                    detailMember={detailMember}
                    detailBranch={detailBranch}
                    handleCancel={onCancelEdit}
                    handleOk={onOkEdit}
                />
            </Modal> */}

           <TableBuy/>
            {/* {
                dataSource.length > 0 &&
                dataPagination &&
                <div className="mt-2 d-flex justify-content-between align-items-center">
                    <div>{translate('total_staff')}: <span className="text-primary">{total}</span></div>
                    <PaginationLocal
                        data={LoadDataPaging(dataPagination.total_record, dataPagination.page, dataPagination.total_page, postsPerPage)}
                        limit={postsPerPage}
                        showFindPage={false}
                        onChange={handleChangePageStaff}
                        activePage={activePage}
                    />

                </div>
            } */}
        </div>
    )
}
