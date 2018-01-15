export class Todo {
   _id: number;
   name: string;
   creation_date: Date;
   status: StatusEnum;
}

export enum StatusEnum {
   'pending',
   'ongoing',
   'completed'
}
