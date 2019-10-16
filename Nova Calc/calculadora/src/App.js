import React, { Component } from 'react'
import Botao from './Botao'
import Tela from './Tela'

export default class Calculadora extends Component {
    constructor(props) {
        super(props)
        this.state = {
            resultado: 0,
            pcem: 0,
            valor1: null,
            valor2: null,
            valor3: null
        }
    }

    clickBotao(Botao) {
        console.log(Botao)
    }

    clickNumero = (Botao) => {
        if (!this.state.valor1) {
            this.setState({ valor1: parseFloat(Botao) })
            return null;
        }
        this.setState({ valor2: parseFloat(Botao) })
    }

    zerarTela = () => {
        this.setState({ resultado: 0, valor1: null, valor2: null })
    }

    soma = (operacao) => {
        if (operacao === "+") {
            let total = parseFloat(this.state.valor1) + parseFloat(this.state.valor2)
            this.setState({ resultado: total })
        }
    }

    subtracao = (operacao) => {
        if (operacao === "-") {
            let total = parseFloat(this.state.valor1) - parseFloat(this.state.valor2)
            this.setState({ resultado: total })
        }
    }

    divisao = (operacao) => {
        if (operacao === "÷") {
            let total = parseFloat(this.state.valor1) / parseFloat(this.state.valor2)
            this.setState({ resultado: total })
        }
    }

    multiplicacao = (operacao) => {
        if (operacao === "x") {
            let total = parseFloat(this.state.valor1) * parseFloat(this.state.valor2)
            this.setState({ resultado: total })
        }
    }
    render() {
        return (
            <table id='tabela'>
                <tr>
                    <td>
                        <section>
                            <div id='texto'>
                                <Tela resultado={this.state.resultado} />
                            </div>

                            <div id='topo'>
                                <Botao valor="AC" click={this.zerarTela} />
                                <Botao valor="+/-" click={this.clickBotao} />
                                <Botao valor="%" click={this.porcentagem} />
                                <nobr id='oper'>
                                    <Botao valor="÷" click={this.divisao} />
                                </nobr>
                            </div>

                            <div id='num'>
                                <Botao valor="7" click={this.clickNumero} />
                                <Botao valor="8" click={this.clickNumero} />
                                <Botao valor="9" click={this.clickNumero} />
                                <nobr id='oper'>
                                    <Botao valor="x" click={this.multiplicacao} />
                                </nobr>
                            </div>

                            <div id='num'>
                                <Botao valor="4" click={this.clickNumero} />
                                <Botao valor="5" click={this.clickNumero} />
                                <Botao valor="6" click={this.clickNumero} />
                                <nobr id='oper'>
                                    <Botao valor="-" click={this.subtracao} />
                                </nobr>
                            </div>

                            <div id='num'>
                                <Botao valor="1" click={this.clickNumero} />
                                <Botao valor="2" click={this.clickNumero} />
                                <Botao valor="3" click={this.clickNumero} />
                                <nobr id='oper'>
                                    <Botao valor="+" click={this.soma} />
                                </nobr>
                            </div>

                            <div id='num'>
                                <nobr id='z'>
                                    <Botao valor="0" click={this.clickNumero} />
                                </nobr>
                                <Botao valor="," click={this.clickBotao} />
                                <nobr id='oper'>
                                    <Botao valor="=" click={this.clickBotao} />
                                </nobr>
                            </div>
                        </section>
                    </td>
                </tr>
            </table>
        )
    }
}