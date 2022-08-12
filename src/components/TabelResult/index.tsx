import { Box, Grid, SxProps, Theme, Tooltip, Typography } from '@mui/material';
import { useMemo } from 'react';
import { IconWarning } from '../../assets/icons';
import { formatMoneyBLR } from '../../utils/normalizers';
import { styles } from './styles';

interface TabelResultProps {
    saldoFgts?: number;
    somaLancamentos?: number;
    saldoFuturoTotal?: number;
    previsaoSaque?: number;
    disabled?: boolean;
    sx?: SxProps<Theme>;
}

type DataListType = {
    label: string;
    value: string;
    tooltip?: string;
    isPrevision?: boolean;
};

function TabelResult({
    saldoFgts = 0,
    somaLancamentos = 0,
    saldoFuturoTotal = 0,
    previsaoSaque = 0,
    disabled = false,
    sx,
}: TabelResultProps) {
    const dataList = useMemo<DataListType[]>(() => {
        return [
            {
                label: 'Saldo do FGTS',
                value: formatMoneyBLR(saldoFgts),
                tooltip: 'Saldo atual do FGTS',
            },
            {
                label: 'Soma de lançamentos',
                value: formatMoneyBLR(somaLancamentos),
                tooltip: `Soma dos futuros lançamentos
                de saldo na conta do FGTS (8% do salário bruto por mês) 
                até o mês de aniversário, considerando que o salário bruto não mude.`,
            },
            {
                label: 'Saldo total com lançamentos',
                value: formatMoneyBLR(saldoFuturoTotal),
                tooltip: `Saldo total da conta do FGTS até o mês de nascimento, 
                incluindo os lançamentos futuros`,
            },
            {
                label: 'Sua previsão de saque',
                value: formatMoneyBLR(previsaoSaque),
                isPrevision: true,
            },
        ];
    }, [saldoFgts, somaLancamentos, saldoFuturoTotal, previsaoSaque]);

    return (
        <Box
            sx={
                {
                    ...sx,
                    ...styles.container,
                    maxHeight: disabled ? 0 : 350,
                } as SxProps
            }
        >
            {dataList.map(({ label, value, tooltip, isPrevision = false }) => {
                const styleGrid = {
                    ...styles.line,
                    ...(isPrevision ? styles.linePrev : {}),
                } as const;

                const styleLabel = {
                    ...styles.itemLabel,
                    ...(isPrevision ? styles.itemLabelPrev : {}),
                } as const;

                const styleValue = {
                    ...styles.itemValue,
                    ...(isPrevision ? styles.itemValuePrev : {}),
                } as const;

                return (
                    <Grid key={label} container sx={styleGrid}>
                        <Typography sx={styleLabel}>
                            {label}

                            {tooltip ? (
                                <Tooltip title={tooltip}>
                                    <IconWarning />
                                </Tooltip>
                            ) : null}
                        </Typography>
                        <Typography variant={isPrevision ? 'h2' : 'body2'} sx={styleValue}>
                            {value}
                        </Typography>
                    </Grid>
                );
            })}
        </Box>
    );
}

export default TabelResult;
