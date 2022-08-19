import {
    InputAdornment,
    InputLabelProps as InputLabelPropsMui,
    InputProps as InputPropsMui,
    MenuItem,
    SelectProps as SelectPropsMui,
    TextField,
} from '@mui/material';
import React, { ChangeEvent, FocusEvent, ReactNode } from 'react';
import { Controller } from 'react-hook-form';
import { formatMoneyBLR, formatMoney, removeMoneyFormat } from '../../utils/normalizers';
import { TCustomInputSelect } from '../../utils/types';

type TOnChange = {
    name?: string;
    value?: string;
};

interface CustomInputProps {
    label: string | ReactNode;
    errorMessage?: string;
    name: string;
    defaultValue?: string | number;
    onChange?: (e: TOnChange) => void;
    normalizer?: (value: string | number) => string;
    placeholder?: string;
    maxCharacters?: string | number;
    optionsSelect?: TCustomInputSelect[];
    fullWidth?: boolean;
    SelectProps?: Partial<SelectPropsMui>;
    InputLabelProps?: Partial<InputLabelPropsMui>;
    InputProps?: Partial<InputPropsMui>;
    dataTestid?: string;
    endAdornment?: ReactNode;
    isInputMoney?: boolean;
}

export function CustomInput({
    label,
    errorMessage,
    name,
    defaultValue = '',
    onChange,
    normalizer,
    placeholder,
    maxCharacters,
    fullWidth,
    optionsSelect,
    SelectProps,
    InputLabelProps,
    InputProps,
    dataTestid,
    endAdornment,
    isInputMoney = false,
    ...rest
}: CustomInputProps) {
    return (
        <Controller
            defaultValue={isInputMoney ? formatMoneyBLR(0) : defaultValue}
            name={name}
            render={({ field: { onChange: _onChange, value } }) => {
                return (
                    <TextField
                        {...rest}
                        label={label}
                        name={name}
                        autoComplete="off"
                        fullWidth={fullWidth}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            let newValue;

                            if (isInputMoney) {
                                newValue = formatMoneyBLR(e.target.value);
                            } else {
                                newValue = normalizer ? normalizer(e.target.value) : e.target.value;
                            }

                            if (!maxCharacters || newValue.length <= maxCharacters) {
                                _onChange(newValue);
                                if (onChange) onChange({ value: newValue, name });
                            }
                        }}
                        placeholder={placeholder}
                        value={value}
                        helperText={errorMessage}
                        error={Boolean(errorMessage)}
                        select={Boolean(optionsSelect?.length)}
                        SelectProps={SelectProps}
                        InputLabelProps={InputLabelProps}
                        onFocus={(e: FocusEvent<HTMLInputElement>) => {
                            if (isInputMoney) {
                                const number = removeMoneyFormat(e.target.value) as number;
                                if (number === 0) _onChange('R$ ');
                                else if (Number.isInteger(number))
                                    _onChange(`R$ ${formatMoney(number, true)}`);
                            }
                        }}
                        onBlur={(e: FocusEvent<HTMLInputElement>) => {
                            if (isInputMoney) {
                                const number = removeMoneyFormat(e.target.value, false) as number;

                                if (!number) _onChange('R$ 0,00');
                                if (Number.isInteger(number))
                                    _onChange(`R$ ${formatMoney(number, true)},00`);
                            }
                        }}
                        InputProps={{
                            ...InputProps,
                            inputProps: {
                                ...InputProps?.inputProps,
                                'data-testid': dataTestid || name,
                            },
                            endAdornment: endAdornment ? (
                                <InputAdornment position="end">{endAdornment}</InputAdornment>
                            ) : null,
                        }}
                    >
                        {optionsSelect &&
                            optionsSelect.map((option: TCustomInputSelect) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                    </TextField>
                );
            }}
        />
    );
}
