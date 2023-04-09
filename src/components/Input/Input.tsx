import React, {ReactElement} from 'react';
import {IInputProps, ImportSizeTypes} from "../../types/Input.types";
import './input.styles.css';

const SIZE = {
    XS: 12,
    SM: 14,
    MD: 16,
    LG: 18,
    XL: 20
};
const BORDER_RADIUS = {
    XS: '0.125em',
    SM: '0.25em',
    MD: '0.5em',
    LG: '1em',
    XL: '2em'
};

const Input: React.FC<IInputProps> = ({
                                          type,
                                          name,
                                          label,
                                          value,
                                          placeholder,
                                          description,
                                          error,
                                          radius = ImportSizeTypes.MD,
                                          size = ImportSizeTypes.MD,
                                          required,
                                          disabled,
                                          icon
                                      }): ReactElement => {
    const Icon = icon || null;

    return (
        <div className={'input-wrapper'} style={{fontSize: SIZE[size]}}>
            {label &&
                <label className={`label${required ? '_required' : ''}`} htmlFor={name}>
                    {label}
                </label>
            }

            {description &&
                <span className={'description'}>{description}</span>
            }

            <div className={'input-container'}>
                {Icon &&
                    <div className={'icon-container'}>
                        <Icon height={'1em'} width={'1em'} />
                    </div>
                }

                <input
                    type={type}
                    className={'input'}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    disabled={disabled}
                    data-required={required}
                    data-invalid={!!error}
                    data-icon={!!icon}
                    style={{
                        borderRadius: BORDER_RADIUS[radius]
                    }}
                />
            </div>

            {error &&
                <span className={'error'}>{error}</span>
            }
        </div>
    );
};

export default Input;