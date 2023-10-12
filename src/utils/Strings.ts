// This file contains string utility functions

export const toTitleCase = (str: string): string => {
  return str.toLowerCase().replace(/(?:^|\s)\w/g, (match) => {
    return match.toUpperCase();
  });
};
