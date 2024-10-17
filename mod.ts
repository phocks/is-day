export function isMonday(offsetHours: number = 10): boolean {
  const MILLISECONDS_IN_MINUTE = 60000;
  const MINUTES_IN_HOUR = 60;

  const now = new Date();
  const offsetMinutes = offsetHours * MINUTES_IN_HOUR;
  const localOffset = now.getTimezoneOffset();
  const offsetTime = new Date(
    now.getTime() + (offsetMinutes + localOffset) * MILLISECONDS_IN_MINUTE,
  );

  return offsetTime.getDay() === 1;
}
