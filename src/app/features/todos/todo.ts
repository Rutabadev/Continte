export class Todo {
   _id: number;
   name: string;
   creation_date: Date;
   status: StatusEnum;
}

enum StatusEnum {
   'pending',
   'ongoing',
   'completed'
}
