import React from 'react'
import style from './Badge.module.scss'
import { UserStatus } from '../Interfaces/UserDefinition';


const predefined = [style.DefaultState, style.InfoState, style.InvalidState, style.WarnState, style.ValidState]

const StatusBadge: React.FC<UserStatus> = ( {state_number, message}: UserStatus ) => {

  const choosen: string = predefined[state_number];
  return (
    <p className={choosen}>{message ?? "status"}</p>
  )
}

export default StatusBadge