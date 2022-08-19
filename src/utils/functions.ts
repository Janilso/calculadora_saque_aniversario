export const getOptionMonth = () => {
    return Array.from({ length: 12 }).map((_, i) => {
        const numberMonth = i + 1;
        const date = new Date(`${numberMonth}-1-2021`);
        const label = `${date.toLocaleString('pt-BR', { month: 'short' })}`
            .replace('.', '')
            .toUpperCase();
        return {
            label,
            value: numberMonth,
        };
    });
};

export const getParamsLocation = () => {
    const result = new URLSearchParams(window.location?.search?.substring(1));
    const keys = Array.from(result.keys());
    const values = Array.from(result.values());

    const entries = keys.map((key, i) => {
        const value = decodeURI(values[i]);
        let valueToType: unknown = value;
        if (parseFloat(value)) valueToType = parseFloat(value);
        else if (value === 'true') valueToType = true;
        else if (value === 'false') valueToType = false;

        return [key, valueToType];
    });

    return Object.fromEntries(entries);
};
