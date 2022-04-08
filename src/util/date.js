export const getFormattedDate = date =>{
    // return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
    return date.toISOString().slice(0, 10); //  YYYY-MM-DD ex: 2022-05-04
};

export function getDateMinusDays(date, days){
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days)
}