import React from "react"
import s from "./FormsControls.module.css"

// const Element = Element => ({ input, meta, ...props }) => {
//    const hasError = meta.touched && meta.error;
//    return (
//      <div className={ s.formControl + " " + (hasError ? s.error : "") }>
//        <Element {...input} {...props} />
//        <div>{ hasError && <span> { meta.error } </span> }</div>
//      </div>
//    );
//  };
// export const Textarea = Element("textarea")
// export const Input = Element("input")
const FormControl = ({input, meta, ...props}) =>{
   const hasError = meta.touched && meta.error
   return (
<div className={s.formControl + " " + (hasError? s.error: "")}>
<div>{props.children}</div>
{hasError && <span>{meta.error}</span>}
</div>
   )  
}


export const Textarea = (props) =>{
const {input, meta, ...restProps} = props;
   return (<FormControl {...props}><textarea {...input} {...restProps} /></FormControl>)
}
export const Input = (props) =>{
   const {input, meta, ...restProps} = props;
   return (<FormControl {...props}><input {...input} {...restProps} /></FormControl>)
   }