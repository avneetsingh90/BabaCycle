import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ButtonFormatter = (handler:any,icon:any,isDisable:boolean) => (cell:any, row:any) => {
    return (
      <button disabled={isDisable && !row.isDelete} onClick={() => handler(row.id,!row.isDelete)}>
        <FontAwesomeIcon icon={icon}/>
      </button>
    );
  }
