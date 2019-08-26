import { format } from 'date-fns';

export const FormatDate = (date) => format(new Date(date), 'dd MMMM, yyyy hh:mm');
