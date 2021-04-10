import React from 'react'
import Input from './Input'
import Textarea from './Textarea'
import Select from './Select'
import Checkbox from './Checkbox'
// import CountrySelector from '../CountrySelector'

function ControlField(props) {
    
    const { control, ...rest } = props
    switch(control){
        case 'input':
        return <Input {...rest} />
        case 'textarea':
            return <Textarea {...rest}/>
        case 'select':
            return <Select {...rest}/>
    //    case 'countryselct':
    //        return <CountrySelector/>
        case 'checkbox':
            return <Checkbox {...rest}/>
        case 'date':
        default: return null
    }
    return (
        <div>
            
        </div>
    )
}

export default ControlField;
