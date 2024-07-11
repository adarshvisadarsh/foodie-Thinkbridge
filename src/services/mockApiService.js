let restaurants = [
  { id: 1, name: 'Restaurant A', description: 'Description A', location: 'Location A' },
  { id: 2, name: 'Restaurant B', description: 'Description B', location: 'Location B' },
  { id: 3, name: 'Restaurant B', description: 'Description B', location: 'Location B' },
  { id: 4, name: 'Restaurant 4', description: 'Description B', location: 'Location B' },
  { id: 5, name: 'Restaurant 5', description: 'Description B', location: 'Location B' },
  { id: 6, name: 'Restaurant 6', description: 'Description B', location: 'Location B' },
  { id: 7, name: 'Restaurant B', description: 'Description B', location: 'Location B' },
  { id: 8, name: 'Restaurant B', description: 'Description B', location: 'Location B' },
  { id: 9, name: 'Restaurant 9', description: 'Description B', location: 'Location B' },
  { id: 10, name: 'Restaurant 10', description: 'Description B', location: 'Location B' },
  { id: 11, name: 'Restaurant B', description: 'Description B', location: 'Location B' },
];

const mockApiService = {
  fetchRestaurants() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([...restaurants]);
      }, 500);
    });
  },

  addRestaurant(restaurantData) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newRestaurant = { ...restaurantData, id: Date.now() };
        restaurants.push(newRestaurant);
        resolve(newRestaurant);
      }, 500);
    });
  },

  updateRestaurant(restaurantData) {
    return new Promise((resolve) => {
      setTimeout(() => {
        restaurants = restaurants.map((restaurant) =>
          restaurant.id === restaurantData.id ? restaurantData : restaurant
        );
        resolve(restaurantData);
      }, 500);
    });
  },

  deleteRestaurant(restaurantId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        restaurants = restaurants.filter((restaurant) => restaurant.id !== restaurantId);
        resolve();
      }, 500);
    });
  },
};

export default mockApiService;
