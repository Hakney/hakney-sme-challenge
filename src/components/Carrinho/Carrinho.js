import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Table, Space } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';
import { ShoppingCartOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { Badge } from 'antd';
import { renderizarCarrinho, adicionarAoCarrinho, removerDoCarrinho } from '../../actions/CarrinhoActions';
import {formatarReal} from '../../Util/index';
import { notification } from 'antd';

import './Carrinho.css';

class Carrinho extends Component {

  componentDidMount(){
    this.props.renderizarCarrinho();

  }

  handleAdicionar(contador, produto){
    const {carrinho} = this.props;

    const produtoEstoque = carrinho.filter((p) => {
      return p.estoque > 0 && p.key === produto.key;
    })

    if(produtoEstoque.length > 0){
      this.props.adicionarAoCarrinho(contador, produto);
    } else {
      return notification.error({message: "Error", description: "Produto sem estoque"});
    }
  }

  render() {
      const { Header, Content, Footer } = Layout;
      
      const {carrinho, contador, totalCompras} = this.props;

      const columns = [
        {
          title: 'Foto',
          dataIndex: 'foto',
        },
        {
          title: 'Título',
          dataIndex: 'titulo',
        },
        {
          title: 'Preço',
          dataIndex: 'preco',
        },
        {
          title: 'Ações',
          key: 'action',
          width: '60px',
          render: (produto) => (
            <Space size="middle">
              <PlusOutlined onClick={() => this.handleAdicionar(contador, produto)}/>
              <MinusOutlined onClick={() => this.props.removerDoCarrinho(contador, produto)}/>
            </Space>
          ),
        },
      ]
      return (
        <Layout>
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <Menu theme="dark" mode="horizontal"  selectable={false}  style={{ marginRight: '20px'}}>
              <Menu.Item key="1" >
                <Badge count={contador} size={'small'} >
                  <ShoppingCartOutlined style={{fontSize: '25px', color: 'white'}} onClick={() => console.log("Clicado")}/>
                </Badge>
              </Menu.Item>
              Total da compra: {formatarReal(totalCompras)}
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
    
    carrinho: store.carrinhoState.carrinho,
    contador: store.carrinhoState.contador,
    totalCompras: store.carrinhoState.totalCompras
  });
  
  const mapDispatchToProps = dispatch =>
      bindActionCreators({ 
        renderizarCarrinho,
        adicionarAoCarrinho,
        removerDoCarrinho
      }, dispatch);
  
  export default connect(mapStateToProps, mapDispatchToProps)(Carrinho);