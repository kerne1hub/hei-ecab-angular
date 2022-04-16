import { NgrxValueConverter, NgrxValueConverters } from 'ngrx-forms';
import { DateTime } from 'luxon';

export const dateValueConverter: NgrxValueConverter<Date | null, string | null> = {
  convertViewToStateValue: (value: Date): string => {
    if (value === null) {
      return null;
    }

    return DateTime
      .fromISO(NgrxValueConverters.dateToISOString.convertViewToStateValue(value), { zone: 'utc' })
      .toLocal()
      .toISO();
  },
  convertStateToViewValue: NgrxValueConverters.dateToISOString.convertStateToViewValue
};
