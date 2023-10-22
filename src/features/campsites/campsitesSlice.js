import { CAMPSITES } from "../../app/shared/CAMPSITES";

export const selectCampsiteById = (id) => {
  return CAMPSITES.find((campsite) => campsite.id === id);
};

export const selectAllCampsites = () => {
  return CAMPSITES;
};

export const selectRandomCampsite = () => {
  return CAMPSITES[Math.floor(Math.random() * CAMPSITES.length)];
};

export const selectFeaturedCampsite = () => {
    return CAMPSITES.find((campsite) => campsite.featured === true);
}
