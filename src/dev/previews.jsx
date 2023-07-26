import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import CarClicker from "../components/pages/CarClicker";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/CarClicker">
                <CarClicker/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews