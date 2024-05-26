import { createSlice } from '@reduxjs/toolkit';
import { fetchKamps } from './operations';

const initialState = {
  kamps: [],
  filteredKamps: [],
  isLoading: false,
  error: '',
  currentPage: 1,
  loadedItems: 4,
  selectedLocation: '',
  filterOptions: {},
};

const kampsSlice = createSlice({
  name: 'kamps',
  initialState,
  reducers: {
    setPage(state, action) {
      state.currentPage = action.payload;
    },
    incrementLoadedItems(state, action) {
      state.loadedItems += action.payload;
    },
    filterKampsByLocation(state, action) {
      const location = action.payload;
      state.selectedLocation = location;
      state.filteredKamps = state.kamps.filter((kamp) =>
        kamp.location.includes(location)
      );
    },
    filterKampsByOptions(state, action) {
      const filterOptions = action.payload;
      state.filterOptions = filterOptions;

      const filteredByLocation = state.selectedLocation
        ? state.kamps.filter((kamp) =>
            kamp.location.includes(state.selectedLocation)
          )
        : state.kamps;

      state.filteredKamps = filteredByLocation.filter((kamp) => {
        return (
          (!filterOptions.bathroom || kamp.details.bathroom > 0) &&
          (!filterOptions.kitchen || kamp.details.kitchen > 0) &&
          (!filterOptions.microwave || kamp.details.microwave > 0) &&
          (!filterOptions.freezer || kamp.details.freezer > 0) &&
          (!filterOptions.tv || kamp.details.TV > 0) &&
          (!filterOptions.wc || kamp.details.toilet > 0) &&
          (!filterOptions.van || kamp.form === 'van') &&
          (!filterOptions.full || kamp.form === 'fullyIntegrated') &&
          (!filterOptions.alcove || kamp.form === 'panelTruck')
        );
      });
    },
    restoreFilters(state, action) {
      state.selectedLocation = action.payload.selectedLocation || '';
      state.filterOptions = action.payload.filterOptions || {};
      state.filteredKamps = state.kamps;
      const { selectedLocation, filterOptions } = state;
      if (selectedLocation) {
        state.filteredKamps = state.filteredKamps.filter((kamp) =>
          kamp.location.includes(selectedLocation)
        );
      }
      if (Object.keys(filterOptions).length > 0) {
        state.filteredKamps = state.filteredKamps.filter((kamp) => {
          return (
            (!filterOptions.bathroom || kamp.details.bathroom > 0) &&
            (!filterOptions.kitchen || kamp.details.kitchen > 0) &&
            (!filterOptions.microwave || kamp.details.microwave > 0) &&
            (!filterOptions.freezer || kamp.details.freezer > 0) &&
            (!filterOptions.tv || kamp.details.TV > 0) &&
            (!filterOptions.wc || kamp.details.toilet > 0) &&
            (!filterOptions.van || kamp.form === 'van') &&
            (!filterOptions.full || kamp.form === 'fullyIntegrated') &&
            (!filterOptions.alcove || kamp.form === 'panelTruck')
          );
        });
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchKamps.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(fetchKamps.fulfilled, (state, action) => {
        state.error = null;
        state.kamps = action.payload;
        state.filteredKamps = action.payload;

        const { selectedLocation, filterOptions } = state;
        if (selectedLocation) {
          state.filteredKamps = state.filteredKamps.filter((kamp) =>
            kamp.location.includes(selectedLocation)
          );
        }
        if (Object.keys(filterOptions).length > 0) {
          state.filteredKamps = state.filteredKamps.filter((kamp) => {
            return (
              (!filterOptions.bathroom || kamp.details.bathroom > 0) &&
              (!filterOptions.kitchen || kamp.details.kitchen > 0) &&
              (!filterOptions.microwave || kamp.details.microwave > 0) &&
              (!filterOptions.freezer || kamp.details.freezer > 0) &&
              (!filterOptions.tv || kamp.details.TV > 0) &&
              (!filterOptions.wc || kamp.details.toilet > 0) &&
              (!filterOptions.van || kamp.form === 'van') &&
              (!filterOptions.full || kamp.form === 'fullyIntegrated') &&
              (!filterOptions.alcove || kamp.form === 'panelTruck')
            );
          });
        }

        state.isLoading = false;
      })
      .addCase(fetchKamps.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  setPage,
  incrementLoadedItems,
  filterKampsByLocation,
  filterKampsByOptions,
  restoreFilters,
} = kampsSlice.actions;

export const kampsReducer = kampsSlice.reducer;
