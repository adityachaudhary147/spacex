import Cards from "../Components/Cards";
import React, { useState } from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import * as redux from "react-redux";
import { screen } from "@testing-library/dom";

const MockValue = [
  {
    flight_number: 1,
    mission_name: "FalconSat",
    mission_id: ["sample"],
    launch_year: "2006",
    tbd: false,
    launch_window: 0,
    launch_success: false,
    links: {
      mission_patch: "samplepath",
      mission_patch_small: "samplepath",
    },
  },
];

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  jest.useFakeTimers();
});
afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
  jest.useRealTimers();
});


it("testing for cards and one input", async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(MockValue),
    })
  );
  const spy = jest.spyOn(redux, "useSelector");
  spy.mockReturnValue({
    List:{
    loading:false,data:MockValue}
  });
  await act(async () => {
    render(<Cards />, container);
  });
  // screen.debug();
  //   screen.debug();
  expect(container.querySelector(".mission-id").textContent).toBe(
    "Mission id:" + MockValue[0].mission_id[0]
  );

  expect(container.querySelector(".launch-s").textContent).toBe(
    "launch success: " + MockValue[0].launch_success
  );
});

it("No data found testing ", async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([]),
    })
  );
  const spy = jest.spyOn(redux, "useSelector");
  spy.mockReturnValue({
    List:{
      loading:false,data:[]}
  });
  await act(async () => {
    render(<Cards />, container);
  });
  // screen.debug();
  expect(container.querySelector(".grid-card").textContent).toBe(
    "No launches Found"
  );
});


it("Loading Testing ", async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([]),
    })
  );
  const spy = jest.spyOn(redux, "useSelector");
  spy.mockReturnValue({
    List:{
      loading:true,data:[]}
  });
  await act(async () => {
    render(<Cards />, container);
  });
  // screen.debug();
  expect(container.querySelector(".grid-card").textContent).toBe(
    "Loading..."
  );
});
