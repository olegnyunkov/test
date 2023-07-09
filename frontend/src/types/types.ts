import React from "react";

export interface IForm {
  setUser: React.Dispatch<React.SetStateAction<[] | undefined>>
}

export interface IResult {
  user: { email: string, number: number }[] | [] | undefined
}
