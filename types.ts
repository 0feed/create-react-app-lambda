
export enum TimestampFormatKey {
  ShortTime = 't',
  LongTime = 'T',
  ShortDate = 'd',
  LongDate = 'D',
  ShortDateTime = 'f',
  LongDateTime = 'F',
  Relative = 'R',
}

export interface TimestampFormat {
  key: TimestampFormatKey;
  description: string;
  example: string;
}
