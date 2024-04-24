import React from 'react';

//Componente basado en clase
export default class ConteoRegresivo extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            conteo: 10,
            ejecutandoTimer: false,
        };
    }

    detenerConteo = () => {
        this.setState({ejecutandoTimer: false});
    };


    reiniciarConteo = () => {
        this.state = {
            if (conteoLlegaA10){
                conteo: 10,
                ejecutandoTimer: false,
                }
        };
    };

    iniciarConteo = () => {
        this.state = {
            if (pulsaIniciar){
                conteo++,
                ejecutandoTimer: true,
                }
            };
    };

    contador = () => {

    };

    componenteLlamaContador() {
        this.contador()
    }

    componenteEliminadoDeMemoria() {
        clearInterval (this.intervalId);
    }
}