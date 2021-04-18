import React from 'react'
import {Formik, Form} from 'formik';
import * as Yup from 'yup'
import ControlField from './ControlField';
import CountrySelector from '../ContactInfo/CountrySelector';


export default function ContactForm() {
    const IndustryOptions=[
        {key: 'Banking', value:'Banking'},
        {key: 'Automotive', value:'Automotive'},
        {key: 'Consulting', value:'Consulting'},
        {key: 'Finance', value:'Finance'},
        {key: 'Healthcare', value:'Healthcare'},
        {key: 'Media/PR', value:'Media/PR'},
        {key: 'Retail', value:'Retail'},
        {key: 'Technology', value:'Technology'},
        {key: 'Telecommunication', value:'Telecommunication'},
        {key: 'Other', value:'Other'},
    ]
        const locationOptions=[
        {key: 'N/A', value:'N/A'},
        {key: 'National', value:'National'},
        {key: 'Regional', value:'Regional'},
        {key: 'Global', value:'Global'},
    ]
  
      const checkOptions=[
        {key: 'By submitting this form I accept ,privacy policy and cookie policy', value:'By submitting this form I accept ,privacy policy and cookie policy'},
        {key: 'I would like to receive your newsletter.',value:'I would like to receive your newsletter.'},
    ]
    const initialValues ={
        firstName:'',
        lastName:'',
        email:'',
        jobTitle:'',
        company: '',
        industryOption:'',
        countryOption:'',
        locationOption:'',
        comments: '',
        checkOption: []
    }
    const validationSchema =Yup.object({
        firstName:Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        email: Yup.string().email('invalid email format').required('required'),
        jobTitle: Yup.string().required('Required'),
        company:Yup.string().required('Required'),
        industryOption:Yup.string().required('Required'),
        countryOption:Yup.string().required('Required'),
        locationOption: Yup.string().required('Required'),
        comments: Yup.string().required('Required'),
        checkOption: Yup.array().required('Required'),
        
    })
    const onSubmit = values=>
    console.log('form data',values)
    return (
        <Formik initialValues ={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        >
        {formik =>(
        <Form className='contact-form'>
           
            <ControlField 
             control='input'
             type='text' 
             label='First name*'
             name='firstName'
            />
                <ControlField 
             control='input'
             type='text' 
             label='Last name'
             name='lastName'
            />
                <ControlField
             control='input'
             type='email' 
             label='Email*'
             name='email'
            />
                <ControlField
             control='input'
             type='text' 
             label='Job title'
             name='jobTitle'
            />
            <ControlField
             control='input'
             type='text' 
             label='Company*'
             name='company'
            />
             <ControlField
             control='select'
             label='Industry*'
             name='industryOption'
             options={IndustryOptions}
            />
            <ControlField
             control='select'
             label='Country*'
             name='countryOption'
             options={IndustryOptions}
            />
         <ControlField
             control='select'
             label='Operating geography'
             name='locationOption'
             options={locationOptions} 
            />

               <ControlField
             control='textarea' 
             label='What would you like to talk about?'
             name='comments'
            />
            
      
             <ControlField
             control='checkbox'
             name='checkOption'
             options={checkOptions}
             
           />
                <ControlField
             control='checkbox'
             name='checkOption'
             options={checkOptions}
             
           />
           <CountrySelector/>
            
            
            <button type='submit'>Send</button>

        </Form>
        )}
    
    </Formik>
    )
}
