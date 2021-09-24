export class Room {

  constructor(
    id: number = 0,
    name: string = '',
    date: string = '',
    startHour: string = '',
    endHour: string = '',
    active: boolean = false
    ){
      this.id = id;
      this.name = name;
      this.date = date;
      this.startHour = startHour;
      this.endHour = endHour;
      this.active = active;
  }

  id: number;
  name: string;
  date: string;
  startHour: string;
  endHour: string;
  active: boolean;
}
