import 'regenerator-runtime/runtime';
import { getLocation } from '../client/js/locationApi';
import { getWeather } from '../client/js/weatherApi';
import { getImage } from '../client/js/imageApi';

describe("Apis", () => {
  test("geoNames should be defined", () => {
    expect(getLocation).toBeDefined();
  });
  test("weatherbit should be defined", () => {
    expect(getWeather).toBeDefined();
  });
  test("image should be defined", () => {
    expect(getImage).toBeDefined();
  });
});