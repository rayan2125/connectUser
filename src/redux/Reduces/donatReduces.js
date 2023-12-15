import { createSlice } from '@reduxjs/toolkit';

const donateSlice = createSlice({
    name: 'donate',
    initialState: {
        donations: [],
    },
    reducers: {
        addDonation: (state, action) => {
            state.donations.push(action.payload); 
        },
        removeDonation: (state, action) => {
            state.donations = state.donations.filter(donation => donation.id !== action.payload.id);
            
        },
        clearAllDonations: (state) => {
            state.donations = []; 
        },
        
    },
});

export const { addDonation, removeDonation, clearAllDonations } = donateSlice.actions;

export default donateSlice.reducer;
