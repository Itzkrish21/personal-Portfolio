const data = [
  { Year: 1996, Month: 'January', D7DV: 33.2, D7DW: 45.4, D7DU: 43.3, D7DT: 62.5 },
  { Year: 1996, Month: 'February', D7DV: 32.9, D7DW: 45.4, D7DU: 43.3, D7DT: 62.5 },
  { Year: 1996, Month: 'March', D7DV: 33.9, D7DW: 45.4, D7DU: 43.3, D7DT: 62.5 },
  { Year: 1996, Month: 'April', D7DV: 34.9, D7DW: 45.4, D7DU: 43.3, D7DT: 62.5 },
  { Year: 1996, Month: 'May', D7DV: 32.8, D7DW: 44.0, D7DU: 43.3, D7DT: 62.6 },
  { Year: 1996, Month: 'June', D7DV: 32.1, D7DW: 43.8, D7DU: 43.3, D7DT: 62.9 },
  { Year: 1996, Month: 'July', D7DV: 32.6, D7DW: 43.9, D7DU: 43.3, D7DT: 63.0 },
  { Year: 1996, Month: 'August', D7DV: 32.9, D7DW: 43.9, D7DU: 43.3, D7DT: 62.7 },
  { Year: 1996, Month: 'September', D7DV: 37.4, D7DW: 44.8, D7DU: 43.3, D7DT: 62.4 },
  { Year: 1996, Month: 'October', D7DV: 40.7, D7DW: 45.7, D7DU: 43.3, D7DT: 61.7 },
  { Year: 1996, Month: 'November', D7DV: 36.5, D7DW: 46.1, D7DU: 43.3, D7DT: 61.3 },
  { Year: 1996, Month: 'December', D7DV: 38.3, D7DW: 46.1, D7DU: 43.3, D7DT: 61.1 },
  { Year: 1997, Month: 'January', D7DV: 38.5, D7DW: 46.2, D7DU: 43.3, D7DT: 60.4 },
  { Year: 1997, Month: 'February', D7DV: 36.1, D7DW: 46.2, D7DU: 43.3, D7DT: 60.7 },
  { Year: 1997, Month: 'March', D7DV: 33.0, D7DW: 46.1, D7DU: 43.3, D7DT: 60.9 },
  { Year: 1997, Month: 'April', D7DV: 31.3, D7DW: 46.0, D7DU: 43.1, D7DT: 60.8 },
  { Year: 1997, Month: 'May', D7DV: 31.4, D7DW: 44.7, D7DU: 43.1, D7DT: 60.4 },
  { Year: 1997, Month: 'June', D7DV: 30.6, D7DW: 44.5, D7DU: 43.1, D7DT: 60.1 },
  { Year: 1997, Month: 'July', D7DV: 29.3, D7DW: 44.6, D7DU: 43.1, D7DT: 59.7 },
  { Year: 1997, Month: 'August', D7DV: 30.5, D7DW: 44.4, D7DU: 43.1, D7DT: 59.5 },
  { Year: 1997, Month: 'September', D7DV: 29.8, D7DW: 44.3, D7DU: 42.1, D7DT: 57.7 },
  { Year: 1997, Month: 'October', D7DV: 31.3, D7DW: 45.9, D7DU: 42.1, D7DT: 57.6 },
  { Year: 1997, Month: 'November', D7DV: 31.2, D7DW: 45.9, D7DU: 42.1, D7DT: 57.1 },
  { Year: 1997, Month: 'December', D7DV: 30.3, D7DW: 45.9, D7DU: 42.1, D7DT: 56.7 },
  { Year: 1998, Month: 'January', D7DV: 28.1, D7DW: 45.9, D7DU: 41.6, D7DT: 56.6 },
  { Year: 1998, Month: 'February', D7DV: 26.6, D7DW: 45.9, D7DU: 41.6, D7DT: 57.1 },
  { Year: 1998, Month: 'March', D7DV: 25.0, D7DW: 45.9, D7DU: 41.4, D7DT: 57.6 },
  { Year: 1998, Month: 'April', D7DV: 25.2, D7DW: 45.9, D7DU: 41.4, D7DT: 57.6 },
  { Year: 1998, Month: 'May', D7DV: 25.3, D7DW: 44.8, D7DU: 41.4, D7DT: 57.0 },
  { Year: 1998, Month: 'June', D7DV: 24.5, D7DW: 44.9, D7DU: 41.3, D7DT: 56.5 },
  { Year: 1998, Month: 'July', D7DV: 23.7, D7DW: 45.1, D7DU: 41.4, D7DT: 56.1 },
  { Year: 1998, Month: 'August', D7DV: 23.2, D7DW: 45.1, D7DU: 41.4, D7DT: 56.1 },
  { Year: 1998, Month: 'September', D7DV: 24.0, D7DW: 45.4, D7DU: 41.4, D7DT: 56.1 },
  { Year: 1998, Month: 'October', D7DV: 24.9, D7DW: 46.9, D7DU: 41.4, D7DT: 56.1 },
  { Year: 1998, Month: 'November', D7DV: 24.0, D7DW: 47.0, D7DU: 41.4, D7DT: 56.1 },
  { Year: 1998, Month: 'December', D7DV: 22.3, D7DW: 47.0, D7DU: 41.4, D7DT: 56.1 },
  { Year: 1999, Month: 'January', D7DV: 22.5, D7DW: 47.0, D7DU: 41.6, D7DT: 56.1 },
  { Year: 1999, Month: 'February', D7DV: 22.2, D7DW: 47.0, D7DU: 41.6, D7DT: 56.1 },
  { Year: 1999, Month: 'March', D7DV: 23.3, D7DW: 47.0, D7DU: 41.7, D7DT: 56.1 },
  { Year: 1999, Month: 'April', D7DV: 25.8, D7DW: 47.1, D7DU: 41.3, D7DT: 56.1 },
  { Year: 1999, Month: 'May', D7DV: 25.5, D7DW: 46.0, D7DU: 41.3, D7DT: 56.0 },
  { Year: 1999, Month: 'June', D7DV: 25.5, D7DW: 45.9, D7DU: 41.3, D7DT: 56.0 },
  { Year: 1999, Month: 'July', D7DV: 28.8, D7DW: 45.9, D7DU: 41.3, D7DT: 55.8 },
  { Year: 1999, Month: 'August', D7DV: 29.4, D7DW: 45.9, D7DU: 41.3, D7DT: 55.8 },
  { Year: 1999, Month: 'September', D7DV: 31.4, D7DW: 46.3, D7DU: 41.3, D7DT: 55.8 },
  { Year: 1999, Month: 'October', D7DV: 31.4, D7DW: 47.4, D7DU: 41.3, D7DT: 55.8 },
  { Year: 1999, Month: 'November', D7DV: 33.2, D7DW: 47.6, D7DU: 41.3, D7DT: 55.8 },
  { Year: 1999, Month: 'December', D7DV: 38.1, D7DW: 47.7, D7DU: 41.3, D7DT: 55.8 },
  { Year: 2000, Month: 'January', D7DV: 37.3, D7DW: 47.8, D7DU: 41.3, D7DT: 55.8 },
  { Year: 2000, Month: 'February', D7DV: 37.5, D7DW: 47.7, D7DU: 41.3, D7DT: 55.8 },
  { Year: 2000, Month: 'March', D7DV: 38.8, D7DW: 47.8, D7DU: 41.3, D7DT: 55.7 },
  { Year: 2000, Month: 'April', D7DV: 37.7, D7DW: 47.7, D7DU: 40.2, D7DT: 55.6 },
  { Year: 2000, Month: 'May', D7DV: 36.8, D7DW: 46.5, D7DU: 40.2, D7DT: 55.1 },
  { Year: 2000, Month: 'June', D7DV: 37.9, D7DW: 46.2, D7DU: 40.2, D7DT: 54.5 },
  { Year: 2000, Month: 'July', D7DV: 40.9, D7DW: 46.1, D7DU: 40.2, D7DT: 54.2 },
  { Year: 2000, Month: 'August', D7DV: 41.2, D7DW: 46.2, D7DU: 40.2, D7DT: 54.2 },
  { Year: 2000, Month: 'September', D7DV: 52.2, D7DW: 47.1, D7DU: 40.2, D7DT: 54.2 },
  { Year: 2000, Month: 'October', D7DV: 55.2, D7DW: 48.6, D7DU: 40.4, D7DT: 54.2 },
  { Year: 2000, Month: 'November', D7DV: 51.4, D7DW: 49.0, D7DU: 40.4, D7DT: 54.2 },
  { Year: 2000, Month: 'December', D7DV: 48.8, D7DW: 49.1, D7DU: 40.4, D7DT: 54.2 },
  { Year: 2001, Month: 'January', D7DV: 42.4, D7DW: 49.3, D7DU: 40.4, D7DT: 54.2 },
  { Year: 2001, Month: 'February', D7DV: 43.0, D7DW: 49.1, D7DU: 40.5, D7DT: 54.2 },
  { Year: 2001, Month: 'March', D7DV: 41.6, D7DW: 49.1, D7DU: 40.5, D7DT: 54.2 },
  { Year: 2001, Month: 'April', D7DV: 40.3, D7DW: 49.1, D7DU: 42.1, D7DT: 54.2 },
  { Year: 2001, Month: 'May', D7DV: 42.1, D7DW: 48.6, D7DU: 42.2, D7DT: 54.2 },
  { Year: 2001, Month: 'June', D7DV: 42.2, D7DW: 48.4, D7DU: 42.2, D7DT: 54.3 },
  { Year: 2001, Month: 'July', D7DV: 40.4, D7DW: 48.1, D7DU: 42.2, D7DT: 54.3 },
  { Year: 2001, Month: 'August', D7DV: 39.2, D7DW: 48.2, D7DU: 42.2, D7DT: 54.3 },
  { Year: 2001, Month: 'September', D7DV: 46.6, D7DW: 50.6, D7DU: 42.2, D7DT: 54.4 },
  { Year: 2001, Month: 'October', D7DV: 38.5, D7DW: 51.9, D7DU: 42.2, D7DT: 54.4 },
  { Year: 2001, Month: 'November', D7DV: 34.9, D7DW: 52.2, D7DU: 42.2, D7DT: 54.4 },
  { Year: 2001, Month: 'December', D7DV: 32.8, D7DW: 52.3, D7DU: 42.2, D7DT: 54.4 },
  { Year: 2002, Month: 'January', D7DV: 34.3, D7DW: 52.3, D7DU: 44.1, D7DT: 54.4 },
  { Year: 2002, Month: 'February', D7DV: 33.2, D7DW: 52.3, D7DU: 44.1, D7DT: 54.4 },
  { Year: 2002, Month: 'March', D7DV: 35.2, D7DW: 52.4, D7DU: 44.2, D7DT: 54.4 },
  { Year: 2002, Month: 'April', D7DV: 36.5, D7DW: 52.4, D7DU: 44.3, D7DT: 54.4 },
  { Year: 2002, Month: 'May', D7DV: 36.7, D7DW: 51.6, D7DU: 44.3, D7DT: 54.5 },
  { Year: 2002, Month: 'June', D7DV: 35.7, D7DW: 51.4, D7DU: 44.5, D7DT: 54.5 },
  { Year: 2002, Month: 'July', D7DV: 35.2, D7DW: 51.4, D7DU: 44.5, D7DT: 54.5 },
  { Year: 2002, Month: 'August', D7DV: 34.8, D7DW: 51.3, D7DU: 44.5, D7DT: 54.5 },
  { Year: 2002, Month: 'September', D7DV: 39.3, D7DW: 52.2, D7DU: 44.5, D7DT: 54.5 },
  { Year: 2002, Month: 'October', D7DV: 39.7, D7DW: 53.2, D7DU: 44.5, D7DT: 54.5 },
  { Year: 2002, Month: 'November', D7DV: 36.1, D7DW: 53.7, D7DU: 44.5, D7DT: 54.5 },
  { Year: 2002, Month: 'December', D7DV: 40.0, D7DW: 53.6, D7DU: 44.6, D7DT: 54.5 },
  { Year: 2003, Month: 'January', D7DV: 41.9, D7DW: 53.5, D7DU: 44.6, D7DT: 54.7 },
  { Year: 2003, Month: 'February', D7DV: 49.2, D7DW: 53.5, D7DU: 44.6, D7DT: 54.7 },
  { Year: 2003, Month: 'March', D7DV: 50.7, D7DW: 53.6, D7DU: 44.6, D7DT: 54.7 },
  { Year: 2003, Month: 'April', D7DV: 37.9, D7DW: 53.2, D7DU: 44.7, D7DT: 54.7 },
  { Year: 2003, Month: 'May', D7DV: 35.7, D7DW: 52.7, D7DU: 45.0, D7DT: 54.8 },
  { Year: 2003, Month: 'June', D7DV: 35.0, D7DW: 52.6, D7DU: 45.3, D7DT: 54.9 },
  { Year: 2003, Month: 'July', D7DV: 36.2, D7DW: 52.6, D7DU: 45.4, D7DT: 55.1 },
  { Year: 2003, Month: 'August', D7DV: 37.7, D7DW: 52.6, D7DU: 45.5, D7DT: 55.3 },
  { Year: 2003, Month: 'September', D7DV: 37.2, D7DW: 53.3, D7DU: 45.5, D7DT: 55.4 },
  { Year: 2003, Month: 'October', D7DV: 40.4, D7DW: 54.4, D7DU: 45.6, D7DT: 55.4 },
  { Year: 2003, Month: 'November', D7DV: 40.2, D7DW: 54.5, D7DU: 45.8, D7DT: 55.6 },
  { Year: 2003, Month: 'December', D7DV: 42.1, D7DW: 54.5, D7DU: 45.9, D7DT: 55.7 },
  { Year: 2004, Month: 'January', D7DV: 41.3, D7DW: 54.7, D7DU: 46.2, D7DT: 56.0 },
  { Year: 2004, Month: 'February', D7DV: 40.2, D7DW: 54.9, D7DU: 46.7, D7DT: 56.3 },
  { Year: 2004, Month: 'March', D7DV: 40.7, D7DW: 54.8, D7DU: 47.4, D7DT: 57.0 },
  { Year: 2004, Month: 'April', D7DV: 44.2, D7DW: 54.8, D7DU: 47.8, D7DT: 57.6 },
  { Year: 2004, Month: 'May', D7DV: 47.7, D7DW: 54.4, D7DU: 47.9, D7DT: 57.9 },
  { Year: 2004, Month: 'June', D7DV: 44.9, D7DW: 54.3, D7DU: 48.0, D7DT: 58.3 },
  { Year: 2004, Month: 'July', D7DV: 45.3, D7DW: 54.6, D7DU: 48.2, D7DT: 58.4 },
  { Year: 2004, Month: 'August', D7DV: 49.7, D7DW: 55.5, D7DU: 48.3, D7DT: 58.5 },
  { Year: 2004, Month: 'September', D7DV: 52.2, D7DW: 56.9, D7DU: 48.4, D7DT: 58.8 },
  { Year: 2004, Month: 'October', D7DV: 59.2, D7DW: 59.1, D7DU: 49.1, D7DT: 59.4 },
  { Year: 2004, Month: 'November', D7DV: 55.0, D7DW: 59.8, D7DU: 50.7, D7DT: 60.4 },
  { Year: 2004, Month: 'December', D7DV: 51.0, D7DW: 60.4, D7DU: 52.4, D7DT: 61.6 },
  { Year: 2005, Month: 'January', D7DV: 51.8, D7DW: 60.6, D7DU: 53.3, D7DT: 62.5 },
  { Year: 2005, Month: 'February', D7DV: 51.8, D7DW: 61.1, D7DU: 53.6, D7DT: 63.0 },
  { Year: 2005, Month: 'March', D7DV: 59.2, D7DW: 61.2, D7DU: 53.7, D7DT: 63.4 },
  { Year: 2005, Month: 'April', D7DV: 61.3, D7DW: 61.2, D7DU: 54.0, D7DT: 63.6 },
  { Year: 2005, Month: 'May', D7DV: 57.9, D7DW: 60.6, D7DU: 54.1, D7DT: 63.8 },
  { Year: 2005, Month: 'June', D7DV: 63.7, D7DW: 60.4, D7DU: 54.4, D7DT: 63.9 },
  { Year: 2005, Month: 'July', D7DV: 68.1, D7DW: 60.3, D7DU: 54.4, D7DT: 63.9 },
  { Year: 2005, Month: 'August', D7DV: 72.3, D7DW: 61.1, D7DU: 54.5, D7DT: 64.0 },
  { Year: 2005, Month: 'September', D7DV: 73.8, D7DW: 61.7, D7DU: 55.1, D7DT: 64.8 },
  { Year: 2005, Month: 'October', D7DV: 76.8, D7DW: 64.4, D7DU: 57.3, D7DT: 66.2 },
  { Year: 2005, Month: 'November', D7DV: 68.4, D7DW: 65.0, D7DU: 59.4, D7DT: 67.6 },
  { Year: 2005, Month: 'December', D7DV: 71.0, D7DW: 65.2, D7DU: 60.6, D7DT: 68.2 },
  { Year: 2006, Month: 'January', D7DV: 72.3, D7DW: 65.3, D7DU: 61.1, D7DT: 68.9 },
  { Year: 2006, Month: 'February', D7DV: 73.7, D7DW: 65.3, D7DU: 61.3, D7DT: 69.7 },
  { Year: 2006, Month: 'March', D7DV: 74.5, D7DW: 65.4, D7DU: 63.3, D7DT: 71.6 },
  { Year: 2006, Month: 'April', D7DV: 76.6, D7DW: 65.5, D7DU: 67.3, D7DT: 74.6 },
  { Year: 2006, Month: 'May', D7DV: 77.1, D7DW: 66.2, D7DU: 71.4, D7DT: 77.7 },
  { Year: 2006, Month: 'June', D7DV: 77.0, D7DW: 64.9, D7DU: 73.4, D7DT: 79.6 },
  { Year: 2006, Month: 'July', D7DV: 79.5, D7DW: 64.8, D7DU: 74.1, D7DT: 80.4 },
  { Year: 2006, Month: 'August', D7DV: 77.8, D7DW: 65.4, D7DU: 74.9, D7DT: 81.0 },
  { Year: 2006, Month: 'September', D7DV: 73.7, D7DW: 66.2, D7DU: 76.8, D7DT: 82.1 },
  { Year: 2006, Month: 'October', D7DV: 67.6, D7DW: 69.6, D7DU: 80.5, D7DT: 84.3 },
  { Year: 2006, Month: 'November', D7DV: 64.5, D7DW: 70.4, D7DU: 83.0, D7DT: 85.9 },
  { Year: 2006, Month: 'December', D7DV: 67.6, D7DW: 70.4, D7DU: 84.6, D7DT: 86.9 },
  { Year: 2007, Month: 'January', D7DV: 62.9, D7DW: 70.5, D7DU: 84.8, D7DT: 87.3 },
  { Year: 2007, Month: 'February', D7DV: 64.3, D7DW: 70.7, D7DU: 85.1, D7DT: 87.6 },
  { Year: 2007, Month: 'March', D7DV: 66.6, D7DW: 70.7, D7DU: 84.4, D7DT: 87.6 },
  { Year: 2007, Month: 'April', D7DV: 69.3, D7DW: 70.7, D7DU: 82.1, D7DT: 86.8 },
  { Year: 2007, Month: 'May', D7DV: 69.0, D7DW: 70.4, D7DU: 79.4, D7DT: 85.8 },
  { Year: 2007, Month: 'June', D7DV: 70.7, D7DW: 70.0, D7DU: 77.2, D7DT: 84.6 },
  { Year: 2007, Month: 'July', D7DV: 72.6, D7DW: 69.9, D7DU: 75.5, D7DT: 83.6 },
  { Year: 2007, Month: 'August', D7DV: 71.1, D7DW: 70.0, D7DU: 74.4, D7DT: 83.1 },
  { Year: 2007, Month: 'September', D7DV: 75.5, D7DW: 70.8, D7DU: 73.9, D7DT: 83.1 },
  { Year: 2007, Month: 'October', D7DV: 78.3, D7DW: 72.9, D7DU: 73.6, D7DT: 83.0 },
  { Year: 2007, Month: 'November', D7DV: 88.8, D7DW: 74.2, D7DU: 73.6, D7DT: 83.0 },
  { Year: 2007, Month: 'December', D7DV: 89.3, D7DW: 75.7, D7DU: 73.7, D7DT: 83.0 },
  { Year: 2008, Month: 'January', D7DV: 92.7, D7DW: 76.6, D7DU: 74.1, D7DT: 83.4 },
  { Year: 2008, Month: 'February', D7DV: 92.9, D7DW: 77.0, D7DU: 83.4, D7DT: 92.2 },
  { Year: 2008, Month: 'March', D7DV: 106.1, D7DW: 77.3, D7DU: 83.4, D7DT: 92.2 },
  { Year: 2008, Month: 'April', D7DV: 117.3, D7DW: 77.5, D7DU: 85.1, D7DT: 94.1 },
  { Year: 2008, Month: 'May', D7DV: 127.2, D7DW: 79.1, D7DU: 85.1, D7DT: 94.1 },
  { Year: 2008, Month: 'June', D7DV: 132.9, D7DW: 80.7, D7DU: 85.1, D7DT: 94.1 },
  { Year: 2008, Month: 'July', D7DV: 139.6, D7DW: 81.5, D7DU: 85.2, D7DT: 94.1 },
  { Year: 2008, Month: 'August', D7DV: 118.3, D7DW: 82.4, D7DU: 95.1, D7DT: 98.1 },
  { Year: 2008, Month: 'September', D7DV: 115.3, D7DW: 89.8, D7DU: 110.8, D7DT: 108.2 },
  { Year: 2008, Month: 'October', D7DV: 98.5, D7DW: 98.2, D7DU: 111.1, D7DT: 109.0 },
  { Year: 2008, Month: 'November', D7DV: 90.5, D7DW: 99.0, D7DU: 110.9, D7DT: 109.0 },
  { Year: 2008, Month: 'December', D7DV: 80.5, D7DW: 99.9, D7DU: 110.9, D7DT: 109.0 },
  { Year: 2009, Month: 'January', D7DV: 79.3, D7DW: 101.0, D7DU: 110.9, D7DT: 108.7 },
  { Year: 2009, Month: 'February', D7DV: 74.9, D7DW: 101.1, D7DU: 110.9, D7DT: 108.7 },
  { Year: 2009, Month: 'March', D7DV: 67.5, D7DW: 101.0, D7DU: 106.2, D7DT: 108.2 },
  { Year: 2009, Month: 'April', D7DV: 71.5, D7DW: 101.0, D7DU: 105.1, D7DT: 102.7 },
  { Year: 2009, Month: 'May', D7DV: 71.6, D7DW: 99.3, D7DU: 105.1, D7DT: 100.5 },
  { Year: 2009, Month: 'June', D7DV: 79.2, D7DW: 98.5, D7DU: 105.1, D7DT: 100.5 },
  { Year: 2009, Month: 'July', D7DV: 70.9, D7DW: 97.7, D7DU: 104.6, D7DT: 100.5 },
  { Year: 2009, Month: 'August', D7DV: 79.0, D7DW: 98.3, D7DU: 104.6, D7DT: 100.5 },
  { Year: 2009, Month: 'September', D7DV: 77.1, D7DW: 98.5, D7DU: 104.6, D7DT: 100.5 },
  { Year: 2009, Month: 'October', D7DV: 82.0, D7DW: 100.6, D7DU: 104.5, D7DT: 100.1 },
  { Year: 2009, Month: 'November', D7DV: 84.3, D7DW: 101.4, D7DU: 104.5, D7DT: 100.1 },
  { Year: 2009, Month: 'December', D7DV: 86.2, D7DW: 101.5, D7DU: 104.5, D7DT: 100.1 },
  { Year: 2010, Month: 'January', D7DV: 103.6, D7DW: 101.4, D7DU: 104.6, D7DT: 100.1 },
  { Year: 2010, Month: 'February', D7DV: 90.6, D7DW: 101.5, D7DU: 101.6, D7DT: 100.1 },
  { Year: 2010, Month: 'March', D7DV: 97.0, D7DW: 101.5, D7DU: 101.6, D7DT: 100.1 },
  { Year: 2010, Month: 'April', D7DV: 100.1, D7DW: 101.5, D7DU: 98.7, D7DT: 99.9 },
  { Year: 2010, Month: 'May', D7DV: 100.1, D7DW: 99.1, D7DU: 98.7, D7DT: 99.9 },
  { Year: 2010, Month: 'June', D7DV: 96.8, D7DW: 97.8, D7DU: 98.7, D7DT: 99.9 },
  { Year: 2010, Month: 'July', D7DV: 95.0, D7DW: 96.9, D7DU: 98.7, D7DT: 99.9 },
  { Year: 2010, Month: 'August', D7DV: 94.8, D7DW: 97.6, D7DU: 98.7, D7DT: 99.9 },
  { Year: 2010, Month: 'September', D7DV: 94.5, D7DW: 98.1, D7DU: 98.7, D7DT: 99.9 },
  { Year: 2010, Month: 'October', D7DV: 98.2, D7DW: 101.0, D7DU: 98.7, D7DT: 99.6 },
  { Year: 2010, Month: 'November', D7DV: 101.6, D7DW: 101.6, D7DU: 98.7, D7DT: 99.6 },
  { Year: 2010, Month: 'December', D7DV: 128.1, D7DW: 102.2, D7DU: 103.2, D7DT: 100.9 },
  { Year: 2011, Month: 'January', D7DV: 125.5, D7DW: 103.1, D7DU: 104.1, D7DT: 101.7 },
  { Year: 2011, Month: 'February', D7DV: 119.8, D7DW: 104.0, D7DU: 104.5, D7DT: 103.2 },
  { Year: 2011, Month: 'March', D7DV: 130.4, D7DW: 103.7, D7DU: 105.0, D7DT: 104.0 },
  { Year: 2011, Month: 'April', D7DV: 135.7, D7DW: 104.1, D7DU: 105.0, D7DT: 104.0 },
  { Year: 2011, Month: 'May', D7DV: 125.4, D7DW: 102.7, D7DU: 105.0, D7DT: 104.0 },
  { Year: 2011, Month: 'June', D7DV: 128.7, D7DW: 102.5, D7DU: 105.0, D7DT: 104.0 },
  { Year: 2011, Month: 'July', D7DV: 124.8, D7DW: 102.7, D7DU: 105.0, D7DT: 104.0 },
  { Year: 2011, Month: 'August', D7DV: 120.1, D7DW: 102.8, D7DU: 106.9, D7DT: 105.0 },
  { Year: 2011, Month: 'September', D7DV: 123.8, D7DW: 103.4, D7DU: 120.7, D7DT: 112.8 },
  { Year: 2011, Month: 'October', D7DV: 123.2, D7DW: 109.1, D7DU: 122.4, D7DT: 114.5 },
  { Year: 2011, Month: 'November', D7DV: 130.9, D7DW: 109.9, D7DU: 123.6, D7DT: 115.1 },
  { Year: 2011, Month: 'December', D7DV: 131.4, D7DW: 110.1, D7DU: 123.6, D7DT: 115.1 },
  { Year: 2012, Month: 'January', D7DV: 131.6, D7DW: 110.2, D7DU: 123.6, D7DT: 115.1 },
  { Year: 2012, Month: 'February', D7DV: 134.1, D7DW: 109.5, D7DU: 122.4, D7DT: 113.7 },
  { Year: 2012, Month: 'March', D7DV: 136.4, D7DW: 110.0, D7DU: 121.9, D7DT: 112.4 },
  { Year: 2012, Month: 'April', D7DV: 134.8, D7DW: 110.0, D7DU: 121.2, D7DT: 112.4 },
  { Year: 2012, Month: 'May', D7DV: 127.3, D7DW: 107.7, D7DU: 121.2, D7DT: 112.3 },
  { Year: 2012, Month: 'June', D7DV: 117.4, D7DW: 106.8, D7DU: 121.2, D7DT: 112.3 },
  { Year: 2012, Month: 'July', D7DV: 120.4, D7DW: 107.2, D7DU: 121.2, D7DT: 112.3 },
  { Year: 2012, Month: 'August', D7DV: 128.9, D7DW: 107.0, D7DU: 121.2, D7DT: 112.3 },
  { Year: 2012, Month: 'September', D7DV: 132.4, D7DW: 107.5, D7DU: 121.2, D7DT: 112.3 },
  { Year: 2012, Month: 'October', D7DV: 133.9, D7DW: 108.4, D7DU: 121.2, D7DT: 111.8 },
  { Year: 2012, Month: 'November', D7DV: 130.7, D7DW: 108.9, D7DU: 123.5, D7DT: 113.8 },
  { Year: 2012, Month: 'December', D7DV: 137.5, D7DW: 109.4, D7DU: 130.1, D7DT: 119.6 },
  { Year: 2013, Month: 'January', D7DV: 134.7, D7DW: 109.5, D7DU: 129.9, D7DT: 119.6 },
  { Year: 2013, Month: 'February', D7DV: 143.2, D7DW: 109.8, D7DU: 131.3, D7DT: 121.0 },
  { Year: 2013, Month: 'March', D7DV: 141.5, D7DW: 109.2, D7DU: 131.3, D7DT: 121.0 },
  { Year: 2013, Month: 'April', D7DV: 133.9, D7DW: 109.2, D7DU: 131.3, D7DT: 121.0 },
  { Year: 2013, Month: 'May', D7DV: 125.0, D7DW: 109.4, D7DU: 131.3, D7DT: 121.0 },
  { Year: 2013, Month: 'June', D7DV: 124.7, D7DW: 109.3, D7DU: 131.3, D7DT: 121.0 },
  { Year: 2013, Month: 'July', D7DV: 128.0, D7DW: 109.6, D7DU: 131.3, D7DT: 121.4 },
  { Year: 2013, Month: 'August', D7DV: 128.0, D7DW: 109.5, D7DU: 131.3, D7DT: 121.4 },
  { Year: 2013, Month: 'September', D7DV: 131.1, D7DW: 110.1, D7DU: 131.3, D7DT: 121.4 },
  { Year: 2013, Month: 'October', D7DV: 127.1, D7DW: 111.4, D7DU: 131.3, D7DT: 121.4 },
  { Year: 2013, Month: 'November', D7DV: 124.7, D7DW: 112.4, D7DU: 131.3, D7DT: 121.4 },
  { Year: 2013, Month: 'December', D7DV: 128.4, D7DW: 112.6, D7DU: 140.1, D7DT: 129.3 },
  { Year: 2014, Month: 'January', D7DV: 125.1, D7DW: 113.3, D7DU: 138.8, D7DT: 129.1 },
  { Year: 2014, Month: 'February', D7DV: 125.3, D7DW: 113.3, D7DU: 139.1, D7DT: 129.3 },
  { Year: 2014, Month: 'March', D7DV: 121.7, D7DW: 113.2, D7DU: 138.7, D7DT: 129.1 },
  { Year: 2014, Month: 'April', D7DV: 119.6, D7DW: 113.4, D7DU: 138.0, D7DT: 128.3 },
  { Year: 2014, Month: 'May', D7DV: 118.3, D7DW: 112.5, D7DU: 138.0, D7DT: 128.3 },
  { Year: 2014, Month: 'June', D7DV: 117.5, D7DW: 112.3, D7DU: 138.0, D7DT: 128.3 },
  { Year: 2014, Month: 'July', D7DV: 116.4, D7DW: 112.1, D7DU: 138.0, D7DT: 128.3 },
  { Year: 2014, Month: 'August', D7DV: 116.7, D7DW: 111.9, D7DU: 138.0, D7DT: 128.3 },
  { Year: 2014, Month: 'September', D7DV: 115.0, D7DW: 112.5, D7DU: 138.0, D7DT: 128.3 },
  { Year: 2014, Month: 'October', D7DV: 109.5, D7DW: 114.6, D7DU: 138.0, D7DT: 128.3 },
  { Year: 2014, Month: 'November', D7DV: 108.1, D7DW: 114.8, D7DU: 138.0, D7DT: 128.3 },
  { Year: 2014, Month: 'December', D7DV: 99.3, D7DW: 114.8, D7DU: 138.0, D7DT: 128.3 },
  { Year: 2015, Month: 'January', D7DV: 86.7, D7DW: 114.6, D7DU: 137.3, D7DT: 128.3 },
  { Year: 2015, Month: 'February', D7DV: 91.0, D7DW: 114.6, D7DU: 136.4, D7DT: 128.3 },
  { Year: 2015, Month: 'March', D7DV: 88.3, D7DW: 114.8, D7DU: 132.8, D7DT: 128.3 },
  { Year: 2015, Month: 'April', D7DV: 88.5, D7DW: 114.9, D7DU: 132.7, D7DT: 128.0 },
  { Year: 2015, Month: 'May', D7DV: 89.8, D7DW: 112.5, D7DU: 131.9, D7DT: 128.0 },
  { Year: 2015, Month: 'June', D7DV: 87.4, D7DW: 112.1, D7DU: 131.9, D7DT: 127.9 },
  { Year: 2015, Month: 'July', D7DV: 83.7, D7DW: 112.0, D7DU: 131.9, D7DT: 127.9 },
  { Year: 2015, Month: 'August', D7DV: 74.4, D7DW: 112.0, D7DU: 131.9, D7DT: 127.9 },
  { Year: 2015, Month: 'September', D7DV: 75.6, D7DW: 112.4, D7DU: 129.0, D7DT: 127.9 },
  { Year: 2015, Month: 'October', D7DV: 75.6, D7DW: 113.8, D7DU: 129.0, D7DT: 127.9 },
  { Year: 2015, Month: 'November', D7DV: 73.0, D7DW: 114.1, D7DU: 129.0, D7DT: 127.9 },
  { Year: 2015, Month: 'December', D7DV: 67.3, D7DW: 114.1, D7DU: 129.0, D7DT: 127.9 },
  { Year: 2016, Month: 'January', D7DV: 61.2, D7DW: 114.1, D7DU: 129.0, D7DT: 127.9 },
  { Year: 2016, Month: 'February', D7DV: 58.6, D7DW: 114.2, D7DU: 128.1, D7DT: 127.9 },
  { Year: 2016, Month: 'March', D7DV: 63.2, D7DW: 114.0, D7DU: 124.8, D7DT: 127.9 },
  { Year: 2016, Month: 'April', D7DV: 64.7, D7DW: 114.2, D7DU: 123.1, D7DT: 127.7 },
  { Year: 2016, Month: 'May', D7DV: 68.7, D7DW: 112.8, D7DU: 123.1, D7DT: 127.7 },
  { Year: 2016, Month: 'June', D7DV: 74.2, D7DW: 111.9, D7DU: 123.1, D7DT: 127.7 },
  { Year: 2016, Month: 'July', D7DV: 74.4, D7DW: 111.0, D7DU: 123.1, D7DT: 127.7 },
  { Year: 2016, Month: 'August', D7DV: 72.9, D7DW: 111.1, D7DU: 123.1, D7DT: 127.7 },
  { Year: 2016, Month: 'September', D7DV: 76.2, D7DW: 112.0, D7DU: 123.1, D7DT: 127.7 },
  { Year: 2016, Month: 'October', D7DV: 86.9, D7DW: 114.0, D7DU: 123.1, D7DT: 127.7 },
  { Year: 2016, Month: 'November', D7DV: 83.4, D7DW: 114.8, D7DU: 123.1, D7DT: 127.7 },
  { Year: 2016, Month: 'December', D7DV: 90.6, D7DW: 115.4, D7DU: 123.1, D7DT: 127.7 },
  { Year: 2017, Month: 'January', D7DV: 96.0, D7DW: 115.7, D7DU: 122.6, D7DT: 127.7 },
  { Year: 2017, Month: 'February', D7DV: 94.5, D7DW: 116.2, D7DU: 122.6, D7DT: 127.7 },
  { Year: 2017, Month: 'March', D7DV: 89.8, D7DW: 116.2, D7DU: 122.6, D7DT: 128.9 },
  { Year: 2017, Month: 'April', D7DV: 89.9, D7DW: 116.3, D7DU: 121.9, D7DT: 132.1 },
  { Year: 2017, Month: 'May', D7DV: 83.7, D7DW: 114.8, D7DU: 122.4, D7DT: 137.5 },
  { Year: 2017, Month: 'June', D7DV: 82.2, D7DW: 114.5, D7DU: 122.4, D7DT: 137.5 },
  { Year: 2017, Month: 'July', D7DV: 81.5, D7DW: 114.4, D7DU: 123.1, D7DT: 139.2 },
  { Year: 2017, Month: 'August', D7DV: 85.3, D7DW: 114.4, D7DU: 123.1, D7DT: 139.2 },
  { Year: 2017, Month: 'September', D7DV: 88.8, D7DW: 114.4, D7DU: 123.1, D7DT: 139.2 },
  { Year: 2017, Month: 'October', D7DV: 89.7, D7DW: 116.8, D7DU: 123.1, D7DT: 142.3 },
  { Year: 2017, Month: 'November', D7DV: 98.0, D7DW: 118.0, D7DU: 123.2, D7DT: 142.3 },
  { Year: 2017, Month: 'December', D7DV: 105.6, D7DW: 118.4, D7DU: 123.2, D7DT: 142.3 },
  { Year: 2018, Month: 'January', D7DV: 106.9, D7DW: 118.6, D7DU: 123.4, D7DT: 142.3 },
  { Year: 2018, Month: 'February', D7DV: 105.1, D7DW: 118.6, D7DU: 123.4, D7DT: 142.3 },
  { Year: 2018, Month: 'March', D7DV: 110.5, D7DW: 119.0, D7DU: 123.4, D7DT: 142.3 },
  { Year: 2018, Month: 'April', D7DV: 110.9, D7DW: 118.8, D7DU: 123.7, D7DT: 143.5 },
  { Year: 2018, Month: 'May', D7DV: 114.8, D7DW: 115.6, D7DU: 123.9, D7DT: 143.7 },
  { Year: 2018, Month: 'June', D7DV: 113.7, D7DW: 115.3, D7DU: 126.9, D7DT: 146.9 },
  { Year: 2018, Month: 'July', D7DV: 110.8, D7DW: 116.0, D7DU: 128.4, D7DT: 149.4 },
  { Year: 2018, Month: 'August', D7DV: 112.2, D7DW: 116.2, D7DU: 128.4, D7DT: 149.4 },
  { Year: 2018, Month: 'September', D7DV: 117.7, D7DW: 115.8, D7DU: 129.8, D7DT: 152.1 },
  { Year: 2018, Month: 'October', D7DV: 126.2, D7DW: 120.0, D7DU: 132.5, D7DT: 155.2 },
  { Year: 2018, Month: 'November', D7DV: 119.1, D7DW: 119.1, D7DU: 132.5, D7DT: 155.2 },
  { Year: 2018, Month: 'December', D7DV: 111.6, D7DW: 121.5, D7DU: 132.5, D7DT: 155.2 },

  { Year: 2019, Month: 'January', D7DV: 107.7, D7DW: 121.5, D7DU: 121.2, D7DT: 147.6 },
  { Year: 2019, Month: 'February', D7DV: 110.1, D7DW: 121.6, D7DU: 121.4, D7DT: 147.8 },
  { Year: 2019, Month: 'March', D7DV: 110.9, D7DW: 121.9, D7DU: 121.4, D7DT: 147.8 },
  { Year: 2019, Month: 'April', D7DV: 111.4, D7DW: 119.9, D7DU: 132.6, D7DT: 163.8 },
  { Year: 2019, Month: 'May', D7DV: 113.2, D7DW: 120.9, D7DU: 132.6, D7DT: 163.8 },
  { Year: 2019, Month: 'June', D7DV: 108.7, D7DW: 121.6, D7DU: 132.6, D7DT: 163.8 },
  { Year: 2019, Month: 'July', D7DV: 108.0, D7DW: 121.3, D7DU: 132.6, D7DT: 163.8 },
  { Year: 2019, Month: 'August', D7DV: 109.7, D7DW: 120.5, D7DU: 132.6, D7DT: 163.8 },
  { Year: 2019, Month: 'September', D7DV: 109.8, D7DW: 121.0, D7DU: 132.6, D7DT: 163.8 },
  { Year: 2019, Month: 'October', D7DV: 113.8, D7DW: 122.8, D7DU: 121.0, D7DT: 160.3 },
  { Year: 2019, Month: 'November', D7DV: 110.3, D7DW: 125.8, D7DU: 121.0, D7DT: 160.3 },
  { Year: 2019, Month: 'December', D7DV: 110.4, D7DW: 126.4, D7DU: 121.0, D7DT: 160.3 },
  { Year: 2020, Month: 'January', D7DV: 114.1, D7DW: 125.3, D7DU: 121.0, D7DT: 160.3 },
  { Year: 2020, Month: 'February', D7DV: 101.5, D7DW: 126.7, D7DU: 121.0, D7DT: 160.3 },
  { Year: 2020, Month: 'March', D7DV: 83.4, D7DW: 126.7, D7DU: 121.0, D7DT: 160.3 },
  { Year: 2020, Month: 'April', D7DV: 64.8, D7DW: 126.6, D7DU: 116.6, D7DT: 160.6 },
  { Year: 2020, Month: 'May', D7DV: 60.7, D7DW: 126.6, D7DU: 116.8, D7DT: 160.6 },
  { Year: 2020, Month: 'June', D7DV: 70.9, D7DW: 126.4, D7DU: 116.8, D7DT: 160.6 },
  { Year: 2020, Month: 'July', D7DV: 71.5, D7DW: 126.9, D7DU: 116.6, D7DT: 160.4 },
  { Year: 2020, Month: 'August', D7DV: 71.3, D7DW: 125.9, D7DU: 116.6, D7DT: 160.4 },
  { Year: 2020, Month: 'September', D7DV: 68.3, D7DW: 127.0, D7DU: 116.6, D7DT: 160.4 },
  { Year: 2020, Month: 'October', D7DV: 71.3, D7DW: 128.8, D7DU: 102.4, D7DT: 155.2 },
  { Year: 2020, Month: 'November', D7DV: 67.5, D7DW: 130.6, D7DU: 102.4, D7DT: 155.2 },
  { Year: 2020, Month: 'December', D7DV: 79.6, D7DW: 130.2, D7DU: 102.4, D7DT: 155.2 },
  { Year: 2021, Month: 'January', D7DV: 85.7, D7DW: 130.3, D7DU: 102.4, D7DT: 155.2 },
  { Year: 2021, Month: 'February', D7DV: 92.2, D7DW: 130.1, D7DU: 102.4, D7DT: 155.2 },
  { Year: 2021, Month: 'March', D7DV: 94.8, D7DW: 130.3, D7DU: 102.4, D7DT: 155.2 },
  { Year: 2021, Month: 'April', D7DV: 90.6, D7DW: 130.4, D7DU: 112.0, D7DT: 169.4 },
  { Year: 2021, Month: 'May', D7DV: 94.8, D7DW: 130.3, D7DU: 112.0, D7DT: 169.4 },
  { Year: 2021, Month: 'June', D7DV: 97.8, D7DW: 130.6, D7DU: 112.0, D7DT: 169.4 },
  { Year: 2021, Month: 'July', D7DV: 98.3, D7DW: 130.6, D7DU: 112.0, D7DT: 169.7 },
  { Year: 2021, Month: 'August', D7DV: 97.1, D7DW: 130.5, D7DU: 112.0, D7DT: 169.7 },
  { Year: 2021, Month: 'September', D7DV: 101.5, D7DW: 131.2, D7DU: 112.0, D7DT: 169.7 },
  { Year: 2021, Month: 'October', D7DV: 120.5, D7DW: 132.6, D7DU: 131.1, D7DT: 184.4 },
  { Year: 2021, Month: 'November', D7DV: 125.0, D7DW: 133.1, D7DU: 131.1, D7DT: 184.4 },
  { Year: 2021, Month: 'December', D7DV: 121.2, D7DW: 136.8, D7DU: 131.1, D7DT: 184.4 },
  { Year: 2022, Month: 'January', D7DV: 125.9, D7DW: 137.5, D7DU: 131.3, D7DT: 185.0 },
  { Year: 2022, Month: 'February', D7DV: 140.8, D7DW: 140.0, D7DU: 131.3, D7DT: 185.0 },
  { Year: 2022, Month: 'March', D7DV: 202.8, D7DW: 144.9, D7DU: 131.3, D7DT: 185.0 },
  { Year: 2022, Month: 'April', D7DV: 193.8, D7DW: 147.8, D7DU: 218.9, D7DT: 260.2 },
  { Year: 2022, Month: 'May', D7DV: 211.1, D7DW: 152.0, D7DU: 218.9, D7DT: 260.2 },
  { Year: 2022, Month: 'June', D7DV: 223.8, D7DW: 159.8, D7DU: 218.9, D7DT: 260.2 },
  { Year: 2022, Month: 'July', D7DV: 210.4, D7DW: 165.8, D7DU: 219.1, D7DT: 261.3 },
  { Year: 2022, Month: 'August', D7DV: 180.8, D7DW: 169.5, D7DU: 219.1, D7DT: 261.3 }


];
const chartLabels = data.map(entry => `${entry.Year} ${entry.Month}`);
const chartData = {
  labels: chartLabels,
  datasets: [
    {
      label: 'Liquid Fuels',
      data: data.map(entry => entry.D7DV),
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 2,
      fill: false,
    },

    {
      label: 'Gas Fuels',
      data: data.map(entry => entry.D7DW),
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 2,
      fill: false,
    },
    {
      label: 'Solid Fuels',
      data: data.map(entry => entry.D7DU),
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 2,
      fill: false,
    },
    {
      label: 'Renewable Fuels',
      data: data.map(entry => entry.D7DT),
      borderColor: 'rgba(255, 206, 86, 1)',
      borderWidth: 2,
      fill: false,
    },

    // Add similar datasets for other fuel types
  ],
};

const ctx = document.getElementById('fuelChart').getContext('2d');
const fuelChart = new Chart(ctx, {
  type: 'line',
  data: chartData,
  options: {
    scales: {
      x: {
        type: 'category',
        position: 'bottom',
      },
    },
  },
});

let currentIndex = chartLabels.length - 1;
let currentMode = 'historical';

function updateChart() {
  const endIndex = currentIndex + 12;
  const slicedLabels = chartLabels.slice(currentIndex, endIndex);
  const slicedData = chartData.datasets.map(dataset => ({
    ...dataset,
    data: dataset.data.slice(currentIndex, endIndex),
  }));

  fuelChart.data.labels = slicedLabels;
  fuelChart.data.datasets = slicedData;
  fuelChart.update();
}

function scrollBackward() {
  const newIndex = currentIndex - 12;

  if (newIndex >= 0) {
    currentIndex = newIndex;
    updateChart();
  } else {
    alert('Cannot scroll backward beyond January 1996.');
  }
}

function scrollForward() {
  const newIndex = currentIndex + 12;

  if (currentMode === 'forecast') {
    alert('Cannot scroll forward in forecast mode.');
  } else if (newIndex + 12 <= chartLabels.length) {
    currentIndex = newIndex;
    updateChart();
  } else {
    alert('Cannot scroll forward beyond the current month.');
  }
}

function updateChart() {
  const startIndex = currentIndex;
  const endIndex = currentIndex + 12;

  fuelChart.options.scales.x.min = chartLabels[startIndex];
  fuelChart.options.scales.x.max = chartLabels[endIndex - 1];

  fuelChart.update();
}

function filterChart() {
  const selectedFuelType = document.getElementById('fuelType').value;
  const filteredData = data.map(entry => entry[selectedFuelType]);
  fuelChart.data.datasets[0].data = filteredData;
  fuelChart.update();
}

function changeMode() {
  currentMode = document.getElementById('mode').value;
  if (currentMode === 'forecast') {
    currentIndex = chartLabels.length - 12;
  } else {
    currentIndex = chartLabels.length - 13;
  }
  updateChart();
}
