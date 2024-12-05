import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Tab } from "./index";

const mockPush = jest.fn();

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

describe("Tab", () => {
  beforeEach(() => {
    mockPush.mockClear();
  });

  it("renders list and search tabs", () => {
    render(<Tab />);
    expect(screen.getByText("리스트")).toBeInTheDocument();
    expect(screen.getByText("검색")).toBeInTheDocument();
  });

  it("calls push function when list tab is clicked", async () => {
    render(<Tab />);
    const listTab = screen.getByText("리스트");
    await userEvent.click(listTab);
    expect(mockPush).toHaveBeenCalled();
  });

  it("navigates to search page when search tab is clicked", async () => {
    render(<Tab />);
    const searchTab = screen.getByText("검색");
    await userEvent.click(searchTab);
    expect(mockPush).toHaveBeenCalled();
  });
});
