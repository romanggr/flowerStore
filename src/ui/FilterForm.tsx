import { useState } from 'react'
import styled from 'styled-components'
import FilterDoubleRange from './FilterDoubleRange'

const Container = styled.div`

`

const Price = styled.div`
    
`

const Range = styled.div`
    
`

const FilterForm = () => {
    const [priceFrom, setPriceFrom] = useState(0);
    const [priceTo, setPriceTo] = useState(100);

    const handleChange = () => {
        console.log(22)
    }

    return (
        <Container>
            <Price>
                <label htmlFor="price-from">From</label>
                <input
                    id='price-from'
                    type="number"
                    value={priceFrom}
                    onChange={(e) => setPriceFrom(Number(e.target.value))} />
                <label htmlFor="price-to">To</label>
                <input
                    id='price-from'
                    type="number"
                    value={priceTo}
                    onChange={(e) => setPriceTo(Number(e.target.value))} />
                <Range>
                    <FilterDoubleRange max={100} min={0} onChange={handleChange} />
                </Range>
            </Price>

        </Container>
    )
}

export default FilterForm