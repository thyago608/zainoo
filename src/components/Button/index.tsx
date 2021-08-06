import { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    data:{
        title: string;
        icon: string;
        colors?:{
            colorText:string;
            colorBackground:string;
        };
    }
};

export function Button({data,...rest}:Props){

    const defaultStyle = {
        colorText:'black',
        colorBackground:'white'
    }

    const obj = data.colors;

    console.log({defaultStyle, obj});

    return (
        <Container {...rest} colors={data.colors ?? defaultStyle }>
            <img src={data.icon} alt="icon" />
            {data.title}
        </Container>
    );
}
