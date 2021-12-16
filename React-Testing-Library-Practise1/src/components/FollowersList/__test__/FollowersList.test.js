import { render, screen} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FollowersList from "../FollowersList";

const MockFollowersList = () => {
    return (
        <BrowserRouter>
            <FollowersList />
        </BrowserRouter>
    )
}

describe("FollowersList tests", () => {

    beforeEach(() => {
        console.log("RUNNING BEFORE EACH TEST")
    })

    beforeAll(() => {
        console.log("RAN ONCE BEFORE ALL TESTS")
    })

    afterEach(() => {
        console.log("RUNNING AFTER TEST")
    })

    afterAll(() => {
        console.log("RAN ONCE AFTER ALL TESTS")
    })

    test('should render first item in followers list', async () => {
        render(
            <MockFollowersList />
        );
        const followerDivElement = await screen.findByTestId(`follower-item-0`)
        screen.debug()
        expect(followerDivElement).toBeInTheDocument();
    });

    // test('should render multiple follower items', async () => {
    //     render(
    //         <MockFollowersList />
    //     );
    //     const followerDivElements = await screen.findAllByTestId(/follower-item/i)
    //     expect(followerDivElements.length).toBe(5);
    // });
})