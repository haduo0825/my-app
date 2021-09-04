import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
const style = require('./box.css')

interface Props {
    children?: React.ReactNode
  }
export default function Box(props: Props) :React.ReactNode{
    return (
        <div className={style.box}>
            {props.children}
        </div>
    )
}