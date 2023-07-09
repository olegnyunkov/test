import { Request, Response } from 'express';
import fs from 'fs';
import { join } from "path";
import { delay } from "../helpers/delay";

export const getData = (req: Request, res: Response) => {

  const { email, number } = req.body;
  const result: {email: string, number: number}[] = []

  fs.readFile(join(__dirname, '..', 'data.json'), "utf8", async (err, data) => {
    if(err) {
      console.log(err)
      return
    }
    try {
      const jsonData: {email: string, number: number}[] = JSON.parse(data);
      jsonData.map((item) => {
        if(item.email === email && item.number === number) {
          return result.push({email: item.email, number: item.number})
        } else if(item.email === email && !number) {
          return result.push({email: item.email, number: item.number})
        } else {
          return
        }
      })
      await delay(5000)
      res.send(result)
    } catch (err) {
      console.log(err)
    }
  })
}
