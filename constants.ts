
import { TimestampFormat, TimestampFormatKey } from './types';

export const TIMESTAMP_FORMATS: TimestampFormat[] = [
  {
    key: TimestampFormatKey.ShortTime,
    description: "Short Time",
    example: "10:20 AM",
  },
  {
    key: TimestampFormatKey.LongTime,
    description: "Long Time",
    example: "10:20:30 AM",
  },
  {
    key: TimestampFormatKey.ShortDate,
    description: "Short Date",
    example: "20/04/2021",
  },
  {
    key: TimestampFormatKey.LongDate,
    description: "Long Date",
    example: "20 April 2021",
  },
  {
    key: TimestampFormatKey.ShortDateTime,
    description: "Short Date/Time",
    example: "20 April 2021 10:20 AM",
  },
  {
    key: TimestampFormatKey.LongDateTime,
    description: "Long Date/Time",
    example: "Tuesday, 20 April 2021 10:20 AM",
  },
  {
    key: TimestampFormatKey.Relative,
    description: "Relative Time",
    example: "2 months ago",
  },
];
