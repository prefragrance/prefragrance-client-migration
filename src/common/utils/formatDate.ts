import { format } from "date-fns";

export const defaultDate = new Date();

export enum DateFormatTypes {
  FullDate = "yyyy.MM.dd HH:mm:ss",
  DateOnly = "yyyy.MM.dd",
}

export function formatDate(
  date: Date | string,
  dateFormat: DateFormatTypes = DateFormatTypes.FullDate
): string {
  return format(new Date(date), dateFormat);
}
