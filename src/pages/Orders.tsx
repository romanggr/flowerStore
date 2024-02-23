import styled from 'styled-components'

import OrderItem from '../ui/OrderItem'
import { IOrderItem } from '../helpers/types'


const StyledContainer = styled.div`
    margin:4rem auto;
    width:80vw;
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    gap:5rem;

    @media (max-width: 1050px) {
        gap:3rem;
        width:85vw;

    }

    @media (max-width: 868px) {
        grid-template-columns:1fr 1fr;
    }

    @media (max-width: 650px) {
        width:90vw;
    }

    @media (max-width: 550px) {
        grid-template-columns:1fr;
        width:90vw;
        gap:5rem;
    }
`

const data: IOrderItem[] = [
    {
        id: 1,
        date: "01.09.2023",
        status: "processing",
        products: [
            {
                title: "Roses",
                price: 120,
                quantity: 3,
                image: "rose.png"
            },
            {
                title: "Tulips",
                price: 80,
                quantity: 9,
                image: "rose.png"
            }
        ]
    },
    {
        id: 2,
        date: "02.01.2023",
        status: "completed",
        products: [
            {
                title: "Roses",
                price: 120,
                quantity: 3,
                image: "rose.png"
            },
            {
                title: "Tulips",
                price: 80,
                quantity: 9,
                image: "rose.png"
            }
        ]
    },
    {
        id: 3,
        date: "03.13.2023",
        status: "canceled",
        products: [
            {
                title: "Roses",
                price: 120,
                quantity: 3,
                image: "rose.png"
            },
            {
                title: "Tulips",
                price: 80,
                quantity: 9,
                image: "rose.png"
            }
        ]
    }, {
        id: 4,
        date: "01.09.2023",
        status: "processing",
        products: [
            {
                title: "Roses",
                price: 120,
                quantity: 3,
                image: "rose.png"
            },
            {
                title: "Tulips",
                price: 80,
                quantity: 9,
                image: "rose.png"
            }
        ]
    }, {
        id: 5,
        date: "01.09.2023",
        status: "processing",
        products: [
            {
                title: "Roses",
                price: 120,
                quantity: 3,
                image: "rose.png"
            },
            {
                title: "Tulips",
                price: 80,
                quantity: 9,
                image: "rose.png"
            }
        ]
    },
]

const Orders = () => {
    return (
        <StyledContainer>
            {data.map((item) => <OrderItem item={item} />)}
        </StyledContainer>
    )
}

export default Orders