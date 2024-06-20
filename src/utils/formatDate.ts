import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

/**
 * Method for formatting the date in the dd.MM.yyyy pattern
 * @param date 
 * @returns 
 */
export function formatDateSeparetedByDots(date: Date) {
    return format(date, 'dd.MM.yyyy', { locale: ptBR });
}

/**
 * Formats a date into the "HH:mm" time format.
 * 
 * @param {Date} date - The date to be formatted.
 * @returns {string} The formatted time as a string in the "HH:mm" format.
 */
export function formatTime(date: Date): string {
  return format(date, 'HH:mm');
}