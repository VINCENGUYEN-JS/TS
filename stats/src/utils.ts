export const dateStringToDate = (dateString: string): Date => {
  // 28/10/2018
  const dateParts = dateString.split("/"); // ["28","10","2018"]
  const convertedDateParts = dateParts.map((value: string): number => {
    return parseInt(value);
  });
  
  //January starts with 0 , we need to -1
  return new Date(convertedDateParts[2], convertedDateParts[1] - 1, convertedDateParts[0]);
};
