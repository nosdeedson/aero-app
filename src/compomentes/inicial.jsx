import React from "react";
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';


import { BotaoRadio } from "./botaoRadio";
import { CampoTexto } from "./campoTexto";
import { Botao } from "./botao.jsx";
import { Check } from "./check";
import { Combo } from "./combo.jsx";
import { Data } from "./data";


export const Inicial = (props) => {

    return (
        <form >
            <Container maxWidth="md" style={{backgroundColor: '#c0acac', borderRadius: '5%'}}>
                <Grid container spacing={12}>
                    <Grid item xs={12} style={{textAlign:'center'}}>
                        <h1>Passagem área com reserva flexível!!</h1>
                    </Grid>
                    <Grid item xs={12} style={{textAlign:'center'}}>
                        <h2>Econtre passagens áreas com possibilidade de mudar a data do voo.</h2>
                    </Grid>
                    <Container maxWidth="sm">
                        <div style={{ border: 'solid 0.3px', margin: '2%', padding: '2%', borderRadius: '10px', borderColor: 'GrayText' }}>
                            <Grid>
                                <h1>Tipo de viagem</h1>
                                <BotaoRadio />
                            </Grid>
                        </div>
                    </Container>
                    <Container maxWidth="sm">
                        <div style={{ border: 'solid 0.3px', margin: '2%', padding: '2%', borderRadius: '10px', borderColor: 'GrayText' }}>
                            <Grid>
                                <h1>Itinerário</h1>
                                <Combo textoLabel="Origem"></Combo>
                                <Combo textoLabel="Destino"></Combo>
                            </Grid>
                        </div>
                    </Container>
                    <Container maxWidth="sm">
                        <div style={{ border: 'solid 0.3px', margin: '2%', padding: '2%', borderRadius: '10px', borderColor: 'GrayText' }}>
                            <Grid>
                            <h1>Datas</h1>
                            <Data nome="Ida" />
                            <Data nome="Volta"/>
                            <Check></Check>
                            </Grid>
                        </div>
                    </Container>
                    <Container maxWidth="sm">
                        <div style={{ border: 'solid 0.3px', margin: '2%', padding: '2%', borderRadius: '10px', borderColor: 'GrayText' }}>
                            <Grid>
                            <h1>Passageiros/Classe</h1>
                            <CampoTexto campo="Passageiros" />
                            <CampoTexto campo="Classe" />
                            </Grid>
                        </div>
                    </Container>
                    <Container maxWidth="sm">
                        <Grid>
                            <div >
                                <Botao />
                            </div>
                        </Grid>
                    </Container>
                </Grid>
            </Container>
        </form>

    );
}