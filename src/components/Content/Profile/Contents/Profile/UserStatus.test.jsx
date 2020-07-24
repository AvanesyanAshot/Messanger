import React from "react";
import { create } from 'react-test-renderer'
import UserStatus from "./UserStatus";

describe('Userstatus component', () => {
    test('status from props should be in the state', () => {
        const component = create(<UserStatus status= 'Hello World!!!'/>)
        const instance = component.getInstance()
        expect(instance.state.status).toBe('Hello World!!!')
    })

})