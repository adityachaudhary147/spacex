import Card from "../Components/Card"
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});
afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("testing for a particular card ", () => {
    const val={
        launch_year:2018,
        links:{mission_patch_small:'www.sample.com'},
        flight_number:23,
        mission_name:'abc',
        launch_success:true,
        mission_id:["hell0"]
    }
    const fill={
        land:true
    }
  act(() => {
    
render(<Card val={val} fill={fill }/>,container);
  });
  expect(container.querySelector('.mission-id').textContent).toBe("Mission id:"+val.mission_id[0]);

  expect(container.querySelector('.launch-s').textContent).toBe("launch success: "+val.launch_success);



});