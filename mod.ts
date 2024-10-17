const MILLISECONDS_IN_MINUTE = 60000;
const MINUTES_IN_HOUR = 60;

type Thing =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

interface Options {
  offsetHours: number;
  when: Date;
}

export function isit(
  something: Thing,
  options: Options = { offsetHours: 10, when: new Date() },
): boolean {
  enum Days {
    Sunday = 0,
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6,
  }

  const offsetMinutes = options.offsetHours * MINUTES_IN_HOUR;
  const localOffset = options.when.getTimezoneOffset();
  const offsetTime = new Date(
    options.when.getTime() +
      (offsetMinutes + localOffset) * MILLISECONDS_IN_MINUTE,
  );

  return offsetTime.getDay() === Days[something];
}
