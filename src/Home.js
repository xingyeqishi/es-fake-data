import React from 'react';
import logo from './react.svg';
import axios from 'axios';
import JSONPretty from 'react-json-pretty';
import { Input, Icon, Layout, Row, Col, Button, Typography, notification } from 'antd';
import autobind from 'autobind-decorator'
import 'react-json-pretty/themes/monikai.css';

const { TextArea  } = Input;
const { Text } = Typography;
const { Content, Header } = Layout;

import './Home.css';

class Home extends React.Component {
	state = {
		source: null,
		index: '',
		query: '',
		control: '',
		change: ''
	}
	@autobind
	changeItem(key, val) {
		let obj = {};
		obj[key] = val;
		this.setState(obj)
	}
	@autobind
	createSample() {
		const { source, change, control } = this.state;
		axios.post('/run', {
			source: JSON.stringify(source),
			control,
			change
		}).then(res => {
			if (res.data.body.errors) {
				notification.error({message: JSON.stringify(res.data.body.items)})
			} else {
				notification.success({message: `成功创建${res.data.body.items.length}条数据`})
			}
		})
	}
	@autobind
	queryData() {
		axios.post('/query', {
			index: this.state.index,
			query: this.state.query
		}).then(res => {
			if (res.data.data) {
				this.setState({
					source: res.data.data._source
				})
			}
		})
	}
  render() {
	  const { index, query, source, change, control } = this.state;
    return (
      <div className="Home">
			<Layout>
				<Header className="header">
					<Text type="warning">造数据</Text>
				</Header>
			  <Content  style={{ padding: '15px'  }}>
					<Row gutter={16}>
						  <Col span={6}>
							  <Row>
							  <Input placehoder="输入索引名称" value={index} onChange={(e) => this.changeItem("index", e.target.value)}/>
						  </Row>
							  <Row>
							  <TextArea placeholder="输入查询语句" autosize={{minRows: 4, maxRows: 18}} onChange={(e) => this.changeItem("query", e.target.value)} onBlur={this.queryData}/>
						  </Row>
						</Col>
					  <Col span={18}>
						  {
							  source ?
							  <div className="code">
								  <JSONPretty data={source}></JSONPretty>
							  </div>
							  : null
						  }
						  <TextArea autosize={{minRows: 1, maxRows: 6}} onChange={(e) => this.changeItem("change", e.target.value)} value={change} placeholder="修改内容"/>
						  <TextArea autosize={{minRows: 4, maxRows: 5}} onChange={(e) => this.changeItem("control", e.target.value)} value={control} placeholder="控制信息&#10;repeat:3 单条变更重复次数&#13;&#10;total:30 总次数&#13;&#10;index:tdp-2019-08-08"/>
						<Button type="primary" onClick={this.createSample}>生成数据</Button>
					</Col>
					</Row>

			  </Content>
			</Layout>
      </div>
    );
  }
}

export default Home;
