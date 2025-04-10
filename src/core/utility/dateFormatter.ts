const dateFormatter = (date:string):string=>{
    const unformattedDate = new Date(date)
    const option = {
        day:"numeric",
        month:"long",
        year:"numeric"
    }
    const formattedDate = unformattedDate.toLocaleDateString("fa-IR",option)
    return formattedDate
}

export default dateFormatter