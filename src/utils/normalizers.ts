export const removeMoneyFormat = (value = '', toFloat = true) => {
    const number = value
        .toString()
        .replace(/[^0-9]+/, '')
        .replace(/[.]/g, '')
        .replace(/[,]/g, '.')
        .trim();
    return toFloat ? parseFloat(number) : number;
};

export const formatMoneyBLR = (value: string | number = 0.0) => {
    let v = value;

    if (typeof v === 'number') v = Math.round(v * 100);
    v = removeMoneyFormat(v?.toString(), false) as string;

    if (parseFloat(v) === 0) return 'R$ 0,00';

    v = v?.replace(/\D/g, '');
    v = v?.replace(/(\d{1})(\d{15})$/, '$1.$2');
    v = v?.replace(/(\d{1})(\d{11})$/, '$1.$2');
    v = v?.replace(/(\d{1})(\d{8})$/, '$1.$2');
    v = v?.replace(/(\d{1})(\d{5})$/, '$1.$2');
    v = v?.replace(/(\d{1})(\d{2})$/, '$1,$2');

    return `R$ ${v}`;
};

export const formatMoney = (value: number, numberOnly = false) => {
    return new Intl.NumberFormat('pt-BR', {
        style: numberOnly ? 'decimal' : 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(value);
};
