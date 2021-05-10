import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("status from props should be in the state", () => {
    const component = create(<ProfileStatus status="IT-kamasutra.com" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("IT-kamasutra.com");
  });
  test("after creation span should be shown", () => {
    const component = create(<ProfileStatus status="IT-kamasutra.com" />);
    const root = component.root;
    let span = root.findByType("span");
    expect(span.length).toBe(1);
  });



});