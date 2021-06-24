import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Table, Space } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Badge } from 'antd';
import { renderizarCarrinho } from '../../actions/CarrinhoActions';

import './Carrinho.css';

class Carrinho extends Component {

  componentDidMount(){
    this.props.renderizarCarrinho();

  }
    render() {
      const { Header, Content, Footer } = Layout;
      
      const {carrinho} = this.props;

      const columns = [
        {
          title: 'foto',
          dataIndex: 'foto',
        },
        {
          title: 'titulo',
          dataIndex: 'titulo',
        },
        {
          title: 'preco',
          dataIndex: 'preco',
        },
        {
          title: 'Action',
          key: 'action',
          render: (text, record) => (
            <Space size="middle">
              {/* <a>Invite {record.name}</a> */}
              <a href="/">Delete</a>
            </Space>
          ),
        },
      ]
      return (
        <Layout>
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <Menu theme="dark" mode="horizontal"  selectable={false} >
              <Menu.Item key="1">
              <Badge count={5} size={'small'} >
                <ShoppingCartOutlined style={{fontSize: '25px', color: 'white'}} onClick={() => console.log("Clicado")}/>
              </Badge>
              </Menu.Item>
            </Menu>
          </Header>
          <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Carrinho</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 0, minHeight: 380 }}>
              <Table pagination={false} dataSource={carrinho} columns={columns}     
              expandable={{
                            expandedRowRender: record => <p style={{ margin: 0 }}>{record.descricao}</p>,
                            rowExpandable: record => record.name !== 'Not Expandable',
    }}/>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Carrinho SME</Footer>
        </Layout>
      );
      
    }
    
}
  
  const mapStateToProps = store => ({
    
    carrinho: store.carrinhoState.carrinho
  });
  
  const mapDispatchToProps = dispatch =>
      bindActionCreators({ 
        renderizarCarrinho
      }, dispatch);
  
  export default connect(mapStateToProps, mapDispatchToProps)(Carrinho);