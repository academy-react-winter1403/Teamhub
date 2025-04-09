import axios from "axios";

const client =axios.create({

    baseURL:"https://classapi.sepehracademy.ir/api"

})


export async function getCards(){

    const {data} = await client("/News?PageNumber=1&RowsOfPage=10&SortingCol=InsertDate&SortType=DESC")
    

    return data;
}