import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchLinks = createAsyncThunk('links/fetchLinks', async (_, thunkAPI) => {
  try {
    const token = localStorage.getItem('token');
    const res = await axios.get('/api/links', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

const linkSlice = createSlice({
  name: 'links',
  initialState: {
    links: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLinks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLinks.fulfilled, (state, action) => {
        state.loading = false;
        state.links = action.payload;
      })
      .addCase(fetchLinks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Failed to load links';
      });
  },
});

export default linkSlice.reducer;
