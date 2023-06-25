interface Field {
  name: string;
  error: string;
}

export default class ValidationError extends Error {
  public readonly message: string;

  public readonly fields: Field[];

  constructor(message: string, fields: Field[]) {
    super();
    this.message = message;
    this.fields = fields;
  }
}