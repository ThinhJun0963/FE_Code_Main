export interface data {
    Id: number,
    Subject: string,
    StartTime: string,
    EndTime: string,
    IsAllDay: boolean,
    Description: string,
    Location: string,
}

export const defaultData: object [] = [
    {
           Id: 1,
           Subject: 'Khám tổng quát',            
           StartTime: new Date(2024, 5, 7, 7, 30),
           EndTime: new Date(2024, 5, 7, 8, 0),
           IsAllDay: false,
           Description:'Mr.Thinh',
           Location:"Nha Khoa Tại Nhà"
       }, 
       {
         Id: 2,
         Subject: 'Khám dịch vụ',            
         StartTime: new Date(2024, 5, 10, 12, 30),
         EndTime: new Date(2024, 5, 10, 10, 0),
         IsAllDay: false,
         Description:'Mr.Giang',
         Location:"Nha Khoa Asia"
     }, 
   ];
   