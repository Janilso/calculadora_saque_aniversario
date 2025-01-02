/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Box,
    Button,
    ButtonBase,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Link,
    Slide,
    Typography,
} from '@mui/material';
import React from 'react';
import { TransitionProps } from '@mui/material/transitions';
import { IconWarning } from '../../assets/icons';
import { styles } from './styles';

const Transition = React.forwardRef(
    (
        props: TransitionProps & {
            children: React.ReactElement<any, any>;
        },
        ref: React.Ref<unknown>,
    ) => {
        return <Slide direction="up" ref={ref} {...props} />;
    },
);

function ButtonAbout() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Box sx={styles.root} component={ButtonBase} onClick={handleClickOpen}>
                <IconWarning />
                <Typography sx={styles.text} variant="body2">
                    SOBRE
                </Typography>
            </Box>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                maxWidth="md"
                onClose={handleClose}
            >
                <DialogTitle sx={styles.modalTitle}>Sobre o site e cálculos</DialogTitle>
                <DialogContent>
                    <DialogContentText sx={styles.modalText}>
                        O site Calculadora Saque Aniversário não tem qualquer relação com a
                        instituição bancária CAIXA ou qualquer órgão governamental ou financeiro. O
                        site não armazena qualquer tipo de dado fornecido pelo usuário. Todos os
                        dados solicitados são para uso exclusivo de nossa calculadora do Saque
                        Aniversário.
                    </DialogContentText>
                    <DialogContentText sx={styles.modalText}>
                        O cálculo do Saque Aniversário é uma previsão não oficial de quanto você
                        poderá sacar no seu mês de aniversário, tendo como base o valor atual de seu
                        saldo do FGTS, seu salário bruto mensal e o seu mês de nascimento. O cálculo
                        é feito da seguinte forma: primeiro, verificamos quanto tempo falta para o
                        seu mês de aniversário. Essa quantidade é multiplicada pelo valor de 8% de
                        seu salário bruto (que é o valor depositado mensalmente pela empresa em que
                        você trabalha na sua conta do FGTS). O resultado desse cálculo inicial é a{' '}
                        <b>Soma de lançamentos</b> futuros de saldo em sua conta do FGTS até sua
                        data de aniversário (levando em consideração que seu salário não será
                        alterado nesse período). Após determinarmos o valor total que você
                        provavelmente terá em sua conta do FGTS no futuro, somamos esse valor ao{' '}
                        <b>Saldo do FGTS</b> atual que está em sua conta. O{' '}
                        <b>Somatório total com os lançamentos</b> (incluindo o futuro e atual saldo)
                        é usado para determinar em qual alíquota seu saldo se enquadra, de acordo
                        com a tabela fornecida pela CAIXA
                        <Link
                            target="_blank"
                            href="https://www.caixa.gov.br/beneficios-trabalhador/fgts/saque-FGTS/Paginas/default.aspx"
                        >
                            (você pode consultar clicando aqui)
                        </Link>
                        . Por fim após essa verificação podemos determinar o valor que você sacará
                        em seu mês de aniversário.
                    </DialogContentText>
                    <DialogContentText sx={styles.modalText}>
                        Vale frisar que esse <b>cálculo não é oficial</b>. É somente uma previsão
                        aproximada de quanto você poderá sacar de saldo em sua conta do FGTS.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        data-gtm-type="click"
                        data-gtm-clicktype="button"
                        data-gtm-name="modal-entendi"
                        onClick={handleClose}
                    >
                        Entendi
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default ButtonAbout;
