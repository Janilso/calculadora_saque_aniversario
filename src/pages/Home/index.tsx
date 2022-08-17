import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { useMemo, useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { IconFgts } from '../../assets/icons';
import { CustomInput } from '../../components/CustomInput';
import TabelResult from '../../components/TabelResult';
import calcSaqueService from '../../services/calcSaque';
import { getOptionMonth } from '../../utils/functions';
import { removeMoneyFormat } from '../../utils/normalizers';
import { styles } from './styles';

type FormValues = {
    saldoFgts: string;
    salarioBruto: string;
    mesNascimento: string;
};

interface IStateDataResult {
    loading: boolean;
    previsaoSaque?: number;
    saldoFgts?: number;
    saldoFuturoTotal?: number;
    somaLancamentos?: number;
}

function Home() {
    const methods = useForm<FormValues>();
    const { handleSubmit } = methods;
    const optionsSelect = useMemo(() => getOptionMonth(), []);
    const [dataResult, setDataResult] = useState<IStateDataResult>({ loading: false });

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        setDataResult((prev) => ({ ...prev, loading: true }));
        const { mesNascimento: dataMesNascimento, salarioBruto, saldoFgts: dataSaldo } = data;
        const mesNascimento = parseFloat(dataMesNascimento);
        const salario = removeMoneyFormat(salarioBruto) as number;
        const saldoFgts = removeMoneyFormat(dataSaldo) as number;

        calcSaqueService.postCalculo({ mesNascimento, salario, saldoFgts }).then((result) => {
            setDataResult({ loading: false, ...result });
        });
    };

    return (
        <Grid container sx={styles.root}>
            <Container>
                <Grid container>
                    <Grid item container xs={6} sx={styles.containerLeft}>
                        <Typography sx={styles.title}>
                            Calculadora <br /> Saque Aniversário
                        </Typography>
                        <Typography variant="h2">
                            Tenha uma previsão do valor do Saque Aniversário de seu FGTS
                        </Typography>
                    </Grid>
                    <Grid item xs={6} sx={styles.containerRight}>
                        <IconFgts />
                        <FormProvider {...methods}>
                            <Box
                                component="form"
                                onSubmit={handleSubmit(onSubmit)}
                                sx={styles.formContainer}
                            >
                                <Grid item xs={12} container gap={1} sx={styles.itensForm}>
                                    <CustomInput
                                        label="Saldo do FGTS"
                                        name="saldoFgts"
                                        isInputMoney
                                    />
                                    <CustomInput
                                        label="Salário Bruto atual"
                                        name="salarioBruto"
                                        isInputMoney
                                    />
                                    <CustomInput
                                        label="Mês de Nascimento"
                                        name="mesNascimento"
                                        defaultValue={1}
                                        fullWidth
                                        SelectProps={{
                                            MenuProps: {
                                                PaperProps: {
                                                    style: {
                                                        maxHeight: 18 * 10.5 + 8,
                                                    },
                                                },
                                            },
                                        }}
                                        optionsSelect={optionsSelect}
                                    />
                                </Grid>
                                <Grid container sx={styles.actions}>
                                    <Button onClick={handleSubmit(onSubmit)}>Calcular</Button>
                                </Grid>
                            </Box>
                        </FormProvider>
                        {dataResult.previsaoSaque ? (
                            <TabelResult
                                saldoFgts={dataResult.saldoFgts}
                                somaLancamentos={dataResult.somaLancamentos}
                                saldoFuturoTotal={dataResult.saldoFuturoTotal}
                                previsaoSaque={dataResult.previsaoSaque}
                                loading={dataResult.loading}
                                sx={styles.result}
                            />
                        ) : null}
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    );
}

export default Home;
