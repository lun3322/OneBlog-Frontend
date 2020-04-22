import React, {Component} from 'react';
import {Table, Tag} from 'antd';
import Axios from "axios";

const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: '用户名',
        dataIndex: 'username',
        key: 'username',
    },
    {
        title: '昵称',
        dataIndex: 'nickname',
        key: 'nickname',
    },
    {
        title: '邮箱',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'QQ',
        dataIndex: 'qq',
        key: 'qq',
    },
    {
        title: '用户类型',
        dataIndex: 'userType',
        key: 'userType',
    },
    {
        title: '状态',
        dataIndex: 'status',
        key: 'status',
    },
    {
        title: '最后登录时间',
        dataIndex: 'lastLoginTime',
        key: 'lastLoginTime',
    },
    {
        title: '登录次数',
        dataIndex: 'loginCount',
        key: 'loginCount',
    },
    {
        title: '操作',
        key: 'action',
        render: (text, record) => (
            <span>
                <a>测试</a>
                <a>删除</a>
            </span>
        ),
    },
];

class Users extends Component {
    state = {
        data: [],
    };

    componentDidMount() {
        Axios.get('/api/users')
            .then(res => {
                console.log(res);
                this.setState({
                    data: res.data.rows
                });
            })
    }

    render() {
        return (
            <div>
                <Table columns={columns} dataSource={this.state.data}/>
            </div>
        );
    }
}

export default Users;