import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  history: [], 
};

const timeSlice = createSlice({
  name: 'time',
  initialState,
  reducers: {
    incrementHours: (state) => {
      state.hours += 1;
    },
    incrementMinutes: (state) => {
      state.minutes = (state.minutes + 1) % 60;
    },
    incrementSeconds: (state) => {
      state.seconds = (state.seconds + 1) % 60;
    },
    saveMeasurement: (state) => {
      state.history.push({
        hours: state.hours,
        minutes: state.minutes,
        seconds: state.seconds,
      });
    },
    resetTime: (state) => {
      state.hours = 0;
      state.minutes = 0;
      state.seconds = 0;
    },
  },
});

export const {
  incrementHours,
  incrementMinutes,
  incrementSeconds,
  saveMeasurement,
  resetTime,
} = timeSlice.actions;
export default timeSlice.reducer;
