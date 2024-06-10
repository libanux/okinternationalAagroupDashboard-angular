export class Tickets {
    constructor(
      public id: number = 0,
      public customer: string = '',
      public issueDate: string = '',
      public description: string = '',
      public cost: string = '',
      public credit: string = '',
      public balance: string = '',
      public note: string = '',
      public status: string = '',
    ) {}
  }
  